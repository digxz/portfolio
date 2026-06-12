// ─── ScrollReveal ────────────────────────────────────────────────
window.revelar = ScrollReveal({ reset: false });
revelar.reveal(".scroll",  { duration: 1500 });
revelar.reveal(".titles",  { duration: 1500 });

// ─── Traduções ───────────────────────────────────────────────────
const i18n = {
  "pt-BR": {
    nav_about: "sobre mim", nav_projects: "projetos", nav_contact: "contato",
    greeting: "Olá! Eu sou o", subtitle: "Engenheiro de Dados",
    about_title: "sobre mim",
    about_p1:  "Meu nome é Diego Ramirez, e eu sou um Estagiário de Análise de Dados no",
    about_p2:  "Atualmente estou cursando o Ensino Superior em", about_p2b: "na",
    sub_about: "Iniciei minha carreira cursando o Ensino Técnico em Desenvolvimento de Sistemas (ETEC Professor Camargo Aranha), o qual me permitiu conhecer o mundo da tecnologia, e tudo aquilo que ela pode proporcionar. Durante esse curso tive minha primeira oportunidade formal no mercado de trabalho, como Auxiliar de TI.",
    connect: "Conecte-se comigo", projects_title: "projetos",
    card_project: "Projeto", card_wip: "Projeto em desenvolvimento...",
    contact_title: "Contato",
    contact_subtitle: "Tem interesse em uma conversa? Entre em contato comigo!",
    contact_location: "Brasil",
    skip_link: "Ir para o conteúdo",
  },
  "en": {
    nav_about: "about me", nav_projects: "projects", nav_contact: "contact",
    greeting: "Hi! I'm", subtitle: "Data Engineer",
    about_title: "about me",
    about_p1:  "My name is Diego Ramirez, and I'm a Data Analysis Intern at",
    about_p2:  "I'm currently pursuing a degree in", about_p2b: "at",
    sub_about: "I started my career studying Systems Development (ETEC Professor Camargo Aranha), which introduced me to the world of technology and everything it can offer. During this course I had my first formal opportunity in the job market, as an IT Assistant.",
    connect: "Connect with me", projects_title: "projects",
    card_project: "Project", card_wip: "Project under development...",
    contact_title: "Contact",
    contact_subtitle: "Interested in a conversation? Get in touch with me!",
    contact_location: "Brazil",
    skip_link: "Skip to content",
  },
  "es": {
    nav_about: "sobre mí", nav_projects: "proyectos", nav_contact: "contacto",
    greeting: "¡Hola! Soy", subtitle: "Ingeniero de Datos",
    about_title: "sobre mí",
    about_p1:  "Mi nombre es Diego Ramirez, y soy un Pasante de Análisis de Datos en",
    about_p2:  "Actualmente curso la educación superior en", about_p2b: "en",
    sub_about: "Comencé mi carrera estudiando Desarrollo de Sistemas (ETEC Professor Camargo Aranha), lo que me permitió conocer el mundo de la tecnología y todo lo que puede ofrecer. Durante ese curso tuve mi primera oportunidad formal en el mercado laboral, como Asistente de TI.",
    connect: "Conéctate conmigo", projects_title: "proyectos",
    card_project: "Proyecto", card_wip: "Proyecto en desarrollo...",
    contact_title: "Contacto",
    contact_subtitle: "¿Interesado en una conversación? ¡Ponte en contacto conmigo!",
    contact_location: "Brasil",
    skip_link: "Ir al contenido",
  },
};

