import type { Variants } from 'framer-motion'

export const EASE = [0.22, 1, 0.36, 1] as const

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE },
  },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
}

export const stagger = (staggerChildren = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren, delayChildren } },
})

/** Shared whileInView settings — trigger once, slightly before fully in view. */
export const viewportOnce = { once: true, margin: '-60px 0px' } as const

/**
 * If the document is hidden at load (background tab, headless preview pane),
 * requestAnimationFrame is throttled or frozen and entrance animations may
 * never run — leaving everything stuck at opacity 0. In that case render
 * final states immediately instead of animating in.
 */
export const ENTRANCE: 'hidden' | false =
  typeof document !== 'undefined' && document.visibilityState === 'hidden' ? false : 'hidden'
