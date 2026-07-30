# Design Handoff — Tanishq Somani Portfolio

Context for a design pass. Read this first, then the files listed under **Feed these**.

## What this is

A Next.js 14 App Router portfolio, deployed on Vercel. Single-page marketing site
(`/`) plus one detail page per project (`/projects/[slug]`). Static, no CMS, no
database. Content lives in typed TS objects, not markup.

**Audience:** recruiters and hiring engineers, skimming. The site's job is to make
someone believe this person ships real things, fast, in under 30 seconds.

**Positioning:** Full-Stack Engineer · AI Systems · Forward Deployed Engineer.

## Current design language

- **Theme:** dark only. Near-black `#0a0a0a` background, `#ededed` text.
- **Accent:** teal→cyan gradient (`from-teal-400 to-cyan-400`) on every heading.
  Purple appears as a secondary accent in ambient effects.
- **Surfaces:** `bg-white/5` + `border-white/10` + `rounded-xl`, "glass card" style.
  This is used for essentially every container on the site.
- **Type:** Inter (via `next/font`), with Fira Code for `code` and `.font-mono`.
- **Motif:** space/starfield. A fixed `<Starfield />` canvas sits behind everything;
  sections layer a grid pattern and blurred "nebula" gradient blobs on top.
- **Section headers:** numbered `01.` … `05.` in mono teal, then a gradient heading,
  then a hairline rule that fades to transparent.
- **Motion:** near-universal `mounted` state → `opacity-0 translate-y-4` to
  `opacity-100 translate-y-0`, staggered with `delay-200`…`delay-900`.
- **Deliberate quirk:** cards and headings are rotated by fractional degrees
  (`rotate(-0.15deg)`, `translateY(0.4px)`) from fixed per-index arrays, to make the
  layout feel hand-placed rather than mechanical. Keep or kill this intentionally —
  it reads as a bug if you only see one instance.

## Known problems worth fixing

1. **Sameness.** Almost every surface is the same `bg-white/5` glass card. There's
   little visual hierarchy between a skill chip, a project card, and a metric tile.
2. **The homepage never shows a project image.** Project cards are text-only —
   title, description, tags, buttons. Logos were just added to the data layer
   (`logo` field) and only appear in a small tile in the card header.
3. **Emoji as iconography.** `thumbnail` (🧠, 🏋️, 🩺, 🦀) exists on every project
   but **is never rendered anywhere**. Skill categories use emoji icons inline.
4. **Dark-only.** No light mode, no `prefers-color-scheme` handling.
5. **Accessibility unaudited.** Project cards are `<div onClick>` with nested links.
   Contrast on `text-gray-500` over near-black is likely below AA.
6. **Long detail pages.** `/projects/[slug]` is a single deep column: overview,
   demo, technologies, challenges, metrics, gallery, results. No sticky nav, no
   in-page anchors, no way to skim.
7. **Two project-detail sections are hardcoded per-slug** in `ProjectDetail.tsx`
   (a prompt list for the password project, a controls diagram for the game).
   Anything general should move into the data model.

## Feed these

### Tier 1 — required
| File | Why |
|---|---|
| `app/globals.css` | Design tokens, global animations, scrollbar |
| `tailwind.config.ts` | Currently near-empty — the place to define a real scale |
| `app/layout.tsx` | Fonts, metadata, root shell |
| `app/page.tsx` | Homepage section order |
| `components/Hero.tsx` | Above the fold; typed animation |
| `components/Navigation.tsx` | Nav + mobile menu |
| `components/FeaturedProjects.tsx` | Project card grid — highest-value surface |
| `components/TechnicalSkills.tsx` | Skills grid, 11 cards |
| `components/AboutMe.tsx` | Long-form prose + stat tiles |
| `components/Contact.tsx` | Final CTA |
| `data/profile.ts` | Headline copy, single source of truth |
| `data/projects.ts` | The content model everything renders from |

### Tier 2 — project detail pages
| File | Why |
|---|---|
| `app/projects/[slug]/page.tsx` | Detail route shell + back button |
| `components/ProjectDetail.tsx` | The whole detail layout |
| `components/MetricsDisplay.tsx` | Metric tiles |
| `components/ImageGallery.tsx` | Gallery + lightbox |
| `components/GraphsSection.tsx` | Graph figures |
| `components/EmbeddedProject.tsx` | Live iframe embeds |

### Tier 3 — ambient visuals (only if reworking the space motif)
`components/Starfield.tsx` — a fixed full-viewport canvas behind the whole page.
This is the only ambient visual left; four unused planet components were deleted.

### Do NOT feed
`components/IPNAgenda.tsx` + `app/ipn-agenda/` + `app/api/ipn-agenda/` — a working
route, but an unrelated internal tool that isn't part of the portfolio surface.

Everything else in `components/` is live and in use. The repo previously carried 16
unreachable files (9 alternate theme heroes, a theme provider and switcher, an
unused pipeline visualiser, and 4 planet components); they have been deleted, so
what remains is what actually renders.

### Unused fields in the data model — design opportunities
These exist on `Project` and hold real content, but **nothing renders them**:

- `thumbnail` — an emoji per project (🏋️ 🩺 🦀 🏊 🧠 📈 📊 🔐 ⚽ 📅). Set on all ten.
- `demoVideo` — a Google Drive walkthrough on the password-security project.
- `graphs` — a supported `ProjectGraph[]` figure section, wired up but never populated.

If a design wants per-project iconography or a video block, the content is already
there and just needs a surface.

## Constraints

- Tailwind utility classes only — no CSS modules, no styled-components.
- Keep `data/projects.ts` and `data/profile.ts` as the content source. If a design
  needs new content (a hero image, a short tagline per project), **add a field to
  the `Project` interface** rather than hardcoding it into a component.
- Components using hooks need `"use client"`. `app/page.tsx` lazy-loads
  below-the-fold sections via `next/dynamic` — preserve that.
- Images go through `next/image`. Remote hosts need `next.config.js` entries.
- Respect the existing `prefers-reduced-motion` block in `globals.css`.
