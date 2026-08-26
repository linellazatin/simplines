// Renders the page from content.js. Edit content.js to reuse this template
// for someone else - nothing in here needs to change.

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function renderHero() {
  document.getElementById("heroTagline").textContent = PROFILE.tagline;
  document.getElementById("heroSub").textContent =
    `${PROFILE.nickname}`;
    // `${PROFILE.role} — ${PROFILE.location}`;
    document.title = `${PROFILE.nickname}`;
  }

function renderEntry(item, { withUrl } = {}) {
  const li = el("li", "entry");

  const title = el("div", "entry-title");
  if (item.accent) title.appendChild(el("span", `dot ${item.accent}`));
  const titleText = withUrl && item.url ? el("a") : el("span");
  titleText.textContent = item.title;
  if (withUrl && item.url) {
    titleText.href = item.url;
    titleText.target = "_blank";
    titleText.rel = "noopener";
  }
  title.appendChild(titleText);
  li.appendChild(title);

  const metaParts = [item.org, item.location, item.period].filter(Boolean);
  if (metaParts.length) {
    li.appendChild(el("div", "entry-meta", metaParts.join(" · ")));
  }

  if (item.note) {
    li.appendChild(el("div", "entry-note", item.note));
  }

  return li;
}

function renderList(id, items, opts) {
  const list = document.getElementById(id);
  items.forEach((item) => list.appendChild(renderEntry(item, opts)));
}

function renderSkills() {
  document.getElementById("skillsLine").textContent = SKILLS.join(" · ");
}

function renderFooter() {
  const year = new Date().getFullYear();
  document.getElementById("footerLine").textContent =
    `© ${year} ${PROFILE.name} - all rights quietly reserved`;
}

function renderContactPanel() {
  const panel = document.getElementById("contactPanel");

  panel.appendChild(el("p", "contact-name", `${PROFILE.name}`));
  panel.appendChild(el("p", null, PROFILE.location));

  const emailLink = el("a", null, PROFILE.email);
  emailLink.href = `mailto:${PROFILE.email}`;
  const emailLine = el("p");
  emailLine.appendChild(emailLink);
  panel.appendChild(emailLine);

  if (PROFILE.social && PROFILE.social.length) {
    const links = el("p", "contact-links");
    PROFILE.social.forEach(({ label, url }) => {
      const a = el("a", null, label);
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener";
      links.appendChild(a);
    });
    panel.appendChild(links);
  }

  const mark = document.getElementById("markToggle");
  mark.setAttribute("aria-label", `${PROFILE.name}. — contact`);

  function setOpen(open) {
    panel.hidden = !open;
    mark.setAttribute("aria-expanded", String(open));
  }

  mark.addEventListener("click", () => setOpen(panel.hidden));

  document.addEventListener("click", (e) => {
    if (!panel.hidden && !panel.contains(e.target) && !mark.contains(e.target)) {
      setOpen(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !panel.hidden) setOpen(false);
  });
}

function initScrollProgress() {
  const fill = document.getElementById("progressFill");
  function update() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
    fill.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  }
  window.addEventListener("scroll", update, { passive: true });
  window.addEventListener("resize", update);
  update();
}

function initFadeIn() {
  const targets = document.querySelectorAll(".hero, .block");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  targets.forEach((t) => observer.observe(t));
}

function initTvFlash() {
  const flash = document.querySelector(".tv-flash");
  if (!flash) return;
  flash.addEventListener("animationend", () => flash.remove());
}

renderHero();
renderList("workList", WORK, { withUrl: false });
renderList("projectsList", PROJECTS, { withUrl: true });
renderList("educationList", EDUCATION, { withUrl: false });
renderSkills();
renderFooter();
renderContactPanel();
initScrollProgress();
initFadeIn();
initTvFlash();
