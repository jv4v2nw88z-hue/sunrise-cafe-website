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

## Design system — "First light at the griddle"

Battle Creek is Cereal City — the town that invented American breakfast — and this cafe's
griddle comes on at 6AM. The page reads as dawn: a full-bleed, skillet-dark hero at the top
breaking into warm daylight paper sections below.

| Token   | Hex       | Pulled from                                   |
| ------- | --------- | --------------------------------------------- |
| `ink`   | `#211511` | dark-roast coffee — hero, footer, overlays     |
| `umber` | `#5E4530` | griddle browning — secondary text              |
| `paper` | `#F7EFDF` | daylight ground                                |
| `crust` | `#E7D9BF` | toast edge — alt surfaces, borders             |
| `yolk`  | `#F3A712` | fried-egg yolk / the award mac's white-cheddar gold — the single accent (actions, award, tab indicator) |
| `brick` | `#A03E22` | the award band                                 |

Type: **Bricolage Grotesque** (display — hand-set diner-board energy) over
**Instrument Sans** (body). Motion is deliberate, not ambient: hero load + slow zoom +
parallax, nav transparent→blurred-solid past the hero, and scroll reveals at exactly three
moments (menu handoff, award band, gallery).

## Structure

- `src/data/business.ts` — single source of truth for name, address, phone, hours, award
- `src/data/menu.ts` — the full real menu (breakfast / lunch / kids & drinks), crawlable text
- `src/components/` — `Nav`, `Hero`, `HoursStrip`, `MenuSection`, `Catering`, `Gallery`, `About`, `Contact`, `Footer`
- `legacy-static/` — the original vanilla HTML/CSS/JS site, preserved for reference (source of the real menu data; not part of the build)

## Swapping in real photos

- **Hero**: see the comment on `HeroBackdrop` in `src/components/Hero.tsx` — drop `hero.jpg`
  into `public/` and replace the SVG scene with the documented `<img>`; the duotone overlay
  and grain stay.
- **Gallery/About tiles**: every `ImagePlaceholder` accepts a `src` prop and renders a
  lazy-loaded `<img>` with the ink duotone treatment, same footprint, alt text already written.

## Notes

- Animations respect `prefers-reduced-motion`, and if the document is hidden at load
  (background tab, headless preview) entrance animations are skipped so content is never
  invisible (`ENTRANCE` in `src/lib/motion.ts`).
- All menu panels stay in the DOM (inactive ones `hidden`) so menu text remains crawlable.
- SEO: meta description, Open Graph tags, and schema.org `Restaurant` JSON-LD in `index.html`.
- Primary CTA is device-aware: tap-to-call on mobile, "View Menu" on desktop.
