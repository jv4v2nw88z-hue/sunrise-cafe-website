import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion'
import { BUSINESS } from '../data/business'
import { EASE, ENTRANCE, fadeUp, stagger } from '../lib/motion'
import { AwardIcon, ClockIcon, MapPinIcon, PhoneIcon } from './Icons'

function todayLabel(): string {
  const day = new Date().getDay()
  if (day === 2) return 'Closed today (Tuesday) — see you tomorrow at 6AM'
  return 'Open today 6AM – 2PM'
}

/** Decorative rising sun with slow parallax drift. */
function SunArt() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 700], [0, 160])
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      aria-hidden="true"
      style={reduceMotion ? undefined : { y }}
      className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center overflow-hidden"
    >
      <motion.svg
        initial={reduceMotion || ENTRANCE === false ? false : { y: 140, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.4, ease: EASE, delay: 0.15 }}
        viewBox="0 0 900 380"
        className="w-[160%] max-w-none sm:w-full sm:max-w-5xl"
      >
        <defs>
          <linearGradient id="sunGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="60%" stopColor="#FB923C" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
        </defs>
        {[...Array(9)].map((_, i) => {
          const angle = (Math.PI / 8) * i
          const x1 = 450 - Math.cos(angle) * 235
          const y1 = 380 - Math.sin(angle) * 235
          const x2 = 450 - Math.cos(angle) * 300
          const y2 = 380 - Math.sin(angle) * 300
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#FDBA74"
              strokeWidth="7"
              strokeLinecap="round"
              opacity="0.55"
            />
          )
        })}
        <circle cx="450" cy="380" r="200" fill="url(#sunGrad)" opacity="0.9" />
      </motion.svg>
    </motion.div>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      aria-label="Welcome to Sunrise Cafe"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-gradient-to-b from-cream-100 via-cream-100 to-sunrise-100 pb-40 pt-28 sm:pb-48 sm:pt-32"
    >
      <SunArt />

      <motion.div
        variants={stagger(0.12, 0.1)}
        initial={ENTRANCE}
        animate="visible"
        className="container-page relative text-center"
      >
        <motion.p
          variants={fadeUp}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-honey-500/40 bg-cream-50/90 px-4 py-2 text-xs font-bold uppercase tracking-wide text-espresso-700 shadow-soft sm:text-sm"
        >
          <AwardIcon className="h-4 w-4 text-honey-500" />
          <span>
            “People’s Choice” Winner — The Big Cheese <span className="text-sunrise-700">2023</span>
          </span>
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mx-auto mt-6 max-w-3xl font-display text-[2.35rem] font-semibold leading-[1.08] text-espresso-800 sm:text-6xl lg:text-7xl"
        >
          Make the most important meal of the day{' '}
          <span className="relative whitespace-nowrap text-sunrise-600">
            a good one.
          </span>
        </motion.h1>

        <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-xl text-lg font-semibold text-espresso-600 sm:text-xl">
          {BUSINESS.subTagline} — scratch-made omelets, griddle stacks and the mac &amp; cheese that won the whole festival.
        </motion.p>

        <motion.div variants={fadeUp} className="mx-auto mt-8 flex max-w-md flex-col items-stretch gap-3 sm:max-w-none sm:flex-row sm:justify-center">
          {/* Mobile primary: tap to call. Desktop primary: view menu. */}
          <a href={BUSINESS.phoneHref} className="btn-primary sm:hidden">
            <PhoneIcon className="h-5 w-5" />
            Call Now {BUSINESS.phoneDisplay}
          </a>
          <a href="#menu" className="btn-secondary sm:hidden">
            View Menu
          </a>

          <a href="#menu" className="btn-primary hidden sm:inline-flex">
            View Menu
          </a>
          <a href={BUSINESS.phoneHref} className="btn-secondary hidden sm:inline-flex">
            <PhoneIcon className="h-5 w-5" />
            {BUSINESS.phoneDisplay}
          </a>
          <a
            href={BUSINESS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary hidden sm:inline-flex"
          >
            <MapPinIcon className="h-5 w-5" />
            Get Directions
          </a>
        </motion.div>

        <motion.div
          variants={fadeUp}
          className="mx-auto mt-10 inline-flex max-w-full flex-col items-center gap-1 rounded-2xl bg-cream-50/90 px-5 py-4 shadow-soft backdrop-blur-sm sm:flex-row sm:gap-3 sm:rounded-full sm:py-3"
        >
          <span className="inline-flex items-center gap-2 font-bold text-espresso-800">
            <ClockIcon className="h-4 w-4 text-sunrise-600" />
            {todayLabel()}
          </span>
          <span aria-hidden="true" className="hidden text-espresso-300 sm:inline">
            •
          </span>
          <span className="text-sm font-semibold text-espresso-500">Mon &amp; Wed–Sun 6AM–2PM · Closed Tue</span>
        </motion.div>
      </motion.div>
    </section>
  )
}
