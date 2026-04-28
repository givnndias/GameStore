const Card = ({ titulo, descricao, imagem, preco, botaoTexto }) => {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900/90 shadow-xl transition duration-300 hover:-translate-y-2 hover:border-purple-500 hover:shadow-purple-500/20">
      {imagem && (
        <div className="bg-slate-950 p-5">
          <img
            src={imagem}
            alt={titulo}
            className="h-56 w-full object-contain"
          />
        </div>
      )}

      <div className="flex min-h-[260px] flex-col p-5 text-left">
        <h2 className="mb-3 min-h-[58px] text-lg font-bold leading-tight text-white">
          {titulo}
        </h2>

        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
          {descricao}
        </p>

        <span className="mb-4 block text-lg font-extrabold text-white">
          {preco}
        </span>

        <button className="w-full rounded-xl bg-purple-600 px-4 py-3 font-bold text-white transition hover:scale-[1.02] hover:bg-purple-700">
          {botaoTexto || "Comprar"}
        </button>
      </div>
    </article>
  )
}

export default Card