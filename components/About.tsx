'use client'
import { useReveal } from '../hooks/useReveal'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal grid md:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <div className="font-mono text-forest-400 text-sm tracking-widest mb-4">01 / ABOUT</div>
            <h2 className="font-display text-4xl md:text-5xl text-star-100 mb-6 leading-tight">
              A developer who codes<br />
              <span className="gradient-text">under the stars</span>
            </h2>
            <div className="space-y-4 text-star-300/70 leading-relaxed font-body">
              <p>
                Fullstack Developer with 4 years of experience building scalable web applications.
                I&apos;ve shipped production systems in AI document processing, real-time chat, Web3 payments,
                and high-traffic news platforms.
              </p>
              <p>
                I&apos;m a person of the <span className="text-forest-400">Wood element (Mệnh Mộc)</span> —
                I believe in steady growth, deep roots, and building things meant to last.
                My best ideas come late at night, sitting under an open sky with nothing
                but stars and quiet code.
              </p>
              <p>
                Outside of work: stargazing, slow playlists, and exploring how AI is reshaping
                the tools we build with.
              </p>
            </div>

            {/* Quick facts */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { label: 'Years experience', value: '4+' },
                { label: 'Companies', value: '3' },
                { label: 'Projects shipped', value: '10+' },
                { label: 'Location', value: 'Hà Nội' },
              ].map(f => (
                <div key={f.label} className="glass-card p-4 rounded-xl">
                  <div className="font-display text-2xl text-forest-400 text-glow">{f.value}</div>
                  <div className="text-xs text-star-300/50 mt-1 font-body tracking-wide">{f.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — avatar placeholder + decorative */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-forest-500/10 blur-2xl scale-110" />
              {/* Avatar frame */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border border-forest-500/30 flex items-center justify-center overflow-hidden glass-card">
                {/* Placeholder initials */}
                <div className="text-center">
                  <div className="font-display text-6xl text-forest-400 text-glow">VAT</div>
                  <div className="text-xs text-star-300/40 mt-2 tracking-widest font-mono">REPLACE WITH PHOTO</div>
                </div>
              </div>

              {/* Orbiting badge */}
              <div className="absolute -top-4 -right-4 glass-card rounded-full px-3 py-2 text-xs font-mono text-forest-400 border border-forest-500/20">
                🌿 Mệnh Mộc
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-full px-3 py-2 text-xs font-mono text-star-300 border border-star-300/20">
                ✦ Hà Nội
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
