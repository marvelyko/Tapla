// Shared script for Tapla landing page and admin panel

// ---------------------------
// i18n configuration
// ---------------------------

const TAPLA_LANG_KEY = "taplaLang";
const TAPLA_PRICE_PER_JAR = 24;

// All translatable copy for English (en) and Georgian (ka).
// Keys are referenced via data-i18n="path.to.key".
const translations = {
  en: {
    nav: {
      about: "About Us",
      product: "Product",
      contact: "Contact",
      orderNow: "Order Now",
    },
    hero: {
      ribbon: "Premium • Natural • Georgian Craft",
      title: "Tapla - Authentic Georgian Natural Treats",
      body:
        "Discover the finest blend of premium nuts and natural ingredients, crafted with love in the heart of Georgia.",
      ctaPrimary: "Order Tapla Treats",
      ctaSecondary: "Explore story",
      benefit1Title: "100% Natural",
      benefit1Body:
        "Only carefully selected ingredients, without additives or artificial flavors.",
      benefit2Title: "Crafted in Georgia",
      benefit2Body:
        "Thoughtfully created in small batches, inspired by local traditions and nature.",
      bottleBadgeTop: "Signature Batch",
      bottleName: "Tapla No. 01",
      bottleChip: "Limited Release",
      bottleLabelTop: "Tapla",
      bottleLabelBottom: "Natural Treat",
      tastingNotesTitle: "Tasting Profile",
      tastingNotesBody:
        "Layered nuttiness, gentle sweetness, and a smooth, lingering finish.",
      netWeightTitle: "Net Weight",
      netWeightBody: "350g glass jar",
      priceTitle: "Price",
      priceBody: "$24",
      shippingLeft: "Ships within 24–48 hours",
      shippingRight: "Free delivery over $60",
    },
    about: {
      eyebrow: "The Tapla Philosophy",
      title: "About Us",
      body1:
        "Tapla is more than just a product; it’s a fusion of traditional flavors and modern quality. Our treats are made using only 100% natural ingredients, with no additives, bringing the pure energy of Georgian nature straight to you.",
      body2:
        "Each small batch is crafted with care in Georgia, honoring local ingredients and time-honored recipes while meeting modern standards of purity and consistency.",
      stat1: "Batches in Rotation",
      stat2: "Added Sugars",
      stat3: "Traceable Origin",
      quote:
        "“We created Tapla to feel like a quiet exhale in your pantry — something you reach for that softens the day and reconnects you to simple, honest flavor.”",
      quoteBy: "Founders of Tapla",
      integrityTitle: "Ingredient Integrity",
      integrityBody:
        "We work only with trusted partners and whole, natural ingredients, ensuring every batch is clean-label and transparently sourced.",
      beesTitle: "Respect for Nature",
      beesBody:
        "From ingredient selection to packaging, Tapla is guided by respect for land, harvest, and the people who care for them.",
    },
    product: {
      eyebrow: "Tapla No. 01 • Natural Treat",
      title:
        "A premium Georgian treat for everyday rituals and special moments.",
      body:
        "A premium blend of nuts and natural ingredients, thoughtfully balanced to deliver slow, nourishing energy. Enjoy Tapla on its own, with fruit, yogurt, or alongside your favorite warm drink.",
      list1: "Made with carefully selected nuts and natural sweeteners.",
      list2:
        "Presented in a reusable glass jar that feels at home on any counter.",
      list3: "No artificial colors, flavors, or preservatives.",
      investmentLabel: "Investment",
      investmentPrice: "$24 / jar",
      investmentNote: "Bundle 3+ jars and shipping is on us.",
      orderButton: "Order This Treat",
      specsTitle: "Batch Specs",
      harvestLabel: "Ingredient Sourcing",
      harvestValue: "Premium Georgian and regional suppliers",
      originLabel: "Origin",
      originValue: "Crafted in Georgia",
      textureLabel: "Texture",
      textureValue: "Creamy, layered, and satisfying",
      crystallizationLabel: "Stability",
      crystallizationValue: "Naturally stable, no additives",
      cardNote:
        "Every Tapla jar includes simple pairing suggestions to help you transform a quick snack or tea break into a small, grounding ritual.",
      benefitNatural: "100% Natural",
      benefitRecipe: "Traditional Recipe",
      benefitNoSugar: "No Added Sugar",
    },
    contact: {
      eyebrow: "Contact Tapla",
      title: "Curious about our treats, sourcing, or stocking Tapla?",
      body:
        "Share a little about what you’re looking for, and we’ll respond with thoughtful recommendations — whether you’re buying a single box for your home or exploring Tapla for your café, concept store, or studio.",
      emailLinePrefix: "Prefer direct email?",
      emailLineSuffix: "We usually respond within one business day.",
      formNameLabel: "Name",
      formNamePlaceholder: "How should we address you?",
      formEmailLabel: "Email",
      formEmailPlaceholder: "Where can we reply?",
      formMessageLabel: "Message",
      formMessagePlaceholder:
        "Tell us about your rituals, needs, or ideas.",
      formSubmit: "Send Message",
      formFeedback: "Thank you — your message has been received.",
    },
    modal: {
      eyebrow: "Reserve Your Treat",
      title: "Tapla No. 01 – Natural Georgian Treat",
      subtitle:
        "Complete the details below and we’ll confirm your order by email.",
      nameLabel: "Full Name",
      namePlaceholder: "Who is receiving this?",
      phoneLabel: "Phone",
      phonePlaceholder: "For delivery updates",
      emailLabel: "Email",
      emailPlaceholder: "Where should we send confirmation?",
      addressLabel: "Address",
      addressPlaceholder: "Street, city, postal code, country",
      quantityLabel: "Quantity",
      priceLabel: "Price",
      priceValue: "$24 / jar",
      termsLabel: "I agree to the privacy policy and terms.",
      submit: "Confirm Order",
      feedback:
        "Thank you! Your order has been received. Authentic Georgian treats are on their way to you.",
      successTitle: "Order placed with care.",
      successBody:
        "Thank you! Your order has been received. Authentic Georgian treats are on their way to you.",
    },
    footer: {
      lineRight: "Organic & premium Georgian natural treats.",
      crafted: "Crafted with love in Georgia.",
      socialsTitle: "Follow Tapla",
    },
    admin: {
      headerTitle: "Tapla Admin",
      headerSubtitle: "Orders Overview",
      badgeLabel: "Orders",
      intro:
        "This panel reads directly from localStorage. Use it to track, mark as completed, or remove orders captured from the Tapla landing page.",
      badgeChip: "Local-only data",
      countLabelZero: "0 orders",
      clearAll: "Clear All",
      tableDate: "Date",
      tableCustomer: "Customer",
      tablePhone: "Phone",
      tableEmail: "Email",
      tableAddress: "Address",
      tableProductQty: "Product / Qty",
      tableStatus: "Status",
      tableActions: "Actions",
      emptyState:
        "There are no orders stored yet. Once a customer places an order on the Tapla landing page, you’ll see it here.",
      footerNote:
        "Note: This admin panel is intentionally lightweight and reads directly from your browser’s localStorage. For production use, integrate it with a secure backend and authenticated admin access.",
      orderBtnDone: "Done",
      orderBtnDelete: "Delete",
    },
  },
  ka: {
    nav: {
      about: "ჩვენს შესახებ",
      product: "პროდუქტი",
      contact: "კონტაქტი",
      orderNow: "შეკვეთა",
    },
    hero: {
      ribbon: "პრემიუმ • ნატურალური • ქართული შთაგონება",
      title: "Tapla - ქართული ბუნების ნატურალური ნუგბარი",
      body:
        "აღმოაჩინეთ უმაღლესი ხარისხის თხილეულისა და ნატურალური ინგრედიენტების საუკეთესო ნაზავი, შექმნილი სიყვარულით საქართველოში.",
      ctaPrimary: "შეუკვეთე Tapla ნუგბარი",
      ctaSecondary: "გაიცანი ისტორია",
      benefit1Title: "100% ნატურალური",
      benefit1Body:
        "მხოლოდ შერჩეული ნედლეული, ყოველგვარი დანამატებისა და ხელოვნური არომატის გარეშე.",
      benefit2Title: "შექმნილი საქართველოში",
      benefit2Body:
        "პატარა პარტიებად, ზრუნვითა და ტრადიციული რეცეპტების თანამედროვე ხედვით.",
      bottleBadgeTop: "სიგნატურული პარტია",
      bottleName: "Tapla No. 01",
      bottleChip: "ლიმიტირებული გამოშვება",
      bottleLabelTop: "Tapla",
      bottleLabelBottom: "ნატურალური ნუგბარი",
      tastingNotesTitle: "გემოს პროფილი",
      tastingNotesBody:
        "ნიგვზის მდიდარი ნოტები, ნაზი სიტკბო და ხავერდოვანი დაბოლოება.",
      netWeightTitle: "წონა",
      netWeightBody: "350გ მინის ქილა",
      priceTitle: "ფასი",
      priceBody: "$24",
      shippingLeft: "მიწოდება 24–48 საათში",
      shippingRight: "უფასო მიწოდება $60-ზე მაღლა შეკვეთებზე",
    },
    about: {
      eyebrow: "Tapla-ს ფილოსოფია",
      title: "ჩვენს შესახებ",
      body1:
        "Tapla არ არის უბრალოდ პროდუქტი, ეს არის ტრადიციული გემოებისა და თანამედროვე ხარისხის შერწყმა. ჩვენი ნუგბარი მზადდება მხოლოდ ნატურალური კომპონენტებით, ყოველგვარი დანამატების გარეშე, რათა თქვენამდე მოვიტანოთ ქართული ბუნების საუკეთესო ენერგია.",
      body2:
        "ყოველი პარტია მზადდება მცირე რაოდენობით, სიფრთხილით და სიყვარულით, რათა Tapla-ს ყოველი ყუთი იყოს თანდათანობითი, ნამდვილი ქართული გამოცდილება.",
      stat1: "პარტიების როტაცია",
      stat2: "დამატებული შაქარი",
      stat3: "სრულად კვალიფიცირებადი წარმოშობა",
      quote:
        "„Tapla შევქმენით, რომ თქვენი ყოველდღიური წვნიანიც კი პატარა ქართველურ რიტუალად იქცეს — ნუგბარი, რომელსაც უხმოდაც გრძნობ, რამდენი ზრუნვა და სიყვარულია შიგნით.“",
      quoteBy: "Tapla-ს დამფუძნებლები",
      integrityTitle: "ინგრედიენტის სისუფთავე",
      integrityBody:
        "ვმუშაობთ მხოლოდ სანდო მწარმოებლებთან და მთლიან, ნატურალურ ინგრედიენტებთან, რათა ყოველი პარტია იყოს გამჭვირვალე და სანდო.",
      beesTitle: "ზრუნვა ბუნებაზე",
      beesBody:
        "ინგრედიენტების არჩევიდან შეფუთვამდე, Tapla-სთვის მთავარია ბუნებისადმი პატივისცემა და მდგრადი გადაწყვეტილებები.",
    },
    product: {
      eyebrow: "Tapla No. 01 • ნატურალური ნუგბარი",
      title:
        "პრემიუმ ქართული ნუგბარი ყოველდღიური რიტუალებისა და განსაკუთრებული მომენტებისთვის.",
      body:
        "თხილეულისა და ნატურალური ინგრედიენტების პრემიუმ ნაზავი, ფაქიზად დაბალანსებული ნელი, ნოყიერი ენერგიისთვის. გასინჯე Tapla პირდაპირ, ხილით, იოგურტთან ან შენს საყვარელ ცხელ სასმელთან ერთად.",
      list1: "შერჩეული თხილეული და ნატურალური გამტკბობლები.",
      list2:
        "ესთეტიკური, ხელახლა გამოყენებადი მინის ქილა — როგორც საჩუქრის, ისე პირადი სიამოვნებისთვის.",
      list3: "არავითარი ხელოვნური საღებავი, არომატი ან სტაბილიზატორი.",
      investmentLabel: "შეფასება",
      investmentPrice: "$24 / ქილა",
      investmentNote: "შეუკვეთე 3+ ქილა — მიწოდება ჩვენს ანგარიშზეა.",
      orderButton: "შეუკვეთე ეს ნუგბარი",
      specsTitle: "პარტიის დეტალები",
      harvestLabel: "ინგრედიენტების წყარო",
      harvestValue: "პრემიუმ ქართული და რეგიონის მომწოდებლები",
      originLabel: "წარმოშობა",
      originValue: "შექმნილი საქართველოში",
      textureLabel: "ტექსტურა",
      textureValue: "კრემოვანი, ფენოვანი და დამაკმაყოფილებელი",
      crystallizationLabel: "სტაბილურობა",
      crystallizationValue: "ბუნებრივად სტაბილური, დანამატების გარეშე",
      cardNote:
        "ყოველ Tapla ქილას ახლავს მცირე რჩევები, როგორ აქციო ჩაის დრო ან სწრაფი ნასწავლი მცირე, მშვიდ რიტუალად.",
      benefitNatural: "100% ნატურალური",
      benefitRecipe: "ტრადიციული რეცეპტი",
      benefitNoSugar: "შაქრის დანამატის გარეშე",
    },
    contact: {
      eyebrow: "დაუკავშირდი Tapla-ს",
      title:
        "გაინტერესებს ჩვენი ნუგბარი, წარმოშობა ან Tapla-ს თანამშრომლობა?",
      body:
        "გაგვიზიარე, რას ეძებ, და ჩვენ ყურადღებით შეგირჩევთ რეკომენდაციებს — იქნება ეს ერთი ყუთი შენი სახლისთვის, თუ Tapla-ს შერჩევა კაფესთვის, მაღაზიისთვის ან სტუდიისთვის.",
      emailLinePrefix: "გირჩევნია პირდაპირი ელფოსტა?",
      emailLineSuffix: "ჩვეულებრივ ერთ სამუშაო დღეში გიპასუხებთ.",
      formNameLabel: "სახელი",
      formNamePlaceholder: "როგორ მოგმართოთ?",
      formEmailLabel: "ელ.ფოსტა",
      formEmailPlaceholder: "სად გიპასუხოთ?",
      formMessageLabel: "შეტყობინება",
      formMessagePlaceholder:
        "გვითხარი შენს რიტუალებზე, საჭიროებებსა და იდეებზე.",
      formSubmit: "გაგზავნა",
      formFeedback: "გმადლობთ — თქვენი შეტყობინება მიღებულია.",
    },
    modal: {
      eyebrow: "შეიკვეთე შენი ნუგბარი",
      title: "Tapla No. 01 – ნატურალური ქართული ნუგბარი",
      subtitle:
        "შეავსე დეტალები და შეკვეთას ელფოსტით დაგიდასტურებთ.",
      nameLabel: "სრული სახელი",
      namePlaceholder: "ვისთვის იგზავნება ნუგბარი?",
      phoneLabel: "ტელეფონი",
      phonePlaceholder: "მიწოდების განახლებისთვის",
      emailLabel: "ელ.ფოსტა",
      emailPlaceholder: "სად გამოგიგზავნოთ დადასტურება?",
      addressLabel: "მისამართი",
      addressPlaceholder: "ქუჩა, ქალაქი, საფოსტო ინდექსი, ქვეყანა",
      quantityLabel: "რაოდენობა",
      priceLabel: "ფასი",
      priceValue: "$24 / ქილა",
      submit: "შეკვეთის დადასტურება",
      feedback:
        "გმადლობთ! თქვენი შეკვეთა მიღებულია. ნამდვილი ქართული ნუგბარი მალე თქვენთან იქნება.",
      successTitle: "შეკვეთა სითბოთი შეინახა.",
      successBody:
        "გმადლობთ! თქვენი შეკვეთა მიღებულია. ნამდვილი ქართული ნუგბარი მალე თქვენთან იქნება.",
    },
    footer: {
      lineRight: "ორგანული და პრემიუმ ქართული ნატურალური ნუგბარი.",
      crafted: "შექმნილი სიყვარულით საქართველოში.",
      socialsTitle: "მოგვყევი Tapla-ს",
    },
    admin: {
      headerTitle: "Tapla Admin",
      headerSubtitle: "შეკვეთების მიმოხილვა",
      badgeLabel: "შეკვეთები",
      intro:
        "ეს პანელი კითხულობს მონაცემებს მხოლოდ localStorage-დან. გამოიყენე შეკვეთების სანახავად, დასრულებულად მონიშვნისა და წაშლისთვის.",
      badgeChip: "მონაცემები მხოლოდ ლოკალურად",
      countLabelZero: "0 შეკვეთა",
      clearAll: "ყველას წაშლა",
      tableDate: "თარიღი",
      tableCustomer: "კლიენტი",
      tablePhone: "ტელეფონი",
      tableEmail: "ელ.ფოსტა",
      tableAddress: "მისამართი",
      tableProductQty: "პროდუქტი / რაოდენობა",
      tableStatus: "სტატუსი",
      tableActions: "ქმედებები",
      emptyState:
        "ჯერ არცერთი შეკვეთა არ არის შენახული. როგორც კი მომხმარებელი შეკვეთას დაძლევს Tapla-ს გვერდზე, იგი აქ გამოჩნდება.",
      footerNote:
        "შენიშვნა: ეს პანელი მინიმალისტურია და იყენებს მხოლოდ ბრაუზერის localStorage-ს. საწარმოო გარემოში გამოიყენეთ დაცული backend და ავტორიზებული წვდომა.",
      orderBtnDone: "დასრულებულია",
      orderBtnDelete: "წაშლა",
    },
  },
};

