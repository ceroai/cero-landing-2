import fotoRespuestas from '../../assets/capturas/respuestas.png'
import fotoChat from '../../assets/capturas/chat.png'
import fotoGrafana from '../../assets/capturas/grafana.png'
import './Beneficios.css' 
import { useHistory } from 'react-router'

const Beneficios = () => {

  return (
    <section className="Beneficios">
      <Beneficio
        titulo="Empatía y eficacia al ritmo de tus usuarios"
        imagen={fotoRespuestas}
        altImagen="Demo automatiza"
        subtitulo={`Dale continuidad al viaje del usuario aumentando los puntos de contacto.`}
        lista={[
          `Adapta tu comunicación a los canales preferidos por tus usuarios. Al usar Whatsapp evitas los portales de usuario, aplicaciones móviles o inicios de sesión complejos.`,
          `Suma empatía y sentimiento para crear instancias donde los usuarios interactúen con naturalidad, respondiendo a su ritmo y estilo. `
        ]}
      />
      <Beneficio
        titulo="Aumenta los puntos de contacto con tus clientes"
        imagen={fotoChat}
        altImagen="Demo interacción"
        subtitulo={`Natural, empático y al ritmo 
        de tus usuarios`}
        lista={[
          `Dale continuidad al viaje del usuario aumentando los puntos de contacto.`,
          `Automatiza hasta el 90% de los casos de uso y enfoca tu equipo en los casos más complejos. Transforma puntos de quiebre de comunicación en oportunidades de conversión para tu organización.`,
          `Desde la coordinación de una cita online hasta la recopilación de comentarios después de cada visita, Cero.ai agiliza el proceso de ayudar a tus usuarios a alcanzar sus objetivos.` 
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
          `Nos integramos a tus sistemas y adaptamos a tus procesos para entregar un servicio personalizado y ágil que te permita maximizar tus resultados de negocio.`,
          `Revisa en tiempo real métricas de comunicación y mantente un paso adelante con información de las tendencias de respuesta de tus usuarios. Detecta patrones para mejorar tu negocio y escala reduciendo hasta 70% en los costos de contacto a tus usuarios.`
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
