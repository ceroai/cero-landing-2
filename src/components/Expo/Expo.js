import { useEffect, useMemo, useState } from 'react'
import './Expo.css'
import SlideMensaje from './SlideMensaje/SlideMensaje'
import SlideCelularReagenda from './SlideCelularReagenda'
import SlideCelularRevertir from './SlideCelularRevertir'
import SlideCelularExpo2022 from './SlideCelularExpo2022'
import SlideCelularGenerica2022 from './SlideCelularGenerica2022'

const conversacion = `
  BOT: Hola Paulo, soy Gaby del Área Médica de la clínica. Le escribo
  para confirmar su cita para *mañana jueves 13 de enero a las 13:45
  que tiene con la Dra. Fabiola Lavanderos de Otorrinolaringología* en
  nuestra sucursal de Providencia. ¿Confirma su cita?
  -> Confirmación en lenguaje natural
  -> Detalles como usar "Dra." en nombres femeninos
  USUARIO: 👍 Cnfirmo
  -> Capturamos respuestas en lenguaje natural
  -> Con emojis y faltas de ortografía
  BOT: Excelente, confirmado para mañana jueves 😊
    • Recuerde llegar 20 minutos antes de su cita
    • La dirección es Las Lilas 2039 (Metro Salvador) Piso 300 https://maps.gl/diyMvNQ
  -> Dirección en el mapa
  -> Proporcionamos información adicional para facilitar la presentación del paciente
  USUARIO: Gracias!
`

