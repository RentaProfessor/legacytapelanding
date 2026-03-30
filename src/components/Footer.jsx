import CassetteLogo from './CassetteLogo'

const FOOTER_LINKS = {
  Product: [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ],
  Company: [
    { label: 'About', href: '#' },
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

export default function Footer({ onOpenWaitlist }) {
  return (
    <footer className="border-t border-white/10 bg-charcoal">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2">
              <CassetteLogo size={32} className="text-white/80" />
              <span className="font-serif text-xl font-semibold text-white">
                Legacy Tape
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/40">
              A retro-inspired memory preservation device that helps families
              capture, organize, and keep the stories that matter most.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-widest text-white/60 uppercase">
                {category}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/40 transition-colors hover:text-white/70"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
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
