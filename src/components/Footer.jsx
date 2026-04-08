import { Link } from 'react-router-dom'
import CassetteLogo from './CassetteLogo'

const FOOTER_LINKS = {
  Product: [
    { label: 'How It Works', to: '/#how-it-works' },
    { label: 'The Book', to: '/#the-book' },
    { label: 'Features', to: '/#features' },
    { label: 'Pricing', to: '/#pricing' },
    { label: 'FAQ', to: '/#faq' },
  ],
  Company: [
    { label: 'About', to: '/about' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Data Security', href: '#' },
  ],
}

function FooterLink({ link }) {
  const className = 'text-sm text-white/40 transition-colors hover:text-white/70'
  if (link.to) {
    return (
      <Link to={link.to} className={className}>
        {link.label}
      </Link>
    )
  }
  return (
    <a href={link.href} className={className}>
      {link.label}
    </a>
  )
}

export default function Footer({ onOpenWaitlist }) {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2">
              <CassetteLogo size={32} className="text-white/80" />
              <span className="font-serif text-xl font-semibold text-white">
                Legacy Tape
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
              A retro-inspired memory preservation device that helps families
              capture, organize, and keep the stories that matter most.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                {category}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <FooterLink link={link} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Legacy Tape. All rights reserved.
          </p>
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="text-xs font-medium text-amber transition-colors hover:text-amber-dark"
          >
            Join the Waitlist &rarr;
          </button>
        </div>
      </div>
    </footer>
  )
}
