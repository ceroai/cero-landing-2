import Icon, { InlineIcon } from '@iconify/react'
import iconoWifi from '@iconify-icons/mdi/wifi'
import iconoBateria from '@iconify-icons/mdi/battery-std'
import iconoVolver from '@iconify-icons/mdi/chevron-left'
import iconoCamara from '@iconify-icons/mdi/camera-outline'
import iconoLlamada from '@iconify-icons/mdi/phone-outline'
import iconoCheck from '@iconify-icons/mdi/check-decagram'
import { format } from 'date-fns'
import logo from '../../../assets/logos/logo.svg'
import './SlideCelularGenerica2022.css'
import { useEffect, useRef, useState } from 'react'

const nombresEmpresas = [
  'Red de Salud',
  'Denta Connect',
  'Dental Way',
  'Perfecta Salud',
  'Dental Wisdom'
]

const SlideCelularGenerica2022 = ({ titulo, mensajesEntrantes, mensajesSalientes }) => {

  const [hora, setHora] = useState(Date.now())

  const elemEstado = useRef()
  const elemMsg1 = useRef()
  const elemMsg2 = useRef()
  const elemMsg3 = useRef()
  const elemMsg4 = useRef()
  const elemMsg5 = useRef()
  const elemMsg6 = useRef()

  useEffect(() => {
    const actualizarHora = setInterval(() => setHora(new Date()), 60000)
    return () => clearInterval(actualizarHora)
  }, [])

  return (
    <div className="SlideCelularGenerica2022">
      <h1 className="SlideCelularGenerica2022__titulo">{titulo}</h1>
      <img
        className="SlideAI__logo"
        src={logo}
        alt="Logo de Cero"
        style={{
          bottom: `${20 + 40 * Math.random()}%`,
          left: `${10 + 20 * Math.random()}%`,
          animationDirection: Math.random() < .5 ? 'normal' : 'reverse'
        }}
      />
      {/* <h1 className="SlideCelularGenerica2022__texto">
        {texto}
      </h1> */}
      <div className="SlideCelularGenerica2022__celular">
        <div className="SlideCelularGenerica2022__celular_solapa"></div>
        <div className="SlideCelularGenerica2022__celular_barra_estado">
          <p>{format(hora, 'HH:mm')}</p>
          <p className="SlideCelularGenerica2022__celular_barra_estado_iconos">
            <InlineIcon icon={iconoWifi} />
            <InlineIcon icon={iconoBateria} style={{ transform: 'rotate(90deg)' }} />
          </p>
        </div>
        <div className="SlideCelularGenerica2022__celular_barra_app">
          <div className="SlideCelularGenerica2022__celular_informacion_contacto">
            <Icon className="SlideCelularGenerica2022__celular_icono_volver" icon={iconoVolver} />
            <div className="SlideCelularGenerica2022__celular_avatar">
              <img className="SlideCelularGenerica2022__celular_imagen_avatar" src={logo} alt="Avatar cero" />
            </div>
            <div className="SlideCelularGenerica2022__celular_contacto">
              <p className="SlideCelularGenerica2022__celular_nombre_contacto">{nombresEmpresas[Math.floor(nombresEmpresas.length * Math.random())]} <InlineIcon icon={iconoCheck} className="SlideCelularGenerica2022__celular_icono_verificado" /></p>
              <p ref={elemEstado} className="SlideCelularGenerica2022__celular_estado_contacto">en línea</p>
            </div>
          </div>
          <div className="SlideCelularGenerica2022__celular_iconos_barra_app">
            <Icon icon={iconoCamara} />
            <Icon icon={iconoLlamada} />
          </div>
        </div>
        <div className="SlideCelularGenerica2022__celular_pantalla">
          <div
            ref={elemMsg1}
            className="SlideCelularGenerica2022__celular_mensaje SlideCelularGenerica2022__celular_mensaje--entrante"
            style={{ animationDelay: `${1 + 1 * Math.random()}s` }}
          >
            {mensajesEntrantes[0]?.tituloExplicacion &&
              <div
                className="SlideCelularGenerica2022__explicacion"
                style={{ animationDelay: `${2 + 1 * Math.random()}s` }}
              >
                <h2>{mensajesEntrantes[0].tituloExplicacion}</h2>
                <p>{mensajesEntrantes[0].contenidoExplicacion}</p>
              </div>
            }
            {mensajesEntrantes[0].contenido}
          </div>
          <div
            ref={elemMsg2}
            className="SlideCelularGenerica2022__celular_mensaje SlideCelularGenerica2022__celular_mensaje--saliente"
            style={{ animationDelay: `${6 + 1 * Math.random()}s` }}
          >
            {mensajesSalientes[0]?.tituloExplicacion &&
              <div
                className="SlideCelularGenerica2022__explicacion"
                style={{ animationDelay: `${7 + 1 * Math.random()}s` }}
              >
                <h2>{mensajesSalientes[0].tituloExplicacion}</h2>
                <p>{mensajesSalientes[0].contenidoExplicacion}</p>
              </div>
            }
            {mensajesSalientes[0].contenido}
          </div>
          <div
            ref={elemMsg3}
            className="SlideCelularGenerica2022__celular_mensaje SlideCelularGenerica2022__celular_mensaje--entrante"
            style={{ animationDelay: `${9 + 1 * Math.random()}s` }}
          >
            {mensajesEntrantes[1].tituloExplicacion &&
              <div
                className="SlideCelularGenerica2022__explicacion"
                style={{ animationDelay: `${10 + 1 * Math.random()}s` }}
              >
                <h2>{mensajesEntrantes[1].tituloExplicacion}</h2>
                <p>{mensajesEntrantes[1].contenidoExplicacion}</p>
              </div>
            }
            {mensajesEntrantes[1].contenido}
          </div>
          <div
            ref={elemMsg4}
            className="SlideCelularGenerica2022__celular_mensaje SlideCelularGenerica2022__celular_mensaje--saliente"
            style={{ animationDelay: `${14 + 1 * Math.random()}s` }}
          >
            {mensajesSalientes[1].tituloExplicacion &&
              <div
                className="SlideCelularGenerica2022__explicacion"
                style={{ animationDelay: `${15 + 1 * Math.random()}s` }}
              >
                <h2>{mensajesSalientes[1].tituloExplicacion}</h2>
                <p>{mensajesSalientes[1].contenidoExplicacion}</p>
              </div>
            }
            {mensajesSalientes[1].contenido}
          </div>
          {mensajesEntrantes[2] &&
            <div
              ref={elemMsg5}
              className="SlideCelularGenerica2022__celular_mensaje SlideCelularGenerica2022__celular_mensaje--entrante"
              style={{ animationDelay: `${17 + 1 * Math.random()}s` }}
            >
              {mensajesEntrantes[2].tituloExplicacion &&
                <div
                  className="SlideCelularGenerica2022__explicacion"
                  style={{ animationDelay: `${18 + 1 * Math.random()}s` }}
                >
                  <h2>{mensajesEntrantes[2].tituloExplicacion}</h2>
                  <p>{mensajesEntrantes[2].contenidoExplicacion}</p>
                </div>
              }
              {mensajesEntrantes[2].contenido}
            </div>
          }
          {mensajesSalientes[2] &&
            <div
              ref={elemMsg6}
              className="SlideCelularGenerica2022__celular_mensaje SlideCelularGenerica2022__celular_mensaje--saliente"
              style={{ animationDelay: `${21 + 1 * Math.random()}s` }}
            >
              {mensajesSalientes[2].tituloExplicacion &&
                <div
                  className="SlideCelularGenerica2022__explicacion"
                  style={{ animationDelay: `${22 + 1 * Math.random()}s` }}
                >
                  <h2>{mensajesSalientes[2].tituloExplicacion}</h2>
                  <p>{mensajesSalientes[2].contenidoExplicacion}</p>
                </div>
              }
              {mensajesSalientes[2].contenido}
            </div>
          }
          {mensajesEntrantes[3] &&
            <div
              ref={elemMsg5}
              className="SlideCelularGenerica2022__celular_mensaje SlideCelularGenerica2022__celular_mensaje--entrante"
              style={{ animationDelay: `${24 + 1 * Math.random()}s` }}
            >
              {mensajesEntrantes[3].tituloExplicacion &&
                <div
                  className="SlideCelularGenerica2022__explicacion"
                  style={{ animationDelay: `${25 + 1 * Math.random()}s` }}
                >
                  <h2>{mensajesEntrantes[3].tituloExplicacion}</h2>
                  <p>{mensajesEntrantes[3].contenidoExplicacion}</p>
                </div>
              }
              {mensajesEntrantes[3].contenido}
            </div>
          }
          {mensajesSalientes[3] &&
            <div
              ref={elemMsg6}
              className="SlideCelularGenerica2022__celular_mensaje SlideCelularGenerica2022__celular_mensaje--saliente"
              style={{ animationDelay: `${27 + 1 * Math.random()}s` }}
            >
              {mensajesSalientes[3].tituloExplicacion &&
                <div
                  className="SlideCelularGenerica2022__explicacion"
                  style={{ animationDelay: `${28 + 1 * Math.random()}s` }}
                >
                  <h2>{mensajesSalientes[3].tituloExplicacion}</h2>
                  <p>{mensajesSalientes[3].contenidoExplicacion}</p>
                </div>
              }
              {mensajesSalientes[3].contenido}
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default SlideCelularGenerica2022