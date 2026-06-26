## Goal
Keep the teal 3D wireframe hero (Hero3D) as the visual centerpiece, but revert the rest of the site back to the earlier light, SMB-friendly palette and styling.

## Approach

### 1. Restore light theme tokens
- Revert `src/index.css` `:root` tokens to the earlier light palette (warm off-white background, dark foreground, the original primary/accent colors used before the dark refresh).
- Remove the dark-mode-as-default overrides that came in with the GauravGodambe repo import.
- Keep one teal accent token (matching the Hero3D mesh color) so the hero feels intentional rather than disconnected from the rest of the page.

### 2. Hero section — hybrid treatment
- Keep `Hero3D.tsx` (3D wireframe + Three.js) exactly as is for the canvas.
- Place it inside a hero container that uses the light theme: light background fading into the 3D canvas, dark text on light surfaces below.
- Make sure the hero's headline, sub-copy, and CTAs read on the light palette (no more white-on-black).

### 3. Revert all other sections to light styling
On `src/pages/NewLanding.tsx` (the current landing) bring back the earlier look for:
- About (with LinkedIn photo)
- Services grid + GMB Category Finder card
- Portfolio (incl. Client Coverage case study + AI-Driven RFP)
- Testimonials (Jason Chan, Vivek Agarwalla, Sean Kim) — light cards with subtle shadow
- Contact (both emails)
- Footer
- Navbar — light background, dark text, teal hover/active accent

No content changes — only background, surface, text, border, and accent classes swap from dark tokens to light tokens.

### 4. Preserve everything else
- Routes: `/`, `/blog`, `/blog/:id`, `/portfolio/case-study/:caseStudyId`
- AudioPlayer (intro music), Google Analytics (G-MYS751LLBH), favicon (GG)
- Blog page + n8n "Stay Connected" link
- SEO meta/keywords already in `index.html` and pages

### 5. Verify
- Visual check of `/` (hero teal + light rest), `/blog`, and a case study page via Playwright screenshots at desktop + mobile widths.
- Console clean, no theme-token regressions.

## Technical notes
- Tailwind tokens stay semantic (`bg-background`, `text-foreground`, `border-border`, `bg-card`, `text-primary`) — only the HSL values in `index.css` change.
- `Hero3D.tsx` itself is untouched; only its wrapping section's surrounding layout/colors adapt.
- No new dependencies. No backend changes.
