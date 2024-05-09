window.revelar = ScrollReveal({ reset: true });

revelar.reveal(".scroll", {
  duration: 1750,
});

revelar.reveal(".titles", {
  duration: 1750,
});

var typed = new Typed("#type_effect", {
  strings: ["Programmer", "Student", "Tester"],
  typeSpeed: 150,
  backSpeed: 150,
  looped: true,
});
