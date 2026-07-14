import { motion } from 'framer-motion'
import { BUSINESS } from '../data/business'
import { ENTRANCE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './Section'
import { AwardIcon, MailIcon, PhoneIcon, SunIcon } from './Icons'

const STEPS = [
  {
    title: 'We Talk It Over',
    body: 'We sit down to go over menu options and take a look at your space so we can plan accordingly.',
  },
  {
    title: 'Build Your Spread',
    body: "Pick your main dishes, sides, and desserts. We'll help you build a spread your team will love.",
  },
  {
    title: 'We Set Up Early',
    body: "We arrive early and set everything up to your specifications — you don't lift a finger.",
  },
  {
    title: 'Full Cleanup',
    body: 'After the event we return for a full-service cleanup. You enjoy; we handle the rest.',
  },
]

export default function Catering() {
  return (
    <Section id="catering" className="py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="catering"
          eyebrow="Office & Event Catering"
          title="Down-home cooking, delivered to your office"
          intro="Catering in Battle Creek & Hastings, MI — full setup and cleanup included, with our award-winning mac & cheese available on every catering menu."
        />

        <motion.ol
          variants={stagger(0.1)}
          initial={ENTRANCE}
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {STEPS.map((step, i) => (
            <motion.li
              key={step.title}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="rounded-3xl bg-cream-50 p-6 shadow-soft"
            >
              <span className="grid h-10 w-10 place-items-center rounded-full bg-sunrise-100 font-display text-lg font-bold text-sunrise-700">
                {i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl font-semibold text-espresso-800">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso-600">{step.body}</p>
            </motion.li>
          ))}
        </motion.ol>

        <motion.div
          variants={stagger(0.12)}
          initial={ENTRANCE}
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 grid gap-5 lg:grid-cols-2"
        >
          <motion.div variants={fadeUp} className="flex items-start gap-4 rounded-3xl bg-espresso-800 p-7 text-cream-100">
            <AwardIcon className="mt-1 h-8 w-8 shrink-0 text-honey-400" />
            <div>
              <h3 className="font-display text-xl font-semibold text-cream-50">
                Award-winning mac &amp; cheese — on your catering menu
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-cream-200/85">
                The same {BUSINESS.award.dish.toLowerCase()} that won “People’s Choice” and “Loaded” at {BUSINESS.award.festival}, {BUSINESS.award.year} — scaled up for your whole crew.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-start gap-4 rounded-3xl border-2 border-honey-500/40 bg-cream-50 p-7">
            <SunIcon className="mt-1 h-8 w-8 shrink-0 text-sunrise-600" />
            <div>
              <h3 className="font-display text-xl font-semibold text-espresso-800">Free coffee for veterans</h3>
              <p className="mt-2 text-sm leading-relaxed text-espresso-600">
                We're proud to offer complimentary coffee to veterans at any catered event.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial={ENTRANCE}
          whileInView="visible"
          viewport={viewportOnce}
          className="mt-12 flex flex-col items-center gap-3 text-center"
        >
          <p className="max-w-xl font-semibold text-espresso-600">
            Planning an office breakfast, church group or event? Call us and we'll build a quote within one business day.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={BUSINESS.phoneHref} className="btn-primary">
              <PhoneIcon className="h-5 w-5" />
              Call {BUSINESS.phoneDisplay}
            </a>
            <a href={`mailto:${BUSINESS.email}?subject=Catering%20Inquiry`} className="btn-secondary">
              <MailIcon className="h-5 w-5" />
              Email a Catering Inquiry
            </a>
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
