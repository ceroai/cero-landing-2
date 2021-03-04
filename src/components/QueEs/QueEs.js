import './QueEs.css'
import { gsap } from 'gsap'
import { useEffect } from 'react'
import Celular from './Celular'

const QueEs = () => {

  useEffect(() => {
    // gsap.from('.QueEs__punto', {
    //   scrollTrigger: {
    //     trigger: '.QueEs__titulo',
    //     start: 'bottom center',
    //     toggleActions: 'play none none reverse',
    //   },
    //   y: 50,
    //   opacity: 0,
    //   stagger: .2
    // })
  }, [])

  return (
    <section className="QueEs">
      <div className="QueEs__textos">
        <h2 className="QueEs__titulo">Qué me permite Cero?</h2>
        <p className="QueEs__explicacion">
          Los asistentes virtuales de
          CERO.AI permiten a
          organizaciones automatizar
          procesos de comunicación
          a través de interacciones
          naturales y personalizadas
          por Whatsapp, reduciendo
          costos de personal de
          apoyo y superando las
          expectativas del usuario.
        </p>
      </div>
      <div className="QueEs__diagrama">
        <Celular />
      </div>
    </section>
  )
}

export default QueEs
