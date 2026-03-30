import { ArrowRight, Play } from 'lucide-react'

export default function Hero({ onOpenWaitlist }) {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Copy */}
          <div className="max-w-xl animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-metallic bg-warm-white px-4 py-1.5 text-xs font-medium text-graphite shadow-sm">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-soft-red animate-pulse" />
              Now accepting early access signups
            </div>

            <h1 className="font-serif text-4xl leading-tight font-bold tracking-tight text-charcoal sm:text-5xl lg:text-6xl">
              Turn memories into a legacy with{' '}
              <span className="text-amber">Legacy Tape.</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-graphite sm:text-xl">
              A retro-inspired recording device paired with AI that helps
              grandparents tell their life stories — and turns them into a
              beautiful, printed book the whole family can hold onto forever.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenWaitlist}
                className="inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber/20 transition-all hover:bg-amber-dark hover:shadow-xl hover:shadow-amber/30"
              >
                Join the Waitlist
                <ArrowRight size={16} />
              </button>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 rounded-full border border-metallic bg-warm-white px-7 py-3.5 text-sm font-semibold text-charcoal shadow-sm transition-all hover:border-charcoal/20 hover:shadow-md"
              >
                <Play size={16} />
                See How It Works
              </a>
            </div>

            <p className="mt-6 text-xs text-muted-gray">
              No credit card required. Be the first to experience Legacy Tape.
            </p>
          </div>

          {/* Product image */}
          <div className="animate-fade-in-up [animation-delay:200ms]">
            <div className="relative mx-auto w-full max-w-lg">
              <img
                src="/product-hero.png"
                alt="Legacy Tape recorder device alongside the companion mobile app"
                className="w-full rounded-2xl shadow-2xl"
              />
              <div className="absolute -inset-6 -z-10 rounded-[40px] bg-amber/5 blur-3xl" />
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 -z-20 h-[600px] w-[600px] rounded-full bg-amber/[0.03] blur-3xl" />
      <div className="absolute bottom-0 left-0 -z-20 h-[400px] w-[400px] rounded-full bg-metallic/20 blur-3xl" />
    </section>
  )
}
