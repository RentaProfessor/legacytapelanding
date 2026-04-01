import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import CassetteLogo from './CassetteLogo'

const NAV_LINKS = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'The Book', href: '#the-book' },
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ onOpenWaitlist }) {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-metallic/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Wordmark */}
        <a href="#" className="flex items-center gap-2">
          <CassetteLogo size={44} className="text-tape-black" animated />
          <span className="font-serif text-xl font-semibold tracking-tight text-charcoal">
            Legacy Tape
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-graphite transition-colors hover:text-charcoal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <button
          type="button"
          onClick={onOpenWaitlist}
          className="hidden rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-amber-dark hover:shadow-md md:inline-block"
        >
          Join the Waitlist
        </button>

        {/* Mobile menu button */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-graphite md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="border-t border-metallic/40 bg-cream/95 backdrop-blur-lg md:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-graphite transition-colors hover:bg-metallic/20 hover:text-charcoal"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="mt-2">
              <button
                type="button"
                className="block w-full rounded-full bg-amber px-5 py-2.5 text-center text-sm font-semibold text-white shadow-sm transition-all hover:bg-amber-dark"
                onClick={() => { setMobileOpen(false); onOpenWaitlist() }}
              >
                Join the Waitlist
              </button>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
