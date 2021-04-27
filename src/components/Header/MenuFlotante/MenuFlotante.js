import './MenuFlotante.css'
import classNames from 'classnames'
import { Link, useRouteMatch } from 'react-router-dom'
import iconoCerrar from '@iconify-icons/mdi/close'
import { InlineIcon } from '@iconify/react'

const MenuFlotante = ({ menuActivo, setMenuActivo }) => {

  const { path } = useRouteMatch()
  const oscuro = path === '/sobre'

  return (
    <div
      className={classNames({
        'MenuFlotante': true,
        'MenuFlotante--activo': menuActivo,
        'MenuFlotante--oscuro': oscuro
      })}
    >
      <Link
        to="/"
        onClick={() => setMenuActivo(false)}
        className={classNames({
          'MenuFlotante__link': true,
        })}
      >
        Inicio
      </Link>
      <Link
        to="/sobre"
        onClick={() => setMenuActivo(false)}
        className={classNames({
          'MenuFlotante__link': true,
        })}
      >
        Sobre Cero
      </Link>
      <Link
        to="/contacto"
        onClick={() => setMenuActivo(false)}
        className={classNames({
          'MenuFlotante__link': true,
        })}
      >
        Contáctanos
      </Link>
      <button
        className="MenuFlotante__boton_cerrar"
        onClick={() => setMenuActivo(false)}
      >
        <InlineIcon icon={iconoCerrar} />
      </button>
    </div>
  )
}

export default MenuFlotante
