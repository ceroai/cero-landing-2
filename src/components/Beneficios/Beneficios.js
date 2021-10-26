import fotoRespuestas from '../../assets/capturas/respuestas.png'
import fotoChat from '../../assets/capturas/chat.png'
import fotoGrafana from '../../assets/capturas/grafana.png'
import './Beneficios.css' 
import { useHistory } from 'react-router'

const Beneficios = () => {

  return (
    <section className="Beneficios">
      <Beneficio
        titulo="Empatía y eficacia al ritmo de tus pacientes"
        imagen={fotoRespuestas}
        altImagen="Demo automatiza"
        subtitulo={`Dale continuidad al viaje del usuario aumentando los puntos de contacto.`}
        lista={[
          `Comunicarte por WhatsApp significa que no hay portales de pacientes, aplicaciones móviles o inicios de sesión complejos, solo comunicación simple en los dispositivos que los pacientes usan todos los días.`,
          `Suma empatía y sentimiento para crear instancias donde los usuarios interactúen con naturalidad, respondiendo a su ritmo y estilo.`
        ]}
      />
      <Beneficio
        titulo="Aumenta los puntos de contacto con tus pacientes"
        imagen={fotoChat}
        altImagen="Demo interacción"
        subtitulo={`Natural, empático y al ritmo 
        de tus usuarios`}
        lista={[
          `Dale continuidad al viaje del paciente aumentando los puntos de contacto.`,
          `Automatiza hasta el 90% de los casos de uso y enfoca tu equipo en los casos más complejos. Transforma puntos de quiebre de comunicación en oportunidades de conversión para tu organización.`,
          `Desde la admisión de pacientes hasta la recopilación de comentarios después de cada visita, Cero.ai agiliza el proceso de ayudar a tus pacientes a alcanzar sus objetivos de salud.` 
        ]}
      />
      <Beneficio
        titulo="Monitorea y optimiza tu operación"
        imagen={fotoGrafana}
        altImagen="Demo monitorización"
        subtitulo={`Monitorea procesos y 
          resultados según tus 
          necesidades`}
        lista={[
          `Nos integramos a tus sistemas para maximizar tus resultados de negocio, entregando un servicio personalizado, ﬂexible y ágil para que juntos entreguemos mejor comunicación.`,
          `Revisa en tiempo real las tasas de respuesta, disminuye el no show y mantente un paso adelante con información de las tendencias de respuesta de tus pacientes. Detecta patrones para mejorar tu negocio y escala reduciendo hasta en un 70% los costos de contacto con tus pacientes.`
        ]}
      />
    </section>
  )
}

const Beneficio = ({ titulo, subtitulo, lista, imagen, altImagen }) => {
  
  const history = useHistory()

  return (
    <div className="Beneficios__contenedor_beneficio">
      <h3 className="Beneficios__titulo_beneficio">{titulo}</h3>
      <div className="Beneficios__contenedor_imagen_beneficio">
        <img className="Beneficios__imagen_beneficio" src={imagen} alt={altImagen} />
      </div>
      <div className="Beneficios__textos_beneficio">
        {/* <h3 className="Beneficios__subtitulo_beneficio">{subtitulo}</h3> */}
        <ul className="Beneficios__lista_beneficio">
          {lista.map((l, i) => (
            <li
              className="Beneficios__elemento_lista_beneficio"
              key={`${titulo}-lista-${i}`}
            >
              {l}
            </li>
          ))}
        </ul>
        <button onClick={() => history.push('/contacto')} className="Beneficios__cta">
          Comencemos
        </button>
      </div>
    </div>
  )
}

export default Beneficios
