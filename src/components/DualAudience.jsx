import { Heart, BookHeart } from 'lucide-react'

export default function DualAudience() {
  return (
    <section className="bg-tape-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Made for storytellers. Treasured by families.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Two audiences, one shared purpose — preserving what matters before it is gone.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {/* For storytellers */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber/10">
              <Heart size={24} className="text-amber" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              For the storyteller
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/60">
              Your grandparent, parent, or elder does not need to learn new
              technology. Legacy Tape feels like the tape recorders they grew up
              with — warm, familiar, and completely intuitive.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'No screens, no apps, no accounts to create',
                'One button to start recording',
                'Friendly prompts guide the conversation naturally',
                'Stories are captured exactly as they are told',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* For families */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-amber/10">
              <BookHeart size={24} className="text-amber" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              For the family
            </h3>
            <p className="mt-3 text-base leading-relaxed text-white/60">
              Children and grandchildren get something infinitely more valuable
              than scattered voice notes — a real, printed book of the stories
              told by the people who shaped their lives.
            </p>
            <ul className="mt-6 space-y-3">
              {[
                'Follow new chapters as they are recorded',
                'Read polished transcripts and narratives',
                'Receive a professionally printed hardcover book',
                'A physical heirloom for future generations',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-white/50">
                  <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-amber" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
