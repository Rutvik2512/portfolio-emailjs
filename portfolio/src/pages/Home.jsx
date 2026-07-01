import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'

const teasers = [
  {
    to: '/about',
    tag: '/about',
    title: 'The build log',
    desc: 'Diploma, degree, and my internship at Softcoding — laid out like a changelog.',
  },
  {
    to: '/projects',
    tag: '/projects',
    title: 'What I\'ve shipped',
    desc: 'Coffee Bar, Sortify, and the live restaurant website I\'m building right now.',
  },
  {
    to: '/contact',
    tag: '/contact',
    title: 'Get in touch',
    desc: 'Open to internships and junior frontend roles — send a message.',
  },
]

export default function Home() {
  return (
    <>
      <Hero />
      <section className="py-20 md:py-28 bg-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-3 gap-6">
          {teasers.map((t) => (
            <Link
              key={t.to}
              to={t.to}
              className="group bg-paper-dim border border-ink/10 rounded-2xl p-6 flex flex-col hover:border-amber/40 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="font-mono-tag text-xs text-amber mb-3">{t.tag}</span>
              <h3 className="font-display font-semibold text-xl mb-2">{t.title}</h3>
              <p className="text-ink/60 text-sm leading-relaxed flex-1">{t.desc}</p>
              <span className="flex items-center gap-1 font-mono-tag text-xs uppercase tracking-wider text-ink/40 group-hover:text-amber transition-colors mt-4">
                Explore <ArrowRight size={14} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
