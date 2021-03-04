import React from 'react'
import ReactDOM from 'react-dom'
import './reset.css'
import './index.css'
import App from './components/App'
import { gsap } from 'gsap'
import { ScrollTrigger, TextPlugin } from 'gsap/all'
import { BrowserRouter } from 'react-router-dom'

gsap.registerPlugin(ScrollTrigger)
gsap.registerPlugin(TextPlugin)

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
