import './Header.css'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import logo from '../../assets/logos/logo.svg'
import classNames from 'classnames'

const Header = () => {

  const { path } = useRouteMatch()
  const history = useHistory()

  const oscuro = path === '/contacto'

  return (
    <div className="Header">
      <Link to="/">
        <img
          className={classNames({
            'Header__logo': true,
            'Header__logo--oscuro': oscuro
          })}
          src={logo}
          alt="Logo de Cero"
        />
      </Link>
      <nav className="Header__navegacion">
        <Link
          to="/sobre"
          className={classNames({
            'Header__link': true,
            'Header__link--oscuro': oscuro
          })}
        >
          Sobre Cero
        </Link>
        <Link
          to="/contacto"
          className={classNames({
            'Header__link': true,
            'Header__link--oscuro': oscuro
          })}
        >
          Contáctanos
        </Link>
        <button
          onClick={() => history.push('/contacto')}
          className={classNames({
            'Header__cta': true,
            'Header__cta--oscuro': oscuro
          })}
        >
          Empieza ya
        </button>
      </nav>
    </div>
  )
}

export default Header
