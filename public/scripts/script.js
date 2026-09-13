// Renders the configurable resume data. Native <details> owns disclosure state.

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text != null) node.textContent = text;
  return node;
}

function partitionItems(items) {
  return [items.filter((item) => item.featured), items.filter((item) => !item.featured)];
}

function renderProfile() {
  document.title = `${PROFILE.nickname} | ${PROFILE.role}`;
  document.getElementById("brandName").textContent = PROFILE.nickname;
  document.getElementById("heroTitle").textContent = PROFILE.role;
  document.getElementById("heroSummary").textContent = PROFILE.summary;
  document.getElementById("profileMeta").textContent = PROFILE.location;
  document.getElementById("skillsLine").textContent = SKILLS.join(" / ");
  document.getElementById("footerName").textContent = PROFILE.name;
  document.getElementById("footerYear").textContent = `© ${new Date().getFullYear()}`;
  const nav = document.getElementById("siteNav");
  PROFILE.social.forEach(({ label, url }) => {
    const link = el("a", null, label);
    link.href = url;
    if (!url.startsWith("mailto:")) { link.target = "_blank"; link.rel = "noopener"; }
    nav.appendChild(link);
  });
}

function renderEntry(item) {
  const entry = el("li", "record");
  const title = item.url ? el("a", "record-title", item.title) : el("h3", "record-title", item.title);
  if (item.url) { title.href = item.url; title.target = "_blank"; title.rel = "noopener"; }
  entry.appendChild(title);
  entry.appendChild(el("p", "record-note", item.note || item.org));
  const aside = el("div", "record-aside");
  const meta = [item.org, item.location, item.period].filter(Boolean).join(" · ");
  if (meta) aside.appendChild(el("p", "record-meta", meta));
  if (item.tags?.length) {
    const tags = el("ul", "tags");
    item.tags.forEach((tag) => tags.appendChild(el("li", null, tag)));
    aside.appendChild(tags);
  }
  entry.appendChild(aside);
  return entry;
}

function renderSection(name, items) {
  const config = SECTIONS[name];
  document.getElementById(`${name}-title`).textContent = config.title;
  document.getElementById(`${name}-summary`).textContent = config.moreLabel;
  const [featured, archive] = partitionItems(items);
  featured.forEach((item) => document.getElementById(`featured-${name}`).appendChild(renderEntry(item)));
  archive.forEach((item) => document.getElementById(`more-${name}`).appendChild(renderEntry(item)));
  document.getElementById(`${name}-disclosure`).hidden = archive.length === 0;
  if (config.link) {
    const link = document.getElementById(`${name}-link`);
    link.textContent = config.link.label;
    link.href = config.link.url;
    link.target = "_blank";
    link.rel = "noopener";
    link.hidden = false;
  }
}

renderProfile();
renderSection("work", WORK);
renderSection("projects", PROJECTS);
renderSection("education", EDUCATION);
