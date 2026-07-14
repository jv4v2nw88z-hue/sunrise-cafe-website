import { BUSINESS, HOURS } from '../data/business'
import { Section, SectionHeading } from './Section'
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons'

export default function Contact() {
  const todayIndex = new Date().getDay()

  return (
    <Section id="contact" className="border-t-4 border-ink bg-paper py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="contact"
          eyebrow="Visit Us"
          title="Find us on Coolidge Ave"
          intro="Easy parking, hot coffee, and a table waiting. Come hungry, leave happy."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div className="flex flex-col gap-8">
            <address className="not-italic">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-ink">
                <MapPinIcon className="h-5 w-5 text-yolk-deep" />
                Sunrise Cafe
              </h3>
              <p className="mt-2 pl-7 font-semibold leading-relaxed text-umber">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
              </p>
              <div className="mt-4 flex flex-col gap-2.5 pl-7">
                <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 font-bold text-brick hover:text-ink">
                  <PhoneIcon className="h-4 w-4" />
                  {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex items-center gap-2 break-all font-bold text-brick hover:text-ink"
                >
                  <MailIcon className="h-4 w-4 shrink-0" />
                  {BUSINESS.email}
                </a>
              </div>
              <a
                href={BUSINESS.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-yolk mt-6 w-full sm:w-auto"
              >
                <MapPinIcon className="h-5 w-5" />
                Get Directions
              </a>
            </address>

            <div className="border-t-4 border-ink pt-6">
              <h3 className="flex items-center gap-2 font-display text-xl font-bold tracking-tight text-ink">
                <ClockIcon className="h-5 w-5 text-yolk-deep" />
                Hours
              </h3>
              <table className="mt-3 w-full text-left">
                <caption className="sr-only">Weekly hours for Sunrise Cafe</caption>
                <tbody>
                  {HOURS.map((row, i) => {
                    const isToday = i === todayIndex
                    return (
                      <tr
                        key={row.day}
                        className={`border-b border-umber/15 last:border-0 ${isToday ? 'bg-crust' : ''}`}
                      >
                        <th
                          scope="row"
                          className={`py-2 pl-2 font-bold ${row.closed ? 'text-umber/50' : 'text-ink'}`}
                        >
                          {row.day}
                          {isToday && (
                            <span className="ml-2 bg-ink px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-caps text-yolk">
                              Today
                            </span>
                          )}
                        </th>
                        <td
                          className={`py-2 pr-2 text-right font-semibold ${
                            row.closed ? 'text-umber/50' : 'text-umber'
                          }`}
                        >
                          {row.hours}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <div className="min-h-[24rem] border-4 border-ink">
            <iframe
              title="Map showing Sunrise Cafe at 117 E Coolidge Ave, Battle Creek, MI 49017"
              src={BUSINESS.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