// ─── Aplicar idioma ───────────────────────────────────────────────
function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;

  // nav
  document.getElementById("nav_about").textContent    = t.nav_about;
  document.getElementById("nav_projects").textContent = t.nav_projects;
  document.getElementById("nav_contact").textContent  = t.nav_contact;
  document.getElementById("mob_about").textContent    = t.nav_about;
  document.getElementById("mob_projects").textContent = t.nav_projects;
  document.getElementById("mob_contact").textContent  = t.nav_contact;

  // hero
  document.getElementById("greeting").textContent = t.greeting;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("connect").textContent  = t.connect;

  // about
  document.getElementById("aboutme__title").textContent = t.about_title;
  document.getElementById("about_p1").innerHTML =
    `${t.about_p1} <span class="emphasis">Itaú Unibanco</span>!`;
  document.getElementById("about_p2").innerHTML =
    `${t.about_p2} <span class="emphasis">Data Science</span>, ${t.about_p2b} <span class="emphasis">FIAP</span>!`;
  document.getElementById("sub_about").textContent = t.sub_about;

  // projects
  document.getElementById("projects__title").textContent = t.projects_title;
  document.querySelectorAll(".card__title").forEach(el => {
    el.textContent = `${t.card_project} ${String(el.dataset.cardIndex).padStart(2, "0")}`;
  });
  document.querySelectorAll(".card__description").forEach(el => {
    el.textContent = t.card_wip;
  });

  // contact
  document.getElementById("contact__title").textContent    = t.contact_title;
  document.getElementById("contact__subtitle").textContent = t.contact_subtitle;
  document.getElementById("contact__location").textContent = t.contact_location;

  // skip link
  const skip = document.querySelector(".skip-link");
  if (skip) skip.textContent = t.skip_link;

  // html lang + botões
  document.documentElement.lang = lang;
  document.querySelectorAll(".lang-btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  // reordenar switcher desktop: ativo primeiro
  const switcher = document.querySelector(".lang-switcher");
  if (switcher) {
    const activeBtn = switcher.querySelector(`.lang-btn[data-lang="${lang}"]`);
    if (activeBtn) switcher.insertBefore(activeBtn, switcher.firstChild);
  }
}

// ─── Intersection Observer — seção ativa na navbar ───────────────
function initActiveNav() {
  const sections = [
    { el: document.getElementById("aboutme__title"),  id: "nav_about"    },
    { el: document.getElementById("projects__title"), id: "nav_projects" },
    { el: document.getElementById("contact__title"),  id: "nav_contact"  },
  ];

  const navLinks = [
    document.getElementById("nav_about"),
    document.getElementById("nav_projects"),
    document.getElementById("nav_contact"),
  ];

  function setActive(activeId) {
    navLinks.forEach(a => {
      const isActive = a.id === activeId;
      a.classList.toggle("nav--active", isActive);
      a.setAttribute("aria-current", isActive ? "page" : "false");
    });
  }

  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const match = sections.find(s => s.el === entry.target);
        if (match) setActive(match.id);
      }
    });
  }, { rootMargin: "-40% 0px -50% 0px", threshold: 0 });

  sections.forEach(s => { if (s.el) obs.observe(s.el); });

  // limpar ativo quando volta ao topo (hero)
  const heroObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) setActive(null);
  }, { threshold: 0.3 });
  const hero = document.querySelector(".hero");
  if (hero) heroObs.observe(hero);
}

// ─── Boot ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {

  // rodapé: ano dinâmico
  document.getElementById("footer__year").textContent = new Date().getFullYear();

  // idioma padrão
  applyLang("pt-BR");

  // botões de idioma
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      applyLang(btn.dataset.lang);
      closeMobileMenu();
    });
  });

  // hamburger
  const hamburger  = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobile-menu");

  function closeMobileMenu() {
    hamburger.classList.remove("open");
    hamburger.setAttribute("aria-expanded", "false");
    mobileMenu.classList.remove("open");
    document.body.style.overflow = "";
  }

  hamburger.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("open");
    hamburger.classList.toggle("open", isOpen);
    hamburger.setAttribute("aria-expanded", String(isOpen));
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  // fechar menu ao clicar fora
  document.addEventListener("click", e => {
    if (mobileMenu.classList.contains("open") &&
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });

  // fechar menu com Esc
  document.addEventListener("keydown", e => {
    if (e.key === "Escape" && mobileMenu.classList.contains("open")) {
      closeMobileMenu();
      hamburger.focus();
    }
  });

  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMobileMenu);
  });

  // navbar glassmorphism ao scroll
  const navbar  = document.querySelector(".navbar");
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // nav ativa por seção
  initActiveNav();
});
