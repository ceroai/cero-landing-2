import Icon from '@iconify/react'
import iconoCerrar from '@iconify-icons/mdi/close'
import './Banner.css'
import { useState } from 'react'
import classNames from 'classnames'

const Banner = () => {

  const [visible, setVisible] = useState(true)

  return (
    <div 
      className={classNames({
        "Banner": true,
        "Banner--invisible": !visible
      })}
    >
      Agenda una demo y prueba el servicio gratis por 1 mes 👉
      <a
        href="https://calendly.com/felipe-cero/30min?month=2021-05"
        className="Banner__boton"
        target="_blank"
        rel="noreferrer noopener"
      >
        Comencemos
      </a>
      <button
        onClick={() => setVisible(false)}
        className="Banner__boton_cerrar"
        title="Cerrar"
      >
        <Icon icon={iconoCerrar} />
      </button>
    </div>
  )
}

export default Banner