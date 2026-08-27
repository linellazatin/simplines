// Edit this file to add/update content. The page renders from these arrays; no HTML edits needed per entry.

const PROFILE = {
  name: "Linel Lazatin",
  nickname: "Lines",
  location: "Philippines",
  email: "me@llazat.in",
  tagline: "Cloud, infra, dev, and a bit of everything in between.",
  social: [
    { label: "GitHub", url: "https://github.com/linellazatin" },
    { label: "openlines", url: "https://openlines.dev" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/linesl" },
  ],
};

const WORK = [
  {
    title: "Cloud Integrations Mgr / Infrastructure Architect",
    org: "GCash",
    location: "PH",
    period: "Aug 2025 - Present",
    note: "Cloud infra, a bit of DevOps, a bit of enablement.",
    accent: "green",
  },
  {
    title: "ODM (Service Reliability Engineer)",
    org: "GCash",
    location: "PH",
    period: "Oct 2022 - Aug 2025",
    note: "Actual SRE, incident management, operations.",
    accent: "yellow",
  },
  {
    title: "Senior Cloud Consultant",
    org: "Genesys",
    location: "PH",
    period: "Jan 2020 - Oct 2022",
    note: "Cloud tech expertise on solution implementations.",
    accent: "orange",
  },
  {
    title: "Senior App Consultant / Shift Lead",
    org: "HPE -> DXC",
    location: "PH",
    period: "Jan 2015 - Jan 2020",
    note: "Incident management and resolutions.",
    accent: "orange",
  },
  {
    title: "Software Engineer",
    org: "Misys PH (Finastra)",
    location: "PH",
    period: "Aug 2013 - Jan 2015",
    note: "Software development using Java, and a bit of RPG (AS400).",
    accent: "orange",
  },
  {
    title: "Senior Web Specialist / Application Developer",
    org: "IBM - Global Process Services",
    location: "PH",
    period: "May 2011 - Aug 2013",
    note: "Web content development and maintenance, plus automations.",
    accent: "orange",
  },
];

const EDUCATION = [
  {
    title: "BS - Information Technology",
    org: "Pamantasan ng Lungsod ng Maynila (PLM)",
    period: "Jun 2007 - Apr 2011",
  },
];

const PROJECTS = [
  {
    title: "nanomneme",
    url: "https://github.com/linellazatin/nanomneme",
    period: "Aug 2026 (new)",
    note: "small, deterministic SQLite memory store for people and agents (FTS5/BM25)",
    accent: "green",
  },
  {
    title: "opl-pi-sht",
    url: "https://github.com/linellazatin/opl-pi-sht",
    period: "Aug 2026",
    note: "openlines pi 'should have that' collection",
    accent: "green",
  },
  {
    title: "openlines-skills",
    url: "https://github.com/linellazatin/openlines-skills",
    period: "Aug 2026",
    note: "Harness-agnostic skills - for the undecided",
    accent: "green",
  },
  {
    title: "openpi-memory",
    url: "https://github.com/linellazatin/openpi-memory",
    period: "Aug 2026",
    note: "Open. Configurable. Global persistent memory for pi - openclaude-memory fork",
    accent: "green",
  },
  {
    title: "openclaude-memory",
    url: "https://github.com/linellazatin/openclaude-memory",
    period: "Jul 2026",
    note: "Open. Configurable. Lightweight persistent markdown memory for opencode sessions",
    accent: "green",
  },
  {
    title: "piper-tts-reader",
    url: "https://github.com/linellazatin/piper-tts-reader",
    period: "Jul 2026",
    note: "For VSCode/Codium - TTS model extension. Local-first. Offline. Minimal. Developer-focused",
    accent: "yellow",
  }
];

const SKILLS = [
  "DevOps", "Cloud Services", "Software Development", "Solutions Design", "Infrastructure Architecture",
  "Consultancy", "IT Service Management", "System Administration",
];

const ADDITIONAL_CONTENT = [
  {
    id: "more-project",
    text: "more",
    section: "projects",
    url: "https://github.com/linellazatin",
  },
  // {
  //   id: "more-work",
  //   text: "more",
  //   section: "work",
  //   url: "",
  // },
];

// Current role is derived from the first WORK entry so the two never drift.
PROFILE.role = WORK[0]?.title || "";
