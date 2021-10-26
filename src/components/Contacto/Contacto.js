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
  const [seudonimo, setSeudonimo] = useState('')
  const [mailEnviado, setMailEnviado] = useState(false)
  const [enviando, setEnviando] = useState(false)

  useEffect(() => {
    refPrimerCampo.current.focus()
    window.scrollTo(0, 0)
  }, [])

  const contactar = e => {
    e.preventDefault()
    setEnviando(true)
    const params = new URLSearchParams()
    params.append('nombre', nombre)
    params.append('telefono', telefono)
    params.append('email', email)
    params.append('seudonimo', seudonimo)
    params.append('nombre_organizacion', nombreOrganizacion)
    params.append('tipo_organizacion', tipoOrganizacion)
    params.append('software', software)
    params.append('desafio', desafio)
    params.append('form-name', 'contactoCero')
    params.append('subject', 'Contacto a través de Cero.ai')
    axios.post('/',
      params,
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    ).then(() => {
      setMailEnviado(true)
      setEnviando(false)
      window.scrollTo(0, 0)
    }).catch(() => {
      setMailEnviado(false)
      setEnviando(false)
    })
  }
  
  return (
    <div className="Contacto">
      <h1 className="Contacto__mensaje_principal">Contáctanos</h1>
      <p className="Contacto__bajada">
        Hablemos sobre los desafíos de comunicación de tu empresa.<br />
        Agenda una Demo con nuestro equipo de especialistas.
      </p>
      {mailEnviado
        ? <div className="Contacto__enviado">
            ¡Gracias!
            Nos contactaremos contigo
            (o algo así)
          </div>
        : <form
            name="contactoCero"
            className="Contacto__formulario"
            onSubmit={contactar}
          >
            <div className="Contacto__seccion_formulario">
              <h2 className="Contacto__titulo_seccion_formulario">
                Datos personales
              </h2>
              <div className="Contacto__contenedor_campos">
                <label htmlFor="seudonimo">
                  Seudonimo
                  <input
                    id="seudonimo"
                    name="seudonimo"
                    onChange={e => setSeudonimo(e.target.value)}
                  />
                </label>
                <label htmlFor="nombre">
                  Nombre
                  <input
                    required="required"
                    id="nombre"
                    name="nombre"
                    ref={refPrimerCampo}
                    disabled={enviando}
                    onChange={e => setNombre(e.target.value)}
                  />
                </label>
                <label htmlFor="telefono">
                  Teléfono móvil
                  <input
                    required="required"
                    id="telefono"
                    name="telefono"
                    disabled={enviando}
                    onChange={e => setTelefono(e.target.value)}
                  />
                </label>
                <label htmlFor="email">
                  E-mail de trabajo
                  <input
                    required="required"
                    type="email"
                    id="email"
                    name="email"
                    disabled={enviando}
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
                    // required="required"
                    id="nombre_organizacion"
                    name="nombre_organizacion"
                    disabled={enviando}
                    onChange={e => setNombreOrganizacion(e.target.value)}
                  />
                </label>
                <label htmlFor="tipo_organizacion">
                  Tipo de organización
                  <input
                    // required="required"
                    id="tipo_organizacion"
                    name="tipo_organizacion"
                    disabled={enviando}
                    onChange={e => setTipoOrganizacion(e.target.value)}
                  />
                </label>
                <label htmlFor="software_gestion">
                  Software de gestión
                  <input
                    // required="required"
                    id="software_gestion"
                    name="software_gestion"
                    disabled={enviando}
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
                  // required="required"
                  className="Contato__area_desafio"
                  name="desafio"
                  id="desafio"
                  disabled={enviando}
                  placeholder="Ej. Necesito ayuda para gestionar mis pacientes"
                  onChange={e => setDesafio(e.target.value)}
                ></textarea>
                <button
                  disabled={enviando}
                  type="submit"
                  className="Contacto__boton_enviar"
                >
                  {enviando ? 'Enviando...' : 'Enviar'}
                </button>
              </div>
            </div>
          </form>
      }
    </div>
  )
}

export default Contacto
