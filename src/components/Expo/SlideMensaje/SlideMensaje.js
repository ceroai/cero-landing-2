import logo from '../../../assets/logos/logo.svg'
import './SlideMensaje.css'

const mensajes = [
  'Incorpora el poder de la inteligencia artificial a tu servicio al cliente',
  'Comunicación automática y efectiva con todos tus pacientes',
  'Incorpora el poder de la inteligencia artificial a tu servicio al cliente',
  'Incorpora el poder de la inteligencia artificial a tu servicio al cliente',
]

const SlideMensaje = () => {
  return (
    <div className="SlideAI">
      <img
        src={logo}
        className="SlideAI__logo"
        alt="Logo de Cero"
        style={{
          bottom: `${20 + 40 * Math.random()}%`,
          left: `${10 + 20 * Math.random()}%`,
          animationDirection: Math.random() < .5 ? 'normal' : 'reverse'
        }}
      />
      <div className="SlideAI__slide">
        <h1>
          {mensajes[Math.floor(mensajes.length * Math.random())]}
        </h1>
      </div>
    </div>
  )
}

export default SlideMensaje