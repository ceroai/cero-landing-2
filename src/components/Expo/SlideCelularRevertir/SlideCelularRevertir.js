import logo from '../../../assets/logos/logo.svg'
import SlideCelularGenerica from '../SlideCelularGenerica'
import './SlideCelularRevertir.css'

const emojisRandom = [
  '💖',
  '✅',
  '💖',
  '😮',
  '💖',
  '👍',
  '💖',
  '⭐⭐⭐⭐⭐',
  '😍',
  '😄'
]

const mensajesRandomConfirma = [
  'Confirmo mi asistencia',
  'Sí',
  'Claro que sí',
  'Confirmo!!',
  '👍👍',
  'claro Nos vemos ese dia',
  'Hay estare👍',
]

const mensajesRandomRevertir = [
  'Espere, no podré asistir, tuve un evento inesperado',
  'Finalmente no alcanzo a llegar por favor avise en mi lugar',
  'Pucha me traspapele y ese dia estare ocupada',
  'Tuve un percance y ya no puedo ir, que hago?',
  'Espere me equivoque no puedo 😌',
  'Ya no alcanzo a llegar lo siento'
]

const SlideCelularRevertir = () => {

  return (
    <SlideCelularGenerica
      texto={
        <>
          Interactúa con tus pacientes usando
          la herramienta de comunicación
          automatizada de <img
          className="SlideCelularGenerica__logo"
          src={logo}
          alt="Logo de Cero"
          /> en cada paso de la atención médica
        </>
      }
      mensajesEntrantes={[
        <>
          ¡Hola Gabriela! Tiene hora para un <strong>importante examen de salud</strong> el próximo martes en nuestro centro médico. ¿Asistirá?
        </>,
        <>
          ¡Excelente! Su cita queda confirmada. ¡Nos vemos! 😊
        </>,
        <>
          Entiendo, no se preocupe, gracias por avisarnos. Más adelante nos comunicaremos con Ud. para reagendar su hora.
        </>,
      ]}
      mensajesSalientes={[
        <>
          {mensajesRandomConfirma[Math.floor(Math.random() * mensajesRandomConfirma.length)]}
        </>,
        <>
          {mensajesRandomRevertir[Math.floor(Math.random() * mensajesRandomRevertir.length)]}
        </>,
        <>
          Excelente!! Muchas gracias {emojisRandom[Math.floor(Math.random() * emojisRandom.length)]}
        </>,
      ]}
    />
  )
}

export default SlideCelularRevertir