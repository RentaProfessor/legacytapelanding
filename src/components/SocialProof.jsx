import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'This is the first piece of technology my dad actually wanted to use. He picked it up and started talking about his childhood within five minutes.',
    name: 'Sarah M.',
    relation: 'Daughter, age 42',
  },
  {
    quote:
      'Instead of random recordings scattered across phones, we finally had organized chapters of her life. It changed how our family talks about the past.',
    name: 'James K.',
    relation: 'Grandson, age 28',
  },
  {
    quote:
      'It felt familiar to her immediately. No passwords, no frustration. She just pressed record and started telling stories she had never shared before.',
    name: 'Maria L.',
    relation: 'Granddaughter, age 34',
  },
]

const PRESS = ['TechCrunch', 'Wired', 'Fast Company', 'The Verge', 'NPR']

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Families are already preserving their stories
          </h2>
          <p className="mt-4 text-lg text-graphite">
            Early testers on why Legacy Tape matters to their families.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="relative rounded-2xl border border-metallic/50 bg-warm-white p-6 shadow-sm"
            >
              <Quote size={28} className="mb-4 text-amber/30" />
              <blockquote className="text-base leading-relaxed text-charcoal">
                "{t.quote}"
              </blockquote>
              <div className="mt-6 border-t border-metallic/30 pt-4">
                <p className="text-sm font-semibold text-charcoal">{t.name}</p>
                <p className="text-xs text-muted-gray">{t.relation}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Press placeholder */}
        <div className="mt-16 border-t border-metallic/30 pt-10">
          <p className="mb-6 text-center text-xs font-medium tracking-widest text-muted-gray uppercase">
            As featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {PRESS.map((name) => (
              <span
                key={name}
                className="text-lg font-semibold tracking-tight text-metallic select-none"
              >
                {name}
              </span>
            ))}
          </div>
          <p className="mt-4 text-center text-[10px] text-muted-gray/60">
            Replace with actual press logos when available.
          </p>
        </div>
      </div>
    </section>
  )
}
