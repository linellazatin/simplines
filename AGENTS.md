# simplines — Repository Guide

## What this is

A minimal, data-driven personal portfolio website built with pure HTML, CSS, and vanilla JavaScript. The design follows a "Quiet Precision" aesthetic — monochrome, typography-focused, and free of theatrical effects. The entire site is static and deployable to any static hosting platform (e.g., Cloudflare Pages, Netlify, Vercel).

## Commands

There are **no build, lint, or typecheck commands**. The site runs directly from the files.

To preview locally:

```bash
# Option 1: Simple static server
npx serve .

# Option 2: Python
python -m http.server 8000
```

Open `http://localhost:8000` (or your chosen port) in a browser.

## Architecture

The site uses a **declarative data architecture**:

- **`content.js`**: The single source of truth for all site text and metadata (intro, about, projects, contact).
- **`main.js`**: A minimal hydration script that reads `content.js` and injects it into the DOM.
- **`style.css`**: Pure CSS with CSS variables for theming. No preprocessor or framework.
- **`index.html`**: A semantic, fixed-width layout with a sticky navigation bar.

**No build pipeline.** All files are self-contained and can be edited independently.

## Configuration and installation

**No installation required.** The repository is ready to deploy as-is.

To customize, simply edit `content.js`:

```javascript
window.content = {
  intro: "Your headline here.",
  about: "Your bio text here.",
  projects: [
    { title: "Project A", description: "Short description", url: "#" },
    // ...
  ],
  contact: {
    email: "you@example.com",
    socials: ["twitter", "github"]
  }
};
```

## Testing and operational quirks

- **ES Modules are not used.** The architecture avoids `type="module"` to ensure compatibility in all preview environments (including `file://` URLs).
- **No external libraries.** The site is entirely self-contained — no CDN calls, no framework dependencies.
- **Smooth scrolling** is enabled via CSS (`scroll-behavior: smooth`), which may be disabled in some browser security modes.
- **Icons** are provided in both SVG and PNG formats under `assets/img/`. The site currently does not embed them; they are available for future use.

## Key files

| File | Purpose |
|------|---------|
| `index.html` | Main HTML document with semantic sections |
| `style.css` | All styling, including dark mode variables |
| `content.js` | Data store for all site content |
| `main.js` | DOM hydration logic |
| `assets/img/svg/` | SVG icons (logo, brand marks) |
| `assets/img/png/` | PNG icons (legacy format) |

## Absences

- No build tool (Webpack, Vite, etc.)
- No linting (ESLint, Stylelint)
- No testing framework (Jest, Cypress)
- No CSS preprocessor (Sass, Less)
- No package manager (npm, yarn, pnpm)

<!-- opl-init:fp 8577c7c16cc31f21 -->
