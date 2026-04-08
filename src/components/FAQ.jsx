import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const FAQS = [
  {
    q: 'Is Legacy Tape just a voice recorder?',
    a: 'No. Legacy Tape combines a physical recorder with AI-powered interviewing, automatic transcription, story organization into chapters, a family companion app, and optional ghostwriter polish. It is a complete memory preservation system, not a simple audio device.',
  },
  {
    q: 'Does my grandparent need a smartphone?',
    a: 'Not at all. The Legacy Tape device works completely on its own. Your grandparent presses one button and talks. The companion app is for family members who want to follow along, read chapters, and manage exports, but the storyteller never needs a phone or computer.',
  },
  {
    q: 'What does the companion app do?',
    a: 'The companion app lets family members see recording progress, read newly transcribed chapters, leave notes or follow-up questions, and export the full collection as a printed book, PDF, or digital archive.',
  },
  {
    q: 'Are stories automatically transcribed?',
    a: 'Yes. Every recording is transcribed using advanced speech recognition tuned for natural conversational speech, including handling of accents, pauses, and overlapping thoughts. You can review and edit any transcript in the app.',
  },
  {
    q: 'Can the stories become a printed book?',
    a: 'Absolutely. Once chapters are organized and optionally polished, you can export them as a beautifully formatted book, either a digital PDF or a professionally printed hardcover through our printing partner.',
  },
  {
    q: 'How much editing does the AI do?',
    a: 'You choose the level. At minimum, the AI transcribes and organizes. In cleanup mode, it removes filler words, false starts, and repetition. In ghostwriter mode, it smooths narrative flow while preserving meaning and voice. You always see and approve every edit.',
  },
  {
    q: 'Is the original recording always preserved?',
    a: 'Always. The original audio and unedited transcript are permanently saved. Any AI cleanup or ghostwriter edits are layered on top. Your family\'s original words are never overwritten.',
  },
  {
    q: 'When will Legacy Tape be available?',
    a: 'We are currently accepting early access signups for our founding families program. Join the waitlist to be among the first to receive a device and lock in early pricing.',
  },
  {
    q: 'Is my family\'s data private and secure?',
    a: 'Yes. All recordings and transcripts are encrypted in transit and at rest. Your family\'s stories are never used to train AI models and are never shared with third parties. You retain full ownership of every word.',
  },
  {
    q: 'What makes this different from StoryWorth or other recording apps?',
    a: 'StoryWorth relies on written email prompts, which many seniors find tedious or avoid. Generic recording apps capture audio but do nothing with it. Legacy Tape is the only solution that combines a physical device seniors already understand, AI-guided spoken interviews, automatic transcription and chapter organization, and a family app to keep everyone connected.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Questions families ask
          </h2>
          <p className="mt-4 text-lg text-graphite">
            Everything you need to know before joining the waitlist.
          </p>
        </div>

        <div className="mt-14 divide-y divide-metallic/30">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div key={index}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-medium text-charcoal">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-muted-gray transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${isOpen ? 'max-h-96 pb-5' : 'max-h-0'}`}
                >
                  <p className="text-sm leading-relaxed text-graphite">
                    {faq.a}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
