import { ArrowRight, Disc3, Repeat, Check } from 'lucide-react'

const DEVICE_FEATURES = [
  'Retro-inspired physical recorder',
  'One-button recording',
  'Built-in AI interview prompts',
  'Wi-Fi sync to companion app',
  'Premium build quality',
]

const SUB_FEATURES = [
  'Automatic transcription',
  'Chapter organization & cleanup',
  'Ghostwriter narrative mode',
  'Family companion app access',
  'Book & PDF export',
  'Encrypted cloud storage',
]

export default function Pricing({ onOpenWaitlist }) {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Simple, honest pricing
          </h2>
          <p className="mt-4 text-lg text-graphite">
            One device. One subscription. Everything your family needs to preserve a lifetime of stories.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 md:grid-cols-2">
          {/* Device */}
          <div className="rounded-3xl border border-metallic/50 bg-warm-white p-8 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-tape-black">
              <Disc3 size={22} className="text-amber" />
            </div>
            <h3 className="text-sm font-semibold tracking-widest text-muted-gray uppercase">
              The Device
            </h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-serif text-5xl font-bold tracking-tight text-charcoal">$199</span>
              <span className="text-2xl font-bold text-charcoal">.99</span>
            </div>
            <p className="mt-1 text-sm text-muted-gray">One-time purchase</p>

            <ul className="mt-6 space-y-3">
              {DEVICE_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-graphite">
                  <Check size={16} className="mt-0.5 shrink-0 text-amber" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Subscription */}
          <div className="relative rounded-3xl border-2 border-amber bg-warm-white p-8 shadow-sm">
            <div className="absolute -top-3.5 right-6 rounded-full bg-amber px-4 py-1 text-xs font-semibold text-white">
              Required
            </div>
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber/10">
              <Repeat size={22} className="text-amber" />
            </div>
            <h3 className="text-sm font-semibold tracking-widest text-muted-gray uppercase">
              Partner Subscription
            </h3>
            <div className="mt-3 flex items-baseline gap-1">
              <span className="font-serif text-5xl font-bold tracking-tight text-charcoal">$25</span>
              <span className="text-lg font-medium text-muted-gray">/month</span>
            </div>
            <p className="mt-1 text-sm text-muted-gray">Powers transcription, AI & cloud</p>

            <ul className="mt-6 space-y-3">
              {SUB_FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-graphite">
                  <Check size={16} className="mt-0.5 shrink-0 text-amber" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-amber/20 transition-all hover:bg-amber-dark hover:shadow-xl hover:shadow-amber/30"
          >
            Join the Waitlist — Lock In Early Pricing
            <ArrowRight size={16} />
          </button>
          <p className="mt-4 text-xs text-muted-gray">
            Founding families receive priority shipping and the best price guaranteed.
          </p>
        </div>
      </div>
    </section>
  )
}
