import { BUSINESS, HOURS } from '../data/business'
import { AwardIcon, ClockIcon, PhoneIcon } from './Icons'

/** Hours-at-a-glance + award + call-to-action, directly below the fold. */
export default function HoursStrip() {
  const todayIndex = new Date().getDay()
  const today = HOURS[todayIndex]

  return (
    <section aria-label="Hours, award and contact at a glance" className="border-y-4 border-ink bg-crust">
      <div className="container-page grid gap-px overflow-hidden sm:grid-cols-3">
        <div className="flex items-start gap-3 py-6 pr-6 sm:py-8">
          <ClockIcon className="mt-1 h-6 w-6 shrink-0 text-ink" />
          <div>
            <h2 className="font-display text-lg font-bold leading-tight">Hours</h2>
            <p className="mt-1 text-sm font-semibold text-umber">
              Mon &amp; Wed–Sun 6AM–2PM
              <br />
              Tuesday closed
            </p>
            <p className="mt-1.5 text-xs font-bold uppercase tracking-caps text-brick">
              {today.closed ? 'Closed today' : `Open today ${today.hours.replace(':00 ', '')}`}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t-2 border-ink/10 py-6 pr-6 sm:border-l-2 sm:border-t-0 sm:pl-6 sm:py-8">
          <AwardIcon className="mt-1 h-6 w-6 shrink-0 text-ink" />
          <div>
            <h2 className="font-display text-lg font-bold leading-tight">The Big Cheese, 2023</h2>
            <p className="mt-1 text-sm font-semibold text-umber">
              “People’s Choice” &amp; “Loaded” winner — white cheddar mac with brisket burnt ends.
            </p>
            <a href="#about" className="mt-1.5 inline-block text-xs font-bold uppercase tracking-caps text-brick underline-offset-4 hover:underline">
              The story
            </a>
          </div>
        </div>

        <div className="flex items-start gap-3 border-t-2 border-ink/10 py-6 sm:border-l-2 sm:border-t-0 sm:pl-6 sm:py-8">
          <PhoneIcon className="mt-1 h-6 w-6 shrink-0 text-ink" />
          <div>
            <h2 className="font-display text-lg font-bold leading-tight">Grab a booth</h2>
            <p className="mt-1 text-sm font-semibold text-umber">
              {BUSINESS.address.street}, {BUSINESS.address.city}
            </p>
            <a href={BUSINESS.phoneHref} className="mt-1.5 inline-block text-xs font-bold uppercase tracking-caps text-brick underline-offset-4 hover:underline">
              Call {BUSINESS.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
