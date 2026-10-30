// ─── ScrollReveal ────────────────────────────────────────────────
window.revelar = ScrollReveal({ reset: false });
revelar.reveal(".scroll",  { duration: 1500, interval: 80 });
revelar.reveal(".titles",  { duration: 1500 });

// ─── Traduções ───────────────────────────────────────────────────
const i18n = {
  "pt-BR": {
    nav_about: "sobre", nav_experience: "experiência", nav_projects: "projetos", nav_contact: "contato",
    greeting: "olá! eu sou o", subtitle: "analista de dados júnior",
    about_title: "sobre",
    about_p1:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam, ornare sem lacinia quam venenatis vestibulum.",
    about_p2:  "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    tech_tags: "tecnologias utilizadas",
    experience_title: "experiência",
    experience_items: [
      {
        company: "Itaú Unibanco",
        roles: [
          {
            period: "out/2026 — presente",
            role: "Analista de Dados Jr.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
          },
          {
            period: "jul/2025 — out/2026",
            role: "Estagiário de Análise de Dados",
            description: "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum.",
          },
        ],
      },
      {
        company: "Nestlé",
        roles: [
          {
            period: "ago/2024 — jul/2025",
            role: "Estagiário em Sistemas e Automação",
            description: "Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.",
          },
        ],
      },
      {
        company: "Escola Pro-Tec",
        roles: [
          {
            period: "mai/2022 — ago/2024",
            role: "Assistente de TI",
            description: "Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.",
          },
        ],
      },
    ],
    connect: "conecte-se comigo", projects_title: "projetos",
    card_project: "projeto", card_wip: "projeto em desenvolvimento...",
    contact_title: "contato",
    contact_subtitle: "tem interesse em uma conversa? entre em contato comigo!",
    skip_link: "Ir para o conteúdo",
  },
  "en": {
    nav_about: "about", nav_experience: "experience", nav_projects: "projects", nav_contact: "contact",
    greeting: "hi! i'm", subtitle: "junior data analyst",
    about_title: "about",
    about_p1:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam, ornare sem lacinia quam venenatis vestibulum.",
    about_p2:  "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    tech_tags: "technologies used",
    experience_title: "experience",
    experience_items: [
      {
        company: "Itaú Unibanco",
        roles: [
          {
            period: "Oct 2026 — present",
            role: "Junior Data Analyst",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
          },
          {
            period: "Jul 2025 — Oct 2026",
            role: "Data Analysis Intern",
            description: "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum.",
          },
        ],
      },
      {
        company: "Nestlé",
        roles: [
          {
            period: "Aug 2024 — Jul 2025",
            role: "Systems and Automation Intern",
            description: "Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.",
          },
        ],
      },
      {
        company: "Escola Pro-Tec",
        roles: [
          {
            period: "May 2022 — Aug 2024",
            role: "IT Assistant",
            description: "Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.",
          },
        ],
      },
    ],
    connect: "connect with me", projects_title: "projects",
    card_project: "project", card_wip: "project under development...",
    contact_title: "contact",
    contact_subtitle: "interested in a conversation? get in touch with me!",
    skip_link: "Skip to content",
  },
  "es": {
    nav_about: "sobre", nav_experience: "experiencia", nav_projects: "proyectos", nav_contact: "contacto",
    greeting: "¡hola! soy", subtitle: "analista de datos junior",
    about_title: "sobre",
    about_p1:  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Nullam id dolor id nibh ultricies vehicula ut id elit. Aenean eu leo quam, ornare sem lacinia quam venenatis vestibulum.",
    about_p2:  "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum. Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam porta sem malesuada magna mollis euismod. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    tech_tags: "tecnologías utilizadas",
    experience_title: "experiencia",
    experience_items: [
      {
        company: "Itaú Unibanco",
        roles: [
          {
            period: "oct/2026 — actualidad",
            role: "Analista de Datos Jr.",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
          },
          {
            period: "jul/2025 — oct/2026",
            role: "Pasante en Análisis de Datos",
            description: "Vestibulum id ligula porta felis euismod semper. Cras mattis consectetur purus sit amet fermentum.",
          },
        ],
      },
      {
        company: "Nestlé",
        roles: [
          {
            period: "ago/2024 — jul/2025",
            role: "Pasante en Sistemas y Automatización",
            description: "Donec ullamcorper nulla non metus auctor fringilla. Maecenas faucibus mollis interdum.",
          },
        ],
      },
      {
        company: "Escola Pro-Tec",
        roles: [
          {
            period: "may/2022 — ago/2024",
            role: "Asistente de TI",
            description: "Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur.",
          },
        ],
      },
    ],
    connect: "conéctate conmigo", projects_title: "proyectos",
    card_project: "proyecto", card_wip: "proyecto en desarrollo...",
    contact_title: "contacto",
    contact_subtitle: "¿interesado en una conversación? ¡ponte en contacto conmigo!",
    skip_link: "Ir al contenido",
  },
};

