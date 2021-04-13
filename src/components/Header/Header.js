import './Header.css'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import logo from '../../assets/logos/logo.svg'

const Header = () => {

  const { path } = useRouteMatch()
  const history = useHistory()

  return (
    <div className="Header">
      <Link to="/">
        <img className="Header__logo" src={logo} alt="Logo de Cero" />
      </Link>
      <nav className="Header__navegacion">
        <Link to="/sobre" className="Header__link" href="#hola">Sobre Cero</Link>
        <Link to="/contacto" className="Header__link" href="#hola">Contáctanos</Link>
        <button onClick={() => history.push('/contacto')} className="Header__cta">Empieza ya</button>
      </nav>
    </div>
  )
}

export default Header
