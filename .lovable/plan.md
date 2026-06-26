# Unify Site Look & Feel

**Problem:** Home (`NewLanding`) uses the new light/teal palette (tokens: `ink`, `surface`, `line`, `fog`, `bone`, `brand`), `Inter Tight` display font, JetBrains Mono eyebrows, its own slim `Nav`/`LandingFooter`, and consistent section rhythm. All inner pages (`/portfolio`, `/services`, `/about`, `/contact`, `/blog`, `/blog/:id`, `/resume`) use the OLD `Navbar` + `Footer`, old `navy-*` / `accent-*` colors, `Poppins` headings, blue gradient page headers, and shadcn cards styled for the old palette. Jumping between them feels like two different sites.

## Goal

Every page shares the home page's typography, colors, navigation, footer, section structure, and card style.

## Plan

### 1. Shared chrome (used by every non-home page)

Create two new components extracted from `NewLanding`:

- `src/components/SiteNav.tsx` — same markup as `NewLanding`'s `Nav`, but using `react-router` `Link` for every item (`/`, `/portfolio`, `/services`, `/about`, `/blog`, `/contact`) and highlighting the active route. "Book a call" pill links to `/contact`.
- `src/components/SiteFooter.tsx` — same markup as `NewLanding`'s `LandingFooter`, with the same links/email + LinkedIn.

Update `NewLanding.tsx` to import and use these (replacing its local `Nav`/`LandingFooter`) so home and inner pages stay byte-identical.

Delete usages of the old `Navbar` and `Footer` from every page. (Keep the files for now to avoid churn; remove imports.)

### 2. Page shell pattern

Each inner page wraps content in:

```tsx
<div className="min-h-screen bg-ink text-bone">
  <Helmet>...</Helmet>
  <SiteNav />
  <main className="pt-24">
    <PageHeader eyebrow="…" title="…" subtitle="…" />
    {/* page sections */}
  </main>
  <SiteFooter />
</div>
```

Create `src/components/PageHeader.tsx`: eyebrow (mono teal), `font-display` H1 in `text-bone`, `text-fog` subtitle, `max-w-content` container, generous top/bottom padding, subtle bottom `border-line`. Replaces the current blue gradient banners.

### 3. Restyle inner page content (presentation only, no logic changes)

For each component below, swap old color/typography classes to the landing tokens. No behavior, data, or routing changes.

Class-mapping rules applied everywhere:
- `bg-white` / page bg → `bg-ink`
- `text-navy-900` / `text-navy-800` → `text-bone`, `font-display`
- `text-navy-600` / `text-navy-500` → `text-fog`
- `text-accent` / `text-accent-dark` → `text-brand`
- `bg-accent` → `bg-brand text-ink`
- shadcn `Card` borders → `border border-line bg-surface/50 rounded-xl`
- Headings → `font-display font-semibold tracking-tight`
- Eyebrow labels (small caps section labels) → `eyebrow` class
- Buttons → match landing pill style (`rounded-full bg-brand text-ink` primary, `border border-line text-bone` secondary)
- Badges → muted `border border-line bg-surface text-fog font-mono text-[0.65rem] uppercase`

Files to restyle:
- `src/components/PortfolioSection.tsx` + `src/components/PortfolioCard.tsx` (category badge colors → unified muted/brand variants)
- `src/components/ServicesSection.tsx` + `src/components/ServiceCard.tsx`
- `src/components/BusinessCategoryCard.tsx` (form on ink surface, brand button)
- `src/components/AboutSection.tsx`
- `src/components/ContactSection.tsx`
- `src/components/BlogSection.tsx` + `src/components/BlogPost.tsx` + `src/pages/Blog.tsx` (cards on `bg-surface`, prose styling on light ink bg)
- `src/components/CaseStudyView.tsx`
- `src/pages/Resume.tsx`
- `src/components/TestimonialCard.tsx` (if still used outside landing)

### 4. Page wrappers updated to new shell

- `src/pages/About.tsx`
- `src/pages/Portfolio.tsx`
- `src/pages/Services.tsx`
- `src/pages/Contact.tsx`
- `src/pages/Blog.tsx`
- `src/pages/BlogPostPage.tsx`
- `src/pages/Resume.tsx`
- `src/pages/NotFound.tsx`

Each gets: `bg-ink text-bone` root, `<SiteNav />`, `<PageHeader />`, restyled `<main>`, `<SiteFooter />`. Helmet metadata preserved as-is.

### 5. Global font/baseline

In `src/index.css`, set body default to `bg-ink text-bone font-sans`, and make `h1–h6` default to `font-display`. This guarantees pages without explicit classes still inherit the landing look.

## Out of scope

- No 3D mesh on inner pages (mesh stays exclusive to the home hero, per prior decision).
- No content, copy, route, GA, AudioPlayer, or SEO changes.
- Old `Navbar.tsx` / `Footer.tsx` files remain on disk but unused; can be deleted in a follow-up.

## Verification

After build, spot-check `/`, `/portfolio`, `/services`, `/about`, `/contact`, `/blog`, `/blog/2`, `/resume` via Playwright screenshots to confirm consistent nav, typography, colors, and section rhythm.
