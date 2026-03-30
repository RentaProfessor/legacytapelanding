import { Clock, Smartphone, Mic, Brain } from 'lucide-react'

const PROBLEMS = [
  {
    icon: Clock,
    title: 'We always think there\'s more time',
    description:
      'Most families assume they\'ll sit down someday to record those stories. Someday rarely comes, and the details fade with every passing year.',
  },
  {
    icon: Smartphone,
    title: 'Technology gets in the way',
    description:
      'Asking a grandparent to download an app, create an account, and navigate a phone interface is a recipe for frustration and silence.',
  },
  {
    icon: Mic,
    title: 'Voice notes become a graveyard',
    description:
      'Even when families do record, the result is hours of scattered audio with no transcription, no structure, and no way to turn it into something lasting.',
  },
  {
    icon: Brain,
    title: 'Memory doesn\'t wait',
    description:
      'The stories that define a family — the childhood adventures, the hard-won wisdom, the quiet moments — are stored in one irreplaceable place.',
  },
]

export default function Problem() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            The stories that matter most are the ones we never record
          </h2>
          <p className="mt-4 text-lg text-graphite">
            Every family faces the same quiet regret. Here is why it keeps happening.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((problem) => {
            const Icon = problem.icon
            return (
              <div
                key={problem.title}
                className="group rounded-2xl border border-metallic/50 bg-warm-white p-6 shadow-sm transition-all hover:border-metallic hover:shadow-md"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-cream ring-1 ring-metallic/40">
                  <Icon size={20} className="text-amber" />
                </div>
                <h3 className="text-base font-semibold text-charcoal">
                  {problem.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-graphite">
                  {problem.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
