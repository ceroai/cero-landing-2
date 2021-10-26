import { useEffect, useState, useRef } from 'react'
import './ContactoDemo.css'
import axios from 'axios'

const ContactoDemo = () => {

  const refPrimerCampo = useRef()
  const [mailEnviado, setMailEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [pacientes, setPacientes] = useState('0')
  const [sistema, setSistema] = useState('Dentalink')

  useEffect(() => {
    refPrimerCampo.current?.focus()
  }, [])

  const contactar = e => {
    e.preventDefault()
    if (!nombre || !telefono || enviando) {
      return
    }
    setEnviando(true)
    const params = new URLSearchParams()
    params.append('nombre', nombre)
    params.append('telefono', telefono)
    params.append('pacientes', pacientes)
    params.append('sistema', sistema)
    params.append('seudonimo', '')
    params.append('form-name', 'contactoDemoCero')
    axios.post('/',
      params,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    ).then(() => {
      setMailEnviado(true)
      setEnviando(false)
    }).catch(() => {
      setMailEnviado(false)
      setEnviando(false)
    })
  }

  return (
    <div className="ContactoDemo">
      {mailEnviado 
        ? <p className="ContactoDemo__gracias">¡Gracias!</p>
        : <form
          name="contactoDemoCero"
          className="ContactoDemo__formulario"
          onSubmit={contactar}
        >
          <h1 className="ContactoDemo__titulo">Contacto Demo</h1>
          <div className="Contacto__contenedor_campos">
            <label htmlFor="nombre">Nombre</label>
            <input
              name="nombre"
              id="nombre"
              type="text"
              ref={refPrimerCampo}
              value={nombre}
              disabled={enviando}
              onChange={e => setNombre(e.target.value)}
            />
          </div>
          <div className="Contacto__contenedor_campos">
            <label htmlFor="sistema" aclaracion="opcional">Sistema de gestión</label>
            <select
              name="sistema"
              id="sistema"
              value={sistema}
              disabled={enviando}
              onChange={e => setSistema(e.target.value)}
            >
              <option value="Agenda Pro">Agenda Pro</option>
              <option value="Encuadrado">Encuadrado</option>
              <option value="Dentalink">Dentalink</option>
              <option value="Dentalsoft">Dentalsoft</option>
              <option value="Medilink">Medilink</option>
              <option value="Sked">Sked</option>
              <option value="Otro">Otro</option>
            </select>
          </div>
          <div className="Contacto__contenedor_campos">
            <label htmlFor="telefono">Teléfono</label>
            <input
              name="telefono"
              id="telefono"
              type="text"
              value={telefono}
              disabled={enviando}
              onChange={e => setTelefono(e.target.value)}
            />
          </div>
          <div className="Contacto__contenedor_campos">
            <label htmlFor="pacientes" aclaracion="opcional">Pacientes mensuales</label>
            <input
              name="pacientes"
              id="pacientes"
              type="number"
              value={pacientes}
              disabled={enviando}
              onChange={e => setPacientes(e.target.value)}
            />
          </div>
          <button
            className="ContactoDemo__boton"
            disabled={enviando}
          >
            ¡Comencemos!
          </button>
        </form>
      }
    </div>
  )
}

export default ContactoDemo