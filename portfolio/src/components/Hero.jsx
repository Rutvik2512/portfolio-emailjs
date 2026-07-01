import { Link } from 'react-router-dom'
import { ArrowDown, Circle } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-32 pb-24 md:pt-44 md:pb-32 overflow-hidden bg-ink text-paper">
      <div className="absolute inset-0 bg-grid bg-grid opacity-40 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-amber/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 md:px-8">
        <div className="flex items-center gap-2 mb-6 font-mono-tag text-xs uppercase tracking-widest text-teal">
          <Circle size={8} className="fill-teal text-teal animate-pulse" />
          status: currently building
        </div>

        <h1 className="font-display font-extrabold text-4xl sm:text-5xl md:text-7xl leading-[1.05] tracking-tight max-w-4xl">
          Rutvik Dhanorkar
        </h1>
        <p className="font-display text-xl sm:text-2xl md:text-3xl text-paper/70 mt-4 max-w-2xl">
          IT student &amp; frontend developer, shipping real projects one commit at a time.
        </p>

        <p className="font-body text-base md:text-lg text-paper/60 mt-6 max-w-xl leading-relaxed">
          Diploma holder in IT, now pursuing my degree, and currently interning at{' '}
          <span className="text-paper font-medium">Softcoding</span> — where I'm building a
          full restaurant website from the ground up.
        </p>

        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            to="/projects"
            className="font-mono-tag text-xs uppercase tracking-wider bg-amber text-ink px-6 py-3 rounded-full font-medium hover:bg-amber-soft transition-colors"
          >
            View projects
          </Link>
          <Link
            to="/contact"
            className="font-mono-tag text-xs uppercase tracking-wider border border-paper/30 text-paper px-6 py-3 rounded-full hover:border-amber hover:text-amber transition-colors"
          >
            Get in touch
          </Link>
        </div>

        <Link
          to="/about"
          className="mt-16 flex items-center gap-2 text-paper/40 hover:text-amber font-mono-tag text-xs transition-colors w-fit"
        >
          <ArrowDown size={14} />
          read the build log
        </Link>
      </div>
    </section>
  )
}
