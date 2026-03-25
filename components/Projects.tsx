'use client'
import { useReveal } from '../hooks/useReveal'

const projects = [
  {
    name: 'MIRABO Chat Platform',
    desc: 'B2C real-time communication platform connecting organizations with their customers. Supports concurrent multi-room messaging with live presence.',
    stack: ['ReactJS', 'ExpressJS', 'SocketIO', 'MySQL', 'S3'],
    badge: 'Live',
    gradient: 'from-forest-700/20 to-forest-600/5',
    border: 'border-forest-500/20',
  },
  {
    name: 'pvi.docbase.ai',
    desc: 'AI-powered document processing platform for the insurance industry — OCR extraction, form verification, and real-time claim workflows.',
    stack: ['ReactJS', 'TypeScript', 'WebSocket', 'Ant Design'],
    badge: 'AI',
    gradient: 'from-star-400/10 to-star-300/5',
    border: 'border-star-300/15',
    url: 'https://pvi.docbase.ai',
  },
  {
    name: 'workevo.ai',
    desc: 'Web3 platform for OCR document verification with blockchain-based contractor payments. MetaMask integration for crypto payouts.',
    stack: ['ReactJS', 'Web3.js', 'MetaMask', 'WebSocket'],
    badge: 'Web3',
    gradient: 'from-forest-700/15 to-night-800/5',
    border: 'border-forest-600/15',
    url: 'https://workevo.ai',
  },
  {
    name: 'app.fastdoc.vn',
    desc: 'Document management and conversion platform — PDF to Word/Excel conversion with a clean, fast interface for business users.',
    stack: ['ReactJS', 'TypeScript', 'Ant Design', 'REST APIs'],
    badge: 'Tool',
    gradient: 'from-star-300/10 to-night-800/5',
    border: 'border-star-300/10',
    url: 'https://app.fastdoc.vn',
  },
  {
    name: 'VALA — Internal Social Network',
    desc: 'Work management and social network for BKAV employee groups. Built for web and mobile with React + React Native.',
    stack: ['ReactJS', 'React Native', 'Redux-Saga', 'REST APIs'],
    badge: 'Internal',
    gradient: 'from-forest-600/10 to-night-800/5',
    border: 'border-forest-600/10',
  },
  {
    name: 'HOME.VN News Platform',
    desc: 'High-traffic online news platform delivering real-time daily content with WebSocket feeds and dynamic content management.',
    stack: ['ReactJS', 'TypeScript', 'WebSocket', 'Ant Design'],
    badge: 'Media',
    gradient: 'from-star-400/8 to-night-800/5',
    border: 'border-star-400/10',
  },
]

const badgeColors: Record<string, string> = {
  Live: 'bg-forest-500/20 text-forest-400 border-forest-500/30',
  AI: 'bg-star-300/15 text-star-300 border-star-300/25',
  Web3: 'bg-forest-600/20 text-forest-400 border-forest-600/30',
  Tool: 'bg-star-400/15 text-star-400 border-star-400/20',
  Internal: 'bg-night-600/40 text-star-300/60 border-star-300/10',
  Media: 'bg-star-300/10 text-star-300/70 border-star-300/15',
}

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="font-mono text-forest-400 text-sm tracking-widest mb-4">03 / PROJECTS</div>
          <h2 className="font-display text-4xl md:text-5xl text-star-100 mb-16">
            Things I&apos;ve <span className="gradient-text">shipped</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <div
                key={i}
                className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${p.gradient} border ${p.border} flex flex-col`}
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-display text-lg text-star-100 leading-tight flex-1">{p.name}</h3>
                  <div className="flex items-center gap-2 ml-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full border font-mono flex-shrink-0 ${badgeColors[p.badge]}`}>
                      {p.badge}
                    </span>
                    {p.url && (
                      <a href={p.url} target="_blank" rel="noopener noreferrer"
                        className="text-star-300/40 hover:text-forest-400 transition-colors flex-shrink-0">
                        <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.5">
                          <path d="M10 4H14M14 4V8M14 4L6 12M4 4H2a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1v-2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-star-300/60 text-sm leading-relaxed font-body flex-1 mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-forest-500/10">
                  {p.stack.map(s => (
                    <span key={s} className="text-xs font-mono text-forest-400/60 border border-forest-500/15 rounded px-2 py-0.5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
