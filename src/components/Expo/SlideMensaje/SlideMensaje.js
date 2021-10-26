import logo from '../../../assets/logos/logo.svg'
import './SlideMensaje.css'

const mensajes = [
  'Incorpora el poder de la inteligencia artificial a tu servicio al cliente',
  'Comunicación automática y efectiva con todos tus pacientes',
  'Automatiza hasta el 90% y focaliza tu equipo en los casos más complejos',
  'Agenda tu demo y analicemos los desafíos de comunicación con clientes de tu organización',
  'Reduce hasta en un 70% los costos de contacto con tus pacientes',
  'Visualiza en tiempo real la tasa de respuesta y supervisa las interacciones con tus pacientes'
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