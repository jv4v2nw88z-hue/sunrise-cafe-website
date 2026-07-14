import { motion } from 'framer-motion'
import { BUSINESS, HOURS } from '../data/business'
import { ENTRANCE, fadeUp, stagger, viewportOnce } from '../lib/motion'
import { Section, SectionHeading } from './Section'
import { ClockIcon, MailIcon, MapPinIcon, PhoneIcon } from './Icons'

export default function Contact() {
  const todayIndex = new Date().getDay()

  return (
    <Section id="contact" className="bg-cream-200/60 py-20 sm:py-28">
      <div className="container-page">
        <SectionHeading
          id="contact"
          eyebrow="Visit Us"
          title="Come hungry, leave happy"
          intro="Right on E Coolidge Ave in Battle Creek — easy parking, hot coffee, and a table waiting."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[5fr_6fr]">
          <motion.div
            variants={stagger(0.1)}
            initial={ENTRANCE}
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-5"
          >
            <motion.address variants={fadeUp} className="rounded-3xl bg-cream-50 p-7 not-italic shadow-soft">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-espresso-800">
                <MapPinIcon className="h-5 w-5 text-sunrise-600" />
                Find Us
              </h3>
              <p className="mt-3 font-semibold leading-relaxed text-espresso-700">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
              </p>
              <div className="mt-4 flex flex-col gap-2.5">
                <a
                  href={BUSINESS.phoneHref}
                  className="inline-flex items-center gap-2 font-bold text-sunrise-700 hover:text-sunrise-600"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {BUSINESS.phoneDisplay}
                </a>
                <a
                  href={`mailto:${BUSINESS.email}`}
                  className="inline-flex items-center gap-2 break-all font-bold text-sunrise-700 hover:text-sunrise-600"
                >
                  <MailIcon className="h-4 w-4 shrink-0" />
                  {BUSINESS.email}
                </a>
                <a
                  href={BUSINESS.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary mt-2 w-full sm:w-auto"
                >
                  <MapPinIcon className="h-5 w-5" />
                  Get Directions
                </a>
              </div>
            </motion.address>

            <motion.div variants={fadeUp} className="rounded-3xl bg-cream-50 p-7 shadow-soft">
              <h3 className="flex items-center gap-2 font-display text-xl font-semibold text-espresso-800">
                <ClockIcon className="h-5 w-5 text-sunrise-600" />
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
                        className={`border-b border-espresso-800/5 last:border-0 ${
                          isToday ? 'bg-sunrise-100/70' : ''
                        }`}
                      >
                        <th
                          scope="row"
                          className={`rounded-l-lg py-2 pl-2 font-bold ${
                            row.closed ? 'text-espresso-400' : 'text-espresso-800'
                          }`}
                        >
                          {row.day}
                          {isToday && (
                            <span className="ml-2 rounded-full bg-sunrise-600 px-2 py-0.5 text-[0.6rem] font-bold uppercase tracking-wide text-cream-50">
                              Today
                            </span>
                          )}
                        </th>
                        <td
                          className={`rounded-r-lg py-2 pr-2 text-right font-semibold ${
                            row.closed ? 'text-espresso-400' : 'text-espresso-600'
                          }`}
                        >
                          {row.hours}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </motion.div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial={ENTRANCE}
            whileInView="visible"
            viewport={viewportOnce}
            className="min-h-[22rem] overflow-hidden rounded-3xl shadow-soft"
          >
            <iframe
              title="Map showing Sunrise Cafe at 117 E Coolidge Ave, Battle Creek, MI 49017"
              src={BUSINESS.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="h-full w-full border-0"
            />
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
