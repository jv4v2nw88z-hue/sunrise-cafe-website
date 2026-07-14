import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { ENTRANCE, fadeUp, stagger, viewportOnce } from '../lib/motion'

export function Section({
  id,
  className = '',
  children,
}: {
  id: string
  className?: string
  children: ReactNode
}) {
  return (
    <section id={id} aria-labelledby={`${id}-heading`} className={className}>
      {children}
    </section>
  )
}

/**
 * Editorial section header, left-aligned by default.
 * `animate` is opt-in: scroll reveals are reserved for a few key moments,
 * not sprayed across every section.
 */
export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  tone = 'light',
  animate = false,
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  tone?: 'light' | 'dark'
  animate?: boolean
}) {
  const eyebrowCls = tone === 'dark' ? 'text-yolk' : ''
  const titleCls = tone === 'dark' ? 'text-paper' : 'text-ink'
  const introCls = tone === 'dark' ? 'text-paper/75' : 'text-umber'

  const inner = (
    <>
      <p className={`eyebrow ${eyebrowCls}`}>{eyebrow}</p>
      <h2
        id={`${id}-heading`}
        className={`mt-3 max-w-[16ch] font-display text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-5xl lg:text-6xl ${titleCls}`}
      >
        {title}
      </h2>
      {intro && <p className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${introCls}`}>{intro}</p>}
    </>
  )

  if (!animate) return <div>{inner}</div>

  return (
    <motion.div variants={stagger(0.12)} initial={ENTRANCE} whileInView="visible" viewport={viewportOnce}>
      <motion.div variants={fadeUp}>{inner}</motion.div>
    </motion.div>
  )
}
