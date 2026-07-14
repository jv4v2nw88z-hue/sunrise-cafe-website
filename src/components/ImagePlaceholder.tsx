import { SunriseIcon } from './Icons'

/**
 * Art-directed placeholder for a real photo. Swap in a photo by passing `src`
 * — it renders a lazy-loaded <img> with the same footprint.
 */
const PALETTES: Record<string, string> = {
  griddle: 'linear-gradient(140deg, #FDBA74 0%, #F97316 55%, #C2410C 100%)',
  mac: 'linear-gradient(140deg, #FCD34D 0%, #F59E0B 55%, #EA580C 100%)',
  interior: 'linear-gradient(140deg, #F5DFC0 0%, #D8A46F 55%, #8C5A3A 100%)',
  coffee: 'linear-gradient(140deg, #8C6242 0%, #5D4037 55%, #2B1B12 100%)',
  fresh: 'linear-gradient(140deg, #FDE68A 0%, #FB923C 60%, #E2670F 100%)',
  morning: 'linear-gradient(160deg, #FFF1DB 0%, #FDBA74 55%, #FB7C25 100%)',
}

export type PlaceholderPalette = keyof typeof PALETTES

export default function ImagePlaceholder({
  label,
  alt,
  palette = 'griddle',
  className = '',
  src,
}: {
  /** Short caption shown on the placeholder (owner guidance for the real shot). */
  label: string
  /** Description of the intended photo — becomes alt text / aria-label. */
  alt: string
  palette?: PlaceholderPalette
  className?: string
  src?: string
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`h-full w-full rounded-2xl object-cover ${className}`}
      />
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative flex h-full w-full items-end overflow-hidden rounded-2xl ${className}`}
      style={{ background: PALETTES[palette] }}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-25"
        style={{
          background:
            'radial-gradient(120% 90% at 85% 0%, rgba(255,255,255,0.55) 0%, transparent 55%), radial-gradient(90% 70% at 15% 100%, rgba(43,27,18,0.5) 0%, transparent 60%)',
        }}
      />
      <SunriseIcon
        aria-hidden="true"
        className="absolute right-4 top-4 h-7 w-7 text-cream-50/50"
      />
      <span className="relative m-3 inline-block rounded-full bg-espresso-900/45 px-3 py-1.5 text-xs font-bold tracking-wide text-cream-100 backdrop-blur-sm">
        {label}
      </span>
    </div>
  )
}
