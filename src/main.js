import "./styles.css";

/* ═══════════════════════════════════════════
   VARIANT HANDLING
   No flash: all heroes hidden by CSS default,
   correct one shown on DOMContentLoaded.
   ═══════════════════════════════════════════ */

function initVariant() {
  const params = new URLSearchParams(window.location.search);
  const variant = params.get("v") || "c"; // Default to Variant C
  const validVariants = ["a", "b", "c", "d"];
  const selected = validVariants.includes(variant) ? variant : "c";

  // Set data-variant on body for analytics
  document.body.setAttribute("data-variant", selected);

  // Show the correct hero
  const heroEl = document.getElementById(`hero-${selected}`);
  if (heroEl) {
    heroEl.classList.add("active");
  }

  // Variant A: update shared CTA button copy
  if (selected === "a") {
    const navCta = document.getElementById("nav-cta");
    const closingCta = document.getElementById("closing-cta");
    const arrow = ' <span aria-hidden="true">&rarr;</span>';
    if (navCta) navCta.innerHTML = "Book a launch call " + arrow;
    if (closingCta) closingCta.innerHTML = "Book a launch call " + arrow;
  }

  // Trigger strikethrough animation for Variant C after a brief delay
  if (selected === "c") {
    setTimeout(() => {
      const strike = document.querySelector(".strike-through");
      if (strike) strike.classList.add("animate");
    }, 400);
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
