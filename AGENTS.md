# simplines Repository Guide

## What this is

`simplines` is a one-page, data-driven résumé for Linel Lazatin. It is a pure static site built with semantic HTML, CSS, and browser JavaScript. There is no framework, backend, package manager, build pipeline, lint command, or typecheck command.

## Commands

Preview the visitor-served site locally:

```sh
python3 -m http.server 8000 --directory public
```

Run repository checks from the repository root:

```sh
node tests/resume-renderer.test.js
node --check public/scripts/content.js
node --check public/scripts/script.js
git diff --check
```

The test uses Node built-ins and needs no installation. For visual changes, manually inspect desktop and narrow mobile layouts in a browser.

## Architecture

- `public/index.html` is the public page shell. It owns metadata, landmarks, and native `<details>` disclosure structure.
- `public/scripts/content.js` is the editable source of truth for profile data, social links, sections, skills, work, projects, and education.
- `public/scripts/script.js` hydrates the shell and renders records. It separates `featured: true` records from archived records and should remain entry-agnostic.
- `public/styles/style.css` contains the responsive visual system.
- `public/assets/img/` contains the logo and image variants.
- `public/robots.txt` and `public/llms.txt` define the public crawler and AI-readable surface.

Keep `content.js` loaded before `script.js` in `public/index.html`. Content-only edits normally belong in `content.js`; use `featured: true` for records shown before an archive disclosure. Do not move disclosure state into the renderer.

## Configuration and deployment

Deploy `public/` directly with Cloudflare Pages. Use framework preset **None**, leave the build command and root directory blank, and set build output directory to `public`.

Equivalent Wrangler command:

```sh
npx wrangler pages deploy public --project-name=<your-project>
```

Only `public/` is visitor-served. Keep repository documentation, tests, and root configuration files outside that directory.

## Testing and operational quirks

`tests/resume-renderer.test.js` extracts and tests the pure `partitionItems` behavior because the renderer depends on browser DOM APIs. Passing static checks therefore does not prove rendering or responsive behavior. Keep externally rendered links and public profile data intentional.

## Key files

- `public/index.html`: public entry point
- `public/scripts/content.js`: content source of truth
- `public/scripts/script.js`: renderer
- `public/styles/style.css`: layout and styling
- `tests/resume-renderer.test.js`: Node assertion coverage
- `docs/superpowers/`: historical design and implementation documents
<!-- opl-init:fp b26aa1c3f774a24c -->
