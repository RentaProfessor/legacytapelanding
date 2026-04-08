import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import CassetteLogo from './CassetteLogo'

const SECTION_LINKS = [
  { label: 'How It Works', hash: 'how-it-works' },
  { label: 'The Book', hash: 'the-book' },
  { label: 'Features', hash: 'features' },
  { label: 'Pricing', hash: 'pricing' },
  { label: 'FAQ', hash: 'faq' },
]

export default function Navbar({ onOpenWaitlist }) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  const sectionHref = (hash) => (pathname === '/' ? `#${hash}` : `/#${hash}`)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/80 backdrop-blur-lg border-b border-metallic/40">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <CassetteLogo size={44} className="text-tape-black" animated />
          <span className="font-serif text-xl font-semibold tracking-tight text-charcoal">
            Legacy Tape
          </span>
        </Link>

        <ul className="hidden items-center gap-6 lg:flex">
          {SECTION_LINKS.map((link) => (
            <li key={link.hash}>
              <a
                href={sectionHref(link.hash)}
                className="text-sm font-medium text-graphite transition-colors hover:text-charcoal"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              to="/about"
              className="text-sm font-medium text-graphite transition-colors hover:text-charcoal"
            >
              About
            </Link>
          </li>
        </ul>

        <button
          type="button"
          onClick={onOpenWaitlist}
          className="hidden rounded-full bg-amber px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-amber-dark hover:shadow-md lg:inline-block"
        >
          Join the Waitlist
        </button>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg p-2 text-graphite lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="border-t border-metallic/40 bg-cream/95 backdrop-blur-lg lg:hidden">
          <ul className="flex flex-col gap-1 px-6 py-4">
            {SECTION_LINKS.map((link) => (
              <li key={link.hash}>
                <a
                  href={sectionHref(link.hash)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-graphite transition-colors hover:bg-metallic/20 hover:text-charcoal"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to="/about"
                className="block rounded-lg px-3 py-2.5 text-sm font-medium text-graphite transition-colors hover:bg-metallic/20 hover:text-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
            </li>
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
