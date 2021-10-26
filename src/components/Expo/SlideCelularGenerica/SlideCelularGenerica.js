import Icon, { InlineIcon } from '@iconify/react'
import iconoWifi from '@iconify-icons/mdi/wifi'
import iconoBateria from '@iconify-icons/mdi/battery-std'
import iconoVolver from '@iconify-icons/mdi/chevron-left'
import iconoCamara from '@iconify-icons/mdi/camera-outline'
import iconoLlamada from '@iconify-icons/mdi/phone-outline'
import iconoSi from '@iconify-icons/mdi/check-circle'
import iconoNo from '@iconify-icons/mdi/cancel-circle'
import iconoCheck from '@iconify-icons/mdi/check-decagram'
import { format } from 'date-fns'
import logo from '../../../assets/logos/logo.svg'
import './SlideCelularGenerica.css'
import { useEffect, useRef, useState } from 'react'

const nombresEmpresas = [
  'Red de Salud',
  'Denta Connect',
  'Dental Way',
  'Perfecta Salud',
  'Dental Wisdom'
]

const SlideCelularGenerica = ({ texto, mensajesEntrantes, mensajesSalientes }) => {

  const [hora, setHora] = useState(Date.now())

  const elemEstado = useRef()
  const elemMsg1 = useRef()
  const elemMsg2 = useRef()
  const deteccionMsg2 = useRef()
  const elemMsg3 = useRef()
  const elemMsg4 = useRef()
  const deteccionMsg4 = useRef()
  const elemMsg5 = useRef()
  const elemMsg6 = useRef()
  const deteccionMsg6 = useRef()

  useEffect(() => {
    const actualizarHora = setInterval(() => setHora(new Date()), 60000)
    return () => clearInterval(actualizarHora)
  }, [])

  return (
    <div className="SlideCelularGenerica">
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
      <h1 className="SlideCelularGenerica__texto">
        {texto}
      </h1>
      <div className="SlideCelularGenerica__celular">
        <div className="SlideCelularGenerica__celular_solapa"></div>
        <div className="SlideCelularGenerica__celular_barra_estado">
          <p>{format(hora, 'HH:mm')}</p>
          <p className="SlideCelularGenerica__celular_barra_estado_iconos">
            <InlineIcon icon={iconoWifi} />
            <InlineIcon icon={iconoBateria} style={{ transform: 'rotate(90deg)' }} />
          </p>
        </div>
        <div className="SlideCelularGenerica__celular_barra_app">
          <div className="SlideCelularGenerica__celular_informacion_contacto">
            <Icon className="SlideCelularGenerica__celular_icono_volver" icon={iconoVolver} />
            <div className="SlideCelularGenerica__celular_avatar">
              <img className="SlideCelularGenerica__celular_imagen_avatar" src={logo} alt="Avatar cero" />
            </div>
            <div className="SlideCelularGenerica__celular_contacto">
              <p className="SlideCelularGenerica__celular_nombre_contacto">{nombresEmpresas[Math.floor(nombresEmpresas.length * Math.random())]} <InlineIcon icon={iconoCheck} className="SlideCelularGenerica__celular_icono_verificado" /></p>
              <p ref={elemEstado} className="SlideCelularGenerica__celular_estado_contacto">en línea</p>
            </div>
          </div>
          <div className="SlideCelularGenerica__celular_iconos_barra_app">
            <Icon icon={iconoCamara} />
            <Icon icon={iconoLlamada} />
          </div>
        </div>
        <div className="SlideCelularGenerica__celular_pantalla">
          <div
            ref={elemMsg1}
            className="SlideCelularGenerica__celular_mensaje SlideCelularGenerica__celular_mensaje--entrante"
            style={{ animationDelay: `${1 + 2 * Math.random()}s` }}
          >
            {mensajesEntrantes[0]}
          </div>
          <div
            ref={elemMsg2}
            className="SlideCelularGenerica__celular_mensaje SlideCelularGenerica__celular_mensaje--saliente"
            style={{ animationDelay: `${6 + 2 * Math.random()}s` }}
          >
            {mensajesSalientes[0]}
          </div>
          <div
            ref={elemMsg3}
            className="SlideCelularGenerica__celular_mensaje SlideCelularGenerica__celular_mensaje--entrante"
            style={{ animationDelay: `${9 + 2 * Math.random()}s` }}
          >
            {mensajesEntrantes[1]}
          </div>
          <div
            ref={elemMsg4}
            className="SlideCelularGenerica__celular_mensaje SlideCelularGenerica__celular_mensaje--saliente"
            style={{ animationDelay: `${14 + 2 * Math.random()}s` }}
          >
            {mensajesSalientes[1]}
          </div>
          <div
            ref={elemMsg5}
            className="SlideCelularGenerica__celular_mensaje SlideCelularGenerica__celular_mensaje--entrante"
            style={{ animationDelay: `${17 + 2 * Math.random()}s` }}
          >
            {mensajesEntrantes[2]}
          </div>
          <div
            ref={elemMsg6}
            className="SlideCelularGenerica__celular_mensaje SlideCelularGenerica__celular_mensaje--saliente"
            style={{ animationDelay: `${21 + 2 * Math.random()}s` }}
          >
            {mensajesSalientes[2]}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SlideCelularGenerica