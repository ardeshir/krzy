import { Outlet, Link } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="min-h-screen bg-bg text-fg">
      <div className="max-w-3xl mx-auto px-6 py-8">
        <header className="border-b border-muted pb-4 mb-8">
          <nav className="flex flex-wrap gap-4 items-baseline">
            <Link to="/" className="font-mono text-2xl font-bold text-accent no-underline hover:no-underline">
              krzy.ai
            </Link>
            <span className="text-muted italic flex-grow hidden sm:inline">
              Who benefits from this machine?
            </span>
            <Link to="/posts" className="text-link">Posts</Link>
            <Link to="/about" className="text-link">About</Link>
            <a href="https://univrs.io" className="text-link" target="_blank" rel="noopener noreferrer">
              Univrs.io
            </a>
          </nav>
        </header>

        <main className="min-h-[60vh]">
          <Outlet />
        </main>

        <footer className="mt-16 pt-4 border-t border-muted text-muted text-sm text-center">
          <p>The shadow of <a href="https://univrs.io" className="text-link">Univrs.io</a></p>
          <p>Every build contains its critic.</p>
        </footer>
      </div>
    </div>
  )
}