/**
 * Safely resolve translation value by dot-notation key.
 */
function getTranslation(lang, key) {
  const dict = translations[lang] || translations.en;
  if (!key) return "";
  return key.split(".").reduce((acc, part) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, part)) {
      return acc[part];
    }
    return undefined;
  }, dict);
}

/**
 * Set active language and update all translatable elements.
 * Updates:
 * - textContent of [data-i18n]
 * - placeholder of [data-i18n-placeholder]
 */
function setLanguage(lang) {
  const targetLang = translations[lang] ? lang : "en";
  try {
    localStorage.setItem(TAPLA_LANG_KEY, targetLang);
  } catch (e) {
    console.warn("Unable to persist language preference", e);
  }

  // Update html lang attribute where available
  if (document.documentElement) {
    document.documentElement.lang = targetLang;
  }

  const textNodes = document.querySelectorAll("[data-i18n]");
  textNodes.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getTranslation(targetLang, key);
    if (typeof value === "string" && value.length) {
      el.textContent = value;
    }
  });

  const placeholderNodes = document.querySelectorAll(
    "[data-i18n-placeholder]"
  );
  placeholderNodes.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    const value = getTranslation(targetLang, key);
    if (typeof value === "string" && value.length) {
      el.placeholder = value;
    }
  });

  // Toggle active state on language switcher buttons (active = Honey Gold)
  const toggles = document.querySelectorAll("[data-lang-toggle]");
  toggles.forEach((btn) => {
    const btnLang = btn.getAttribute("data-lang-toggle");
    if (!btnLang) return;
    if (btnLang === targetLang) {
      btn.classList.add("text-honeyGold", "font-semibold");
      btn.classList.remove("text-deepBrown", "text-deepBrown/50");
    } else {
      btn.classList.remove("font-semibold", "text-honeyGold");
      btn.classList.add("text-deepBrown/50");
      btn.classList.remove("text-deepBrown");
    }
  });
}

