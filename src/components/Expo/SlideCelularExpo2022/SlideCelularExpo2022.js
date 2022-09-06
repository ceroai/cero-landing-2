import SlideCelularGenerica2022 from '../SlideCelularGenerica2022'
import './SlideCelularExpo2022.css'

const SlideCelularExpo2022 = () => {

  return (
    <SlideCelularGenerica2022
      titulo="Confirmaciones de citas"
      mensajesEntrantes={[
        {
          contenido: 
            <>
              Hola Paulo, soy Denis del Área Médica de la clínica. Le escribo
              para confirmar su hora para <strong>mañana jueves 13 de enero a las 13:45
              que tiene con la Dra. Fabiola Lavanderos de Otorrinolaringología</strong> en
              nuestra sucursal de Providencia. ¿Confirma su hora? 
            </>,
          tituloExplicacion: 
            <>
              Confirmación en lenguaje natural
            </>,
          contenidoExplicacion:
            <>
              Detalles como usar "Dra." en nombres femeninos
            </>
        },
        {
          contenido:
            <>
              Excelente, confirmado para mañana jueves 😊<br />
              <ul>
                <li>• Recuerde llegar 20 minutos antes de su cita</li>
                <li>• La dirección es Las Lilas 2039 (Metro Salvador) Piso 300 <span className="SlideCelularGenerica2022__link">https://maps.gl/diyMvNQ</span></li>
              </ul>
            </>,
          tituloExplicacion:
            <>
              Dirección en el mapa
            </>,
          contenidoExplicacion:
            <>
              Proporcionamos información adicional para facilitar la presentación del paciente
            </>
        },
      ]}
      mensajesSalientes={[
        {
          contenido:    
            <>
              👍 Cnfirmo
            </>
          ,
          tituloExplicacion:
            <>
            Capturamos respuestas en lenguaje coloquial
            </>,
          contenidoExplicacion:
            <>
            Con emojis y faltas de ortografía
            </>
        },
        {
          contenido:
            <>
              Gracias!
            </>
        },
      ]}
    />
  )
}

export default SlideCelularExpo2022