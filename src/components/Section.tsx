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

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  align = 'center',
  tone = 'light',
}: {
  id: string
  eyebrow: string
  title: string
  intro?: string
  align?: 'center' | 'left'
  tone?: 'light' | 'dark'
}) {
  const alignCls = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <motion.div
      variants={stagger(0.12)}
      initial={ENTRANCE}
      whileInView="visible"
      viewport={viewportOnce}
      className={`max-w-2xl ${alignCls}`}
    >
      <motion.p
        variants={fadeUp}
        className={`text-sm font-bold uppercase tracking-[0.18em] ${
          tone === 'dark' ? 'text-honey-400' : 'text-sunrise-600'
        }`}
      >
        {eyebrow}
      </motion.p>
      <motion.h2
        variants={fadeUp}
        id={`${id}-heading`}
        className={`mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem] ${
          tone === 'dark' ? 'text-cream-50' : 'text-espresso-800'
        }`}
      >
        {title}
      </motion.h2>
      {intro && (
        <motion.p
          variants={fadeUp}
          className={`mt-4 text-base leading-relaxed sm:text-lg ${
            tone === 'dark' ? 'text-cream-200/80' : 'text-espresso-600'
          }`}
        >
          {intro}
        </motion.p>
      )}
    </motion.div>
  )
}
