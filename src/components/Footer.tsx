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
    <footer className="bg-espresso-900 text-cream-200" role="contentinfo">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#home" className="flex w-fit items-center gap-2.5" aria-label="Sunrise Cafe — back to top">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-sunrise-600 text-cream-50">
              <SunriseIcon className="h-5 w-5" />
            </span>
            <span className="leading-tight">
              <strong className="block font-display text-lg font-semibold text-cream-50">Sunrise Cafe</strong>
              <span className="block text-[0.7rem] font-bold uppercase tracking-[0.14em] text-cream-200/60">
                Battle Creek, MI
              </span>
            </span>
          </a>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-cream-200/75">{BUSINESS.tagline}</p>
          <a
            href={BUSINESS.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sunrise Cafe on Facebook"
            className="mt-5 inline-grid h-10 w-10 place-items-center rounded-full border border-cream-200/25 text-cream-200 transition-colors hover:border-sunrise-500 hover:text-sunrise-400"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>

        <nav aria-label="Footer">
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-cream-200/60">Navigate</h3>
          <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
            {NAV.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="font-semibold text-cream-200/85 transition-colors hover:text-honey-400">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.16em] text-cream-200/60">Get in Touch</h3>
          <ul className="mt-4 flex flex-col gap-3 text-sm">
            <li className="flex items-start gap-2.5">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-sunrise-400" />
              <address className="not-italic leading-relaxed text-cream-200/85">
                {BUSINESS.address.street}
                <br />
                {BUSINESS.address.city}, {BUSINESS.address.state} {BUSINESS.address.zip}
              </address>
            </li>
            <li>
              <a href={BUSINESS.phoneHref} className="flex items-center gap-2.5 font-semibold text-cream-200/85 hover:text-honey-400">
                <PhoneIcon className="h-4 w-4 shrink-0 text-sunrise-400" />
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${BUSINESS.email}`} className="flex items-center gap-2.5 break-all font-semibold text-cream-200/85 hover:text-honey-400">
                <MailIcon className="h-4 w-4 shrink-0 text-sunrise-400" />
                {BUSINESS.email}
              </a>
            </li>
            <li className="text-cream-200/70">{HOURS_SUMMARY}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream-200/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-5 text-xs text-cream-200/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Sunrise Cafe · {BUSINESS.address.street}, {BUSINESS.address.city},{' '}
            {BUSINESS.address.state} {BUSINESS.address.zip}
          </p>
          <p>
            Winner, “People’s Choice” &amp; “Loaded” — The Big Cheese {BUSINESS.award.year}
          </p>
        </div>
      </div>
    </footer>
  )
}
