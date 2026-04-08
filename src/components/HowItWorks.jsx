import { Disc3, MessageCircleQuestion, FileText, BookOpen } from 'lucide-react'

const STEPS = [
  {
    icon: Disc3,
    number: '01',
    title: 'Press record',
    description:
      'Pick up the Legacy Tape device, a familiar, one-button recorder designed for comfort, not complexity.',
  },
  {
    icon: MessageCircleQuestion,
    number: '02',
    title: 'Answer guided prompts',
    description:
      'AI-powered questions gently guide the conversation, drawing out deeper memories and follow-up details.',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Stories are organized',
    description:
      'Every recording is transcribed, cleaned up, and sorted into structured chapters automatically.',
  },
  {
    icon: BookOpen,
    number: '04',
    title: 'Receive your book',
    description:
      'Stories become a professionally formatted, printed hardcover book: a real, physical legacy your family keeps forever.',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-tape-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simple enough for anyone. Powerful enough to preserve a lifetime.
          </h2>
          <p className="mt-4 text-lg text-white/60">
            Four steps from spoken memory to a book on your shelf.
          </p>
        </div>

        <div className="relative mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Connector line (desktop only) */}
          <div className="absolute top-14 left-[12.5%] right-[12.5%] hidden h-px border-t border-dashed border-white/10 lg:block" />

          {STEPS.map((step) => {
            const Icon = step.icon
            return (
              <div key={step.number} className="relative text-center">
                <div className="relative z-10 mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10">
                  <Icon size={24} className="text-amber" />
                </div>
                <div className="mb-2 text-xs font-semibold tracking-widest text-amber/70 uppercase">
                  Step {step.number}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/50">
                  {step.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