// ---------------------------
// API utilities
// ---------------------------

async function apiCreateOrder(payload) {
  const res = await fetch("/api/order", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    const message = data.error || "Unable to place order. Please try again.";
    throw new Error(message);
  }

  return res.json();
}

async function apiFetchOrders(adminPassword) {
  const res = await fetch("/admin/orders", {
    method: "GET",
    headers: {
      "X-Admin-Password": adminPassword,
    },
  });

  if (res.status === 401) {
    throw new Error("unauthorized");
  }

  if (!res.ok) {
    throw new Error("Failed to load orders.");
  }

  const data = await res.json();
  return data.orders || [];
}

async function apiUpdateOrderStatus(id, status, adminPassword) {
  const res = await fetch(`/admin/orders/${id}/status`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Admin-Password": adminPassword,
    },
    body: JSON.stringify({ status }),
  });

  if (res.status === 401) {
    throw new Error("unauthorized");
  }

  if (!res.ok) {
    throw new Error("Failed to update order status.");
  }

  return res.json();
}

async function apiDeleteOrder(id, adminPassword) {
  const res = await fetch(`/admin/orders/${id}`, {
    method: "DELETE",
    headers: {
      "X-Admin-Password": adminPassword,
    },
  });

  if (res.status === 401) {
    throw new Error("unauthorized");
  }

  if (!res.ok) {
    throw new Error("Failed to delete order.");
  }

  return res.json();
}

