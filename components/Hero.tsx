'use client'
import { useEffect, useRef } from 'react'

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      ref.current.style.opacity = '1'
      ref.current.style.transform = 'translateY(0)'
    }
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
      {/* Radial forest glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-forest-600/10 blur-[100px] rounded-full" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] bg-star-400/5 blur-[80px] rounded-full" />
      </div>

      {/* Tree silhouette bottom */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
        <svg viewBox="0 0 1440 200" className="w-full" preserveAspectRatio="none">
          <path d="M0,200 L0,160 Q80,100 160,140 Q200,120 240,80 Q280,40 320,70 Q360,100 400,60 Q440,20 480,50 Q520,80 560,40 Q600,0 640,30 Q680,60 720,20 Q760,0 800,25 Q840,50 880,15 Q920,0 960,30 Q1000,60 1040,25 Q1080,0 1120,35 Q1160,70 1200,40 Q1240,10 1280,50 Q1320,90 1360,60 Q1400,30 1440,70 L1440,200 Z"
            fill="#0d1526" />
          <path d="M0,200 L0,180 Q120,150 200,170 Q300,140 400,160 Q500,130 600,150 Q700,120 800,145 Q900,115 1000,140 Q1100,110 1200,135 Q1320,105 1440,130 L1440,200 Z"
            fill="#080d1a" />
        </svg>
        {/* Forest trees */}
        <svg viewBox="0 0 1440 180" className="absolute bottom-0 w-full tree-svg" preserveAspectRatio="none">
          {[
            { x: 80, h: 120, w: 40 }, { x: 160, h: 100, w: 32 }, { x: 220, h: 140, w: 44 },
            { x: 320, h: 110, w: 36 }, { x: 400, h: 150, w: 48 }, { x: 480, h: 90, w: 30 },
            { x: 560, h: 130, w: 42 }, { x: 640, h: 160, w: 52 }, { x: 720, h: 105, w: 34 },
            { x: 800, h: 145, w: 46 }, { x: 880, h: 115, w: 38 }, { x: 960, h: 135, w: 44 },
            { x: 1040, h: 100, w: 32 }, { x: 1120, h: 155, w: 50 }, { x: 1200, h: 120, w: 40 },
            { x: 1300, h: 140, w: 44 }, { x: 1380, h: 95, w: 30 },
          ].map((t, i) => (
            <g key={i} opacity={0.6 + Math.random() * 0.4}>
              {/* Tree trunk */}
              <rect x={t.x - 3} y={180 - t.h * 0.3} width={6} height={t.h * 0.35} fill="#15803d44" />
              {/* Tree layers */}
              <polygon points={`${t.x},${180 - t.h} ${t.x - t.w / 2},${180 - t.h * 0.4} ${t.x + t.w / 2},${180 - t.h * 0.4}`}
                fill="#15803d" opacity="0.7" />
              <polygon points={`${t.x},${180 - t.h * 0.75} ${t.x - t.w * 0.6 / 2},${180 - t.h * 0.3} ${t.x + t.w * 0.6 / 2},${180 - t.h * 0.3}`}
                fill="#16a34a" opacity="0.8" />
              <polygon points={`${t.x},${180 - t.h * 0.5} ${t.x - t.w * 0.4 / 2},${180 - t.h * 0.2} ${t.x + t.w * 0.4 / 2},${180 - t.h * 0.2}`}
                fill="#22c55e" opacity="0.6" />
            </g>
          ))}
        </svg>
      </div>

      {/* Content */}
      <div
        ref={ref}
        className="relative z-10 text-center max-w-4xl mx-auto"
        style={{ opacity: 0, transform: 'translateY(40px)', transition: 'all 1.2s cubic-bezier(0.16,1,0.3,1)' }}
      >
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-forest-600/40 bg-forest-600/10 text-forest-400 text-sm mb-8 font-body tracking-wide">
          <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="font-display text-6xl md:text-8xl mb-4 leading-none">
          <span className="text-star-100 text-glow-star block">Vũ Anh Tú</span>
        </h1>

        {/* Title */}
        <div className="font-mono text-sm md:text-base text-forest-400 tracking-[0.3em] uppercase mb-6">
          ✦ Fullstack Developer ✦
        </div>

        {/* Tagline */}
        <p className="text-star-300/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12 font-body">
          Building scalable web applications across{' '}
          <span className="text-forest-400">AI</span>,{' '}
          <span className="text-star-300">insurance</span>, and{' '}
          <span className="text-forest-400">Web3</span> domains.
          3+ years turning complex requirements into clean, real-time systems.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#experience"
            className="px-8 py-3 bg-forest-500 text-night-950 rounded-full font-body font-medium tracking-wide hover:bg-forest-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(74,222,128,0.4)] animate-glow"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-star-300/30 text-star-300 rounded-full font-body tracking-wide hover:border-star-300/60 hover:text-star-100 transition-all duration-300"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll hint */}
        <div className="mt-20 flex flex-col items-center gap-2 text-star-300/40 text-xs tracking-widest animate-float">
          <span>SCROLL</span>
          <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
            <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1"/>
            <circle cx="8" cy="8" r="2" fill="currentColor" className="animate-bounce"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
