import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-ink/10 py-10">
      <div className="max-w-6xl mx-auto px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-mono-tag text-xs text-ink/40">
          © {new Date().getFullYear()} Rutvik Dhanorkar. Built with React &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="GitHub" className="text-ink/40 hover:text-amber transition-colors">
            <Github size={18} />
          </a>
          <a href="#" aria-label="LinkedIn" className="text-ink/40 hover:text-amber transition-colors">
            <Linkedin size={18} />
          </a>
          <a href="#contact" aria-label="Email" className="text-ink/40 hover:text-amber transition-colors">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
