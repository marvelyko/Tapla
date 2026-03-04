import os
import sqlite3
from datetime import datetime, timedelta
from threading import Thread

from flask import Flask, jsonify, render_template, request, send_from_directory
from flask_mail import Mail, Message


def send_async_email(flask_app, msg):
  """Send email in a background thread with app context."""
  with flask_app.app_context():
    try:
      mail.send(msg)
    except Exception:
      import traceback
      traceback.print_exc()


BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DB_PATH = os.path.join(BASE_DIR, "orders.db")

def get_db_connection():
  conn = sqlite3.connect(DB_PATH)
  conn.row_factory = sqlite3.Row
  return conn


def init_db():
  conn = get_db_connection()
  cur = conn.cursor()
  cur.execute(
      """
      CREATE TABLE IF NOT EXISTS orders (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          customer_name TEXT NOT NULL,
          phone TEXT NOT NULL,
          email TEXT NOT NULL,
          address TEXT NOT NULL,
          quantity INTEGER NOT NULL,
          status TEXT NOT NULL DEFAULT 'Pending',
          timestamp TEXT NOT NULL
      );
      """
  )
  conn.commit()
  conn.close()


app = Flask(
    __name__,
    template_folder=os.path.join(BASE_DIR, "templates"),
    static_folder=os.path.join(BASE_DIR, "static"),
    static_url_path="/static",
)

# Email configuration (use environment variables for secrets)
app.config.update(
    MAIL_SERVER=os.getenv("MAIL_SERVER", "smtp.gmail.com"),
    MAIL_PORT=int(os.getenv("MAIL_PORT", "587")),
    MAIL_USE_TLS=True,
    MAIL_USERNAME=os.getenv("MAIL_USERNAME"),  # your Gmail address
    MAIL_PASSWORD=os.getenv("MAIL_PASSWORD"),  # your App Password
    MAIL_DEFAULT_SENDER=os.getenv("MAIL_DEFAULT_SENDER", os.getenv("MAIL_USERNAME")),
)

mail = Mail(app)

ADMIN_PASSWORD = os.environ.get("ADMIN_PASSWORD", "tapla-admin")

# Ensure DB exists on app load (works with python app.py and gunicorn)
init_db()


@app.route("/", methods=["GET"])
def serve_index():
  return render_template("index.html")


@app.route("/checkout", methods=["GET"])
def serve_checkout():
  return render_template("checkout.html")


@app.route("/shop", methods=["GET"])
def serve_shop():
  return render_template("shop.html")


@app.route("/admin", methods=["GET"])
def serve_admin():
  return send_from_directory(BASE_DIR, "admin.html")


@app.route("/api/order", methods=["POST"])
def create_order():
  data = request.get_json(silent=True) or {}

  customer_name = (data.get("customer_name") or "").strip()
  phone = (data.get("phone") or "").strip()
  email = (data.get("email") or "").strip()
  address = (data.get("address") or "").strip()
  quantity = data.get("quantity")
  lang = (data.get("lang") or "en").strip() or "en"
  price_per_unit = data.get("price_per_unit")
  payment_method = (data.get("payment_method") or "").strip()
  product_name = (data.get("product_name") or "").strip()
  combo_id = (data.get("combo_id") or "").strip()

  try:
    quantity = int(quantity)
  except (TypeError, ValueError):
    quantity = 1

  try:
    price_per_unit = float(price_per_unit) if price_per_unit is not None else 24.0
  except (TypeError, ValueError):
    price_per_unit = 24.0

  if not customer_name or not phone or not email or not address:
    return jsonify({"error": "Missing required fields."}), 400

  now = datetime.utcnow().isoformat()

  # Duplicate check: same email+phone within last 5 seconds
  conn = get_db_connection()
  cur = conn.cursor()
  try:
    cutoff = (datetime.utcnow() - timedelta(seconds=5)).isoformat()
    cur.execute(
        """
        SELECT id FROM orders
        WHERE email = ? AND phone = ? AND timestamp > ?
        LIMIT 1
        """,
        (email, phone, cutoff),
    )
    if cur.fetchone():
      conn.close()
      return jsonify({"error": "Duplicate order. Please wait a moment."}), 429
  except Exception:
    pass  # On any error, proceed with insert

  cur.execute(
      """
      INSERT INTO orders (customer_name, phone, email, address, quantity, status, timestamp)
      VALUES (?, ?, ?, ?, ?, ?, ?)
      """,
      (customer_name, phone, email, address, quantity, "Pending", now),
  )
  order_id = cur.lastrowid
  conn.commit()
  conn.close()

  # Send confirmation email (best-effort)
  total = quantity * price_per_unit

  subject_en = "Your Tapla order is confirmed"
  body_en = (
      f"Hi {customer_name},\n\n"
      "Thank you for ordering Tapla – Authentic Georgian Natural Treats.\n"
      "Your order is now being prepared and will be on its way shortly.\n\n"
      f"Product: {product_name or 'Tapla No. 01'}\n"
      f"Quantity: {quantity}\n"
      f"Unit price: {price_per_unit:.2f}\n"
      f"Estimated total: {total:.2f}\n"
      f"Delivery address: {address}\n\n"
      "With warmth,\n"
      "Tapla"
  )

  subject_ka = "თქვენი Tapla შეკვეთა დადასტურებულია"
  body_ka = (
      f"გამარჯობა {customer_name},\n\n"
      "გმადლობთ, რომ აირჩიეთ Tapla – ნატურალური ქართული ნუგბარი.\n"
      "თქვენი შეკვეთა მიღებულია და მალე გაგიზიარებთ მის გზავნილს.\n\n"
      f"პროდუქტი: {product_name or 'Tapla No. 01'}\n"
      f"რაოდენობა: {quantity}\n"
      f"ერთეულის ფასი: {price_per_unit:.2f}\n"
      f"სავარაუდო ჯამი: {total:.2f}\n"
      f"მიწოდების მისამართი: {address}\n\n"
      "სითბოთი,\n"
      "Tapla"
  )

  if lang == "ka":
    subject = subject_ka
    body = body_ka
  else:
    subject = subject_en
    body = body_en

  admin_email = app.config.get("MAIL_USERNAME") or os.environ.get("MAIL_USERNAME")
  if app.config.get("MAIL_USERNAME") and app.config.get("MAIL_PASSWORD"):
    # Thank-you email to customer (localized) – send in background
    msg = Message(subject=subject, recipients=[email], body=body)
    Thread(target=send_async_email, args=(app, msg)).start()
    # Notification to admin – send in background
    if admin_email:
      admin_subject = f"[Tapla] New order #{order_id} from {customer_name}"
      admin_body = (
          f"New order received.\n\n"
          f"ID: {order_id}\n"
          f"Customer: {customer_name}\n"
          f"Email: {email}\n"
          f"Phone: {phone}\n"
          f"Address: {address}\n"
          f"Product: {product_name or 'Tapla No. 01'}\n"
          f"Combo ID: {combo_id or '-'}\n"
          f"Quantity: {quantity}\n"
          f"Total: {total:.2f}\n"
          f"Payment method: {payment_method or 'Not specified'}\n"
          f"Lang: {lang}\n"
      )
      admin_msg = Message(subject=admin_subject, recipients=[admin_email], body=admin_body)
      Thread(target=send_async_email, args=(app, admin_msg)).start()

  return jsonify({"id": order_id, "status": "ok"}), 201


