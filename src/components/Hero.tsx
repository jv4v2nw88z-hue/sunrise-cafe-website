import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { BUSINESS } from '../data/business'
import { EASE, ENTRANCE, fadeUp, stagger } from '../lib/motion'
import { AwardIcon, MapPinIcon, PhoneIcon } from './Icons'

function todayLabel(): string {
  const day = new Date().getDay()
  if (day === 2) return 'Closed today — back tomorrow at 6AM'
  return 'Open today 6AM–2PM'
}

/**
 * Full-bleed looping video of an egg cooking on the griddle. Falls back to
 * the poster image (no video load/playback) when the user prefers reduced
 * motion. To swap in a different clip, replace /public/hero.mp4,
 * /public/hero.webm and /public/hero-poster.jpg and keep the same names.
 */
function HeroBackdrop() {
  const reduceMotion = useReducedMotion()
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 900], [0, 180])

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <motion.div
        style={reduceMotion ? undefined : { y }}
        initial={reduceMotion || ENTRANCE === false ? false : { scale: 1.12 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2.2, ease: EASE }}
        className="absolute inset-[-12%]"
      >
        {/* Dawn light backdrop: color-matches the video while it loads. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(95% 75% at 16% 92%, rgba(243,167,18,0.30) 0%, rgba(160,62,34,0.16) 38%, transparent 64%),' +
              'radial-gradient(70% 60% at 88% 30%, rgba(94,69,48,0.35) 0%, transparent 60%),' +
              'linear-gradient(178deg, #170E09 0%, #211511 55%, #2A1B12 100%)',
          }}
        />

        {reduceMotion ? (
          <img src="/hero-poster.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/hero-poster.jpg"
            className="absolute inset-0 h-full w-full object-cover"
          >
            <source src="/hero.webm" type="video/webm" />
            <source src="/hero.mp4" type="video/mp4" />
          </video>
        )}
      </motion.div>

      {/* Duotone overlay: keeps overlaid text legible, left side darkest. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(92deg, rgba(23,14,9,0.86) 0%, rgba(23,14,9,0.55) 44%, rgba(23,14,9,0.18) 100%),' +
            'linear-gradient(180deg, rgba(23,14,9,0.5) 0%, transparent 22%, transparent 70%, rgba(23,14,9,0.75) 100%)',
        }}
      />
      <div className="grain absolute inset-0" />
    </div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Welcome to Sunrise Cafe"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden bg-ink text-paper"
    >
      <HeroBackdrop />

      <motion.div
        variants={stagger(0.14, 0.35)}
        initial={ENTRANCE}
        animate="visible"
        className="container-page relative flex flex-1 flex-col justify-center pb-14 pt-28 sm:pb-20"
      >
        <motion.p variants={fadeUp} className="flex items-center gap-2 text-xs font-bold uppercase tracking-caps text-yolk sm:text-sm">
          <AwardIcon className="h-4 w-4" />
          “People’s Choice” — The Big Cheese, 2023
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mt-5 max-w-[13ch] font-display text-[2.7rem] font-extrabold leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Make the most important meal of the day{' '}
          <span className="text-yolk">a good one.</span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mt-6 max-w-md text-lg font-medium text-paper/85 sm:text-xl">
          Battle Creek's award-winning breakfast &amp; lunch spot — griddle on at 6AM, six days a week.
        </motion.p>

        <motion.div variants={fadeUp} className="mt-9 flex max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row">
          {/* Mobile primary: tap to call. Desktop primary: view menu. */}
          <a href={BUSINESS.phoneHref} className="btn-yolk sm:hidden">
            <PhoneIcon className="h-5 w-5" />
            Call Now {BUSINESS.phoneDisplay}
          </a>
          <a href="#menu" className="btn-ghost-light sm:hidden">
            View Menu
          </a>

          <a href="#menu" className="btn-yolk hidden sm:inline-flex">
            View Menu
          </a>
          <a href={BUSINESS.phoneHref} className="btn-ghost-light hidden sm:inline-flex">
            <PhoneIcon className="h-5 w-5" />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost-light hidden sm:inline-flex"
          >
            <MapPinIcon className="h-5 w-5" />
            Get Directions
          </a>
        </motion.div>
      </motion.div>

      {/* Ticker strip pinned to the hero's bottom edge. */}
      <motion.div
        initial={ENTRANCE === false ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
        className="relative border-t border-paper/15 bg-ink-deep/60 backdrop-blur-sm"
      >
        <div className="container-page flex flex-wrap items-center gap-x-6 gap-y-1 py-3 text-xs font-bold uppercase tracking-caps text-paper/70 sm:text-sm">
          <span className="text-yolk">{todayLabel()}</span>
          <span className="hidden sm:inline">117 E Coolidge Ave, Battle Creek</span>
          <span className="hidden lg:inline">Daily specials on the board — ask your server</span>
        </div>
      </motion.div>
    </section>
  )
}
