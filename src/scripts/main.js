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
  initFaq();
  initScrollAnimations();
});
