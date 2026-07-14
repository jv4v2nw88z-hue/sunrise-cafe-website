# Sunrise Cafe — Battle Creek, MI

Mobile-first marketing site for Sunrise Cafe (117 E Coolidge Ave, Battle Creek, MI 49017).
React + Vite + TypeScript + Tailwind CSS + Framer Motion. Fully static output — no backend.

## Commands

```bash
npm install
npm run dev       # dev server
npm run build     # type-check + production build → dist/
npm run preview   # serve the production build locally
```

## Structure

- `src/data/business.ts` — single source of truth for name, address, phone, hours, award
- `src/data/menu.ts` — the full real menu (breakfast / lunch / kids & drinks), crawlable text
- `src/components/` — `Nav`, `Hero`, `MenuSection`, `Catering`, `Gallery`, `About`, `Contact`, `Footer`
- `legacy-static/` — the previous vanilla HTML/CSS/JS version of the site, preserved for reference (not part of the build)

## Swapping in real photos

Every image slot is an `ImagePlaceholder` (`src/components/ImagePlaceholder.tsx`).
Pass a `src` prop and it renders a lazy-loaded `<img>` with the same footprint and the
`alt` text already written — no layout changes needed.

## Notes

- Animations respect `prefers-reduced-motion` (via `MotionConfig reducedMotion="user"`).
- All menu panels stay in the DOM (inactive ones `hidden`) so menu text remains crawlable.
- SEO: meta description, Open Graph tags, and schema.org `Restaurant` JSON-LD live in `index.html`.
- Primary CTA is device-aware: tap-to-call on mobile, "View Menu" on desktop.
