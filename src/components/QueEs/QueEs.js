import './QueEs.css'
import { gsap } from 'gsap'
import { useEffect } from 'react'

const QueEs = () => {

  useEffect(() => {
    gsap.from('.QueEs__punto', {
      scrollTrigger: {
        trigger: '.QueEs__titulo',
        start: 'bottom center',
        toggleActions: 'play none none reverse',
      },
      y: 50,
      opacity: 0,
      stagger: .2
    })
  }, [])

  return (
    <section className="QueEs">
      <h2 className="QueEs__titulo">¿Qué es Cero?</h2>
      <div className="QueEs__punto">
        <p className="QueEs__numero">01.</p>
        <p className="QueEs__texto">
          Cero es el servicio de comunicación automatizada
          más efectivo que conecta con clientes usando
          canales de mensajería popular. Nuestro software,
          desarrollado por nuestro equipo de ingenieros,
          aplica las últimas técnicas de Inteligencia Artificial
          publicadas por la ciencia.
        </p>
      </div>
      <div className="QueEs__punto">
        <p className="QueEs__numero">02.</p>
        <p className="QueEs__texto">
          Comprendemos todo tipo de respuestas de parte
          de los usuarios, debido a que usamos la tecnología
          de aprendizaje profundo y autoatención neuronal.<br />
          Finalmente, aseguramos el compromiso de los
          usuarios con las organizaciones, porque
          transformamos simples interacciones en
          experiencias fluidas, naturales y empáticas.          
        </p>
      </div>
    </section>
  )
}

export default QueEs
