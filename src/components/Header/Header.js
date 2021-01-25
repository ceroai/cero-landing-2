import './Header.css'
import logo from '../../assets/logo.svg'

const Header = () => {
  return (
    <div className="Header">
      <img className="Header__logo" src={logo} alt="Logo de Cero" />
      <nav className="Header__navegacion">
        <a className="Header__link" href="#hola">Nosotros</a>
        <a className="Header__link" href="#hola">Trabajemos juntos</a>
        <a className="Header__link" href="#hola">Contacto</a>
      </nav>
      <button className="Header__cta">Empieza ya</button>
    </div>
  )
}

export default Header
