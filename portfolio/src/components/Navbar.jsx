import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', to: '/about' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur border-b border-ink/10' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-display font-bold text-lg tracking-tight">
          rutvik<span className="text-amber">.</span>dev
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `font-mono-tag text-xs uppercase tracking-wider transition-colors ${
                  isActive ? 'text-amber' : 'text-ink/70 hover:text-amber'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="font-mono-tag text-xs uppercase tracking-wider bg-ink text-paper px-4 py-2 rounded-full hover:bg-amber hover:text-ink transition-colors"
          >
            Hire me
          </Link>
        </div>

        <button
          className="md:hidden p-2"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-paper border-t border-ink/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `font-mono-tag text-sm uppercase tracking-wider ${
                  isActive ? 'text-amber' : 'text-ink/80'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
