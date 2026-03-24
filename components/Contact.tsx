'use client'
import { useReveal } from '../hooks/useReveal'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div ref={ref} className="reveal">
          <div className="font-mono text-forest-400 text-sm tracking-widest mb-4">05 / CONTACT</div>
          <h2 className="font-display text-4xl md:text-6xl text-star-100 mb-6">
            Let&apos;s <span className="gradient-text">build</span> something
          </h2>
          <p className="text-star-300/60 text-lg mb-12 leading-relaxed font-body">
            I&apos;m open to fullstack opportunities. If you have a project that needs
            end-to-end development or a team looking for a reliable builder —
            let&apos;s talk.
          </p>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-3 gap-4 mb-12">
            {[
              { label: 'Email', value: 'anhtuvu2413@gmail.com', href: 'mailto:anhtuvu2413@gmail.com', icon: '✉' },
              { label: 'Phone', value: '0354 394 229', href: 'tel:0354394229', icon: '☏' },
              { label: 'Location', value: 'Hoài Đức, Hà Nội', href: '#', icon: '◎' },
            ].map(c => (
              <a key={c.label} href={c.href}
                className="glass-card rounded-2xl p-5 block text-left hover:border-forest-500/40 transition-all group">
                <div className="text-2xl mb-3 text-forest-400">{c.icon}</div>
                <div className="text-xs text-star-300/40 font-mono tracking-wide mb-1">{c.label}</div>
                <div className="text-sm text-star-200 font-body group-hover:text-forest-400 transition-colors">{c.value}</div>
              </a>
            ))}
          </div>

          <a
            href="mailto:anhtuvu2413@gmail.com"
            className="inline-block px-10 py-4 bg-forest-500 text-night-950 rounded-full font-body font-medium tracking-wide text-lg hover:bg-forest-400 transition-all duration-300 hover:shadow-[0_0_40px_rgba(74,222,128,0.5)] animate-glow"
          >
            Say hello ✦
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-24 text-center">
        <div className="divider-forest mb-8" />
        <p className="text-star-300/30 text-xs font-mono tracking-widest">
          DESIGNED & BUILT BY VŨ ANH TÚ · 2025 · UNDER THE STARS
        </p>
        <div className="mt-4 text-2xl opacity-30 animate-float">✦</div>
      </div>
    </section>
  )
}
