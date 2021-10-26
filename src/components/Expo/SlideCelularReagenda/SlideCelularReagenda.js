import logo from '../../../assets/logos/logo.svg'
import SlideCelularGenerica from '../SlideCelularGenerica'
import './SlideCelularReagenda.css'

const emojisRandom = [
  '💖',
  '✅',
  '💖',
  '😮',
  '💖',
  '👍',
  '💖',
  '⭐⭐⭐⭐⭐'
]

const mensajesRandomCancela = [
  'Hola. Tengo que asistir sí o sí a otro compromiso, está difícil.',
  'Pucha, tuve un compromiso avisele a la doctora si puede',
  'No podre asistir, lo siento pero necesito otra hora para más adelante',
  'Hola. Tengo que asistir sí o sí a otro compromiso, está difícil.',
  'Lamento informar que no podre asistir esta vez, les pido disculpas',
  'Espereme parece que voy a faltar a la hora',
  `Buen${new Date().getHours() < 12 ? 'os días, ' : 'as tardes, '}tuve un percance y tendré que posponer la hora`
]

const mensajesRandomReagenda = [
  'Eso sería ideal!',
  'Si por favor',
  'Eso mismo, por favor',
  'Eso sería ideal!',
  'Ya porfa!',
  'Sí por favor, eso me haría feliz',
  'Eso sería ideal!',
  'Por favor ayudeme con eso',
  'Sí, otros días tengo más tiempo'
]

const SlideCelularReagenda = () => {

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
          ¡Hola Gabriela! Tiene agendado un <strong>importante control de salud</strong> el próximo martes en nuestro centro médico. ¿Asistirá?
        </>,
        <>
          Entiendo, no se preocupe. ¿Le gustaría cambiar su hora para otro día?
        </>,
        <>
          ¡Perfecto! Nos comunicaremos con Ud. para coordinar el reagendamiento de su hora 🕖
        </>,
      ]}
      mensajesSalientes={[
        <>
          {mensajesRandomCancela[Math.floor(Math.random() * mensajesRandomCancela.length)]}
        </>,
        <>
          {mensajesRandomReagenda[Math.floor(Math.random() * mensajesRandomReagenda.length)]}
        </>,
        <>
          Muchas gracias! Que buena atención {emojisRandom[Math.floor(Math.random() * emojisRandom.length)]}
        </>,
      ]}
    />
  )
}

export default SlideCelularReagenda