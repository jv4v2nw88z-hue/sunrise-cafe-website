import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { BUSINESS } from '../data/business'
import { EASE, ENTRANCE } from '../lib/motion'
import { MapPinIcon, PhoneIcon, SunriseIcon } from './Icons'

const LINKS = [
  { href: '#menu', label: 'Menu' },
  { href: '#catering', label: 'Catering' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

const panelVariants = {
  hidden: { opacity: 0, y: -12 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: EASE, staggerChildren: 0.05, delayChildren: 0.08 } },
  exit: { opacity: 0, y: -12, transition: { duration: 0.22, ease: 'easeIn' } },
}

const linkVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: EASE } },
}

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const reduceMotion = useReducedMotion()

  useEffect(() => {
    // Solidify once the viewport has left the hero photo.
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.72)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-yolk focus:px-5 focus:py-3 focus:font-bold focus:text-ink-deep"
      >
        Skip to content
      </a>

      <motion.header
        initial={reduceMotion || ENTRANCE === false ? false : { y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: EASE, delay: 0.2 }}
        className={`fixed inset-x-0 top-0 z-50 text-paper transition-[background-color,box-shadow,backdrop-filter,border-color] duration-300 ${
          scrolled || open
            ? 'border-b border-paper/10 bg-ink/90 backdrop-blur-md'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
          <a href="#home" className="flex items-center gap-2.5" aria-label="Sunrise Cafe — back to top">
            <span className="grid h-10 w-10 place-items-center bg-yolk text-ink-deep">
              <SunriseIcon className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <strong className="block font-display text-lg font-bold tracking-tight">Sunrise Cafe</strong>
              <span className="block text-[0.65rem] font-bold uppercase tracking-caps text-paper/60">
                Battle Creek · Est. 6AM
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-6 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="border-b-2 border-transparent py-1 text-sm font-bold uppercase tracking-caps text-paper/85 transition-colors hover:border-yolk hover:text-paper"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={BUSINESS.phoneHref} className="text-sm font-bold text-paper/85 transition-colors hover:text-yolk">
              {BUSINESS.phoneDisplay}
            </a>
            <a href="#menu" className="btn-yolk !min-h-11 !px-5 !py-2.5 text-sm">
              View Menu
            </a>
          </div>

          {/* Mobile: quick call + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS.phoneHref}
              aria-label={`Call Sunrise Cafe at ${BUSINESS.phoneDisplay}`}
              className="grid h-11 w-11 place-items-center bg-yolk text-ink-deep transition-transform active:scale-95"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative grid h-11 w-11 place-items-center border-2 border-paper/30"
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              <span aria-hidden="true" className="relative block h-3.5 w-5">
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute left-0 top-0 block h-0.5 w-5 bg-paper"
                />
                <motion.span
                  animate={open ? { opacity: 0, x: 6 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-1.5 block h-0.5 w-5 bg-paper"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute left-0 top-3 block h-0.5 w-5 bg-paper"
                />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Rendered outside the header: its backdrop-filter/transform would otherwise
          become the containing block for this fixed panel and clip it to a sliver. */}
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            aria-label="Mobile"
            variants={panelVariants}
            initial={ENTRANCE}
            animate="visible"
            exit={ENTRANCE === false ? undefined : 'exit'}
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-ink px-6 pb-8 pt-4 text-paper lg:hidden"
          >
            <button ref={closeButtonRef} className="sr-only" onClick={() => setOpen(false)}>
              Close menu
            </button>
            <ul className="flex flex-col divide-y divide-paper/10">
              {[{ href: '#home', label: 'Home' }, ...LINKS].map((l) => (
                <motion.li key={l.href} variants={linkVariants}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block py-4 font-display text-3xl font-bold tracking-tight transition-colors hover:text-yolk"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <motion.div variants={linkVariants} className="mt-8 flex flex-col gap-3">
              <a href={BUSINESS.phoneHref} className="btn-yolk w-full" onClick={() => setOpen(false)}>
                <PhoneIcon className="h-5 w-5" />
                Call {BUSINESS.phoneDisplay}
              </a>
              <a
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost-light w-full"
                onClick={() => setOpen(false)}
              >
                <MapPinIcon className="h-5 w-5" />
                Get Directions
              </a>
            </motion.div>
            <motion.p variants={linkVariants} className="mt-6 text-center text-sm font-semibold text-paper/60">
              Mon 6AM–2PM · Tue Closed · Wed–Sun 6AM–2PM
            </motion.p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
