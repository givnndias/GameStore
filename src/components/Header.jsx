import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-extrabold text-violet-400">
          GameStore
        </h1>

        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="font-medium text-slate-200 transition hover:text-violet-400"
          >
            Home
          </Link>

          <Link
            to="/produto"
            className="font-medium text-slate-200 transition hover:text-violet-400"
          >
            Produto
          </Link>
        </div>
      </nav>
    </header>
  )
}

export default Header