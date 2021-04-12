import { useRef } from 'react'
import { useHistory } from 'react-router'
import './Trabajemos.css'

const Trabajemos = () => {

  const elemTexto = useRef()
  const history = useHistory()

  return (
    <div className="Trabajemos">
      <h2 className="Trabajemos__titulo">Trabajemos juntos</h2>
      <p ref={elemTexto} className="Trabajemos__mensaje">
        Incorpora el poder de la inteligencia
        artificial a tu servicio al cliente.<br />
        Agenda tu <strong>demo</strong> y conversemos de los
        desafíos de comunicación con clientes
        que tiene tu organización.
      </p>
      <button onClick={() => history.push('/contacto')} className="Trabajemos__cta">Pide tu demo</button>
    </div>
  )
}

export default Trabajemos
