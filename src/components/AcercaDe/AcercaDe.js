import './AcercaDe.css'
import { gsap } from 'gsap'
import { useRef, useEffect } from 'react'

const AcercaDe = () => {

  const header = useRef()
  const p1 = useRef()

  useEffect(() => {
    gsap.to(header.current, {
      scrollTrigger: {
        trigger: header.current,
        start: 'bottom center',
        scrub: true
      },
      y: 50,
      opacity: 0,
      duration: 2
    })
    gsap.to(p1.current, {
      scrollTrigger: {
        trigger: p1.current,
        start: 'bottom center',
        scrub: true
      },
      y: 50,
      opacity: 0,
      duration: 2
    })
    window.scrollTo(0, 0)
  }, [header, p1])

  return (
    <div className="AcercaDe">
      <h1 className="AcercaDe__mensaje_principal" ref={header}>Sobre Cero</h1>
      <p className="AcercaDe__bajada" ref={p1}>
        Estamos en una misión para construir mejor comunicación entre servicios de salud y pacientes. Nos ponemos en el lugar de los pacientes (¡también lo somos!) para construir servicios que se adapten a su día a día, entregando información y ayudándoles a completar tareas importantes de una forma natural, cómoda y eficiente para tod@s.
      </p>
      <p className="AcercaDe__bajada">
        En Cero creemos que una buena comunicación requiere ir un paso más allá de solo entregar un mensaje de texto. Creemos en generar una sintonía entre dos partes que incluya atención, positividad y coordinación mutua. Aplicamos las últimas técnicas de Inteligencia Artificial desarrollada por nuestro propio equipo (en específico "Aprendizaje Profundo"
      </p>
      <p className="AcercaDe__bajada">
        basado en "Atención Neuronal", pero la verdad es que ¿a quién le importa? 😉) para comprender a las personas y generar un nuevo estándar de comunicación automatizada que permita a organizaciones usar de manera más eficiente sus recursos en pos de entregar un servicio cada vez mejor. Mejor comunicación sumando CERO.
      </p>
    </div>
  )
}

export default AcercaDe
