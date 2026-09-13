# simplines Repository Guide

## What this is

`simplines` is a one-page, data-driven résumé for Linel Lazatin. It is a pure
static site with semantic HTML, CSS, and browser JavaScript. There is no
framework, package manifest, backend, build pipeline, lint command, or typecheck
command.

## Commands

Preview the deployed surface locally:

```sh
python3 -m http.server 8000 --directory public
```

Run the repository checks from the repository root:

```sh
node tests/resume-renderer.test.js
node --check public/scripts/content.js
node --check public/scripts/script.js
git diff --check
```

The test uses Node built-ins and does not require installation. For visual
changes, inspect both desktop and narrow mobile layouts in a browser.

## Architecture

- `public/index.html` is the page shell, metadata surface, landmarks, and
  native `<details>` disclosure structure.
- `public/scripts/content.js` owns editable profile, social links, sections,
  skills, work, projects, and education data.
- `public/scripts/script.js` hydrates the shell and renders records. It splits
  `featured: true` records from archived records and must remain entry-agnostic.
- `public/styles/style.css` owns the responsive visual system.
- `public/assets/img/` contains logo and image variants.
- `public/robots.txt` and `public/llms.txt` describe the public crawler and
  AI-readable surface.

`content.js` must load before `script.js` in `public/index.html`. Content edits
should normally require changes only to `content.js`; use `featured: true` for
records shown before an archive disclosure.

## Configuration and deployment

Deploy `public/` directly with Cloudflare Pages. Use framework preset **None**,
leave the build command blank, set build output directory to `public`, and
leave the root directory blank. Wrangler equivalent:

```sh
npx wrangler pages deploy public --project-name=<your-project>
```

Only `public/` is visitor-served. Repository files such as `.gitignore`, tests,
docs, and `README.md` must remain outside that directory.

## Testing and operational quirks

The renderer depends on browser DOM APIs and is not executed by the Node test;
the test extracts and checks the pure `partitionItems` behavior. Static checks
therefore do not prove rendering or responsive behavior. Keep external links
and public profile data intentional because they are rendered directly.

## Key files

- `public/index.html`: public entry point
- `public/scripts/content.js`: content source of truth
- `public/scripts/script.js`: renderer
- `public/styles/style.css`: layout and styling
- `tests/resume-renderer.test.js`: Node assertion coverage
- `docs/superpowers/`: historical design and implementation documents

<!-- opl-init:fp c22dae44b1f68364 -->