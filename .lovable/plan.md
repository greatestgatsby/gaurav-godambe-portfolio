
## What's in the repo

The public repo `greatestgatsby/GauravGodambe` is a small, standalone single-page app — very different from your current multi-page portfolio. It contains:

- `index.html`, `package.json`, Tailwind/Vite/TS configs
- `src/main.tsx`, `src/index.css`
- `src/App.tsx` — one file with Nav, Hero, Work, Services, About, Contact sections, using `framer-motion` + `lenis` (smooth scroll)
- `src/components/Hero3D.tsx` — animated 3D hero (likely `@react-three/fiber` / `three`)

It does **not** contain: your Blog system, Portfolio case studies, Services cards with the GMB Category Finder, AudioPlayer, Navbar/Footer components, Resume page, etc. So a full overwrite would delete most of the current site.

## Plan

1. **Pull the repo files** via `raw.githubusercontent.com` and stage them:
   - `src/App.tsx` → `src/pages/NewLanding.tsx` (renamed to avoid clobbering the router)
   - `src/components/Hero3D.tsx` → `src/components/Hero3D.tsx` (new file)
   - Merge repo's `src/index.css` additions into the existing `src/index.css` (keep your shadcn tokens and slider styles)

2. **Install new deps** the repo needs: `framer-motion`, `lenis`, `three`, `@react-three/fiber`, `@react-three/drei` (whichever Hero3D imports — confirmed after fetching the file).

3. **Wire the new landing as the homepage**:
   - Replace the contents of `src/pages/Index.tsx` so `/` renders `NewLanding`.
   - Keep all existing routes intact: `/portfolio`, `/portfolio/case-study/:id`, `/blog`, `/blog/:id`, `/about`, `/services`, `/contact`.

4. **Preserve recent additions** on the new landing:
   - Mount `<AudioPlayer />` (intro music) on the page.
   - Leave Google Analytics (`G-MYS751LLBH`) and the GG favicon in `index.html` untouched — do not overwrite `index.html` from the repo.
   - Keep `ContactSection`'s alternate email `gauravg8316@gmail.com` and the "Stay Connected" link on `/blog`.
   - Keep the Resume removal and "Hire Me" removal already done.

5. **Navigation**: the repo's Nav is inline in `App.tsx` and uses anchor links (`#work`, `#about`, etc.). I'll adapt the in-page anchors to scroll within the new landing, and add a top-right link to your existing `/blog` and `/portfolio` pages so nothing gets orphaned.

6. **Booking link / email constants** in the repo are placeholders (`#book`, `hello@gauravgodambe.com`). I'll swap them for your real contact details from `ContactSection.tsx`.

7. **Smoke test**: load `/`, confirm Hero3D renders, smooth-scroll works, AudioPlayer appears, and `/blog`, `/portfolio`, `/services`, `/contact`, `/about` all still load.

## What this does NOT change

- Existing pages (`/blog`, `/portfolio`, `/services`, `/about`, `/contact`) stay exactly as they are.
- `index.html` (favicon, GA tag, preloads) stays as-is.
- No changes to `BlogPost`, `CaseStudyView`, `BusinessCategoryCard`, etc.

## Open question

The repo's homepage has its own "Work", "Services", "About", "Contact" sections inline. After the refresh you'd effectively have two versions of those (the new landing's inline sections + your existing dedicated pages). Two options:

- **A.** Keep both — landing shows the new inline marketing sections, and the Navbar still links to the full `/services`, `/portfolio`, etc. pages for deeper content.
- **B.** Strip the inline sections from the new landing so only the Hero3D + a short intro remain, and let users click through to your existing pages.

I'll go with **A** unless you tell me otherwise after seeing it.
