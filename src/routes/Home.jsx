import "../css/home.css"

const Home = () => {
  return (
    <main className="home">
      <section className="home-banner">
        <h1>Bem-vindo a GameStore</h1>
        <p>
          Descubra os melhores jogos, explore novos mundos e leve sua experiência gamer para outro nível.
        </p>

        <a href="/produtos" className="home-btn">
          Ver produtos
        </a>
      </section>

      <section className="home-info">
        <h2>Por que escolher a GameStore?</h2>

        <div className="home-cards">
          <div className="home-card">
            <h3>Jogos selecionados</h3>
            <p>Somente os melhores títulos para você aproveitar ao máximo.</p>
          </div>

          <div className="home-card">
            <h3>Compra rápida</h3>
            <p>Processo simples e rápido para você começar a jogar.</p>
          </div>

          <div className="home-card">
            <h3>Preços acessíveis</h3>
            <p>Ofertas especiais e preços pensados para todos.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home