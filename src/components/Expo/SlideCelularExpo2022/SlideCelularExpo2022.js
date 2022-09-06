import SlideCelularGenerica2022 from '../SlideCelularGenerica2022'
import './SlideCelularExpo2022.css'

const SlideCelularExpo2022 = ({ mensajesEntrantes, mensajesSalientes }) => {

  return (
    <SlideCelularGenerica2022
      titulo="Confirmaciones de citas"
      mensajesEntrantes={mensajesEntrantes}
      mensajesSalientes={mensajesSalientes}
    />
  )
}

export default SlideCelularExpo2022