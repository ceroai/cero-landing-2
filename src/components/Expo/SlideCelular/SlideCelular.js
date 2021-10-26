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
import './SlideCelular.css'
import { useEffect, useRef, useState } from 'react'

const SlideCelular = () => {

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
    <div className="SlideCelular">
      <h1 className="SlideCelular__texto">
        Interactúa con tus pacientes usando
        nuestra herramienta de comunicación
        escrita automatizada, empática y
        efectiva en cada paso de la atención médica.
      </h1>
      <div className="SlideCelular__celular">
        <div className="SlideCelular__celular_solapa"></div>
        <div className="SlideCelular__celular_barra_estado">
          <p>{format(hora, 'HH:mm')}</p>
          <p className="SlideCelular__celular_barra_estado_iconos">
            <InlineIcon icon={iconoWifi} />
            <InlineIcon icon={iconoBateria} style={{ transform: 'rotate(90deg)' }} />
          </p>
        </div>
        <div className="SlideCelular__celular_barra_app">
          <div className="SlideCelular__celular_informacion_contacto">
            <Icon className="SlideCelular__celular_icono_volver" icon={iconoVolver} />
            <div className="SlideCelular__celular_avatar">
              <img className="SlideCelular__celular_imagen_avatar" src={logo} alt="Avatar cero" />
            </div>
            <div className="SlideCelular__celular_contacto">
              <p className="SlideCelular__celular_nombre_contacto">Red de Salud <InlineIcon icon={iconoCheck} className="SlideCelular__celular_icono_verificado" /></p>
              <p ref={elemEstado} className="SlideCelular__celular_estado_contacto">en línea</p>
            </div>
          </div>
          <div className="SlideCelular__celular_iconos_barra_app">
            <Icon icon={iconoCamara} />
            <Icon icon={iconoLlamada} />
          </div>
        </div>
        <div className="SlideCelular__celular_pantalla">
          <div ref={elemMsg1} className="SlideCelular__celular_mensaje SlideCelular__celular_mensaje--entrante">
            ¡Hola Gabriela! Tiene hora para un <strong>importante examen de salud</strong> el próximo martes en nuestro centro médico. ¿Asistirá?
          </div>
          <div ref={elemMsg2} className="SlideCelular__celular_mensaje SlideCelular__celular_mensaje--saliente">
            Hola. Tengo que asistir sí o sí a otro compromiso, está difícil.
            {/* <div ref={deteccionMsg2} className="SlideCelular__celular_deteccion">
              <div className="SlideCelular__celular_etiqueta_deteccion"><InlineIcon className="SlideCelular__celular_icono_no" icon={iconoNo} />Paciente cancela hora</div>
              <div className="SlideCelular__celular_etiqueta_deteccion SlideCelular__celular_etiqueta_deteccion--corta"><InlineIcon className="SlideCelular__celular_icono_no" icon={iconoNo} />Cancela</div>
              <div className="SlideCelular__celular_respuesta_deteccion">Generando respuesta...</div>
            </div> */}
          </div>
          <div ref={elemMsg3} className="SlideCelular__celular_mensaje SlideCelular__celular_mensaje--entrante">
            Entiendo, no se preocupe. ¿Le gustaría cambiar su hora para otro día?
          </div>
          <div ref={elemMsg4} className="SlideCelular__celular_mensaje SlideCelular__celular_mensaje--saliente">
            Eso sería ideal!
            {/* <div ref={deteccionMsg4} className="SlideCelular__celular_deteccion">
              <div className="SlideCelular__celular_etiqueta_deteccion"><InlineIcon className="SlideCelular__celular_icono_si" icon={iconoSi} />Paciente reagenda hora</div>
              <div className="SlideCelular__celular_etiqueta_deteccion SlideCelular__celular_etiqueta_deteccion--corta"><InlineIcon className="SlideCelular__celular_icono_si" icon={iconoSi} />Reagenda</div>
              <div className="SlideCelular__celular_respuesta_deteccion">Generando respuesta...</div>
            </div> */}
          </div>
          <div ref={elemMsg5} className="SlideCelular__celular_mensaje SlideCelular__celular_mensaje--entrante">
            ¡Perfecto! Nos comunicaremos con Ud. para coordinar el reagendamiento de su hora 🕖
          </div>
          <div ref={elemMsg6} className="SlideCelular__celular_mensaje SlideCelular__celular_mensaje--saliente">
            Muchas gracias! Que buena atención 👩‍🦰 💯
            {/* <div ref={deteccionMsg6} className="SlideCelular__celular_deteccion">
              <div className="SlideCelular__celular_etiqueta_deteccion"><InlineIcon className="SlideCelular__celular_icono_si" icon={iconoSi} />Interacción finalizada</div>
              <div className="SlideCelular__celular_etiqueta_deteccion SlideCelular__celular_etiqueta_deteccion--corta"><InlineIcon className="SlideCelular__celular_icono_si" icon={iconoSi} />Finaliza</div>
            </div> */}
          </div>
          {/* <div className="SlideCelular__celular_mensaje SlideCelular__celular_mensaje--entrante">
            😊
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default SlideCelular