// ─── ScrollReveal ────────────────────────────────────────────────
window.revelar = ScrollReveal({ reset: false });
revelar.reveal(".scroll",  { duration: 1500 });
revelar.reveal(".titles",  { duration: 1500 });

// ─── Typed.js strings por idioma ────────────────────────────────
const typedStrings = {
  "pt-BR": ["Estudante", "Estagiário", "Analista de Dados"],
  "en":    ["Student",   "Intern",     "Data Analyst"],
  "es":    ["Estudiante","Pasante",    "Analista de Datos"],
};

let typedInstance = null;

function initTyped(lang) {
  if (typedInstance) typedInstance.destroy();
  typedInstance = new Typed("#type_effect", {
    strings:    typedStrings[lang] || typedStrings["en"],
    startDelay: 500,
    backDelay:  1500,
    typeSpeed:  150,
    backSpeed:  150,
    loop:       true,
    loopCount:  Infinity,
  });
}

// ─── Traduções ───────────────────────────────────────────────────
const i18n = {
  "pt-BR": {
    nav_about:      "sobre mim",
    nav_projects:   "projetos",
    greeting:       "Olá! Eu sou o",
    and_im:         "E sou",
    about_title:    "sobre mim",
    about_p1:       "Meu nome é Diego Ramirez, e eu sou um Estagiário de Análise de Dados no",
    about_p2:       "Atualmente estou cursando o Ensino Superior em",
    about_p2b:      "na",
    sub_about:      "Iniciei minha carreira cursando o Ensino Técnico em Desenvolvimento de Sistemas (ETEC Professor Camargo Aranha), o qual me permitiu conhecer o mundo da tecnologia, e tudo aquilo que ela pode proporcionar. Durante esse curso tive minha primeira oportunidade formal no mercado de trabalho, como Auxiliar de TI.",
    connect:        "Conecte-se comigo e saiba mais!",
    projects_title: "projetos",
    card_project:   "Projeto",
    card_wip:       "Projeto em desenvolvimento...",
  },
  "en": {
    nav_about:      "about me",
    nav_projects:   "projects",
    greeting:       "Hi! I'm",
    and_im:         "And I'm a",
    about_title:    "about me",
    about_p1:       "My name is Diego Ramirez, and I'm a Data Analysis Intern at",
    about_p2:       "I'm currently pursuing a degree in",
    about_p2b:      "at",
    sub_about:      "I started my career studying Systems Development (ETEC Professor Camargo Aranha), which introduced me to the world of technology and everything it can offer. During this course I had my first formal opportunity in the job market, as an IT Assistant.",
    connect:        "Connect with me and learn more!",
    projects_title: "projects",
    card_project:   "Project",
    card_wip:       "Project under development...",
  },
  "es": {
    nav_about:      "sobre mí",
    nav_projects:   "proyectos",
    greeting:       "¡Hola! Soy",
    and_im:         "Y soy",
    about_title:    "sobre mí",
    about_p1:       "Mi nombre es Diego Ramirez, y soy un Pasante de Análisis de Datos en",
    about_p2:       "Actualmente curso la educación superior en",
    about_p2b:      "en",
    sub_about:      "Comencé mi carrera estudiando Desarrollo de Sistemas (ETEC Professor Camargo Aranha), lo que me permitió conocer el mundo de la tecnología y todo lo que puede ofrecer. Durante ese curso tuve mi primera oportunidad formal en el mercado laboral, como Asistente de TI.",
    connect:        "¡Conéctate conmigo y descubre más!",
    projects_title: "proyectos",
    card_project:   "Proyecto",
    card_wip:       "Proyecto en desarrollo...",
  },
};

function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;

  // nav desktop
  document.getElementById("nav_about").textContent    = t.nav_about;
  document.getElementById("nav_projects").textContent = t.nav_projects;

  // nav mobile drawer
  document.getElementById("mob_about").textContent    = t.nav_about;
  document.getElementById("mob_projects").textContent = t.nav_projects;

  // apresentation
  document.getElementById("greeting").textContent = t.greeting;
  document.getElementById("and_im").textContent   = t.and_im;

  // about me
  document.getElementById("aboutme__title").textContent = t.about_title;
  document.getElementById("about_p1").innerHTML =
    `${t.about_p1} <span class="emphasis">Itaú</span>!`;
  document.getElementById("about_p2").innerHTML =
    `${t.about_p2} <span class="emphasis">Data Science</span>, ${t.about_p2b} <span class="emphasis">FIAP</span>!`;
  document.getElementById("sub_about").textContent = t.sub_about;
  document.getElementById("connect").textContent   = t.connect;

  // projects
  document.getElementById("projects__title").textContent = t.projects_title;
  document.querySelectorAll(".card__title").forEach(el => {
    const idx = el.dataset.cardIndex;
    el.textContent = `${t.card_project} ${String(idx).padStart(2, "0")}`;
  });
  document.querySelectorAll(".card__description").forEach(el => {
    el.textContent = t.card_wip;
  });

  // html lang
  document.documentElement.lang = lang;

  // mark active on ALL lang buttons (desktop + mobile)
  // and reorder desktop switcher so active is always first
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // reorder desktop switcher: put active btn first
  const switcher = document.querySelector(".lang-switcher");
  if (switcher) {
    const activeBtn = switcher.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if (activeBtn) switcher.insertBefore(activeBtn, switcher.firstChild);
  }

  // re-init typed
  initTyped(lang);

  // persist
  localStorage.setItem("lang", lang);
}

// ─── Boot ────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("lang") || "pt-BR";
  applyLang(saved);

  // lang buttons (desktop + mobile)
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyLang(btn.dataset.lang);
      closeMobileMenu();
    });
  });

  // hamburger
  const hamburger   = document.getElementById("hamburger");
  const mobileMenu  = document.getElementById("mobile-menu");

  function closeMobileMenu() {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // fecha ao clicar em links do drawer
  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMobileMenu);
  });
});
