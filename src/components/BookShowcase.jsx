import { BookOpen, Printer, FileText, ArrowRight } from 'lucide-react'

export default function BookShowcase({ onOpenWaitlist }) {
  return (
    <section id="the-book" className="bg-tape-black py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Book mockup */}
          <div className="relative mx-auto w-full max-w-md lg:order-1">
            <div className="relative">
              {/* Book spine + cover */}
              <div className="relative mx-auto w-72 sm:w-80">
                {/* Shadow behind book */}
                <div className="absolute -inset-4 rounded-3xl bg-amber/5 blur-2xl" />

                {/* Book body */}
                <div className="relative overflow-hidden rounded-r-lg rounded-l-sm bg-gradient-to-br from-[#F5F0E8] to-[#E8E0D4] shadow-2xl">
                  {/* Spine edge */}
                  <div className="absolute top-0 left-0 h-full w-3 bg-gradient-to-r from-[#B8A89A] to-[#D4CFC8]" />

                  <div className="px-8 pt-12 pb-8 pl-10">
                    {/* Decorative top rule */}
                    <div className="mb-6 h-px bg-amber/30" />

                    <p className="text-[10px] font-medium tracking-[0.25em] text-amber/60 uppercase">
                      A Legacy Tape Book
                    </p>

                    <h3 className="mt-4 font-serif text-2xl leading-tight font-bold text-charcoal sm:text-3xl">
                      My Life Story
                    </h3>

                    <p className="mt-2 font-serif text-sm text-graphite italic">
                      The memories of Margaret Ellen Thompson
                    </p>

                    <div className="mt-8 h-px bg-metallic/40" />

                    {/* Chapter preview */}
                    <div className="mt-6 space-y-3">
                      <div className="flex items-baseline justify-between text-xs text-muted-gray">
                        <span>Chapter 1: The Early Years</span>
                        <span className="ml-2 border-b border-dotted border-metallic flex-1 mx-2" />
                        <span>1</span>
                      </div>
                      <div className="flex items-baseline justify-between text-xs text-muted-gray">
                        <span>Chapter 2: Growing Up on Pine Street</span>
                        <span className="ml-2 border-b border-dotted border-metallic flex-1 mx-2" />
                        <span>14</span>
                      </div>
                      <div className="flex items-baseline justify-between text-xs text-muted-gray">
                        <span>Chapter 3: Love & Marriage</span>
                        <span className="ml-2 border-b border-dotted border-metallic flex-1 mx-2" />
                        <span>32</span>
                      </div>
                      <div className="flex items-baseline justify-between text-xs text-muted-gray">
                        <span>Chapter 4: A Family of Our Own</span>
                        <span className="ml-2 border-b border-dotted border-metallic flex-1 mx-2" />
                        <span>51</span>
                      </div>
                      <div className="flex items-baseline justify-between text-xs text-muted-gray">
                        <span>Chapter 5: Lessons I Want You to Know</span>
                        <span className="ml-2 border-b border-dotted border-metallic flex-1 mx-2" />
                        <span>68</span>
                      </div>
                    </div>

                    <div className="mt-8 h-px bg-metallic/40" />

                    {/* Bottom decorative element */}
                    <div className="mt-6 flex justify-center">
                      <div className="h-6 w-6 rounded-full border border-amber/30 flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-amber/40" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Page edges */}
                <div className="absolute top-2 -right-1 h-[calc(100%-16px)] w-1 rounded-r bg-[#D8D0C4]" />
                <div className="absolute top-3 -right-2 h-[calc(100%-24px)] w-1 rounded-r bg-[#CCC4B8]" />
              </div>
            </div>
          </div>

          {/* Copy */}
          <div className="lg:order-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber/10 px-4 py-1.5 text-xs font-semibold text-amber">
              <BookOpen size={14} />
              The Final Product
            </div>

            <h2 className="font-serif text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Every recording becomes a
              <span className="text-amber"> real book.</span>
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-white/60">
              This is not just audio storage. Legacy Tape automatically
              transforms spoken stories into organized chapters, polished
              narratives, and a professionally printed hardcover book — something
              your family can hold, read, and pass down for generations.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <FileText size={20} className="mb-3 text-amber" />
                <h4 className="text-sm font-semibold text-white">Auto-organized chapters</h4>
                <p className="mt-1 text-xs text-white/40">Stories sorted by theme, time period, or topic</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <Printer size={20} className="mb-3 text-amber" />
                <h4 className="text-sm font-semibold text-white">Professionally printed</h4>
                <p className="mt-1 text-xs text-white/40">Hardcover book shipped directly to your family</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <BookOpen size={20} className="mb-3 text-amber" />
                <h4 className="text-sm font-semibold text-white">A family heirloom</h4>
                <p className="mt-1 text-xs text-white/40">Not a file on a phone — a real object on a shelf</p>
              </div>
            </div>

            <button
              type="button"
              onClick={onOpenWaitlist}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-amber px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-amber/20 transition-all hover:bg-amber-dark hover:shadow-xl hover:shadow-amber/30"
            >
              Start Your Family's Book
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
