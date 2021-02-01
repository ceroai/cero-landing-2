import { useState, useEffect } from 'react'
import axios from 'axios'
import './Testimonios.css'

const Testimonios = () => {

  const [urls, setUrls] = useState([])
  const [indiceTestimonio, setIndiceTestimonio] = useState(0)

  useEffect(() => {
    axios.get('https://api.unsplash.com/search/photos?query=face&client_id=XuuXMbh4vdN52KbWQLPi0-TXiFtJmf2PW-A530rg3nQ')
    .then(data => {
      setUrls(data.data.results.map(u => u.urls.small))
    })
  }, [])

  return (
    <div className="Testimonios">
      <h2 className="Testimonios__titulo">Lo que dicen quienes han confiado en nosotros</h2>
      <div className="Testimonios__contenedor">
        <div className="Testomonios__carrusel">
          {urls.map((u, i) => (
            <div
              className="Testimonios__testimonio"
              key={`testimonio-${i}`}
              style={{ transform: `translateX(${-100 * indiceTestimonio}%` }}
            >
              <div>
                <img
                  className="Testimonios__retrato"
                  alt={`Imagen cliente ${i}`}
                  src={u}
                />
              </div>
              <div className="Testimonios__contenedor_cita">
                <blockquote className="Testimonios__cita">
                  Me gusta trabajar con el
                  equipo de Cero porque son
                  abiertos, rápidos y tienen
                  iniciativa trayendo excelentes
                  discusiones.
                </blockquote>
                <div className="Testimonios__autor">
                  <p>Pablo Magerkurth,</p>
                  <p>Gerente Contact Center</p>
                  <p>de RedSalud</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="Testimonios__botones">
          <button
            className="Testimonios__boton"
            onClick={() => setIndiceTestimonio(Math.min(urls.length - 1, indiceTestimonio + 1))}
            style={{ opacity: indiceTestimonio < urls.length - 1 ? 1 : 0 }}
          >
            <div className="Testimonios__icono_flecha" />
          </button>
          <button
            className="Testimonios__boton"
            onClick={() => setIndiceTestimonio(Math.max(0, indiceTestimonio - 1))}
            style={{ opacity: indiceTestimonio > 0 ? 1 : 0 }}
          >
            <div className="Testimonios__icono_flecha Testimonios__icono_flecha--atras" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Testimonios
