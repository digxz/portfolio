window.revelar = ScrollReveal({ reset: true });

revelar.reveal(".scroll", {
  duration: 1500,
});

revelar.reveal(".titles", {
  duration: 1500,
});

var typed = new Typed("#type_effect", {
  strings: ["Web Developer", "Programmer", "Student"],
  startDelay: 750,
  backDelay: 1000,
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  loopCount: Infinity,
});
