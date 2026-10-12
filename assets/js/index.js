// ─── ScrollReveal ────────────────────────────────────────────────
window.revelar = ScrollReveal({ reset: false });
revelar.reveal(".scroll",  { duration: 1500 });
revelar.reveal(".titles",  { duration: 1500 });

// ─── Traduções ───────────────────────────────────────────────────
const i18n = {
  "pt-BR": {
    nav_about: "sobre mim", nav_projects: "projetos", nav_contact: "contato",
    greeting: "Olá! Eu sou o", subtitle: "Analista de Dados Júnior",
    about_title: "sobre mim",
    about_p1:  "Meu nome é Diego Ramirez, e eu sou Analista de Dados Júnior no",
    about_p2:  "Atualmente estou cursando o Ensino Superior em", about_p2b: "na",
    connect: "Conecte-se comigo", projects_title: "projetos",
    card_project: "Projeto", card_wip: "Projeto em desenvolvimento...",
    contact_title: "contato",
    contact_subtitle: "Tem interesse em uma conversa? Entre em contato comigo!",
    contact_location: "Brasil",
    skip_link: "Ir para o conteúdo",
    menu_label: "Menu",
  },
  "en": {
    nav_about: "about me", nav_projects: "projects", nav_contact: "contact",
    greeting: "Hi! I'm", subtitle: "Junior Data Analyst",
    about_title: "about me",
    about_p1:  "My name is Diego Ramirez, and I'm a Junior Data Analyst at",
    about_p2:  "I'm currently pursuing a degree in", about_p2b: "at",
    connect: "Connect with me", projects_title: "projects",
    card_project: "Project", card_wip: "Project under development...",
    contact_title: "contact",
    contact_subtitle: "Interested in a conversation? Get in touch with me!",
    contact_location: "Brazil",
    skip_link: "Skip to content",
    menu_label: "Menu",
  },
  "es": {
    nav_about: "sobre mí", nav_projects: "proyectos", nav_contact: "contacto",
    greeting: "¡Hola! Soy", subtitle: "Analista de Datos Junior",
    about_title: "sobre mí",
    about_p1:  "Mi nombre es Diego Ramirez, y soy Analista de Datos Junior en",
    about_p2:  "Actualmente curso la educación superior en", about_p2b: "en",
    connect: "Conéctate conmigo", projects_title: "proyectos",
    card_project: "Proyecto", card_wip: "Proyecto en desarrollo...",
    contact_title: "contacto",
    contact_subtitle: "¿Interesado en una conversación? ¡Ponte en contacto conmigo!",
    contact_location: "Brasil",
    skip_link: "Ir al contenido",
    menu_label: "Menú",
  },
};

// ─── Aplicar idioma ───────────────────────────────────────────────
function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;

  document.getElementById("nav_about").textContent    = t.nav_about;
  document.getElementById("nav_projects").textContent = t.nav_projects;
  document.getElementById("nav_contact").textContent  = t.nav_contact;
  document.getElementById("mob_about").textContent    = t.nav_about;
  document.getElementById("mob_projects").textContent = t.nav_projects;
  document.getElementById("mob_contact").textContent  = t.nav_contact;

  document.getElementById("greeting").textContent = t.greeting;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("connect").textContent  = t.connect;

  document.getElementById("aboutme__title").textContent = t.about_title;
  document.getElementById("about_p1").innerHTML =
    `${t.about_p1} <span class="emphasis">Itaú Unibanco</span>!`;
  document.getElementById("about_p2").innerHTML =
    `${t.about_p2} <span class="emphasis">Data Science</span>, ${t.about_p2b} <span class="emphasis">FIAP</span>!`;

  document.getElementById("projects__title").textContent = t.projects_title;
  document.querySelectorAll(".card__title").forEach(el => {
    el.textContent = `${t.card_project} ${String(el.dataset.cardIndex).padStart(2, "0")}`;
  });
  document.querySelectorAll(".card__description").forEach(el => {
    el.textContent = t.card_wip;
  });

  document.getElementById("contact__title").textContent    = t.contact_title;
  document.getElementById("contact__subtitle").textContent = t.contact_subtitle;
  document.getElementById("contact__location").textContent = t.contact_location;

  const skip = document.querySelector(".skip-link");
  if (skip) skip.textContent = t.skip_link;

  // label do trigger
  const current = document.getElementById("lang-current");
  if (current) current.textContent = lang === "pt-BR" ? "PT" : lang.toUpperCase();

  // estado dos botões de idioma — dropdown desktop
  document.querySelectorAll(".lang-opt").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
  });

  // estado dos botões de idioma — mobile
  document.querySelectorAll(".mobile-lang__btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", String(active));
  });

  document.documentElement.lang = lang;
}

