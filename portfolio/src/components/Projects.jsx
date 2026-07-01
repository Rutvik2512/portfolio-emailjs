import { Coffee, Dumbbell, UtensilsCrossed, ArrowUpRight } from 'lucide-react'

const projects = [
  {
    icon: Coffee,
    name: 'coffee-bar-website',
    title: 'Coffee Bar Website',
    description:
      'A frontend-only landing page for a coffee bar concept — hero, menu section, and a warm, inviting layout built with attention to typography and spacing.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'Frontend only',
    statusColor: 'text-amber border-amber/30 bg-amber/10',
  },
  {
    icon: Dumbbell,
    name: 'sortify',
    title: 'Sortify',
    description:
      'A sports equipment website with product browsing and category-based layout, focused on a clear, usable storefront experience.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    status: 'Frontend project',
    statusColor: 'text-teal border-teal/30 bg-teal/10',
  },
  {
    icon: UtensilsCrossed,
    name: 'restaurant-website',
    title: 'Restaurant Website',
    description:
      'Live client project built during my internship at Softcoding — full restaurant website covering menu, sections for reservations, and responsive layout.',
    stack: ['React', 'Tailwind CSS'],
    status: 'In progress @ Softcoding',
    statusColor: 'text-ink border-ink/20 bg-ink/5',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-paper-dim">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-14">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-amber">
            /projects
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            What I've shipped
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="group bg-paper border border-ink/10 rounded-2xl p-6 flex flex-col hover:border-amber/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl bg-ink flex items-center justify-center">
                  <p.icon size={20} className="text-amber" />
                </div>
                <ArrowUpRight
                  size={18}
                  className="text-ink/20 group-hover:text-amber transition-colors"
                />
              </div>

              <span className="font-mono-tag text-xs text-ink/40 mb-1">{p.name}</span>
              <h3 className="font-display font-semibold text-xl mb-3">{p.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed mb-6 flex-1">{p.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-mono-tag text-[10px] uppercase tracking-wider bg-ink/5 text-ink/60 px-2 py-1 rounded-md"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <span
                className={`font-mono-tag text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border w-fit ${p.statusColor}`}
              >
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
