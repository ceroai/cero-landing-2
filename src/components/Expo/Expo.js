import { useEffect, useMemo, useState } from 'react'
import './Expo.css'
import SlideMensaje from './SlideMensaje/SlideMensaje'
import SlideCelularReagenda from './SlideCelularReagenda'
import SlideCelularRevertir from './SlideCelularRevertir'
import SlideCelularExpo2022 from './SlideCelularExpo2022'

const Expo = () => {

  const [indiceSlide, setIndiceSlide] = useState(0)
  const tSlideMS = 30000

  const slides = useMemo(() => [
    // <SlideMensaje />,
    <SlideCelularExpo2022	 />,
    // <SlideMensaje />,
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