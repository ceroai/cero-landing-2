import logo from '../../assets/logos/logo.svg'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__contenedor">
        <div className="Footer__empresa">
          <img src={logo} alt="Logo Cero" className="Footer__logo_cero" />
          <address>
            <p>Av. Ricardo Lyon 1263</p>
            <p>Providencia, Stgo</p>
          </address>
          <div>
            <p>© Copyright {new Date().getFullYear()}</p>
            <p>Botlab, Inc.</p>
          </div>
        </div>
        <div className="Footer__informacion">
          <div className="Footer__links">
            <div>
              <p>Apoyado por</p>
              <p>Start-up Chile</p>
            </div>
            <div>Contacto</div>
            <div>Documentación</div>
          </div>
          <div className="Footer__integraciones">
            Integraciones
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
