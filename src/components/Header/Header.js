import { useEffect } from 'react'
import './Header.css'
import { Link, useHistory, useRouteMatch } from 'react-router-dom'
import logo from '../../assets/logos/logo.svg'
import { gsap } from 'gsap'

const Header = ({ invertir }) => {

  const { path } = useRouteMatch()
  const history = useHistory()

  useEffect(() => {
    if (path === '/') {
      gsap.to('.Header', {
        scrollTrigger: {
          trigger: '.QueEs',
          start: 'center top',
          toggleActions: 'play none none reverse'
        },
        position: 'fixed',
        backgroundColor: 'black',
        height: '4rem'
      })
    }
  }, [path])

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