// ─── Aplicar idioma ───────────────────────────────────────────────
function applyLang(lang) {
  const t = i18n[lang];
  if (!t) return;

  document.getElementById("nav_about").textContent    = t.nav_about;
  document.getElementById("nav_experience").textContent = t.nav_experience;
  document.getElementById("nav_projects").textContent = t.nav_projects;
  document.getElementById("nav_contact").textContent  = t.nav_contact;
  document.getElementById("mob_about").textContent    = t.nav_about;
  document.getElementById("mob_experience").textContent = t.nav_experience;
  document.getElementById("mob_projects").textContent = t.nav_projects;
  document.getElementById("mob_contact").textContent  = t.nav_contact;

  document.getElementById("greeting").textContent = t.greeting;
  document.getElementById("subtitle").textContent = t.subtitle;
  document.getElementById("connect").textContent  = t.connect;

  document.getElementById("aboutme__title").textContent = t.about_title;
  document.getElementById("about_p1").textContent = t.about_p1;
  document.getElementById("about_p2").textContent = t.about_p2;

  document.getElementById("experience__title").textContent = t.experience_title;
  document.querySelectorAll(".timeline__tags").forEach(el => el.setAttribute("aria-label", t.tech_tags));
  document.querySelectorAll(".timeline__item").forEach((item, index) => {
    const data = t.experience_items[index];
    if (!data) return;

    item.querySelectorAll(".timeline__role-item").forEach((roleItem, roleIndex) => {
      const roleData = data.roles[roleIndex];
      if (!roleData) return;

      const company = roleItem.querySelector(".timeline__company");
      if (company) company.textContent = data.company;

      roleItem.querySelector(".timeline__period").textContent      = roleData.period;
      roleItem.querySelector(".timeline__role-title").textContent  = roleData.role;
      roleItem.querySelector(".timeline__description").textContent = roleData.description;
    });
  });

  document.getElementById("projects__title").textContent = t.projects_title;
  document.querySelectorAll(".card__title").forEach(el => {
    el.textContent = `${t.card_project} ${String(el.closest(".project__card").dataset.cardIndex).padStart(2, "0")}`;
  });
  document.querySelectorAll(".card__description").forEach(el => {
    el.textContent = t.card_wip;
  });

  document.getElementById("contact__title").textContent    = t.contact_title;
  document.getElementById("contact__subtitle").textContent = t.contact_subtitle;

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

// ─── Troca de idioma com fade suave ──────────────────────────────
let currentLang  = "pt-BR";
let langFadeTimer = null;

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function changeLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  const main = document.querySelector(".main__content");
  if (!main || prefersReducedMotion()) {
    applyLang(lang);
    return;
  }

  main.classList.add("lang-switching");
  clearTimeout(langFadeTimer);
  langFadeTimer = setTimeout(() => {
    applyLang(lang);
    // próximo frame: remove o fade-out e anima o fade-in
    requestAnimationFrame(() => main.classList.remove("lang-switching"));
  }, 180);
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
      changeLang(btn.dataset.lang);
      closeDropdown();
    });
  });
}

