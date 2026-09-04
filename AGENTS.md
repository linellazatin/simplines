# Repository Guidelines

## Project Structure & Module Organization

This is a static, one-page résumé site. There is no package manifest, build
pipeline, backend, or framework.

- `index.html` is the semantic page shell and loads data before the renderer.
- `scripts/content.js` is the editable source of truth for profile data,
  sections, skills, and résumé records. Use `featured: true` for items shown
  before an archive disclosure.
- `scripts/script.js` hydrates the shell and separates featured and archived
  records. Keep it generic; do not add entry-specific HTML here.
- `style.css` owns the responsive Openlines-derived visual system.
- `assets/img/` contains the logo and supporting SVG/PNG variants.
- `tests/resume-renderer.test.js` is a Node assertion for renderer behavior.

## Build, Test, and Development Commands

No install or build step is required. Preview the root over HTTP:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Run the lightweight checks before handing
off a change:

```sh
node tests/resume-renderer.test.js
node --check scripts/content.js
node --check scripts/script.js
git diff --check
```

## Coding Style & Naming Conventions

Use plain browser JavaScript, semantic HTML, and CSS. Follow the surrounding
two-space indentation in HTML and JavaScript. Use `camelCase` for JavaScript
functions and variables, `UPPER_SNAKE_CASE` for content collections, and
kebab-case for CSS classes and DOM IDs. Prefer native HTML, especially
`<details>` for disclosures, over JavaScript state or dependencies.

Keep all visitor-facing copy and record data in `scripts/content.js`. Add a
new content field only when the renderer can use it for every relevant entry.
Preserve the script order in `index.html`: `content.js` must precede
`script.js`.

## Testing Guidelines

Extend `tests/resume-renderer.test.js` when changing filtering or rendering
logic. Tests use Node's built-in `assert` and should describe one observable
behavior. Check desktop and narrow mobile layouts manually after CSS or shell
changes; source checks do not prove responsive layout.

## Commit & Pull Request Guidelines

Recent history uses concise conventional subjects such as `feat:`, `fix:`,
and `chore:`; version commits use the release number. Keep commits scoped to
one concern. Pull requests should describe the visible change, list the
checks run, and include desktop and mobile screenshots for visual changes.
