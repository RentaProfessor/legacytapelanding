import { Check, X } from 'lucide-react'

const ROWS = [
  'Designed for seniors',
  'Physical device',
  'AI-guided interview',
  'Auto-organized chapters',
  'Family companion app',
  'Book-ready export',
]

const COMPETITORS = [
  { name: 'Voice Memos', values: [false, false, false, false, false, false] },
  { name: 'Journaling Apps', values: [false, false, false, false, false, false] },
  { name: 'Family History Services', values: [false, false, false, true, false, true] },
  { name: 'StoryWorth', values: [false, false, false, false, false, true] },
]

const LEGACY_VALUES = [true, true, true, true, true, true]

function Cell({ value, highlighted }) {
  if (value) {
    return (
      <div className={`flex items-center justify-center ${highlighted ? 'text-amber' : 'text-charcoal/60'}`}>
        <Check size={18} strokeWidth={2.5} />
      </div>
    )
  }
  return (
    <div className="flex items-center justify-center text-metallic">
      <X size={16} />
    </div>
  )
}

export default function Comparison() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            Built different. Not just another app.
          </h2>
          <p className="mt-4 text-lg text-graphite">
            See how Legacy Tape compares to the alternatives families usually settle for.
          </p>
        </div>

        {/* Mobile: stacked feature cards instead of a cramped table */}
        <div className="mx-auto mt-10 max-w-md space-y-3 md:hidden">
          {ROWS.map((row, rowIdx) => {
            const someHave = COMPETITORS.some((c) => c.values[rowIdx])
            return (
              <div key={row} className="rounded-2xl border border-metallic/50 bg-warm-white p-4">
                <p className="text-sm font-semibold text-charcoal">{row}</p>
                <div className="mt-3 flex items-center justify-between gap-3 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-semibold text-amber">
                    <Check size={14} strokeWidth={2.5} />
                    Legacy Tape
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-muted-gray">
                    {someHave ? (
                      'Only some alternatives'
                    ) : (
                      <>
                        <X size={14} />
                        The alternatives
                      </>
                    )}
                  </span>
                </div>
              </div>
            )
          })}
          <p className="pt-2 text-center text-xs text-muted-gray">
            Compared with voice memos, journaling apps, family history services, and StoryWorth.
          </p>
        </div>

        {/* Desktop: full comparison table */}
        <div className="mx-auto mt-14 hidden max-w-5xl overflow-x-auto md:block">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="border-b border-metallic/40">
                <th className="py-4 pr-4 text-left font-medium text-muted-gray" />
                <th className="px-3 py-4 text-center">
                  <div className="inline-flex flex-col items-center rounded-xl bg-amber/10 px-4 py-2">
                    <span className="font-semibold text-amber">Legacy Tape</span>
                  </div>
                </th>
                {COMPETITORS.map((c) => (
                  <th key={c.name} className="px-3 py-4 text-center font-medium text-muted-gray">
                    {c.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row, rowIdx) => (
                <tr key={row} className="border-b border-metallic/20">
                  <td className="py-4 pr-4 font-medium text-charcoal">{row}</td>
                  <td className="px-3 py-4">
                    <Cell value={LEGACY_VALUES[rowIdx]} highlighted />
                  </td>
                  {COMPETITORS.map((c) => (
                    <td key={c.name} className="px-3 py-4">
                      <Cell value={c.values[rowIdx]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