// ---------------------------
// Landing page logic (index)
// ---------------------------

function initLandingPage() {
  // Guard: we are on index page if hero exists
  const heroSection = document.getElementById("hero");
  if (!heroSection) return;

  // AOS scroll animations
  if (typeof AOS !== "undefined") {
    AOS.init({
      once: true,
      duration: 700,
      offset: 80,
      easing: "ease-out-quart",
    });
  }

  // Parallax background on hero
  window.addEventListener("scroll", () => {
    const offset = window.pageYOffset || document.documentElement.scrollTop;
    const translate = offset * -0.08;
    heroSection.style.backgroundPosition = `center ${translate}px`;
  });

  // Smooth scroll for anchors and buttons
  const smoothScrollLinks = document.querySelectorAll(
    'a[href^="#"], [data-scroll-target]'
  );
  smoothScrollLinks.forEach((el) => {
    el.addEventListener("click", (e) => {
      const targetSelector =
        el.getAttribute("href")?.startsWith("#") && el.getAttribute("href") !== "#"
          ? el.getAttribute("href")
          : el.getAttribute("data-scroll-target");
      if (!targetSelector) return;

      const target = document.querySelector(targetSelector);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // Close mobile menu after navigation on small screens
      const mm = document.getElementById("mobileMenu");
      if (mm && mm.dataset.expanded === "true") {
        mm.style.maxHeight = "0px";
        mm.dataset.expanded = "false";
      }
    });
  });

  // Mobile menu
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener("click", () => {
      const expanded = mobileMenu.dataset.expanded === "true";
      if (expanded) {
        mobileMenu.style.maxHeight = "0px";
        mobileMenu.dataset.expanded = "false";
      } else {
        const scrollHeight = mobileMenu.scrollHeight || 200;
        mobileMenu.style.maxHeight = `${scrollHeight}px`;
        mobileMenu.dataset.expanded = "true";
      }
    });
  }

  // Year in footer
  const yearSpan = document.getElementById("yearSpan");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  // Contact form (simple simulated submission)
  const contactForm = document.getElementById("contactForm");
  const contactFeedback = document.getElementById("contactFeedback");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      if (contactFeedback) {
        contactFeedback.classList.remove("hidden");
      }
      contactForm.reset();
      setTimeout(() => {
        if (contactFeedback) {
          contactFeedback.classList.add("hidden");
        }
      }, 3500);
    });
  }

  // Order modal handlers
  const orderModal = document.getElementById("orderModal");
  const openButtons = [
    document.getElementById("orderNowHero"),
    document.getElementById("orderNowNav"),
    document.getElementById("orderNowMobile"),
    document.getElementById("orderNowProduct"),
  ].filter(Boolean);
  const closeButton = document.getElementById("orderModalClose");
  const orderForm = document.getElementById("orderForm");
  const successOverlay = document.getElementById("orderSuccessOverlay");
  const orderFeedback = document.getElementById("orderFeedback");

  function openModal() {
    if (!orderModal) return;
    const mm = document.getElementById("mobileMenu");
    if (mm && mm.dataset.expanded === "true") {
      mm.style.maxHeight = "0px";
      mm.dataset.expanded = "false";
    }
    orderModal.classList.remove("hidden");
    orderModal.classList.add("flex");
  }

  function closeModal() {
    if (!orderModal) return;
    orderModal.classList.add("hidden");
    orderModal.classList.remove("flex");
    if (successOverlay) {
      successOverlay.style.opacity = "0";
      successOverlay.style.pointerEvents = "none";
    }
    if (orderFeedback) {
      orderFeedback.classList.add("hidden");
    }
    if (orderForm) {
      orderForm.reset();
      const quantityInput = document.getElementById("orderQuantity");
      if (quantityInput) quantityInput.value = "1";
    }
  }

  openButtons.forEach((btn) => btn.addEventListener("click", openModal));

  if (closeButton) {
    closeButton.addEventListener("click", () => {
      closeModal();
    });
  }

  if (orderModal) {
    orderModal.addEventListener("click", (e) => {
      if (e.target === orderModal) {
        closeModal();
      }
    });
  }

  // FAQ accordion
  document.querySelectorAll("[data-faq-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const isExpanded = btn.getAttribute("aria-expanded") === "true";
      const content = btn.nextElementSibling;
      if (!content) return;
      const indicator = btn.querySelector("span.ml-3");
      if (isExpanded) {
        content.classList.add("hidden");
        btn.setAttribute("aria-expanded", "false");
        if (indicator) indicator.textContent = "+";
      } else {
        content.classList.remove("hidden");
        btn.setAttribute("aria-expanded", "true");
        if (indicator) indicator.textContent = "−";
      }
    });
  });

  // Order form submit logic
  if (orderForm) {
    orderForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const name = document.getElementById("orderName")?.value?.trim();
      const phone = document.getElementById("orderPhone")?.value?.trim();
      const email = document.getElementById("orderEmail")?.value?.trim();
      const address = document.getElementById("orderAddress")?.value?.trim();
      const quantityValue = document.getElementById("orderQuantity")?.value;
      const quantity = Number(quantityValue || "1") || 1;
      const termsAccepted = document.getElementById("orderTerms")?.checked;

      if (!name || !phone || !email || !address || !termsAccepted) return;

      const lang =
        (typeof localStorage !== "undefined" &&
          localStorage.getItem(TAPLA_LANG_KEY)) ||
        document.documentElement.lang ||
        "en";

      try {
        await apiCreateOrder({
          customer_name: name,
          phone,
          email,
          address,
          quantity,
          price_per_unit: TAPLA_PRICE_PER_JAR,
          lang,
        });
      } catch (err) {
        // Basic error feedback
        alert(err.message || "Unable to place order. Please try again.");
        return;
      }

      // Show success animation overlay + feedback text
      if (successOverlay) {
        successOverlay.style.opacity = "1";
        successOverlay.style.pointerEvents = "auto";
      }
      if (orderFeedback) {
        orderFeedback.classList.remove("hidden");
      }

      setTimeout(() => {
        closeModal();
      }, 2600);
    });
  }
}

