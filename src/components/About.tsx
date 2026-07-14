import { motion } from 'framer-motion'
import { BUSINESS } from '../data/business'
import ImagePlaceholder from './ImagePlaceholder'
import { ENTRANCE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section } from './Section'
import { TrophyIcon } from './Icons'

export default function About() {
  return (
    <Section id="about" className="py-20 sm:py-28">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          variants={stagger(0.12)}
          initial={ENTRANCE}
          whileInView="visible"
          viewport={viewportOnce}
        >
          <motion.p variants={fadeUp} className="text-sm font-bold uppercase tracking-[0.18em] text-sunrise-600">
            Our Story
          </motion.p>
          <motion.h2
            variants={fadeUp}
            id="about-heading"
            className="mt-3 font-display text-3xl font-semibold leading-tight text-espresso-800 sm:text-4xl lg:text-[2.75rem]"
          >
            A real breakfast worth getting up for
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-5 leading-relaxed text-espresso-600">
            We're a neighborhood spot in Battle Creek doing breakfast and lunch the right way — fresh eggs,
            hand-cut meats, homemade French toast, and an omelet for every craving. Whether you're a regular
            who knows your order by heart or a first-timer looking for the best breakfast in town, you'll
            feel at home here.
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 leading-relaxed text-espresso-600">
            Drop in any morning (except Tuesday — we rest) and let us take care of you. Open 6AM to 2PM,
            six days a week at {BUSINESS.address.street}.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-3xl bg-espresso-800 p-7 text-cream-100 shadow-lift"
          >
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-honey-400 text-espresso-900">
                <TrophyIcon className="h-6 w-6" />
              </span>
              <h3 className="font-display text-xl font-semibold leading-snug text-cream-50">
                “People’s Choice” &amp; “Loaded” Winner — The Big Cheese, 2023
              </h3>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-cream-200/85">
              At {BUSINESS.award.festival} in {BUSINESS.award.year}, our {BUSINESS.award.dish.toLowerCase()} took
              home both the “People’s Choice” and “Loaded” category titles. It's been on the menu ever since —
              white cheddar mac topped with brisket burnt ends, fresh tomatoes and parmesan.
            </p>
            <a
              href="#menu"
              className="mt-4 inline-block font-bold text-honey-400 underline-offset-4 hover:underline"
            >
              Find it under Lunch Favorites
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial={ENTRANCE}
          whileInView="visible"
          viewport={viewportOnce}
          className="grid h-[26rem] grid-rows-[2fr_1fr] gap-4 lg:h-[32rem]"
        >
          <ImagePlaceholder
            label="The team behind the counter"
            alt="Sunrise Cafe staff at work behind the counter"
            palette="interior"
          />
          <div className="grid grid-cols-2 gap-4">
            <ImagePlaceholder
              label="Scratch-made daily"
              alt="Fresh pancake batter being ladled onto the griddle"
              palette="morning"
            />
            <ImagePlaceholder
              label="The winning mac"
              alt="The award-winning white cheddar mac with brisket burnt ends"
              palette="mac"
            />
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
