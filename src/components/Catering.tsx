import { BUSINESS } from '../data/business'
import { Section, SectionHeading } from './Section'
import { AwardIcon, MailIcon, PhoneIcon, SunIcon } from './Icons'

const STEPS = [
  {
    title: 'We talk it over',
    body: 'We sit down to go over menu options and take a look at your space so we can plan accordingly.',
  },
  {
    title: 'Build your spread',
    body: "Pick your main dishes, sides, and desserts. We'll help you build a spread your team will love.",
  },
  {
    title: 'We set up early',
    body: "We arrive early and set everything up to your specifications — you don't lift a finger.",
  },
  {
    title: 'Full cleanup',
    body: 'After the event we return for a full-service cleanup. You enjoy; we handle the rest.',
  },
]

export default function Catering() {
  return (
    <Section id="catering" className="border-t-4 border-ink bg-crust/50 py-20 sm:py-28">
      <div className="container-page grid gap-12 lg:grid-cols-[5fr_6fr] lg:gap-20">
        <div>
          <SectionHeading
            id="catering"
            eyebrow="Office & Event Catering"
            title="Down-home cooking, delivered to your office"
            intro="Catering in Battle Creek & Hastings, MI — full setup and cleanup included, with the award-winning mac & cheese available on every catering menu."
          />

          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <a href={BUSINESS.phoneHref} className="btn-yolk">
              <PhoneIcon className="h-5 w-5" />
              Call {BUSINESS.phoneDisplay}
            </a>
            <a href={`mailto:${BUSINESS.email}?subject=Catering%20Inquiry`} className="btn-ink">
              <MailIcon className="h-5 w-5" />
              Email a Catering Inquiry
            </a>
          </div>
          <p className="mt-4 max-w-sm text-sm font-semibold text-umber">
            Planning an office breakfast, church group or event? We'll build a quote within one business day.
          </p>
        </div>

        <div>
          <ol className="grid gap-x-8 sm:grid-cols-2">
            {STEPS.map((step, i) => (
              <li key={step.title} className="border-t-4 border-ink py-5">
                <span className="font-display text-3xl font-extrabold text-yolk-deep">0{i + 1}</span>
                <h3 className="mt-2 font-display text-xl font-bold tracking-tight text-ink">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-umber">{step.body}</p>
              </li>
            ))}
          </ol>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="bg-ink p-6 text-paper">
              <AwardIcon className="h-7 w-7 text-yolk" />
              <h3 className="mt-3 font-display text-lg font-bold leading-snug">
                The winning mac, scaled for your whole crew
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-paper/75">
                The same {BUSINESS.award.dish.toLowerCase()} that won “People’s Choice” at {BUSINESS.award.festival},{' '}
                {BUSINESS.award.year}.
              </p>
            </div>
            <div className="border-4 border-ink p-6">
              <SunIcon className="h-7 w-7 text-yolk-deep" />
              <h3 className="mt-3 font-display text-lg font-bold leading-snug text-ink">Free coffee for veterans</h3>
              <p className="mt-2 text-sm leading-relaxed text-umber">
                We're proud to offer complimentary coffee to veterans at any catered event.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}
