import logo from '../../assets/logos/logo.svg'
import { Link } from 'react-router-dom'
import logoSUPChile from '../../assets/logos/logo_sup_chile.png'
import logoDentalink from '../../assets/logos/logo_dentalink.png'
import logoKopland from '../../assets/logos/logo_kopland.png'
import logoSked from '../../assets/logos/logo_sked.png'
import logoGenesys from '../../assets/logos/logo_genesys.svg'
import logoFacebook from '@iconify-icons/mdi/facebook'
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
          </div>
          <div><Link to="/contacto">Contacto</Link></div>
          <div><a target="_blank" rel="noreferrer noopener" href="https://stats.uptimerobot.com/w2My8ULEWR">STATUS</a></div>
        </div>
        <div className="Footer__integraciones">
          <p>Integraciones</p>
          <div className="Footer__contenedor_integraciones">
            <a target="_blank" rel="noreferrer noopener" href="https://www.softwaredentalink.com/">
              <img className="Footer__logo_integracion" src={logoDentalink} alt="Logo Dentalink" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.siliconriver.cl/koplandsymphony/">
              <img className="Footer__logo_integracion" src={logoKopland} alt="Logo Kopland" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.sked24.com/es/citas-medicas/">
              <img className="Footer__logo_integracion" src={logoSked} alt="Logo Sked" />
            </a>
            <a target="_blank" rel="noreferrer noopener" href="https://www.genesys.com/">
              <img className="Footer__logo_integracion" src={logoGenesys} alt="Logo Genesys" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
