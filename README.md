# simplines — camalyn-style personal site template

A static, data-driven personal site. Design language is carried over from
[camalyn.org](https://www.camalyn.org): pure black `#000` background, pale
cream `#ffffe0` text, Cormorant Garamond (serif, statements) + IBM Plex Sans
(sans, everything else), no filled cards, no shadows, no loud color — quiet
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
- Black/cream palette, serif+sans pairing, generous negative space
- The brief white "startup flash" on load
- A quiet top-right monogram that opens a contact panel (bottom-left, barely-tinted, plain text — no card/shadow)
- No buttons, badges, or filled backgrounds anywhere in the content

## What was adapted, and why
camalyn.org is a single-sentence slideshow; a resume needs to be scannable,
so this template keeps one calm hero statement (from `PROFILE.tagline`) and
then flows into plain, hairline-divided sections instead of an auto-cycling
carousel. The top-left rail is a **real** scroll-progress indicator (not a
decorative slide-position slider) — it does exactly what it visually implies.

## Deploy on Cloudflare Pages
No build step. Point Cloudflare Pages at this directory:
- Framework preset: **None**
- Build command: *(leave blank)*
- Build output directory: `/`

Or via Wrangler:
```
npx wrangler pages deploy . --project-name=<your-project>
```
