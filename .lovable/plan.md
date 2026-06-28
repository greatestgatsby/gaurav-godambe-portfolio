## Selected Engagements — restructure `/portfolio`

Restructure the Portfolio page into a consulting-firm style "Selected Engagements" layout. Two new long-form case studies sit at the top; the existing portfolio items are folded in below as additional engagements in the same visual language.

### Page structure (`/portfolio`)

```text
SiteNav
PageHeader
  eyebrow:  "Selected Work"
  title:    "Selected Engagements"
  subtitle: "Real business problems. Practical AI. Measurable outcomes."

Intro paragraph
  "Over the past few years I've worked at the intersection of finance,
   strategy, automation and AI. Below are examples of projects where
   technology created tangible business value."

── Case Study 01 ──  (long-form, full content from user)
  Digital Transformation for a Leading Family Lawyer
  Industry / Challenge / Solution / Business Impact / Technology

── Case Study 02 ──  (long-form, full content from user)
  Workflow Automation for Chartered Accountant Firm
  Industry / Challenge / Solution / Business Impact / Technology

── Additional Engagements ──
  Existing portfolio items (MSCI Profitability, Coverage Dashboard,
  AI-Driven RFP, KPI Dashboards, Expense Tracker, Finance Transformation,
  Sales Analytics, Healthcare Records, Premium Pack site) rendered in the
  same Engagement layout — compressed (one row per item: index, title,
  industry/category, one-line summary, impact stat, tech chips, optional
  "View case study" link for MSCI + Coverage Dashboard).

SiteFooter
```

### New component: `SelectedEngagement`

`src/components/SelectedEngagement.tsx` — long-form engagement block:

- Two-column grid on md+ (label column left, content column right), single column on mobile.
- Numbered eyebrow ("Case Study 01") in mono teal `text-brand`.
- `font-display` H2 title, large.
- Sub-sections rendered as labeled blocks: **Industry**, **Challenge**, **Solution**, **Business Impact**, **Technology**.
- Challenge / Solution / Impact accept arrays → rendered as check-marked lists (Lucide `Check` for solution/impact, `Minus` for challenge bullets) using `text-brand` icons.
- Technology rendered as inline pill chips: `border border-line bg-surface text-fog font-mono text-[0.65rem] uppercase`.
- Separator: hairline `border-line` between engagements, generous `py-16 md:py-24` rhythm.

Props:

```ts
type Engagement = {
  index: string;            // "01", "02", ...
  title: string;
  industry: string;
  challenge: string[];      // bullet list (lead sentence becomes first item)
  challengeLead?: string;   // optional intro paragraph above the bullets
  solution: string[];
  solutionLead?: string;
  impact: string[];
  technology: string[];
  href?: string;            // optional link to a deeper case study page
};
```

### New component: `EngagementRow` (compact)

For the "Additional Engagements" section — same visual language but one-row dense:

- Index, title (font-display), industry tag, one-line summary, impact stat, tech chips, optional arrow link.
- Hover state lifts subtly; uses `border-line` dividers, no card shadows.

### Data

`src/data/engagements.ts` — exports `featuredEngagements` (the two new long-form ones, full text from the user message verbatim) and `additionalEngagements` (mapped from the existing `projects` array currently inline in `PortfolioSection.tsx`, including the two case-study links to `msci` and `coverage-dashboard`).

### `PortfolioSection.tsx` changes

- When `fullPage` is true: render the new Selected Engagements layout (intro + `featuredEngagements.map(SelectedEngagement)` + Additional Engagements heading + `additionalEngagements.map(EngagementRow)`).
- When `fullPage` is false (home page "My Work" section): keep current 3-card grid unchanged.
- Case-study routing (`showCaseStudy` → `CaseStudyView`) preserved unchanged.
- Category filter chips removed from the full page (they don't fit the consulting-firm aesthetic).

### `Portfolio.tsx` changes

- Update `PageHeader` to `eyebrow="Selected Work"`, `title="Selected Engagements"`, `subtitle="Real business problems. Practical AI. Measurable outcomes."`

### Styling

Reuses existing tokens — `ink`, `surface`, `line`, `fog`, `bone`, `brand`, `font-display`, `font-mono`, `eyebrow`. No new fonts, no new colors, no new dependencies. Animations: existing `framer-motion` fade-in pattern from `PageHeader`, staggered per engagement.

### Out of scope

- Home page `/` portfolio preview (unchanged).
- Existing `CaseStudyView` deep-dive pages for MSCI / Coverage Dashboard (still reachable via `?` links on those rows).
- No copy edits to existing portfolio items beyond mapping into the new row format.
- No nav changes.

### Verification

Playwright screenshot of `/portfolio` (desktop + mobile widths) to confirm layout, typography, and that existing case-study links still route correctly.