# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start development server
npm run build        # Production build
npm run lint         # ESLint validation
npm run optimize-images    # Convert/optimize images to WebP via Sharp
npm run generate-thumbnails  # Generate PDF thumbnails
```

## Architecture

**Next.js 15 App Router** portfolio site using React 19, TypeScript, Tailwind CSS 4, and Framer Motion.

### Data Layer

`src/data/work.ts` is the single source of truth for all portfolio items. It exports `workItems[]` (all items), `getFeaturedItems()`, `getItemsByCategory()`, `getItemsBySubcategory()`, and label maps. All work items have `category` (`creative` | `communications`) and `subcategory` (`photography` | `graphic-design` | `animations` | `moving-lens` | `planning-strategy` | `knowledge-resources`).

`src/data/photography.ts` — legacy, no longer used by pages.

### Routing

- `/` — Homepage: Hero → Capabilities ("What I Do") → WorkCarousel → CallToAction
- `/work` — Two-tab page (Creative Work / Communications & Brand Work) with subcategory filters. PDFs open in new tab, photos open in Lightbox, videos play inline.
- `/work/[slug]` — Redirects to `/work`
- `/about` — About Me page with bio, skills, tools, focus areas
- `/contact` — Contact with real email/LinkedIn/location
- `/photography` — Redirects to `/work`

### Work Files (Static Assets)

Work files from `portfolio-new/` are symlinked into `public/work/`:
- `public/work/photography` → DSC*.jpg photos
- `public/work/graphic-design` → Publication PDFs
- `public/work/animations` → MP4 logo animations
- `public/work/moving-lens` → Documentary films
- `public/work/planning-strategy` → Strategy PDFs
- `public/work/knowledge-resources` → Knowledge resource PDFs

Hero image: `public/images/hero/hero-main.jpg`. Profile photo: `public/images/sadia-karim.jpg`.

### Components

All reusable UI lives in `src/components/`. Key ones:
- `Navigation.tsx` — `"use client"`, sticky with scroll detection, mobile hamburger via Framer Motion
- `ScrollReveal.tsx` — Wraps content in scroll-triggered fade-in animations (Framer Motion)
- `Hero.tsx` — `"use client"`, Ken Burns zoom animation on hero image
- `WorkCarousel.tsx` — Horizontal scrolling carousel of featured work items (homepage)
- `Lightbox.tsx` — Image modal overlay, accepts `{ src, alt }[]`

### Styling

Design system defined in `src/app/globals.css`:
- **Colors**: cream `#faf8f5` bg, brown `#4a3f35` body, dark brown `#2d241c` headings, terracotta `#c45a3c` accent
- **Typography**: Playfair Display (serif headings) + Inter (sans body), fluid scale via `clamp()`
- **Container**: `.editorial-container` class (max-width 1400px, fluid padding)
- Film grain overlay via SVG noise pattern in CSS

### Image Pipeline

Images are stored as WebP in `public/images/`. The `scripts/optimize-images.ts` script (run via `npm run optimize-images`) converts source images using Sharp: full-width at 2000px (q80) and thumbnails at 600px (q70). Next.js Image component handles AVIF/WebP serving at runtime.

### Path Alias

`@/*` maps to `./src/*` (configured in `tsconfig.json`).
