'use client'
import { useReveal } from '../hooks/useReveal'

const jobs = [
  {
    company: 'MIRABO',
    role: 'Fullstack Developer',
    period: '11/2025 – Present',
    color: 'forest',
    current: true,
    highlights: [
      'Independently designed system architecture for a B2C real-time chat platform connecting organizations with their customers.',
      'Built core messaging features with SocketIO + ExpressJS, supporting concurrent multi-room communication.',
      'Integrated S3/MinIO for media storage and led frontend with ReactJS + Tailwind for responsive UX.',
      'Proposed and shipped key product features based on client feedback, reducing requirements back-and-forth.',
    ],
    stack: ['TypeScript', 'ReactJS', 'ExpressJS', 'SocketIO', 'MySQL', 'S3', 'MinIO', 'Tailwind'],
  },
  {
    company: 'CVS – Computer Vision VN',
    role: 'Frontend Developer',
    period: '06/2024 – 11/2025',
    color: 'star',
    current: false,
    highlights: [
      'Developed and maintained frontend for 3 AI-powered platforms in the insurance and document processing industries.',
      'Implemented OCR document verification workflows with real-time data sync via WebSocket for fast insurance claim processing.',
      'Integrated Web3 / MetaMask blockchain payment flows into workevo.ai — a non-standard integration requiring deep API research.',
      'Reviewed UI/UX designs and provided feedback that improved usability before development, reducing rework cycles.',
    ],
    stack: ['TypeScript', 'ReactJS', 'Redux', 'Ant Design', 'WebSocket', 'Web3', 'MetaMask', 'CKEditor'],
    projects: ['pvi.docbase.ai', 'app.docbase.ai', 'workevo.ai', 'app.fastdoc.vn'],
  },
  {
    company: 'BKAV',
    role: 'Frontend Developer',
    period: '07/2022 – 03/2024',
    color: 'star',
    current: false,
    highlights: [
      'Built and maintained VALA — an internal social network and work management system for BKAV employee groups — on both web and mobile.',
      'Developed HOME.VN, a high-traffic online news platform, with real-time content feeds via RESTful APIs and WebSocket.',
      'Implemented complex state management using Redux-Saga for async data flows in enterprise-scale applications.',
      'Collaborated in cross-functional agile teams to deliver features on schedule with consistent quality.',
    ],
    stack: ['TypeScript', 'ReactJS', 'React Native', 'Redux-Saga', 'Ant Design', 'WebSocket'],
    projects: ['VALA', 'HOME.VN'],
  },
]

export default function Experience() {
  const ref = useReveal()

  return (
    <section id="experience" className="relative py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="font-mono text-forest-400 text-sm tracking-widest mb-4">02 / EXPERIENCE</div>
          <h2 className="font-display text-4xl md:text-5xl text-star-100 mb-16">
            Where I&apos;ve <span className="gradient-text">shipped</span>
          </h2>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />

            <div className="space-y-12">
              {jobs.map((job, i) => (
                <div key={i} className="relative md:pl-20">
                  {/* Circle on timeline */}
                  <div className={`absolute left-6 top-6 w-5 h-5 rounded-full border-2 hidden md:block
                    ${job.current ? 'bg-forest-400 border-forest-400 shadow-[0_0_20px_rgba(74,222,128,0.6)]' : 'bg-night-800 border-forest-600/40'}`}
                  />

                  <div className="glass-card rounded-2xl p-6 md:p-8">
                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h3 className="font-display text-xl text-star-100">{job.company}</h3>
                          {job.current && (
                            <span className="text-xs px-2 py-0.5 rounded-full bg-forest-500/20 text-forest-400 border border-forest-500/30 font-mono">
                              Current
                            </span>
                          )}
                        </div>
                        <div className="text-forest-400 font-body text-sm">{job.role}</div>
                      </div>
                      <div className="font-mono text-xs text-star-300/50 tracking-wide">{job.period}</div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {job.highlights.map((h, j) => (
                        <li key={j} className="flex gap-3 text-star-300/70 text-sm leading-relaxed font-body">
                          <span className="text-forest-400 mt-1 flex-shrink-0">▸</span>
                          {h}
                        </li>
                      ))}
                    </ul>

                    {/* Projects */}
                    {'projects' in job && job.projects && (
                      <div className="mb-4">
                        <span className="text-xs text-star-300/40 font-mono tracking-wide mr-3">PROJECTS</span>
                        {job.projects.map(p => (
                          <span key={p} className="inline-block mr-2 mb-1 text-xs font-mono text-star-400/70 border border-star-300/15 rounded px-2 py-0.5">
                            {p}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 pt-4 border-t border-forest-500/10">
                      {job.stack.map(s => (
                        <span key={s} className="skill-badge text-xs px-2.5 py-1 rounded-md font-mono">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
