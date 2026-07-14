import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement>

const base: IconProps = {
  width: 20,
  height: 20,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  )
}

/** Sun rising over a horizon line — brand mark. */
export function SunriseIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 9V3M8 6l4-3 4 3" opacity="0" />
      <path d="M6 18a6 6 0 0 1 12 0" fill="currentColor" stroke="none" />
      <path d="M12 4v3M5.2 7.2l2.1 2.1M18.8 7.2l-2.1 2.1M2 18h20" />
    </svg>
  )
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

export function ClockIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-10 6L2 7" />
    </svg>
  )
}

/** Award rosette. */
export function AwardIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="9" r="6" />
      <path d="M9 14.2 7.5 22l4.5-2.7L16.5 22 15 14.2" />
    </svg>
  )
}

export function TrophyIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M8 21h8M12 17v4M7 4h10v6a5 5 0 0 1-10 0V4z" />
      <path d="M7 6H4a1 1 0 0 0-1 1c0 2.5 2 4 4 4M17 6h3a1 1 0 0 1 1 1c0 2.5-2 4-4 4" />
    </svg>
  )
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function FlameIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M12 22c4 0 7-2.7 7-7 0-3-2-5.5-3.5-7C15 9.5 14 10 14 8c0-2.5-1.5-5-4-6 .5 3-1 4.5-2.5 6.5C6 10.5 5 12.5 5 15c0 4.3 3 7 7 7z" />
    </svg>
  )
}

export function LeafIcon(props: IconProps) {
  return (
    <svg {...base} {...props}>
      <path d="M11 20A7 7 0 0 1 4 13c0-6 5-10 16-11-1 11-5 15-9 18z" />
      <path d="M4 21c2-3 5-6 9-8" />
    </svg>
  )
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base} {...props} fill="currentColor" stroke="none">
      <path d="M14 8h3V5h-3a4 4 0 0 0-4 4v2H7v3h3v7h3v-7h3l1-3h-4V9a1 1 0 0 1 1-1z" />
    </svg>
  )
}
