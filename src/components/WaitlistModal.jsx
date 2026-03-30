import { useState, useEffect } from 'react'
import { X, ArrowRight, Check } from 'lucide-react'
import CassetteLogo from './CassetteLogo'

export default function WaitlistModal({ open, onClose }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setSubmitted(false)
      setEmail('')
      setName('')
      setRole('')
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-charcoal/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div className="relative w-full max-w-md animate-fade-in-up rounded-3xl border border-metallic/50 bg-warm-white p-8 shadow-2xl">
        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-muted-gray transition-colors hover:bg-metallic/20 hover:text-charcoal"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {submitted ? (
          /* Success state */
          <div className="py-6 text-center">
            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-amber/10">
              <Check size={28} className="text-amber" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-charcoal">
              You're on the list
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-graphite">
              Thank you for joining the Legacy Tape founding families waitlist.
              We'll be in touch soon with early access details.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 rounded-full bg-amber px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-amber-dark"
            >
              Done
            </button>
          </div>
        ) : (
          /* Form state */
          <>
            <div className="mb-6 text-center">
              <div className="mx-auto mb-4">
                <CassetteLogo size={48} className="mx-auto text-tape-black" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-charcoal">
                Join the Waitlist
              </h3>
              <p className="mt-2 text-sm text-graphite">
                Be among the first families to receive Legacy Tape.
                No credit card required.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="waitlist-name" className="mb-1.5 block text-xs font-medium text-charcoal">
                  Full name
                </label>
                <input
                  id="waitlist-name"
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Jane Smith"
                  className="w-full rounded-xl border border-metallic bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted-gray focus:border-amber focus:ring-2 focus:ring-amber/20 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="waitlist-email" className="mb-1.5 block text-xs font-medium text-charcoal">
                  Email address
                </label>
                <input
                  id="waitlist-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="jane@example.com"
                  className="w-full rounded-xl border border-metallic bg-white px-4 py-3 text-sm text-charcoal placeholder:text-muted-gray focus:border-amber focus:ring-2 focus:ring-amber/20 focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="waitlist-role" className="mb-1.5 block text-xs font-medium text-charcoal">
                  I am a...
                </label>
                <select
                  id="waitlist-role"
                  required
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full appearance-none rounded-xl border border-metallic bg-white px-4 py-3 text-sm text-charcoal focus:border-amber focus:ring-2 focus:ring-amber/20 focus:outline-none"
                >
                  <option value="" disabled>Select one</option>
                  <option value="child">Son or daughter wanting to preserve a parent's stories</option>
                  <option value="grandchild">Grandchild wanting to capture a grandparent's memories</option>
                  <option value="storyteller">The storyteller myself</option>
                  <option value="gift">Buying as a gift for a family member</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber/20 transition-all hover:bg-amber-dark hover:shadow-xl hover:shadow-amber/30"
              >
                Join the Waitlist
                <ArrowRight size={16} />
              </button>
            </form>

            <p className="mt-4 text-center text-[11px] text-muted-gray">
              We respect your privacy. No spam, ever.
            </p>
          </>
        )}
      </div>
    </div>
  )
}
