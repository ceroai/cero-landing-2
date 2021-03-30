import { useEffect } from 'react'
import './FondoAnimado.css'
import watercolor from './watercolor.js'

const FondoAnimado = props => {

  // useEffect(() => {
  //   watercolor()
  // }, [])

  return (
    <div className="FondoAnimado">
      {/* <canvas></canvas> */}
      <div className="FondoAnimado__hijos">
        {props.children}
      </div>
    </div>
  )
}

export default FondoAnimado
