import ''

import{Link} from 'react-router-dom'

const Header = () => {
  return (
    <section className="header">
        <Link to="/" className="tlink">Home</Link>
        <Link to="/produto" className="tlink">Produto</Link>
    </section>
  )
}

export default Header