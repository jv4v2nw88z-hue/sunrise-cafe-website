import { motion } from 'framer-motion'
import { BUSINESS } from '../data/business'
import { ENTRANCE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section } from './Section'
import { TrophyIcon } from './Icons'

export default function About() {
  return (
    <Section id="about" className="bg-paper">
      {/* The award band — one of the page's three deliberate reveal moments. */}
      <motion.div
        variants={stagger(0.15)}
        initial={ENTRANCE}
        whileInView="visible"
        viewport={viewportOnce}
        className="grain relative overflow-hidden border-y-4 border-ink bg-brick py-16 text-paper sm:py-20"
      >
        <div className="container-page relative">
          <motion.p variants={fadeUp} className="eyebrow flex items-center gap-2 !text-paper/80">
            <TrophyIcon className="h-4 w-4 text-yolk" />
            Battle Creek's Mac &amp; Cheese Festival — “The Big Cheese”
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="about-heading"
            className="mt-4 max-w-4xl font-display text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-7xl"
          >
            “People's Choice.”
            <br />
            <span className="text-yolk">“Loaded.” Both. 2023.</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 max-w-xl text-lg font-medium text-paper/85">
            Our {BUSINESS.award.dish.toLowerCase()} took home both titles — white cheddar mac topped with brisket
            burnt ends, fresh tomatoes and parmesan. It's been on the menu ever since.
          </motion.p>
          <motion.a
            variants={fadeUp}
            href="#menu"
            className="mt-6 inline-block border-b-2 border-yolk pb-0.5 font-bold text-yolk hover:border-paper hover:text-paper"
          >
            Find it under Lunch Favorites
          </motion.a>
        </div>
      </motion.div>

      {/* Story */}
      <div className="container-page grid gap-10 py-20 sm:py-24 lg:grid-cols-[7fr_5fr] lg:gap-16">
        <div>
          <p className="eyebrow">Our Story</p>
          <h3 className="mt-3 max-w-[18ch] font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
            A real breakfast worth getting up for — in the town that invented breakfast
          </h3>
          <p className="mt-5 max-w-xl leading-relaxed text-umber">
            We're a neighborhood spot in Battle Creek — Cereal City itself — doing breakfast and lunch the right
            way: fresh eggs, hand-cut meats, homemade French toast, and an omelet for every craving. Whether
            you're a regular who knows your order by heart or a first-timer looking for the best breakfast in
            town, you'll feel at home here.
          </p>
          <p className="mt-4 max-w-xl leading-relaxed text-umber">
            Drop in any morning (except Tuesday — we rest) and let us take care of you. Griddle's on 6AM to 2PM,
            six days a week at {BUSINESS.address.street}.
          </p>
        </div>

        <div className="flex flex-col justify-end gap-2 border-l-4 border-yolk pl-6">
          <p className="font-display text-2xl font-bold leading-snug text-ink">
            “{BUSINESS.tagline}”
          </p>
          <p className="text-sm font-bold uppercase tracking-caps text-umber">The house rule since day one</p>
        </div>
      </div>
    </Section>
  )
}
