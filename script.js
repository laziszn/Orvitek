/**? menu */
const menu = document.querySelector(".menu");
const links = document.querySelector(".nav-links");
menu?.addEventListener("click", () => {
  links.style.display = links.style.display === "flex" ? "none" : "flex";
  links.style.position = "absolute";
  links.style.top = "76px";
  links.style.left = "0";
  links.style.right = "0";
  links.style.padding = "20px";
  links.style.background = "#070f2b";
  links.style.flexDirection = "column";
});
/**? slider */
(() => {
  const slides = [...document.querySelectorAll(".hero-slide")],
    dots = [...document.querySelectorAll(".slider-dot")];
  const prev = document.querySelector(".slider-arrow.prev"),
    next = document.querySelector(".slider-arrow.next");
  let index = 0,
    timer;
  function show(i) {
    index = (i + slides.length) % slides.length;
    slides.forEach((s, n) => s.classList.toggle("active", n === index));
    dots.forEach((d, n) => d.classList.toggle("active", n === index));
  }
  function restart() {
    clearInterval(timer);
    timer = setInterval(() => show(index + 1), 5000);
  }
  prev?.addEventListener("click", () => {
    show(index - 1);
    restart();
  });
  next?.addEventListener("click", () => {
    show(index + 1);
    restart();
  });
  dots.forEach((d, n) =>
    d.addEventListener("click", () => {
      show(n);
      restart();
    }),
  );
  restart();
})();

/** data support */
(() => {
  const modal = document.getElementById("supportModal");
  const close = document.getElementById("closeSupport");
  const form = document.getElementById("supportForm");
  const wrap = document.getElementById("supportFormWrap");
  const success = document.getElementById("formSuccess");
  const successClose = document.getElementById("successClose");

  function openModal(e) {
    if (e) e.preventDefault();
    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    setTimeout(() => document.getElementById("supportName")?.focus(), 100);
  }
  function closeModal() {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }
  document
    .querySelectorAll("[data-support]")
    .forEach((el) => el.addEventListener("click", openModal));
  close?.addEventListener("click", closeModal);
  successClose?.addEventListener("click", closeModal);
  modal?.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.classList.contains("open")) closeModal();
  });

  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    // Front-end demo: connect this form to your email/CRM/backend before production.
    form.reset();
    wrap.style.display = "none";
    success.style.display = "block";
  });
})();
