import { useState, useEffect } from 'react'
import classNames from 'classnames'
import fotoRS from '../../assets/fotos/Pablo_Magerkurth_RS.jpeg'
import fotoSS from '../../assets/fotos/Diego_Moreira_SS.jpeg'
import fotoNO from '../../assets/fotos/Max_Hasenohr_NO.png'
import './Testimonios.css'

const testimonios = [
  {
    texto: 'Me gusta trabajar con el equipo de Cero porque son abiertos, rápidos y tienen iniciativa trayendo excelentes discusiones.',
    nombre: 'Pablo Magerkurth',
    cargo: 'Subgerente Servicio al Cliente',
    institucion: 'Redsalud',
    foto: fotoRS
  },
  {
    texto: 'Gracias a Cero, hoy tenemos un canal de comunicación efectivo con más del 90% de nuestros pacientes y por una fracción del costo de un call center.',
    nombre: 'Diego Moreira',
    cargo: 'Gerente Comercial y Desarrollo',
    institucion: 'Sanasalud',
    foto: fotoSS
  },
  {
    texto: 'Con Cero logramos automatizar el proceso de confirmación de citas de nuestras clínicas y reducir las inasistencias de pacientes, liberando a nuestros ejecutivos de atención al cliente para casos más complejos.',
    nombre: 'Max Hasenohr',
    cargo: 'Gerente Comercial y Marketing',
    institucion: 'Norden Dental Care',
    foto: fotoNO
  }
]

const Testimonios = () => {

  const [indiceTestimonio, setIndiceTestimonio] = useState(0)
  const [animacionActiva, setAnimacionActiva] = useState(true)

  useEffect(() => {
    const animacionCarrusel = setInterval(() => {
      if (animacionActiva) {
        setIndiceTestimonio(prev => (prev + 1) % testimonios.length)
      }
    }, 3000)
    return () => clearInterval(animacionCarrusel)
  }, [animacionActiva, indiceTestimonio])

  return (
    <div className="Testimonios">
      <h2 className="Testimonios__titulo">Lo que dicen quienes han confiado en nosotros</h2>
      <div className="Testimonios__contenedor">
        <div className="Testomonios__carrusel">
          {testimonios.map((testimonio, i) => (
            <div
              className="Testimonios__testimonio"
              key={`testimonio-${i}`}
              style={{ transform: `translateX(${-100 * indiceTestimonio}%` }}
            >
              <div>
                <img
                  className="Testimonios__retrato"
                  alt={`Imagen cliente ${i}`}
                  src={testimonio.foto}
                />
              </div>
              <div className="Testimonios__contenedor_cita">
                <blockquote className="Testimonios__cita">
                  {testimonio.texto}
                </blockquote>
                <div className="Testimonios__autor">
                  <p>{testimonio.nombre}</p>
                  <p>{testimonio.cargo}</p>
                  <p>de {testimonio.institucion}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="Testimonios__botones">
          <button
            className={classNames({
              'Testimonios__boton': true,
              'Testimonios__boton--oculto': indiceTestimonio >= testimonios.length - 1
            })}
            onClick={() => {
              setIndiceTestimonio(Math.min(testimonios.length - 1, indiceTestimonio + 1))
              setAnimacionActiva(false)
            }}
          >
            <div className="Testimonios__icono_flecha" />
          </button>
          <button
            className={classNames({
              'Testimonios__boton': true,
              'Testimonios__boton--oculto': indiceTestimonio <= 0
            })}
            onClick={() => {
              setIndiceTestimonio(Math.max(0, indiceTestimonio - 1))
              setAnimacionActiva(false)
            }}
          >
            <div className="Testimonios__icono_flecha Testimonios__icono_flecha--atras" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonios
