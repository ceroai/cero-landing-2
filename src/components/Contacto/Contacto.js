import { useRef, useEffect, useState } from 'react'
import axios from 'axios'
import './Contacto.css'

const Contacto = () => {

  const refPrimerCampo = useRef()
  const [nombre, setNombre] = useState('')
  const [telefono, setTelefono] = useState('')
  const [email, setEmail] = useState('')
  const [nombreOrganizacion, setNombreOrganizacion] = useState('')
  const [tipoOrganizacion, setTipoOrganizacion] = useState('')
  const [software, setSoftware] = useState('')
  const [desafio, setDesafio] = useState('')

  useEffect(() => {
    refPrimerCampo.current.focus()
  }, [])

  const contactar = e => {
    e.preventDefault()
    const params = new URLSearchParams()
    params.append('nombre', nombre)
    params.append('telefono', telefono)
    params.append('email', email)
    params.append('nombre_organizacion', nombreOrganizacion)
    params.append('tipo_organizacion', tipoOrganizacion)
    params.append('software', software)
    params.append('desafio', desafio)
    params.append('form-name', 'contactoCero')
    axios.post('/',
      params,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    ).then(() => console.log('ok'))
  }
  
  return (
    <div className="Contacto">
      <h1 className="Contacto__mensaje_principal">Contáctanos</h1>
      <p className="Contacto__bajada">
        Hablemos sobre los desafíos de comunicación de tu empresa.<br />
        Agenda una Demo con nuestro equipo de especialistas.
      </p>
      <form name="contactoCero" className="Contacto__formulario" onSubmit={contactar}>
        <div className="Contacto__seccion_formulario">
          <h2 className="Contacto__titulo_seccion_formulario">
            Datos personales
          </h2>
          <div className="Contacto__contenedor_campos">
            <label htmlFor="nombre">
              Nombre
              <input
                id="nombre"
                name="nombre"
                ref={refPrimerCampo}
                onChange={e => setNombre(e.target.value)}
              />
            </label>
            <label htmlFor="telefono">
              Teléfono
              <input
                id="telefono"
                name="telefono"
                onChange={e => setTelefono(e.target.value)}
              />
            </label>
            <label htmlFor="email">
              E-mail de trabajo
              <input
                type="email"
                id="email"
                name="email"
                onChange={e => setEmail(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="Contacto__seccion_formulario">
          <h2 className="Contacto__titulo_seccion_formulario">
            Datos de tu organización
          </h2>
          <div className="Contacto__contenedor_campos">
            <label htmlFor="nombre_organizacion">
              Nombre organización
              <input
                id="nombre_organizacion"
                name="nombre_organizacion"
                onChange={e => setNombreOrganizacion(e.target.value)}
              />
            </label>
            <label htmlFor="tipo_organizacion">
              Tipo de organización
              <input
                id="tipo_organizacion"
                name="tipo_organizacion"
                onChange={e => setTipoOrganizacion(e.target.value)}
              />
            </label>
            <label htmlFor="software_gestion">
              Software de gestión
              <input
                id="software_gestion"
                name="software_gestion"
                onChange={e => setSoftware(e.target.value)}
              />
            </label>
          </div>
        </div>
        <div className="Contacto__seccion_formulario">
          <h2 className="Contacto__titulo_seccion_formulario">
            ¿Con qué desafío de comunicación<br />te podemos ayudar?
          </h2>
          <div className="Contacto__contenedor_campos">
            <textarea
              className="Contato__area_desafio"
              name="desafio"
              id="desafio"
              onChange={e => setDesafio(e.target.value)}
            ></textarea>
            <button type="submit" className="Contacto__boton_enviar">Enviar</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contacto
