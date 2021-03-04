import fotoRespuestas from '../../assets/capturas/respuestas.png'
import fotoChat from '../../assets/capturas/chat.png'
import fotoGrafana from '../../assets/capturas/grafana.png'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Beneficios.css' 

const Beneficios = () => {

  return (
    <section className="Beneficios">
      <h2 className="Beneficios__titulo">Beneficios</h2>
      <Beneficio
        titulo="Automatiza"
        imagen={fotoRespuestas}
        altImagen="Demo automatiza"
        subtitulo={`Detecta procesos de
          comunicación sistemática y
          automatiza hasta el 90% de los
          casos de uso`}
        lista={[
          `Integra poderosas experiencias 
          automatizadas de comunicación y 
          resuelve casos al instante. Dale 
          continuidad al viaje del usuario 
          aumentando los puntos de 
          contacto, ahorrando tiempo y 
          esfuerzo a tu equipo.`,
          `Trabajemos juntos para 
          transformar puntos de quiebre de la 
          comunicación en oportunidades de 
          conversión para tu organización.`
        ]}
      />
      <Beneficio
        titulo="Interactúa"
        imagen={fotoChat}
        altImagen="Demo interacción"
        subtitulo={`Natural, empático y al ritmo 
        de tus usuarios`}
        lista={[
          `Acércate a tus usuarios mediante 
          comunicación con sentido y 
          sentimiento. Porque la forma 
          importa y los usuarios lo perciben, 
          creamos interacciones 
          personalizadas para cada usuario y 
          caso de uso, aplicando los 
          beneﬁcios de ciencia y tecnología 
          de vanguardia (NO BULLSHIT) en 
          nuestro idioma ESPAÑOL.`
        ]}
      />
      <Beneficio
        titulo="Monitorea"
        imagen={fotoGrafana}
        altImagen="Demo monitorización"
        subtitulo={`Monitorea procesos y 
          resultados según tus 
          necesidades`}
        lista={[
          `Revisa en tiempo real las tasas de 
          respuesta, disminuye el no show y 
          mantente un paso adelante con 
          información de las tendencias de 
          respuesta de tus usuarios. Detecta 
          patrones para mejorar tu negocio y 
          escala reduciendo hasta 70% en los 
          costos de contacto a usuarios. 
          Invierte en soluciones de 
          comunicación simples y de gran 
          impacto que te permitan escalar 
          según tus necesidades.`,
          `Nos adaptamos a tus procesos 
          entregando un servicio 
          personalizado, ﬂexible y ágil para 
          que juntos entreguemos mejor 
          comunicación.`
        ]}
      />
    </section>
  )
}

const Beneficio = ({ titulo, subtitulo, lista, imagen, altImagen }) => {
  
  const contenedor = useRef()
  const elemTitulo = useRef()
  const elemImagen = useRef()
  const elemTextos = useRef()

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: contenedor.current,
          start: 'top center',
          toggleActions: 'play none none none'
        },
      })
      .from(elemTitulo.current, {
        yPercent: -15,
        opacity: 0,
        duration: .0
      })
      .from(elemImagen.current, {
        xPercent: -2.5,
        opacity: 0,
        duration: .0
      })
      .from(elemTextos.current, {
        xPercent: 2.5,
        opacity: 0,
        duration: .0
      })
  })

  return (
    <div ref={contenedor} className="Beneficios__contenedor_beneficio">
      <h3 ref={elemTitulo} className="Beneficios__titulo_beneficio">{titulo}</h3>
      <div ref={elemImagen} className="Beneficios__contenedor_imagen_beneficio">
        <img className="Beneficios__imagen_beneficio" src={imagen} alt={altImagen} />
      </div>
      <div ref={elemTextos} className="Beneficios__textos_beneficio">
        <h3 className="Beneficios__subtitulo_beneficio">{subtitulo}</h3>
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
        <button className="Beneficios__cta">
          Comencemos
        </button>
      </div>
    </div>
  )
}

export default Beneficios
