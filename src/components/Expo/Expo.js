import { useEffect, useMemo, useState } from 'react'
import './Expo.css'
import SlideAI from './SlideAI/SlideAI'
import SlideCelular from './SlideCelular'

const Expo = () => {

  const [indiceSlide, setIndiceSlide] = useState(0)
  const tSlideMS = 30000

  const slides = useMemo(() => [
    <SlideAI />,
    <SlideCelular />
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