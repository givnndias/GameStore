import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-2xl font-extrabold text-violet-400">
          GameStore
        </Link>

        <ul className="flex items-center gap-6">
          <li>
            <Link
              to="/"
              className="font-medium text-slate-200 transition hover:text-violet-400"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/produtos"
              className="font-medium text-slate-200 transition hover:text-violet-400"
            >
              Produtos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header