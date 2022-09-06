import { useEffect, useMemo, useState } from 'react'
import './Expo.css'
import SlideMensaje from './SlideMensaje/SlideMensaje'
import SlideCelularReagenda from './SlideCelularReagenda'
import SlideCelularRevertir from './SlideCelularRevertir'
import SlideCelularExpo2022 from './SlideCelularExpo2022'
import SlideCelularGenerica2022 from './SlideCelularGenerica2022'

const Expo = () => {

  const [indiceSlide, setIndiceSlide] = useState(0)
  const tSlideMS = 40000

  const slides = useMemo(() => [
    <SlideMensaje />,
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
      mensajesSalientes={
        [
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
        ]
      }
    />,
    <SlideMensaje />,
    <SlideCelularGenerica2022
      titulo="Confirmaciones de citas múltiples"
      mensajesEntrantes={[
        {
          contenido: 
            <>
              Buen día. Tengo 2
              citas asociadas a este número de teléfono. Me pidieron confirmarlas
              y si no le molesta, le preguntaré una por una
            </>,
          tituloExplicacion: 
            <>
              Anunciamos una confirmación múltiple
            </>,
          contenidoExplicacion:
            <></>
        },
        {
          contenido:
            <>
              La primera cita es para Lucía, mañana
              a las 4:30 PM con la doctora
              Rita Núñez en Providencia. ¿Confirmo
              la cita?
            </>,
        },
        {
          contenido:
            <>
              La segunda cita es para Amanda, mañana
              a las 5:30 PM con la doctora
              Rita Núñez. ¿Confirmo
              la cita?
            </>,
        },
        {
          contenido:
            <>
              Muchas gracias por sus respuestas 😊
            </>,
        },
      ]}
      mensajesSalientes={
        [
          {
            contenido:
              <>
                Hola, sí
              </>
            ,
          },
          {
            contenido:
              <>
                Esa la vamos a cancelar
              </>,
            tituloExplicacion:
              <>
                Paciente anula la primera cita
              </>,
            contenidoExplicacion:
              <>
                (anula cita de lucía)
              </>
          },
          {
            contenido:
              <>
                Esa sí, la confirmo
              </>,
            tituloExplicacion:
              <>
                Paciente confirma la segunda cita
              </>,
            contenidoExplicacion:
              <>
                (confirma cita de Amanda)
              </>
          },
        ]
      }
    />,
    <SlideMensaje />,
    <SlideCelularGenerica2022
      titulo="Cancelación espontánea"
      mensajesEntrantes={[
        {
          contenido: 
            <>
              Hola Agnes, soy María del Área Médica. Le escribo
              para confirmar su cita <strong>mañana jueves 6 a las 13:45</strong> con
              la Dra. Zunino. ¿Asistirá a su cita? 
            </>,
        },
        {
          contenido:
            <>
              Excelente, confirmado para mañana jueves 😊<br />
              <ul>
                <li>• Recuerde llegar 20 minutos antes</li>
                <li>• La dirección es Las Lilas 203 (Metro Salvador) <span className="SlideCelularGenerica2022__link">https://maps.gl/diyMvNQ</span></li>
              </ul>
            </>,
        },
        {
          contenido:
            <>
              Entiendo que no podrá asistir a esta hora, cierto? <br />
              <strong>6 de enero a las 13:45 con la Dra. Zunino</strong><br />
              Muchas gracias por informarnos
            </>,
          tituloExplicacion:
            <>
              Anulamos y liberamos la hora
            </>,
          contenidoExplicacion:
            <>
              Evitamos el no-show
            </>
        },
      ]}
      mensajesSalientes={
        [
          {
            contenido:
              <>
                Confirmo, muchas gracias
              </>
            ,
            tituloExplicacion:
              <>
                Paciente confirma su cita original
              </>,
            contenidoExplicacion:
              <>
                (5 de enero - 9 AM)
              </>
          },
          {
            contenido:
              <>
                Hola buenas tardes, quería avisarle
                que no podré asistir a mi cita con la Dra. Zunino
              </>,
            tituloExplicacion:
              <>
                Paciente cancela espontáneamente su cita
              </>,
            contenidoExplicacion:
              <>
                (6 de enero - 1 PM)
              </>
          },
        ]
      }
    />,
    <SlideMensaje />,
    <SlideCelularGenerica2022
      titulo="Reagendamiento automático"
      mensajesEntrantes={[
        {
          contenido: 
            <>
              Hola Salomón, soy María del Área Médica. Te escribo
              para confirmar tu cita <strong>el miércoles 22 de diciembre a las 13:15</strong> con
              la Dra. Zunino en nuestra sucursal de Providencia. ¿Asistirá a su cita? 
            </>,
        },
        {
          contenido:
            <>
              Ok, no te preocupes, avisaré a la doctora. ¿Quieres reagendar tu cita? Si es así, 
              dime por favor opciones de fecha y horario para buscar
            </>,
        },
        {
          contenido:
            <>
              Tengo estas opciones con la Dra. Zunino en nuestra sucursal de Providencia:<br /><br />
              1) el miércoles 9 de marzo a las 11:15<br />
              1) el miércoles 9 de marzo a las 12:15<br />
              1) el miércoles 9 de marzo a las 13:15<br /><br />
              Por favor dime cuál de acomoda (1, 2 o 3) para poder agendarla
            </>,
          tituloExplicacion:
            <>
              Entregamos opciones de horas
            </>,
        },
      ]}
      mensajesSalientes={
        [
          {
            contenido:
              <>
                Hola, no asistiré porque me encuentro afuera de la región
              </>
            ,
            tituloExplicacion:
              <>
                Paciente cancela su cita original
              </>,
          },
          {
            contenido:
              <>
                Por favor reagendar para el 9 de marzo entre las 11 y las 13 horas
              </>,
            tituloExplicacion:
              <>
                Paciente entrega preferencias de horario
              </>
          },
        ]
      }
    />,
    // <SlideCelularRevertir />
  ], [])

  useEffect(() => {
    const slidesInteval = setInterval(() => {
      setIndiceSlide(i => (i + 1) % slides.length)
    }, tSlideMS)
    return () => clearInterval(slidesInteval)
  } , [])

  return (
    <div className="Expo">
      {slides[indiceSlide]}
    </div>
  )
}

export default Expo