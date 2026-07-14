import { SunriseIcon } from './Icons'

/**
 * Duotone photo slot. Every tile is reserved for a real photograph — pass
 * `src` and it renders a lazy-loaded <img> with the site's ink duotone
 * overlay, same footprint. Until then it shows a warm-toned field.
 */
const FIELDS: Record<string, string> = {
  griddle: 'radial-gradient(120% 100% at 20% 90%, rgba(243,167,18,0.55) 0%, rgba(160,62,34,0.5) 45%, #33231A 100%)',
  mac: 'radial-gradient(120% 100% at 75% 15%, rgba(243,167,18,0.7) 0%, rgba(201,127,4,0.5) 40%, #33231A 100%)',
  interior: 'radial-gradient(130% 110% at 50% 0%, rgba(231,217,191,0.55) 0%, rgba(94,69,48,0.7) 55%, #211511 100%)',
  coffee: 'radial-gradient(110% 100% at 30% 20%, rgba(94,69,48,0.9) 0%, #211511 60%, #170E09 100%)',
  morning: 'radial-gradient(130% 110% at 15% 15%, rgba(247,239,223,0.5) 0%, rgba(243,167,18,0.45) 45%, #5E4530 100%)',
}

export type PlaceholderPalette = keyof typeof FIELDS

export default function ImagePlaceholder({
  label,
  alt,
  palette = 'griddle',
  className = '',
  src,
}: {
  /** Short caption shown on the tile (owner guidance for the real shot). */
  label: string
  /** Description of the intended photo — becomes alt text / aria-label. */
  alt: string
  palette?: PlaceholderPalette
  className?: string
  src?: string
}) {
  return (
    <div
      role="img"
      aria-label={alt}
      className={`grain relative flex h-full w-full items-end overflow-hidden bg-ink ${className}`}
    >
      {src ? (
        <img src={src} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
      ) : (
        <div aria-hidden="true" className="absolute inset-0" style={{ background: FIELDS[palette] }} />
      )}
      {/* ink duotone wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, rgba(23,14,9,0.12) 0%, rgba(23,14,9,0.55) 100%)' }}
      />
      <SunriseIcon aria-hidden="true" className="absolute right-3 top-3 h-6 w-6 text-paper/40" />
      <span className="relative m-3 inline-block bg-ink-deep/80 px-2.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-caps text-yolk">
        {label}
      </span>
    </div>
  )
}
