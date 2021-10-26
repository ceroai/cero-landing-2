import logo from '../../../assets/logos/logo.svg'
import './SlideAI.css'

const SlideAI = () => {
  return (
    <div className="SlideAI">
      <img
        className="SlideAI__logo"
        src={logo}
        alt="Logo de Cero"
      />
      <div className="SlideAI__slide">
        <h1>
          Incorpora el poder de la inteligencia
          artificial a tu servicio al cliente
        </h1>
      </div>
    </div>
  )
}

export default SlideAI