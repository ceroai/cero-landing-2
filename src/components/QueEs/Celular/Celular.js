import Icon, { InlineIcon } from '@iconify/react'
import iconoWifi from '@iconify-icons/mdi/wifi'
import iconoBateria from '@iconify-icons/mdi/battery-std'
import iconoVolver from '@iconify-icons/mdi/chevron-left'
import iconoCamara from '@iconify-icons/mdi/camera-outline'
import iconoLlamada from '@iconify-icons/mdi/phone-outline'
import './Celular.css'

const Celular = () => {
  return (
    <div className="Celular">
      <div className="Celular__solapa"></div>
      <div className="Celular__barra_estado">
        <p>3:43</p>
        <p className="Celular__barra_estado_iconos">
          <InlineIcon icon={iconoWifi} />
          <InlineIcon icon={iconoBateria} style={{ transform: 'rotate(90deg)' }} />
        </p>
      </div>
      <div className="Celular__barra_app">
        <div className="Celular__informacion_contacto">
          <Icon className="Celular__icono_volver" icon={iconoVolver} />
          <div className="Celular__avatar" />
          <div className="Celular__contacto">
            <p className="Celular__nombre_contacto">RedSalud</p>
            <p className="Celular__estado_contacto">en línea</p>
          </div>
        </div>
        <div className="Celular__iconos_barra_app">
          <Icon icon={iconoCamara} />
          <Icon icon={iconoLlamada} />
        </div>
      </div>
      <div className="Celular__pantalla">
    
      </div>
    </div>
  )
}

export default Celular
