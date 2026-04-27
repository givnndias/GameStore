import "../css/produto.css"

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
    <main className="produtos">
      <section className="produtos-header">
        <h1>Nossos Jogos</h1>
        <p>
          Escolha seu próximo game favorito e mergulhe em novas aventuras.
        </p>
      </section>

      <section className="grid-produtos">
        {jogos.map((jogo, index) => (
          <div className="card-produto" key={index}>
            <img src={jogo.imagem} alt={jogo.titulo} />

            <div className="card-info">
              <h2>{jogo.titulo}</h2>
              <p>{jogo.descricao}</p>
              <span>{jogo.preco}</span>
              <button>Comprar</button>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}

export default Produto