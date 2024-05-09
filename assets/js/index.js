window.revelar = ScrollReveal({ reset: true });

revelar.reveal(".scroll", {
  duration: 1750,
});

revelar.reveal(".titles", {
  duration: 1750,
});

var typed = new Typed("#type_effect", {
  strings: ["Programmer", "Student"],
  startDelay: 750,
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
  loopCount: Infinity,
});
