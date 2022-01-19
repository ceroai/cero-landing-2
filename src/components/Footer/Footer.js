import logo from '../../assets/logos/logo.svg'
import { Link } from 'react-router-dom'
import logoSUPChile from '../../assets/logos/logo_sup_chile.png'
import logoYC from '../../assets/logos/logo_yc.svg'
import logoDentalink from '../../assets/logos/logo_dentalink.png'
import logoKopland from '../../assets/logos/logo_kopland.png'
import logoSked from '../../assets/logos/logo_sked.png'
import logoGenesys from '../../assets/logos/logo_genesys.svg'
import logoFacebook from '@iconify-icons/mdi/facebook'
import logoMedilink from '../../assets/logos/logo_medilink.svg'
import logoPhilaxmed from '../../assets/logos/logo_philaxmed.png'
import logoRezebra from '../../assets/logos/logo_rezebra.svg'
import logoTwitter from '@iconify-icons/mdi/twitter'
import logoLinkedin from '@iconify-icons/mdi/linkedin'
import Icon from '@iconify/react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__contenedor">
        <div className="Footer__empresa">
          <img src={logo} alt="Logo Cero" className="Footer__logo_cero" />
          <div className="Footer__logos_redes">
            <a className="Footer__logo_red" href="/"><Icon icon={logoFacebook} /></a>
            <a className="Footer__logo_red" href="/"><Icon icon={logoTwitter} /></a>
            <a className="Footer__logo_red" href="https://www.linkedin.com/company/ceroai/"><Icon icon={logoLinkedin} /></a>
          </div>
          <div>
            <p>© Copyright {new Date().getFullYear()}</p>
            <p>Botlab, Inc.</p>
          </div>
        </div>
        <div className="Footer__links">
          <div>
            <p>Apoyado por</p>
            <p>
              <a target="_blank" rel="noreferrer noopener" href="https://www.startupchile.org/es/home-es/">
                <img className="Footer_logo_sup_chile" src={logoSUPChile} alt="Logo Start-up Chile" />
              </a>
            </p>
            <p>
              <a target="_blank" rel="noreferrer noopener" href="https://www.ycombinator.com/">
                <img className="Footer_logo_yc" src={logoYC} alt="Logo YCombinator" />
              </a>
            </p>
          </div>
          <div><Link to="/contacto">Contacto</Link></div>
          <div><a target="_blank" rel="noreferrer noopener" href="https://stats.uptimerobot.com/w2My8ULEWR">STATUS</a></div>
        </div>
        <div className="Footer__integraciones">
          <p>Integraciones</p>
          <div className="Footer__contenedor_integraciones">
            <a target="_blank" rel="noreferrer noopener" href="https://www.softwaredentalink.com/">
              <img className="Footer__logo_integracion" src={logoDentalink} alt="Logo integración con Dentalink" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.siliconriver.cl/koplandsymphony/">
              <img className="Footer__logo_integracion" src={logoKopland} alt="Logo integración con Kopland" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.sked24.com/es/citas-medicas/">
              <img className="Footer__logo_integracion" src={logoSked} alt="Logo integración con Sked" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://philaxmed.cl/">
              <img className="Footer__logo_integracion" src={logoPhilaxmed} alt="Logo integración con Philaxmed" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.softwaremedilink.com/">
              <img className="Footer__logo_integracion" src={logoMedilink} alt="Logo integración con Medilink" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.rezebra.cl">
              <img className="Footer__logo_integracion" src={logoRezebra} alt="Logo integración con Rezebra" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.genesys.com/">
              <img className="Footer__logo_integracion" src={logoGenesys} alt="Logo integración con Genesys" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
