import './Header.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logos/logo.svg'

const Header = () => {
  return (
    <div className="Header">
      <img className="Header__logo" src={logo} alt="Logo de Cero" />
      <nav className="Header__navegacion">
        <Link to="/sobre" className="Header__link" href="#hola">Sobre Cero</Link>
        <Link to="/contacto" className="Header__link" href="#hola">Contáctanos</Link>
        <button className="Header__cta">Empieza ya</button>
      </nav>
    </div>
  )
}

export default Header
