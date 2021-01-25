import './Superior.css'
import { gsap } from 'gsap'
import { useEffect, useRef } from 'react'

const Superior = () => {

  const header = useRef()

  useEffect(() => {
    gsap.to(header.current, {
      scrollTrigger: {
        trigger: header.current,
        scrub: 1
      },
      y: -100,
      duration: 2
    })
  }, [header])

  return (
    <div className="Superior">
      <p className="Superior__mensaje_principal" ref={header}>Mejora tu comunicación sumando cero</p>
    </div>
  )
}

export default Superior
