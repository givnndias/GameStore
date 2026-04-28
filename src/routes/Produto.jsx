import Card from "../components/Card"

import game1 from "../assets/game1.png"
import game2 from "../assets/game2.png"
import game3 from "../assets/game3.png"
import game4 from "../assets/game4.png"

const Produto = () => {
  const jogos = [
    {
      imagem: game1,
      titulo: "The Legend of Zelda: Tears of the Kingdom",
      descricao:
        "Explore Hyrule em uma aventura épica cheia de mistérios, ação e liberdade.",
      preco: "R$ 349,90"
    },
    {
      imagem: game2,
      titulo: "Super Bomberman R",
      descricao:
        "Divirta-se em batalhas explosivas com estratégia, velocidade e muita diversão.",
      preco: "R$ 149,90"
    },
    {
      imagem: game3,
      titulo: "Mario Kart 8 Deluxe",
      descricao:
        "Corra com seus personagens favoritos em pistas criativas e cheias de emoção.",
      preco: "R$ 299,90"
    },
    {
      imagem: game4,
      titulo: "God of War Ragnarök",
      descricao:
        "Acompanhe Kratos e Atreus em uma jornada intensa pela mitologia nórdica.",
      preco: "R$ 249,90"
    }
  ]

  return (
    <main className="min-h-screen px-6 py-12 text-white">
      <section className="mx-auto max-w-6xl text-center">
        <span className="mb-4 inline-block rounded-full bg-purple-500/20 px-4 py-2 text-sm font-semibold text-purple-300">
          Catálogo GameStore
        </span>

        <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
          Nossos Jogos
        </h1>

        <p className="mx-auto mb-12 max-w-2xl text-base leading-relaxed text-slate-400 md:text-lg">
          Escolha seu próximo game favorito e mergulhe em novas aventuras com
          os melhores títulos da nossa loja.
        </p>

        <section className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {jogos.map((jogo, index) => (
            <Card
              key={index}
              imagem={jogo.imagem}
              titulo={jogo.titulo}
              descricao={jogo.descricao}
              preco={jogo.preco}
              botaoTexto="Comprar"
            />
          ))}
        </section>
      </section>
    </main>
  )
}

export default Produto