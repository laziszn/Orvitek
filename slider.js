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
