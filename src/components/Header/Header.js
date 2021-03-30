import { useEffect } from 'react'
import './Header.css'
import { Link, withRouter } from 'react-router-dom'
import logo from '../../assets/logos/logo.svg'
import { gsap } from 'gsap'

const Header = ({ invertir }) => {

  useEffect(() => {
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
  }, [])

  return (
    <div
      className="Header"
      style={{ mixBlendMode: invertir ? 'difference' : 'normal' }}
    >
      <Link to="/">
        <img className="Header__logo" src={logo} alt="Logo de Cero" />
      </Link>
      <nav className="Header__navegacion">
        <Link to="/sobre" className="Header__link" href="#hola">Sobre Cero</Link>
        <Link to="/contacto" className="Header__link" href="#hola">Contáctanos</Link>
        <button className="Header__cta">Empieza ya</button>
      </nav>
    </div>
  )
}

export default Header
