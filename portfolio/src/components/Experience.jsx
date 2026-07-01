const entries = [
  {
    version: 'v0.1',
    tag: 'diploma',
    title: 'Diploma in Information Technology',
    detail:
      'Built the fundamentals — programming logic, databases, and web basics. First real exposure to writing code that other people could read.',
    status: 'done',
  },
  {
    version: 'v0.4',
    tag: 'project',
    title: 'Coffee Bar Website',
    detail:
      'A frontend-only landing page for a fictional coffee bar. Focused on layout, typography, and a clean menu presentation.',
    status: 'done',
  },
  {
    version: 'v0.6',
    tag: 'project',
    title: 'Sortify — Sports Equipment Website',
    detail:
      'A storefront-style site for sports equipment, covering product listings, categories, and a browsing experience.',
    status: 'done',
  },
  {
    version: 'v0.8',
    tag: 'degree',
    title: 'Degree in IT — in progress',
    detail:
      'Currently pursuing my full degree, going deeper into the concepts the diploma introduced.',
    status: 'active',
  },
  {
    version: 'v0.9',
    tag: 'internship',
    title: 'Internship @ Softcoding',
    detail:
      'Building a complete restaurant website for a live client — from layout to responsive polish.',
    status: 'active',
  },
  {
    version: 'v1.0',
    tag: 'next',
    title: 'What\'s next',
    detail: 'Open to internships and junior frontend roles where I can keep shipping.',
    status: 'upcoming',
  },
]

const statusStyle = {
  done: { dot: 'bg-teal', label: 'merged', text: 'text-teal' },
  active: { dot: 'bg-amber animate-pulse', label: 'in progress', text: 'text-amber' },
  upcoming: { dot: 'bg-paper/30', label: 'planned', text: 'text-paper/40' },
}

export default function Experience() {
  return (
    <section id="journey" className="py-20 md:py-28 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-14">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-amber">
            /journey
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            Build log
          </h2>
          <p className="text-paper/60 mt-3 max-w-xl">
            My education and projects, laid out the way I'd read a changelog.
          </p>
        </div>

        <div className="relative pl-6 md:pl-10">
          <div className="absolute left-[7px] md:left-[11px] top-2 bottom-2 w-px bg-paper/15" />

          <div className="flex flex-col gap-10">
            {entries.map((e) => {
              const s = statusStyle[e.status]
              return (
                <div key={e.version} className="relative">
                  <div
                    className={`absolute -left-6 md:-left-10 top-1.5 w-3.5 h-3.5 rounded-full ${s.dot} ring-4 ring-ink`}
                  />
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <span className="font-mono-tag text-sm text-teal">{e.version}</span>
                    <span className="font-mono-tag text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full border border-paper/20 text-paper/50">
                      {e.tag}
                    </span>
                    <span className={`font-mono-tag text-[10px] uppercase tracking-widest ${s.text}`}>
                      {s.label}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-xl md:text-2xl">{e.title}</h3>
                  <p className="text-paper/60 mt-2 max-w-xl leading-relaxed">{e.detail}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