const Expo = () => {

  const [indiceSlide, setIndiceSlide] = useState(0)
  const tSlideMS = 40_000

  const slides = useMemo(() => [
    <SlideCelularGenerica2022
      titulo="Confirmaciones de citas"
      conversacion={conversacion}
      mensajesEntrantes={[
        {
          contenido: 
            <>
              Hola Paulo, soy Gaby del Área Médica de la clínica. Le escribo
              para confirmar su cita para <strong>mañana jueves 13 de enero a las 13:45
              que tiene con la Dra. Fabiola Lavanderos de Otorrinolaringología</strong> en
              nuestra sucursal de Providencia. ¿Confirma su cita? 
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
                (anula cita de Lucía)
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
    <SlideCelularGenerica2022
      titulo="Cancelación espontánea"
      mensajesEntrantes={[
        {
          contenido: 
            <>
              Hola Agnes, soy Gaby del Área Médica. Le escribo
              para confirmar su cita para <strong>mañana jueves 6 a las 13:45</strong> con
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
              Entiendo que no podrá asistir a esta cita, cierto? <br />
              <strong>6 de enero a las 13:45 con la Dra. Zunino</strong><br />
              Muchas gracias por informarnos
            </>,
          tituloExplicacion:
            <>
              Anulamos y liberamos la cita
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
    <SlideCelularGenerica2022
      titulo="Reagendamiento automático"
      mensajesEntrantes={[
        {
          contenido: 
            <>
              Hola Diego, soy Gaby del Área Médica. Te escribo
              para confirmar tu cita para <strong>el lunes 2 de junio a las 13:15</strong> con
              la Dra. Zunino en nuestra sucursal de Providencia. ¿Asistirás a tu cita? 
            </>,
        },
        {
          contenido:
            <>
              Ok, no te preocupes, avisaré a la doctora. Si quieres reagendar, 
              dime por favor opciones de fecha y hora para buscar
            </>,
        },
        {
          contenido:
            <>
              Tengo estas opciones con la Dra. Zunino en Providencia:<br /><br />
              1) el miércoles 9 de junio a las 11:15<br />
              2) el miércoles 9 de junio a las 12:15<br />
              3) el miércoles 9 de junio a las 13:15<br /><br />
              Por favor dime cuál de acomoda para poder agendarla
            </>,
          tituloExplicacion:
            <>
              Entregamos opciones de horarios para la cita
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
                Por favor reagendar para el 9 de junio entre las 11 y las 13 horas
              </>,
            tituloExplicacion:
              <>
                Paciente entrega preferencias de horario
              </>
          },
        ]
      }
    />,
    <SlideCelularGenerica2022
      titulo="Bloqueos de Agenda"
      mensajesEntrantes={[
        {
          contenido: 
            <>
              🚨 <strong>SU CITA FUE SUSPENDIDA</strong> 🚨<br />
              Hola Camilo, lamento informarle
              que su cita para mañana a las 17:30 con la Dra. Zunino
              fue <strong>suspendida
              por motivos de fuerza mayor</strong>.<br /><br />
              Le pedimos disculpas, y para solucionar este problema le <strong>hemos
              agendado <strong>una nueva cita</strong> para mañana a las 18:20 con el Dr. Schwartz</strong>.
              ¿Le acomoda esta opción?
            </>,
          tituloExplicacion:
            <>
              Informamos que la cita fue anulada
            </>,
          contenidoExplicacion:
            <>
              En el mismo mensaje entregamos una nueva cita preagendada
            </>
        },
        {
          contenido:
            <>
              Perfecto, su cita quedó agendada para mañana jueves 5 de junio a las 18:20
              con el Dr. Schwartz en nuestra sucursal de Providencia.
            </>,
            tituloExplicacion:
            <>
              Confirmamos la nueva cita en el sistema
            </>,
        },
      ]}
      mensajesSalientes={
        [
          {
            contenido:
              <>
                Sí, me acomoda
              </>,
            tituloExplicacion:
              <>
                Paciente acepta la nueva cita
              </>,
          },
          {
            contenido:
              <>
                Ok, muchas gracias
              </>
            ,
          },
        ]
      }
    />,
    <SlideCelularGenerica2022
      titulo="Lista de Espera"
      mensajesEntrantes={[
        {
          contenido: 
            <>
              Hola Franco, soy Gaby del Área Médica. Como se inscribió
              en nuestra lista de espera, le escribo porque hay una cita
              disponible de <strong>Cardiología para este jueves a las 17:20
              con el Dr. Parra en nuestra sucursal de Providencia.</strong>
              <br /><br />
              ¿Le acomoda esta alternativa? 
            </>,
          tituloExplicacion:
            <>
              Al liberarse una cita, la presentamos a los pacientes en espera
            </>,
        },
        {
          contenido:
            <>
              Entiendo, no se preocupe. Recuerde que todos los pacientes
              tienen 3 oportunidades para encontrar una cita. Esta es la primera vez que
              le preguntamos por lo que aún sigue en la lista de espera y
              le avisaremos tan pronto encontremos un nuevo cupo 😊
            </>,
            tituloExplicacion:
            <>
              Mantenemos al paciente en la lista de espera
            </>,
        },
      ]}
      mensajesSalientes={
        [
          {
            contenido:
              <>
                Lo siento en el alma pero mañana tengo que ir a hacerme
                unos exámenes, póngame de nuevo en la lista de espera por favor
              </>,
            tituloExplicacion:
              <>
                Paciente no acepta la cita
              </>,
          },
          {
            contenido:
              <>
                Ok, muchas gracias
              </>
            ,
          },
        ]
      }
    />,
    <SlideCelularGenerica2022
      titulo="Derivaciones"
      mensajesEntrantes={[
        {
          contenido: 
            <>
              Hola Joe, soy Gaby del Área Médica. La Dra. Zunino
              me pidió que le ayudara a coordinar los exámenes de
              procedimiento que le indicó. ¿Le gustaría que le
              ayudemos a agendarlos?
            </>,
          tituloExplicacion:
            <>
              Al terminar una consulta médica con indicación de
              exámenes, contactamos al paciente para ofrecer ayuda
            </>,
        },
        {
          contenido:
            <>
              Perfecto! Le vamos a llamar por teléfono (más fácil 🤓)
              para coordinar los detalles de la cita. Le pido por favor que
              tenga a mano las indicaciones que le dio la Dra.
            </>,
          tituloExplicacion:
            <>
              Derivamos el caso al call center
            </>,
          contenidoExplicacion:
            <>
              Hot-lead
            </>
        },
      ]}
      mensajesSalientes={
        [
          {
            contenido:
              <>
                Hola Gaby, si fuera posible, se lo agradecería
              </>,
            tituloExplicacion:
              <>
                Paciente responde positivamente
              </>,
          },
          {
            contenido:
              <>
                Espero su llamada, gracias
              </>
            ,
          },
        ]
      }
    />,
  ], [])

  useEffect(() => {
    const slidesInteval = setInterval(() => {
      setIndiceSlide(i => (i + 1) % slides.length)
    }, tSlideMS)
    return () => clearInterval(slidesInteval)
  } , [slides.length])

  return (
    <div className="Expo" key={Math.random()}>
      {slides[indiceSlide]}
      <div className="Expo__numero_slide">
        Caso de uso {indiceSlide + 1} / {slides.length}
      </div>
    </div>
  )
}

export default Expo