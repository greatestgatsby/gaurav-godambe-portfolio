# Add Testimonials section back to home

Bring the 3 testimonials from the original site into the new dark-themed landing page (`src/pages/NewLanding.tsx`), placed between **About** and **CTA**.

## What to do

1. In `src/pages/NewLanding.tsx`, add a `testimonials` array with the same 3 quotes/authors/positions/avatars used in the original (`Jason Chan, CFA` — MSCI, `Vivek Agarwalla, CFA` — MSCI, `Sean Kim` — MSCI), reusing the existing `/lovable-uploads/...` avatar paths.
2. Add a new `Testimonials()` section component styled to match the new landing page's dark aesthetic (eyebrow + heading, cards on `bg-surface/40` with `border-line`, rounded avatar, brand-colored accents, fadeUp motion).
3. Render `<Testimonials />` between `<About />` and `<CTA />` in the main layout.

No changes to the original `AboutSection.tsx` or `TestimonialCard.tsx` — those remain available for the `/about` route.
