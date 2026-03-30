import {
  SlidersHorizontal,
  BrainCircuit,
  FileAudio,
  LayoutList,
  Sparkles,
  Users,
} from 'lucide-react'

const FEATURES = [
  {
    icon: SlidersHorizontal,
    title: 'Familiar physical controls',
    benefit: 'No learning curve for seniors.',
    result:
      'Grandparents actually pick it up and press record — because it looks and feels like something they already know.',
  },
  {
    icon: BrainCircuit,
    title: 'AI-guided interviewing',
    benefit: 'Better questions, richer stories.',
    result:
      'Context-aware follow-ups draw out details that a generic voice memo never would — the name of the street, the year it happened, why it mattered.',
  },
  {
    icon: FileAudio,
    title: 'Automatic transcription',
    benefit: 'No manual typing, ever.',
    result:
      'Every spoken word is transcribed accurately, so nothing is lost and everything is searchable from day one.',
  },
  {
    icon: LayoutList,
    title: 'Chapter organization',
    benefit: 'Memories stay structured.',
    result:
      'Stories are grouped into themes and chapters — childhood, career, family, life lessons — ready to browse or print.',
  },
  {
    icon: Sparkles,
    title: 'Cleanup and ghostwriter mode',
    benefit: 'Clearer storytelling, preserved meaning.',
    result:
      'Filler words, false starts, and rambling are smoothed out while the original voice and intent stay intact.',
  },
  {
    icon: Users,
    title: 'Family companion app',
    benefit: 'Everyone stays connected.',
    result:
      'Children and grandchildren follow recording progress in real time, leave comments, and receive new chapters as they are completed.',
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Everything it takes to turn memories into a legacy
          </h2>
          <p className="mt-4 text-lg text-graphite">
            Designed so the storyteller can focus on remembering — and the family gets something they will treasure forever.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="group rounded-2xl border border-metallic/50 bg-warm-white p-6 shadow-sm transition-all hover:border-metallic hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cream ring-1 ring-metallic/40">
                  <Icon size={20} className="text-amber" />
                </div>
                <h3 className="text-base font-semibold text-charcoal">
                  {feature.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-amber">
                  {feature.benefit}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {feature.result}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
