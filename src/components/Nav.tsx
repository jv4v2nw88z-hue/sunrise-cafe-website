import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { BUSINESS } from '../data/business'
import { EASE, ENTRANCE } from '../lib/motion'
import { MapPinIcon, PhoneIcon, SunriseIcon } from './Icons'

const LINKS = [
  { href: '#home', label: 'Home' },
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
    const onScroll = () => setScrolled(window.scrollY > 12)
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
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-sunrise-600 focus:px-5 focus:py-3 focus:font-bold focus:text-cream-50"
      >
        Skip to content
      </a>

      <motion.header
        initial={reduceMotion || ENTRANCE === false ? false : { y: -64, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: EASE }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-300 ${
          scrolled || open
            ? 'bg-cream-100/95 shadow-soft backdrop-blur-md'
            : 'bg-transparent'
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between gap-4 sm:h-20">
          <a href="#home" className="flex items-center gap-2.5 rounded-full" aria-label="Sunrise Cafe — back to top">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-sunrise-600 text-cream-50">
              <SunriseIcon className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <strong className="block font-display text-lg font-semibold text-espresso-800">Sunrise Cafe</strong>
              <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-espresso-500">
                Battle Creek, MI
              </span>
            </span>
          </a>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-4 py-2 font-bold text-espresso-700 transition-colors hover:bg-sunrise-100 hover:text-sunrise-700"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a href={BUSINESS.phoneHref} className="btn-secondary !min-h-11 !px-5 !py-2.5 text-sm">
              <PhoneIcon className="h-4 w-4" />
              {BUSINESS.phoneDisplay}
            </a>
          </div>

          {/* Mobile: quick call + hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={BUSINESS.phoneHref}
              aria-label={`Call Sunrise Cafe at ${BUSINESS.phoneDisplay}`}
              className="grid h-11 w-11 place-items-center rounded-full bg-sunrise-600 text-cream-50 shadow-soft transition-transform active:scale-95"
            >
              <PhoneIcon className="h-5 w-5" />
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="relative grid h-11 w-11 place-items-center rounded-full border-2 border-espresso-800/15 bg-cream-50"
            >
              <span className="sr-only">{open ? 'Close menu' : 'Open menu'}</span>
              <span aria-hidden="true" className="relative block h-3.5 w-5">
                <motion.span
                  animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-espresso-800"
                />
                <motion.span
                  animate={open ? { opacity: 0, x: 6 } : { opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-espresso-800"
                />
                <motion.span
                  animate={open ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  transition={{ duration: 0.25, ease: EASE }}
                  className="absolute left-0 top-3 block h-0.5 w-5 rounded-full bg-espresso-800"
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
            className="fixed inset-x-0 bottom-0 top-16 z-40 flex flex-col overflow-y-auto bg-cream-100 px-6 pb-8 pt-4 lg:hidden"
          >
              <button ref={closeButtonRef} className="sr-only" onClick={() => setOpen(false)}>
                Close menu
              </button>
              <ul className="flex flex-col divide-y divide-espresso-800/10">
                {LINKS.map((l) => (
                  <motion.li key={l.href} variants={linkVariants}>
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className="block py-4 font-display text-2xl font-semibold text-espresso-800 transition-colors hover:text-sunrise-600"
                    >
                      {l.label}
                    </a>
                  </motion.li>
                ))}
              </ul>
              <motion.div variants={linkVariants} className="mt-8 flex flex-col gap-3">
                <a href={BUSINESS.phoneHref} className="btn-primary w-full" onClick={() => setOpen(false)}>
                  <PhoneIcon className="h-5 w-5" />
                  Call {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full"
                  onClick={() => setOpen(false)}
                >
                  <MapPinIcon className="h-5 w-5" />
                  Get Directions
                </a>
              </motion.div>
              <motion.p variants={linkVariants} className="mt-6 text-center text-sm font-semibold text-espresso-500">
                Mon 6AM–2PM · Tue Closed · Wed–Sun 6AM–2PM
              </motion.p>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  )
}