def check_admin_auth(req):
  header_password = req.headers.get("X-Admin-Password")
  if header_password and header_password == ADMIN_PASSWORD:
    return True
  return False


@app.route("/admin/orders", methods=["GET"])
def get_orders():
  if not check_admin_auth(request):
    return jsonify({"error": "Unauthorized"}), 401

  conn = get_db_connection()
  cur = conn.cursor()
  cur.execute(
      "SELECT id, customer_name, phone, email, address, quantity, status, timestamp FROM orders ORDER BY datetime(timestamp) DESC"
  )
  rows = cur.fetchall()
  conn.close()

  orders = [
      {
          "id": row["id"],
          "customer_name": row["customer_name"],
          "phone": row["phone"],
          "email": row["email"],
          "address": row["address"],
          "quantity": row["quantity"],
          "status": row["status"],
          "timestamp": row["timestamp"],
      }
      for row in rows
  ]

  return jsonify({"orders": orders})


@app.route("/admin/orders/<int:order_id>/status", methods=["POST"])
def update_order_status(order_id):
  if not check_admin_auth(request):
    return jsonify({"error": "Unauthorized"}), 401

  data = request.get_json(silent=True) or {}
  status = (data.get("status") or "").strip() or "Pending"

  conn = get_db_connection()
  cur = conn.cursor()
  cur.execute("UPDATE orders SET status = ? WHERE id = ?", (status, order_id))
  conn.commit()
  conn.close()

  return jsonify({"id": order_id, "status": status})


@app.route("/admin/orders/<int:order_id>", methods=["DELETE"])
def delete_order(order_id):
  if not check_admin_auth(request):
    return jsonify({"error": "Unauthorized"}), 401

  conn = get_db_connection()
  cur = conn.cursor()
  cur.execute("DELETE FROM orders WHERE id = ?", (order_id,))
  conn.commit()
  conn.close()

  return jsonify({"id": order_id, "deleted": True})


@app.route("/robots.txt", methods=["GET"])
def robots():
  lines = [
      "User-agent: *",
      "Disallow:",
      "Sitemap: https://example.com/sitemap.xml",
  ]
  return "\n".join(lines), 200, {"Content-Type": "text/plain; charset=utf-8"}


@app.route("/sitemap.xml", methods=["GET"])
def sitemap():
  base_url = "https://example.com"
  urls = [
      f"{base_url}/",
      f"{base_url}/admin",
  ]
  xml_parts = [
      '<?xml version="1.0" encoding="UTF-8"?>',
      '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ]
  for url in urls:
    xml_parts.append("  <url>")
    xml_parts.append(f"    <loc>{url}</loc>")
    xml_parts.append("  </url>")
  xml_parts.append("</urlset>")
  body = "\n".join(xml_parts)
  return body, 200, {"Content-Type": "application/xml; charset=utf-8"}


if __name__ == "__main__":
  port = int(os.environ.get("PORT", 5000))
  try:
    app.run(debug=True, host="0.0.0.0", port=port)
  except OSError:
    # Port in use, try 5001
    app.run(debug=True, host="0.0.0.0", port=5001)

