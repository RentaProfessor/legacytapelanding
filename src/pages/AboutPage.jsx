import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

export default function AboutPage({ onOpenWaitlist }) {
  return (
    <main className="pt-28 pb-20 md:pt-36 md:pb-28">
      <article className="mx-auto max-w-2xl px-6">
        <Link
          to="/"
          className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-graphite transition-colors hover:text-charcoal"
        >
          <ArrowLeft size={16} />
          Back to home
        </Link>

        <h1 className="font-serif text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
          Why Legacy Tape exists
        </h1>

        <div className="mt-10 space-y-6 text-base leading-relaxed text-graphite">
          <p>
            I started Legacy Tape after seeing how easily meaningful stories can go
            unrecorded, not because families don't care, but because the tools meant
            to help often make it harder than it should be.
          </p>
          <p>
            That became personal for me through my grandmother, Marlene, and her
            friend Dana. After Dana&apos;s stroke, communication became much more
            difficult. Typing was exhausting, and a lot of the voice tools that were
            supposed to make things easier only added friction. They captured every
            pause, every filler word, and every broken thought without doing much to
            help shape it into something clear or usable. I saw the same kind of
            problem with older family members more broadly. Many products depend on
            small text, confusing screens, and app experiences that assume everyone
            is comfortable with technology.
          </p>
          <p>
            Legacy Tape came from wanting a better answer to that problem. I wanted
            something simple, familiar, and unintimidating. Something a person could
            pick up and use without instructions, without accounts, and without
            feeling like they were being asked to learn a new system just to tell
            their story.
          </p>
          <p>
            That is why the product takes the form of a cassette inspired recorder.
            It gives people a straightforward way to speak while the technology
            works quietly in the background to organize, clean up, and preserve what
            matters. The point is not to put more software in front of people. The
            point is to remove barriers so families can capture stories that might
            otherwise disappear.
          </p>
          <p>
            Legacy Tape is built around a simple belief. The people with the most
            valuable memories are often the ones least well served by modern
            technology. I wanted to build something that meets them where they are
            and helps families hold on to what matters before it is too late.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap gap-4">
          <button
            type="button"
            onClick={onOpenWaitlist}
            className="rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber/20 transition-all hover:bg-amber-dark"
          >
            Join the waitlist
          </button>
          <Link
            to="/"
            className="rounded-full border border-metallic bg-warm-white px-7 py-3.5 text-sm font-semibold text-charcoal shadow-sm transition-all hover:border-charcoal/20 hover:shadow-md"
          >
            Explore the product
          </Link>
        </div>
      </article>
    </main>
  )
}
