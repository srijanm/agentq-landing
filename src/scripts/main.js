/* ═══════════════════════════════════════════
   HERO VARIANT HANDLING
   ?v=1 (pain), ?v=2 (outcome, default), ?v=3 (vc)
   ═══════════════════════════════════════════ */

function initVariant() {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("v") || "2";
  const valid = ["1", "2", "3"];
  const selected = valid.includes(variant) ? variant : "2";

  document.body.setAttribute("data-variant", selected);

  const heroEl = document.getElementById(`hero-v${selected}`);
  if (heroEl) {
    heroEl.classList.add("active");
  }
}

/* ═══════════════════════════════════════════
   EMAIL VALIDATION — All email+CTA forms
   ═══════════════════════════════════════════ */

function initEmailForms() {
  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  // Hero form (has its own error element)
  const heroForm = document.getElementById("hero-form");
  const heroInput = document.getElementById("hero-email");
  const heroBtn = document.getElementById("hero-cta-btn");
  const heroError = document.getElementById("hero-email-error");

  if (heroForm && heroInput && heroBtn) {
    const url = heroBtn.dataset.calendarUrl;
    heroBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = heroInput.value.trim();
      if (!email || !isValidEmail(email)) {
        heroInput.classList.add("invalid");
        if (heroError) heroError.style.display = "block";
        heroInput.focus();
        return;
      }
      heroInput.classList.remove("invalid");
      if (heroError) heroError.style.display = "none";
      window.open(url, "_blank");
    });
    heroInput.addEventListener("input", () => {
      heroInput.classList.remove("invalid");
      if (heroError) heroError.style.display = "none";
    });
  }

  // All other email-cta-row forms
  document.querySelectorAll(".email-cta-row").forEach((form) => {
    const input = form.querySelector(".email-cta-input");
    const btn = form.querySelector(".email-cta-btn");
    if (!input || !btn) return;

    const url = btn.dataset.calendarUrl;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const email = input.value.trim();
      if (!email || !isValidEmail(email)) {
        input.classList.add("invalid");
        input.focus();
        return;
      }
      input.classList.remove("invalid");
      window.open(url, "_blank");
    });
    input.addEventListener("input", () => {
      input.classList.remove("invalid");
    });
  });
}

/* ═══════════════════════════════════════════
   HERO SOCIAL PROOF ROTATOR
   ═══════════════════════════════════════════ */

function initSocialProof() {
  const items = document.querySelectorAll(".hero-proof-item");
  if (items.length < 2) return;

  let current = 0;
  setInterval(() => {
    items[current].classList.remove("active");
    current = (current + 1) % items.length;
    items[current].classList.add("active");
  }, 4000);
}

/* ═══════════════════════════════════════════
   FAQ ACCORDION
   ═══════════════════════════════════════════ */

function initFaq() {
  const items = document.querySelectorAll(".faq-item");
  items.forEach((item) => {
    const question = item.querySelector(".faq-question");
    if (!question) return;
    question.addEventListener("click", () => {
      const isOpen = item.classList.contains("open");
      // Close all others
      items.forEach((i) => {
        i.classList.remove("open");
        const btn = i.querySelector(".faq-question");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
      // Toggle current
      if (!isOpen) {
        item.classList.add("open");
        question.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/* ═══════════════════════════════════════════
   NAV — Frosted glass to solid on scroll
   ═══════════════════════════════════════════ */

function initNav() {
  const nav = document.getElementById("top-nav");
  if (!nav) return;

  function onScroll() {
    if (window.scrollY > 80) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ═══════════════════════════════════════════
   SCROLL FADE-IN — IntersectionObserver
   ═══════════════════════════════════════════ */

function initScrollAnimations() {
  const sections = document.querySelectorAll(".fade-in-section");
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ═══════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════ */

document.addEventListener("DOMContentLoaded", () => {
  initVariant();
  initEmailForms();
  initNav();
  initFaq();
  initScrollAnimations();
});
