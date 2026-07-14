import { BUSINESS, HOURS_SUMMARY } from '../data/business'
import { FacebookIcon, MailIcon, MapPinIcon, PhoneIcon, SunriseIcon } from './Icons'

const NAV = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#catering', label: 'Catering' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="grain relative bg-ink-deep text-paper/80" role="contentinfo">
      <div className="container-page relative grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#home" className="flex w-fit items-center gap-2.5" aria-label="Sunrise Cafe — back to top">
            <span className="grid h-10 w-10 place-items-center bg-yolk text-ink-deep">
              <SunriseIcon className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <strong className="block font-display text-lg font-bold tracking-tight text-paper">Sunrise Cafe</strong>
              <span className="block text-[0.65rem] font-bold uppercase tracking-caps text-paper/50">
                Battle Creek · Est. 6AM
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">{BUSINESS.tagline}</p>
          <a
            href={BUSINESS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sunrise Cafe on Facebook"
            className="mt-5 inline-grid h-10 w-10 place-items-center border-2 border-paper/25 text-paper/80 transition-colors hover:border-yolk hover:text-yolk"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-xs font-bold uppercase tracking-caps text-paper/50">Navigate</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-semibold text-paper/80 transition-colors hover:text-yolk">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-caps text-paper/50">Get in Touch</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-yolk" />
              <address className="not-italic leading-relaxed">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
              </address>
            </li>
            <li>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2.5 font-semibold hover:text-yolk">
                <PhoneIcon className="h-4 w-4 shrink-0 text-yolk" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2.5 break-all font-semibold hover:text-yolk">
                <MailIcon className="h-4 w-4 shrink-0 text-yolk" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="text-paper/60">{HOURS_SUMMARY}</li>
          </ul>
        </div>
      </div>

      <div className="relative border-t border-paper/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-paper/45 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Sunrise Cafe · {BUSINESS.address.street}, {BUSINESS.address.city},{' '}
            {BUSINESS.address.state} {BUSINESS.address.zip}
          </p>
          <p>Winner, “People’s Choice” &amp; “Loaded” — The Big Cheese {BUSINESS.award.year}</p>
        </div>
      </div>
    </footer>
  )
}
