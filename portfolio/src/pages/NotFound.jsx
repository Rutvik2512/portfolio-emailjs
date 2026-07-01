import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="pt-16 min-h-[70vh] flex items-center justify-center bg-paper">
      <div className="text-center px-6">
        <span className="font-mono-tag text-amber text-sm">error: 404</span>
        <h1 className="font-display font-extrabold text-6xl md:text-8xl mt-2 mb-4">
          Not found
        </h1>
        <p className="text-ink/60 mb-8">
          This route doesn't exist — maybe it hasn't shipped yet.
        </p>
        <Link
          to="/"
          className="font-mono-tag text-xs uppercase tracking-wider bg-ink text-paper px-6 py-3 rounded-full hover:bg-amber hover:text-ink transition-colors"
        >
          Back home
        </Link>
      </div>
    </div>
  )
}
