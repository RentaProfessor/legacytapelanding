import { Play } from 'lucide-react'

export default function ProductDemo() {
  return (
    <section id="demo" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
            See Legacy Tape in action
          </h2>
          <p className="mt-4 text-lg text-graphite">
            Watch how a simple recording becomes a structured, shareable family story.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl">
          {/* Video placeholder with product image background */}
          <div className="overflow-hidden rounded-3xl border border-metallic/50 bg-tape-black p-3 shadow-2xl">
            <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-2xl">
              <img
                src="/product-hero.png"
                alt="Legacy Tape device and companion app"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Play button overlay */}
              <button
                type="button"
                className="group relative z-10 flex h-20 w-20 items-center justify-center rounded-full bg-amber/90 shadow-lg shadow-amber/20 transition-all hover:bg-amber hover:scale-105 hover:shadow-xl hover:shadow-amber/30"
                aria-label="Play demo video"
              >
                <Play size={32} className="ml-1 text-white" fill="white" />
              </button>

              {/* Decorative elements */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full bg-soft-red/80 animate-pulse" />
                <span className="text-xs font-medium text-white/50">DEMO</span>
              </div>

              <div className="absolute right-5 bottom-5 left-5 z-10 flex items-center justify-between">
                <span className="text-xs text-white/40">0:00</span>
                <div className="mx-4 h-1 flex-1 rounded-full bg-white/20">
                  <div className="h-1 w-1/3 rounded-full bg-amber/60" />
                </div>
                <span className="text-xs text-white/40">2:34</span>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-muted-gray">
            Product demo — replace this placeholder with your video embed.
          </p>
        </div>
      </div>
    </section>
  )
}
