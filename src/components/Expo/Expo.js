import { useEffect, useMemo, useState } from 'react'
import './Expo.css'
import SlideMensaje from './SlideMensaje/SlideMensaje'
import SlideCelularReagenda from './SlideCelularReagenda'
import SlideCelularRevertir from './SlideCelularRevertir'
import SlideCelularExpo2022 from './SlideCelularExpo2022'
import SlideCelularGenerica2022 from './SlideCelularGenerica2022'

const Expo = () => {

  const [indiceSlide, setIndiceSlide] = useState(0)
  const tSlideMS = 40_000

  const slides = useMemo(() => [
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
    <SlideCelularGenerica2022
      titulo="Reagendamiento automático"
      mensajesEntrantes={[
        {
          contenido: 
            <>
              Hola Diego, soy María del Área Médica. Te escribo
              para confirmar tu cita <strong>el lunes 2 de junio a las 13:15</strong> con
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
              Tengo estas opciones con la Dra. Zunino en Providencia:<br /><br />
              1) el miércoles 9 de junio a las 11:15<br />
              1) el miércoles 9 de junio a las 12:15<br />
              1) el miércoles 9 de junio a las 13:15<br /><br />
              Por favor dime cuál de acomoda para poder agendarla
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
              🚨🚨 <strong>SU HORA HA SIDO SUSPENDIDA</strong> 🚨🚨<br />
              Hola Camilo, lamento informarle
              que su cita para mañana jueves 5 de junio a las 17:30 con la Dra. Zunino en
              nuestra sucursal de Providencia ha sido <strong>suspendida
              por motivos de fuerza mayor</strong><br /><br />
              Le pedimos disculpas, y para solucionar este problema <strong>hemos
              agendado UNA NUEVA HORA para mañana a las 18:20 con el Dr. Schwartz en la misma sucursal</strong>. Le
              acomoda esta alternativa?
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
              Hola Franco, soy María del Área Médica. Como se inscribió
              en nuestra Lista de Espera, le escribo porque tengo una hora
              pre-reservada de <strong>CARDIOLOGÍA ADULTO mañana martes 25 de enero
              a las 17:20 con Pedro Parra en nuestra sucursal de Providencia</strong>
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
              Gracias por su respuesta. Todos los pacientes tienen 3
              oportunidades para encontrar una cita. Esta es la primera vez que
              le preguntamos por lo que aún sigue en la Lista de Espera y
              le avisaremos tan pronto encontremos un nuevo cupo.
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
    </div>
  )
}

export default Expo