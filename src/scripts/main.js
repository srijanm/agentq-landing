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
   HERO EMAIL VALIDATION
   ═══════════════════════════════════════════ */

function initHeroForm() {
  const form = document.getElementById("hero-form");
  const input = document.getElementById("hero-email");
  const btn = document.getElementById("hero-cta-btn");
  const error = document.getElementById("hero-email-error");
  if (!form || !input || !btn) return;

  const calendarUrl = btn.dataset.calendarUrl;

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  btn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = input.value.trim();
    if (!email || !isValidEmail(email)) {
      input.classList.add("invalid");
      if (error) error.style.display = "block";
      input.focus();
      return;
    }
    input.classList.remove("invalid");
    if (error) error.style.display = "none";
    // Valid email — open calendar booking
    window.open(calendarUrl, "_blank");
  });

  input.addEventListener("input", () => {
    input.classList.remove("invalid");
    if (error) error.style.display = "none";
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
  initHeroForm();
  initSocialProof();
  initFaq();
  initScrollAnimations();
});
