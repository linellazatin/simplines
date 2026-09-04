# simplines

A static, data-driven one-page CV for Linel Lazatin. It presents selected
work, personal projects, and education, with the full project catalogue at
[openlines.dev](https://openlines.dev). Simplines is no longer maintained as a
template or as an adaptation of another site; its current basis is the
Openlines-inspired résumé record design.

## Architecture

The site deploys directly to Cloudflare Pages. It uses semantic HTML, CSS,
and browser JavaScript only: no build step, framework, backend, or package
manager.

- `index.html` provides the header, CV hero, and native `<details>` disclosure
  shells.
- `scripts/content.js` is the single source of editable profile, section,
  skills, work, project, and education data.
- `scripts/script.js` renders configured records, separating `featured: true`
  entries from archived entries without owning disclosure state.
- `style.css` defines the dark, hairline-led responsive record layout.
- `assets/img/` stores the logo and SVG/PNG variants.
- `tests/resume-renderer.test.js` verifies the featured/archive split.

## Editing content

Edit `scripts/content.js`; entry-level changes should not require HTML or
renderer edits. Set `featured: true` for items visible when a section opens.
Section titles, archive labels, and the Openlines project link are configured
in `SECTIONS`. Keep `content.js` loaded before `script.js` in `index.html`.

## Preview and checks

Serve the repository root with a static server:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`. Before publishing, run:

```sh
node tests/resume-renderer.test.js
node --check scripts/content.js
node --check scripts/script.js
git diff --check
```

Check a desktop and narrow mobile viewport manually. Static checks do not
prove responsive layout.

## How it came to be
I was just testing how my small, local LLMs would analyze, and code with the given task of:
```text
analyze reference site: https://anysite.page
let us create a template based from the reference site - html + css. keep the design language intact.
```
Out of the different small LLMs I can host (via [llama.cpp](https://github.com/ggml-org/llama.cpp)):
- Qwen3.5 9B MTP (UD-Q5_K_XL : ctx: 143360)
- Ornith1.5 9B MTP (Q6_K : ctx: 163840)
- Gemma4 e4B MTP IT (Q8_0 : ctx: 131072)
- Gemma4 12B MTP IT QAT (UD-Q4_K_XL : ctx: 184320)
- IBM Granite4.1 8B (UD-Q4_K_XL : ctx: 102400)
- Nemotron3 Nano 4B (UD-Q8_K_XL : ctx: 256000)
- Ministral3 Instruct 8B 2512 (UD-Q4_K_XL : ctx: 131072)

I was able to get `relatively good` results from both Qwen3.5 & Ornith1.5 - others either 'imagined' what the referenced site looked like, or hallucinated files inside cwd. Some did good use of tools, others did not. I used [pi coding agent](https://pi.dev) for all of these. Combined both results, to arrive with the current state.

This is basically just a test, but went through with it and used it anyways.

## Deploy on Cloudflare Pages

No build step. Point Cloudflare Pages at this directory:
- Framework preset: **None**
- Build command: *(leave blank)*
- Build output directory: `/`

Or via Wrangler:
```
npx wrangler pages deploy . --project-name=<your-project>
```
