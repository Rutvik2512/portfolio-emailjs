const groups = [
  {
    label: 'Frontend',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Tailwind CSS'],
  },
  {
    label: 'Foundations',
    items: ['Responsive Design', 'Git & GitHub', 'REST APIs (basics)'],
  },
  {
    label: 'Currently learning',
    items: ['React ecosystem', 'Form handling (Formik/Yup)', 'Deployment workflows'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-8">
        <div className="mb-14">
          <span className="font-mono-tag text-xs uppercase tracking-widest text-amber">
            /skills
          </span>
          <h2 className="font-display font-bold text-3xl md:text-4xl mt-3">
            Toolkit
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {groups.map((g) => (
            <div key={g.label}>
              <h3 className="font-mono-tag text-xs uppercase tracking-widest text-ink/40 mb-4">
                {g.label}
              </h3>
              <ul className="flex flex-col gap-3">
                {g.items.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                    <span className="font-display text-lg text-ink/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
