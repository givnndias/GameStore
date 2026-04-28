import { Link } from "react-router-dom"

const Home = () => {
  return (
    <main className="min-h-[70vh] px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl rounded-3xl border border-slate-700 bg-gradient-to-br from-slate-900 via-slate-900 to-purple-950 px-6 py-20 text-center shadow-2xl">
        <span className="mb-4 inline-block rounded-full bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300">
          GameStore
        </span>

        <h1 className="mx-auto mb-5 max-w-4xl text-4xl font-extrabold leading-tight md:text-6xl">
          Bem-vindo à sua loja gamer favorita
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Descubra jogos incríveis, explore aventuras épicas e escolha seu
          próximo game favorito com praticidade, estilo e diversão.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/produtos"
            className="rounded-full bg-purple-600 px-8 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-purple-700"
          >
            Ver produtos
          </Link>

          <a
            href="#beneficios"
            className="rounded-full border border-slate-600 px-8 py-3 font-bold text-slate-200 transition hover:-translate-y-1 hover:border-purple-400 hover:text-white"
          >
            Saiba mais
          </a>
        </div>
      </section>

      <section id="beneficios" className="mx-auto mt-16 max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold md:text-4xl">
            Por que escolher a GameStore?
          </h2>

          <p className="text-slate-400">
            Uma experiência simples, moderna e feita para quem ama games.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-7 shadow-lg transition hover:-translate-y-2 hover:border-purple-500">
            <h3 className="mb-3 text-xl font-bold">
              Jogos selecionados
            </h3>
            <p className="leading-relaxed text-slate-400">
              Títulos escolhidos para diferentes estilos de jogadores, desde
              aventura até corrida e ação.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-7 shadow-lg transition hover:-translate-y-2 hover:border-purple-500">
            <h3 className="mb-3 text-xl font-bold">
              Compra rápida
            </h3>
            <p className="leading-relaxed text-slate-400">
              Visualize as informações dos games de forma clara e escolha seu
              produto com facilidade.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-700 bg-slate-900/80 p-7 shadow-lg transition hover:-translate-y-2 hover:border-purple-500">
            <h3 className="mb-3 text-xl font-bold">
              Preços acessíveis
            </h3>
            <p className="leading-relaxed text-slate-400">
              Games com valores organizados para deixar sua loja virtual mais
              realista e profissional.
            </p>
          </article>
        </div>
      </section>
    </main>
  )
}

export default Home