// ---------------------------
// Admin panel logic
// ---------------------------

function initAdminPage() {
  const body = document.body;
  if (!body || body.getAttribute("data-page") !== "admin") return;

  // Simple password prompt protection (validated server-side)
  const adminPassword = window.prompt("Enter admin password:");
  if (!adminPassword) {
    alert("Access denied.");
    window.location.href = "./index.html";
    return;
  }

  const ordersTableBody = document.getElementById("ordersTableBody");
  const ordersCountLabel = document.getElementById("ordersCountLabel");
  const clearAllOrdersBtn = document.getElementById("clearAllOrdersBtn");
  const emptyState = document.getElementById("emptyState");
  const exportOrdersBtn = document.getElementById("exportOrdersBtn");

  if (!ordersTableBody) return;

  async function renderOrders() {
    let orders = [];
    try {
      orders = await apiFetchOrders(adminPassword);
    } catch (err) {
      if (err.message === "unauthorized") {
        alert("Access denied.");
        window.location.href = "./index.html";
        return;
      }
      alert(err.message || "Unable to load orders.");
      return;
    }

    ordersTableBody.innerHTML = "";

    if (orders.length === 0) {
      if (ordersCountLabel) ordersCountLabel.textContent = "0 orders";
      if (emptyState) emptyState.classList.remove("hidden");
      if (clearAllOrdersBtn) clearAllOrdersBtn.disabled = true;
      return;
    }

    if (emptyState) emptyState.classList.add("hidden");
    if (clearAllOrdersBtn) clearAllOrdersBtn.disabled = false;

    if (ordersCountLabel) {
      ordersCountLabel.textContent =
        orders.length === 1 ? "1 order" : `${orders.length} orders`;
    }

    window._taplaCurrentOrders = orders;

    function escapeAttr(s) {
      if (s == null || s === "") return "";
      return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;");
    }

    orders.forEach((order) => {
      const dateLabel = order.timestamp
        ? new Date(order.timestamp).toLocaleString(undefined, {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
          })
        : "";
      const tr = document.createElement("tr");
      tr.className = "hover:bg-cream/70";

      const statusColorClasses =
        order.status === "Completed"
          ? "bg-emerald-50 text-emerald-700 border-emerald-100"
          : "bg-amber-50 text-amber-800 border-amber-100";

      tr.innerHTML = `
        <td class="align-top px-3 sm:px-4 py-3 whitespace-nowrap text-[0.75rem] text-deepBrown/80">
          ${dateLabel}
        </td>
        <td class="align-top px-3 sm:px-4 py-3 whitespace-nowrap">
          <div class="text-[0.8rem] font-medium text-deepBrown">${order.customer_name || ""}</div>
        </td>
        <td class="align-top px-3 sm:px-4 py-3 whitespace-nowrap text-[0.8rem] text-deepBrown/80">
          <div class="flex items-center gap-2">
            <span>${order.phone || "-"}</span>
            ${
              order.phone
                ? `<button class="px-1.5 py-0.5 rounded-full border border-deepBrown/15 text-[0.6rem] text-deepBrown/70 hover:bg-cream" data-action="copy" data-copy="${escapeAttr(order.phone)}" aria-label="Copy phone to clipboard">Copy</button>`
                : ""
            }
          </div>
        </td>
        <td class="align-top px-3 sm:px-4 py-3 whitespace-nowrap text-[0.8rem] text-deepBrown/80">
          ${order.email || "-"}
        </td>
        <td class="align-top px-3 sm:px-4 py-3 text-[0.75rem] text-deepBrown/80 max-w-xs">
          <div class="flex items-start gap-2">
            <div class="line-clamp-3 flex-1">${order.address || "-"}</div>
            ${
              order.address
                ? `<button class="px-1.5 py-0.5 rounded-full border border-deepBrown/15 text-[0.6rem] text-deepBrown/70 hover:bg-cream whitespace-nowrap" data-action="copy" data-copy="${escapeAttr(order.address)}" aria-label="Copy address to clipboard">Copy</button>`
                : ""
            }
          </div>
        </td>
        <td class="align-top px-3 sm:px-4 py-3 text-[0.75rem] text-deepBrown/85 whitespace-nowrap">
          <div>${order.product || "Tapla Honey"}</div>
          <div class="text-[0.7rem] text-deepBrown/60">Qty: ${order.quantity || 1}</div>
        </td>
        <td class="align-top px-3 sm:px-4 py-3 whitespace-nowrap">
          <span class="status-pill inline-flex items-center px-2.5 py-1 rounded-full border ${statusColorClasses}">
            ${order.status || "Pending"}
          </span>
        </td>
        <td class="align-top px-3 sm:px-4 py-3 whitespace-nowrap text-right">
          <div class="inline-flex items-center gap-2">
            <button
              class="text-[0.68rem] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full border border-emerald-200 text-emerald-800 hover:bg-emerald-50 transition ${
                order.status === "Completed" ? "opacity-40 cursor-not-allowed" : ""
              }"
              data-action="complete"
              data-id="${order.id}"
              ${order.status === "Completed" ? "disabled" : ""}
            >
              Done
            </button>
            <button
              class="text-[0.68rem] tracking-[0.16em] uppercase px-2.5 py-1 rounded-full border border-red-200 text-red-700 hover:bg-red-50 transition"
              data-action="delete"
              data-id="${order.id}"
            >
              Delete
            </button>
          </div>
        </td>
      `;

      ordersTableBody.appendChild(tr);
    });
  }

  // Delegated actions
  ordersTableBody.addEventListener("click", async (e) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const action = target.dataset.action;
    const id = target.dataset.id;
    if (!action) return;

    if (action === "copy" && target.dataset.copy) {
      const text = target.dataset.copy;
      if (!text) return;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
      } else {
        const temp = document.createElement("textarea");
        temp.value = text;
        document.body.appendChild(temp);
        temp.select();
        try {
          document.execCommand("copy");
        } catch (_) {
          // ignore
        }
        document.body.removeChild(temp);
      }
      return;
    }

    if (!id) return;

    if (action === "complete") {
      try {
        await apiUpdateOrderStatus(id, "Completed", adminPassword);
        renderOrders();
      } catch (err) {
        if (err.message === "unauthorized") {
          alert("Access denied.");
          window.location.href = "./index.html";
        } else {
          alert(err.message || "Failed to update order.");
        }
      }
    } else if (action === "delete") {
      if (!window.confirm("Delete this order? This cannot be undone.")) return;
      try {
        await apiDeleteOrder(id, adminPassword);
        renderOrders();
      } catch (err) {
        if (err.message === "unauthorized") {
          alert("Access denied.");
          window.location.href = "./index.html";
        } else {
          alert(err.message || "Failed to delete order.");
        }
      }
    }
  });

  if (clearAllOrdersBtn) {
    clearAllOrdersBtn.addEventListener("click", async () => {
      if (
        !window.confirm(
          "Clear all stored orders from the server? This cannot be undone."
        )
      ) {
        return;
      }

      try {
        const current = await apiFetchOrders(adminPassword);
        await Promise.all(
          current.map((order) => apiDeleteOrder(order.id, adminPassword))
        );
        renderOrders();
      } catch (err) {
        if (err.message === "unauthorized") {
          alert("Access denied.");
          window.location.href = "./index.html";
        } else {
          alert(err.message || "Failed to clear orders.");
        }
      }
    });
  }

  if (exportOrdersBtn) {
    exportOrdersBtn.addEventListener("click", () => {
      const orders = window._taplaCurrentOrders || [];
      if (!orders.length) {
        alert("There are no orders to export yet.");
        return;
      }

      const header = [
        "id",
        "customer_name",
        "phone",
        "email",
        "address",
        "quantity",
        "status",
        "timestamp",
      ];
      const rows = orders.map((o) =>
        header
          .map((key) => {
            const raw = o[key] != null ? String(o[key]) : "";
            const escaped = raw.replace(/"/g, '""');
            return `"${escaped}"`;
          })
          .join(",")
      );

      const csv = [header.join(","), ...rows].join("\n");
      const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = `tapla_orders_${new Date()
        .toISOString()
        .slice(0, 10)}.csv`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    });
  }

  renderOrders();
}

// ---------------------------
// Bootstrapping
// ---------------------------

document.addEventListener("DOMContentLoaded", () => {
  initLandingPage();
  initAdminPage();

  // Language switching
  const savedLang =
    (typeof localStorage !== "undefined" &&
      localStorage.getItem(TAPLA_LANG_KEY)) ||
    "en";
  setLanguage(savedLang);

  const toggles = document.querySelectorAll("[data-lang-toggle]");
  toggles.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const lang = btn.getAttribute("data-lang-toggle");
      if (!lang) return;
      setLanguage(lang);
    });
  });

  // Intersection Observer-based fade-in-up for sections
  const revealEls = document.querySelectorAll(".reveal-on-scroll");
  if ("IntersectionObserver" in window && revealEls.length > 0) {
    revealEls.forEach((el) => {
      el.classList.add("reveal-init");
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
      }
    );

    revealEls.forEach((el) => observer.observe(el));
  }
});

