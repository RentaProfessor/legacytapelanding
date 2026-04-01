import { useRef, useState } from 'react'
import { Play, Pause } from 'lucide-react'

export default function ProductDemo() {
  const videoRef = useRef(null)
  const [playing, setPlaying] = useState(false)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }
    setPlaying(!playing)
  }

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
          <div className="overflow-hidden rounded-3xl border border-metallic/50 bg-tape-black p-3 shadow-2xl">
            <div
              className="relative cursor-pointer overflow-hidden rounded-2xl"
              onClick={togglePlay}
            >
              <video
                ref={videoRef}
                src="/demo.mp4"
                className="w-full rounded-2xl"
                playsInline
                onEnded={() => setPlaying(false)}
                onPause={() => setPlaying(false)}
                onPlay={() => setPlaying(true)}
              />

              {/* Play/pause overlay — fades out while playing */}
              <div
                className={`absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300 ${playing ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-amber/90 shadow-lg shadow-amber/20 transition-all hover:bg-amber hover:scale-105">
                  {playing ? (
                    <Pause size={32} className="text-white" fill="white" />
                  ) : (
                    <Play size={32} className="ml-1 text-white" fill="white" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
