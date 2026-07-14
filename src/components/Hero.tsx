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
 * Full-bleed dawn-griddle scene. To swap in a real dish photo, replace this
 * component's inner markup with:
 *   <img src="/hero.jpg" alt="" className="h-full w-full object-cover" />
 * and keep the duotone overlay + grain divs below it.
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
        {/* Dawn light: one warm glow rising from the lower left. */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(95% 75% at 16% 92%, rgba(243,167,18,0.30) 0%, rgba(160,62,34,0.16) 38%, transparent 64%),' +
              'radial-gradient(70% 60% at 88% 30%, rgba(94,69,48,0.35) 0%, transparent 60%),' +
              'linear-gradient(178deg, #170E09 0%, #211511 55%, #2A1B12 100%)',
          }}
        />

        {/* Cast-iron skillet with a sunny-side-up egg, cropped off the right edge. */}
        <svg
          viewBox="0 0 800 800"
          className="absolute -right-[16%] top-1/2 h-[125%] w-auto -translate-y-[44%] sm:-right-[6%] lg:right-[2%]"
        >
          <defs>
            <radialGradient id="panIron" cx="42%" cy="38%" r="75%">
              <stop offset="0%" stopColor="#3A2417" />
              <stop offset="55%" stopColor="#241410" />
              <stop offset="100%" stopColor="#150C08" />
            </radialGradient>
            <radialGradient id="yolkGrad" cx="40%" cy="35%" r="80%">
              <stop offset="0%" stopColor="#FFCB4E" />
              <stop offset="60%" stopColor="#F3A712" />
              <stop offset="100%" stopColor="#C97F04" />
            </radialGradient>
          </defs>

          {/* pan handle */}
          <rect x="30" y="368" width="190" height="52" rx="26" fill="#170E09" />
          <rect x="30" y="368" width="190" height="10" rx="5" fill="#4A2F1D" opacity="0.5" />

          {/* pan body */}
          <circle cx="470" cy="400" r="300" fill="url(#panIron)" />
          <circle cx="470" cy="400" r="300" fill="none" stroke="#5E4530" strokeOpacity="0.55" strokeWidth="4" />
          <circle cx="470" cy="400" r="252" fill="#1B0F0A" />
          <circle cx="470" cy="400" r="252" fill="none" stroke="#000000" strokeOpacity="0.4" strokeWidth="10" />

          {/* egg white — irregular, spread on the iron */}
          <path
            d="M470 212c74-14 166 22 196 92 24 56 8 118-30 158 30 26 38 74 12 108-30 40-92 48-140 34-38 26-96 30-138 6-52-30-70-92-50-142-34-34-42-92-14-134 32-48 102-38 164-122z"
            fill="#F7EFDF"
            opacity="0.96"
          />
          <path
            d="M470 212c74-14 166 22 196 92 24 56 8 118-30 158"
            fill="none"
            stroke="#E7D9BF"
            strokeWidth="6"
            opacity="0.6"
          />

          {/* yolk */}
          <circle cx="478" cy="392" r="86" fill="url(#yolkGrad)" />
          <ellipse cx="450" cy="362" rx="30" ry="20" fill="#FFE9A8" opacity="0.85" />
        </svg>

        {/* steam wisps */}
        <svg viewBox="0 0 400 600" className="absolute right-[8%] top-[4%] h-[55%] w-auto opacity-25 sm:right-[18%]">
          <g fill="none" stroke="#F7EFDF" strokeWidth="7" strokeLinecap="round">
            <path d="M120 560 C 90 480, 160 430, 128 350 C 100 280, 150 230, 132 160" />
            <path d="M230 580 C 260 490, 195 445, 226 360 C 252 290, 205 240, 224 150" />
          </g>
        </svg>
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
