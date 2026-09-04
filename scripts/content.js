// Edit this file to update the resume. The page shell and renderer need no per-entry edits.

const PROFILE = {
  name: "Linel Lazatin", nickname: "Lines", role: "Technical Architect", location: "Philippines",
  summary: "Cloud infrastructure, systems reliability, and developer tools built to stay understandable.", openlinesUrl: "https://openlines.dev",
  social: [
    { label: "email", url: "mailto:me@llazat.in" }, { label: "linkedin", url: "https://www.linkedin.com/in/linesl" }, { label: "github", url: "https://github.com/linellazatin" },
  ],
};

const SECTIONS = {
  work: { title: "Work", moreLabel: "show full work history" },
  projects: { title: "Personal projects", moreLabel: "show more selected projects", link: { label: "all projects on openlines.dev", url: PROFILE.openlinesUrl } },
  education: { title: "Education", moreLabel: "show all education" },
};

const WORK = [
  { title: "Cloud Integrations Manager / Technical Architect", org: "GCash", location: "PH", period: "Aug 2025 - Present", note: "Cloud infrastructure, enablement, and pragmatic systems design.", featured: true },
  { title: "ODM (Service Reliability Engineer)", org: "GCash", location: "PH", period: "Oct 2022 - Aug 2025", note: "Service reliability, incident management, and operations.", featured: false },
  { title: "Senior Cloud Consultant", org: "Genesys", location: "PH", period: "Jan 2020 - Oct 2022", note: "Cloud solution implementation and technical consultancy.", featured: false },
  { title: "Senior App Consultant / Shift Lead", org: "HPE -> DXC", location: "PH", period: "Jan 2015 - Jan 2020", note: "Incident management and application operations.", featured: false },
  { title: "Software Engineer", org: "Misys PH (Finastra)", location: "PH", period: "Aug 2013 - Jan 2015", note: "Java development with AS400/RPG systems.", featured: false },
  { title: "Senior Web Specialist / Application Developer", org: "IBM - Global Process Services", location: "PH", period: "May 2011 - Aug 2013", note: "Web operations, maintenance, and automation.", featured: false },
];

const PROJECTS = [
  { title: "nanomneme", url: "https://github.com/linellazatin/nanomneme", note: "Deterministic, local-first memory for people and agents.", tags: ["sqlite", "memory", "cli"], featured: true },
  { title: "eurysx", url: "https://github.com/linellazatin/eurysx", note: "Local-first usage observability for coding agents.", tags: ["agents", "observability", "cli"], featured: true },
  { title: "opl-pi-sht (ShouldHaveThat)", url: "https://github.com/linellazatin/opl-pi-sht", note: "Practical extensions for Pi coding-agent workflows.", tags: ["pi", "agent-tools", "extensions"], featured: true },
];

const EDUCATION = [{ title: "BS Information Technology", org: "Pamantasan ng Lungsod ng Maynila (PLM)", period: "Jun 2007 - Apr 2011", featured: true }];
const SKILLS = ["Cloud services", "Infrastructure architecture", "DevOps", "Software development", "Service management"];
