export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-paper">
      <div className="max-w-6xl mx-auto px-6 md:px-8 grid md:grid-cols-[1fr_2fr] gap-10 md:gap-16">
        <div>
          <span className="font-mono-tag text-xs uppercase tracking-widest text-amber">
            /about
          </span>
        </div>
        <div>
          <h2 className="font-display font-bold text-3xl md:text-4xl mb-6">
            From diploma to degree, learning by building
          </h2>
          <p className="text-ink/70 leading-relaxed text-base md:text-lg mb-4">
            I started with a Diploma in IT, and I'm now continuing into a full degree in the
            same field — treating every semester as another release. Along the way I've picked
            up frontend development by actually shipping things: a coffee bar landing page, a
            sports-equipment storefront concept, and now, during my internship at{' '}
            <span className="text-ink font-medium">Softcoding</span>, a real restaurant website
            for a live client.
          </p>
          <p className="text-ink/70 leading-relaxed text-base md:text-lg">
            I like the frontend because it's where structure meets craft — clean components,
            readable layouts, and interactions that don't get in the user's way. That's the bar
            I hold my own projects to.
          </p>
        </div>
      </div>
    </section>
  )
}
