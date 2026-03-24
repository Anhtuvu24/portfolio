'use client'
import { useReveal } from '../hooks/useReveal'

// 3 tiers — honest, no arbitrary %
// Primary: dùng hàng ngày, tự tin ship production
// Proficient: đã làm dự án thực tế, cần warm-up nhẹ
// Familiar: đã tiếp xúc / học, không phải thế mạnh chính

const tiers = [
  {
    label: 'Primary',
    desc: 'Ship production daily',
    dot: 'bg-forest-400',
    border: 'border-forest-500/30',
    textColor: 'text-forest-400',
    groups: [
      { title: 'Languages', items: ['TypeScript', 'JavaScript'] },
      { title: 'Frontend', items: ['ReactJS', 'React Native', 'Next.js', 'Redux / Redux-Saga', 'React Router'] },
      { title: 'Styling', items: ['Tailwind CSS', 'Ant Design', 'LESS / SASS'] },
      { title: 'Networking', items: ['RESTful APIs', 'WebSocket', 'Axios', 'SocketIO'] },
    ],
  },
  {
    label: 'Proficient',
    desc: 'Used in real projects',
    dot: 'bg-star-300',
    border: 'border-star-300/25',
    textColor: 'text-star-300',
    groups: [
      { title: 'Backend', items: ['Node.js', 'ExpressJS'] },
      { title: 'Storage', items: ['MySQL', 'S3', 'MinIO'] },
      { title: 'Domain', items: ['Web3 / MetaMask', 'OCR Workflows', 'System Architecture'] },
      { title: 'Tooling', items: ['Git / GitHub / Bitbucket', 'Jira / Trello', 'Agile / Scrum'] },
    ],
  },
  {
    label: 'Familiar',
    desc: 'Explored, not primary',
    dot: 'bg-star-300/30',
    border: 'border-star-300/10',
    textColor: 'text-star-300/50',
    groups: [
      { title: 'Languages', items: ['C / C++', 'C#', 'Java'] },
      { title: 'UI', items: ['MUI', 'CKEditor 5'] },
      { title: 'Concepts', items: ['OOP', 'Data Structures & Algorithms', 'SQL'] },
    ],
  },
]

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div ref={ref} className="reveal">
          <div className="font-mono text-forest-400 text-sm tracking-widest mb-4">04 / SKILLS</div>
          <h2 className="font-display text-4xl md:text-5xl text-star-100 mb-4">
            My <span className="gradient-text">toolkit</span>
          </h2>
          <p className="text-star-300/40 text-sm font-mono mb-16 tracking-wide">
            Grouped by actual usage — no arbitrary percentages.
          </p>

          <div className="space-y-10">
            {tiers.map((tier) => (
              <div key={tier.label} className={`glass-card rounded-2xl p-6 md:p-8 border ${tier.border}`}>
                {/* Tier header */}
                <div className="flex items-center gap-3 mb-6">
                  <span className={`w-2.5 h-2.5 rounded-full ${tier.dot} flex-shrink-0`} />
                  <span className={`font-display text-lg ${tier.textColor}`}>{tier.label}</span>
                  <span className="text-star-300/30 text-xs font-mono">— {tier.desc}</span>
                </div>

                {/* Skill groups in a responsive grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
                  {tier.groups.map((group) => (
                    <div key={group.title}>
                      <div className="text-xs text-star-300/30 font-mono tracking-widest uppercase mb-3">
                        {group.title}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {group.items.map((item) => (
                          <span
                            key={item}
                            className="skill-badge text-xs px-2.5 py-1 rounded-md font-mono"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
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
