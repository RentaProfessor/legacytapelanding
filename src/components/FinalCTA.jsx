import { ArrowRight, Play } from 'lucide-react'

export default function FinalCTA({ onOpenWaitlist }) {
  return (
    <section className="bg-tape-black py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
          The stories your family will wish it asked for
          <span className="text-amber">.</span>
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/60">
          Every year that passes, details fade, voices change, and memories
          become harder to reach. Legacy Tape turns those stories into a
          beautiful, printed book — a family heirloom you can hold in your hands.
          Start while there is still time.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white/80 transition-all hover:border-white/30 hover:text-white"
          >
            <Play size={16} />
            Watch the Demo
          </a>
        </div>

        <p className="mt-6 text-xs text-white/30">
          Free to join. No credit card required.
        </p>
      </div>
    </section>
  )
}