// ─── Barra de progresso ──────────────────────────────────────────
function initProgressBar() {
  const bar = document.getElementById("progress-bar");
  if (!bar) return;

  function update() {
    const scrolled  = window.scrollY;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const pct       = maxScroll > 0 ? (scrolled / maxScroll) * 100 : 0;
    bar.style.width = pct + "%";
  }

  window.addEventListener("scroll", update, { passive: true });
  update();
}

// ─── Dropdown de idioma ──────────────────────────────────────────
function initLangDropdown() {
  const dropdown = document.getElementById("lang-dropdown");
  const trigger  = document.getElementById("lang-trigger");
  if (!dropdown || !trigger) return;

  const menu = dropdown.querySelector(".lang-dropdown__menu");

  function updateMenuItems(currentLang) {
    // mostra só as opções que NÃO são o idioma atual
    menu.querySelectorAll("li").forEach(li => {
      const btn = li.querySelector(".lang-opt");
      li.style.display = btn.dataset.lang === currentLang ? "none" : "";
    });
  }

  function closeDropdown() {
    dropdown.classList.remove("open");
    trigger.setAttribute("aria-expanded", "false");
  }

  trigger.addEventListener("click", e => {
    e.stopPropagation();
    // atualizar quais itens mostrar antes de abrir
    const activeLang = document.documentElement.lang;
    updateMenuItems(activeLang);
    const isOpen = dropdown.classList.toggle("open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });

  // fechar ao clicar fora
  document.addEventListener("click", e => {
    if (!dropdown.contains(e.target)) closeDropdown();
  });

  // fechar com Esc
  document.addEventListener("keydown", e => {
    if (e.key === "Escape") closeDropdown();
  });

  // opções do dropdown
  dropdown.querySelectorAll(".lang-opt").forEach(btn => {
    btn.addEventListener("click", () => {
      applyLang(btn.dataset.lang);
      closeDropdown();
    });
  });
}

// ─── Nav ativa (IntersectionObserver) ────────────────────────────
function initActiveNav() {
  const sections = [
    { el: document.getElementById("aboutme__title"),  id: "nav_about"    },
    { el: document.getElementById("projects__title"), id: "nav_projects" },
    { el: document.getElementById("contact__title"),  id: "nav_contact"  },
  ];
  const navLinks = sections.map(s => document.getElementById(s.id));

  function setActive(activeId) {
    navLinks.forEach(a => {
      const isActive = a && a.id === activeId;
      if (a) {
        a.classList.toggle("nav--active", isActive);
        a.setAttribute("aria-current", isActive ? "page" : "false");
      }
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

  const heroObs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) setActive(null);
  }, { threshold: 0.3 });
  const hero = document.querySelector(".hero");
  if (hero) heroObs.observe(hero);
}

// ─── Boot ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("footer__year").textContent = new Date().getFullYear();

  applyLang("pt-BR");

  // idioma mobile
  document.querySelectorAll(".mobile-lang__btn").forEach(btn => {
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

  document.addEventListener("click", e => {
    if (mobileMenu.classList.contains("open") &&
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)) {
      closeMobileMenu();
    }
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") {
      if (mobileMenu.classList.contains("open")) {
        closeMobileMenu();
        hamburger.focus();
      }
    }
  });

  mobileMenu.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", closeMobileMenu);
  });

  // navbar glassmorphism
  const navbar   = document.querySelector(".navbar");
  const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 40);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  initProgressBar();
  initLangDropdown();
  initActiveNav();
});
