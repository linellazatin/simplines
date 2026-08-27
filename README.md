# simplines — camalyn-style personal site template

A static, data-driven personal site. Design language is carried over from
[camalyn.org](https://www.camalyn.org): pure black `#000` background, pale
cream `#ffffe0` text, Inter throughout, no filled cards, no shadows, no loud
color — quiet
typography and generous whitespace do the work.

## Files
- `index.html` — structure only, all text comes from `content.js`
- `style.css` — all styling
- `scripts/script.js` — renders the page from `content.js`; nothing here needs editing to reuse the template
- `scripts/content.js` — **the only file you edit** to reuse this for someone else

## Reuse for a new person
Edit `content.js` — `PROFILE`, `WORK`, `EDUCATION`, `PROJECTS`, `SKILLS`.
No HTML/CSS/JS changes needed per entry. The page monogram (top-right) and
`<title>` are derived automatically from `PROFILE.name`.

## What was preserved from camalyn.org
- Black/cream palette, single-family Inter typography, generous negative space
- The brief white "startup flash" on load
- A quiet top-right monogram that opens a contact panel (bottom-left, barely-tinted, plain text — no card/shadow)
- No buttons, badges, or filled backgrounds anywhere in the content

## What was adapted, and why
camalyn.org is a single-sentence slideshow; a resume needs to be scannable,
so this template keeps one calm hero statement (from `PROFILE.tagline`) and
then flows into plain, hairline-divided sections instead of an auto-cycling
carousel. The top-left rail is a **real** scroll-progress indicator (not a
decorative slide-position slider) — it does exactly what it visually implies.

## How it came to be
I was just testing how my small, local LLMs would analyze, and code with the given task of:
```text
analyze reference site: https://www.camalyn.org/
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