// ─── Nav ativa (IntersectionObserver) ────────────────────────────
function initActiveNav() {
  const sections = [
    { el: document.getElementById("aboutme__title"),    id: "nav_about"      },
    { el: document.getElementById("experience__title"), id: "nav_experience" },
    { el: document.getElementById("projects__title"),   id: "nav_projects"   },
    { el: document.getElementById("contact__title"),    id: "nav_contact"    },
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

// ─── Linha do tempo: brilho acompanha a experiência em foco ──────
function initTimelineGlow() {
  const timeline = document.querySelector(".timeline");
  if (!timeline) return;

  const items = [...timeline.querySelectorAll(".timeline__item")];

  const setGlow = item => {
    if (!item) {
      timeline.classList.remove("is-glowing");
      timeline.style.setProperty("--glow-height", "0px");
      return;
    }

    const marker = item.querySelector(".timeline__marker");
    if (!marker) return;

    const timelineRect = timeline.getBoundingClientRect();
    const markerRect   = marker.getBoundingClientRect();
    const markerCenter = markerRect.top - timelineRect.top + markerRect.height / 2;
    const bottomInset  = parseFloat(getComputedStyle(timeline, "::after").bottom) || 0;
    const height       = Math.max(0, timelineRect.height - bottomInset - markerCenter);

    timeline.style.setProperty("--glow-height", `${height}px`);
    timeline.classList.add("is-glowing");
  };

  items.forEach(item => {
    item.addEventListener("pointerenter", () => setGlow(item));
    item.addEventListener("focusin",      () => setGlow(item));
  });

  timeline.addEventListener("pointerleave", () => setGlow(null));
  timeline.addEventListener("focusout", () => {
    if (!timeline.contains(document.activeElement)) setGlow(null);
  });

  const refresh = () => {
    setGlow(timeline.querySelector(".timeline__item:hover, .timeline__item:focus-within"));
  };

  window.addEventListener("resize", refresh, { passive: true });
  if ("ResizeObserver" in window) new ResizeObserver(refresh).observe(timeline);
}

// ─── Glow que acompanha o cursor ─────────────────────────────────
function initCursorGlow() {
  const glow = document.getElementById("cursor-glow");
  if (!glow) return;

  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reduced     = prefersReducedMotion();
  if (!finePointer || reduced) { glow.remove(); return; }

  let targetX = window.innerWidth  / 2;
  let targetY = window.innerHeight / 2;
  let x = targetX, y = targetY;
  let raf = null;

  function tick() {
    // easing: segue com atraso suave, não colado no ponteiro
    x += (targetX - x) * 0.12;
    y += (targetY - y) * 0.12;
    glow.style.transform = `translate3d(${x - glow.offsetWidth / 2}px, ${y - glow.offsetHeight / 2}px, 0)`;

    if (Math.abs(targetX - x) > 0.1 || Math.abs(targetY - y) > 0.1) {
      raf = requestAnimationFrame(tick);
    } else {
      raf = null;
    }
  }

  window.addEventListener("pointermove", e => {
    targetX = e.clientX;
    targetY = e.clientY;
    if (!glow.classList.contains("is-active")) glow.classList.add("is-active");
    if (!raf) raf = requestAnimationFrame(tick);
  }, { passive: true });

  document.documentElement.addEventListener("pointerleave", () => {
    glow.classList.remove("is-active");
  });
}

// ─── Boot ─────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {

  document.getElementById("footer__year").textContent = new Date().getFullYear();

  applyLang("pt-BR");

  // idioma mobile
  document.querySelectorAll(".mobile-lang__btn").forEach(btn => {
    btn.addEventListener("click", () => {
      changeLang(btn.dataset.lang);
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
  initTimelineGlow();
  initCursorGlow();
});
