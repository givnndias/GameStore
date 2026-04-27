import styles from '../css/card.css'

const Card = ({ titulo, descricao, imagem, botaoTexto }) => {
  return (
    <div className={styles.card}>
      {imagem && (
        <img src={imagem} alt={titulo} className={styles.imagem} />
      )}
      <div className={styles.content}>
        <h2 className={styles.titulo}>{titulo}</h2>
        <p className={styles.descricao}>{descricao}</p>
        <button className={styles.botao}>
          {botaoTexto || 'Saiba mais'}
        </button>
      </div>
    </div>
  )
}



export default Card