window.revelar = ScrollReveal({ reset: true });

revelar.reveal(".scroll", {
  duration: 1500,
});

revelar.reveal(".titles", {
  duration: 1500,
});

var typed = new Typed("#type_effect", {
  strings: ["Student"],
  startDelay: 1000,
  backDelay: 1500,
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  loopCount: Infinity,
});

window.addEventListener("scroll", function () {
  let scroll = document.querySelector(".scroll__top");
  scroll.classList.toggle("active", window.scrollY > 450);
});

function backToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}
