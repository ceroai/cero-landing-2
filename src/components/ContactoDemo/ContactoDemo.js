import './ContactoDemo.css'

const ContactoDemo = () => {
  return (
    <div className="ContactoDemo">
      <form
        name="contactoDemoCero"
        className="ContactoDemo__formulario"
      >
        <h1 className="ContactoDemo__titulo">Contacto Demo</h1>
        <div className="Contacto__contenedor_campos">
          <label for="nombre">Nombre</label>
          <input name="nombre" id="nombre" type="text" />
        </div>
        <div className="Contacto__contenedor_campos">
          <label for="sistema">Sistema de gestión</label>
          <select name="sistema" id="sistema">
            <option>Agenda Pro</option>
            <option>Encuadrado</option>
            <option>Dentalink</option>
            <option>Dentalsoft</option>
            <option>Medilink</option>
            <option>Sked</option>
            <option>Otro</option>
          </select>
        </div>
        <div className="Contacto__contenedor_campos">
          <label for="telefono">Teléfono</label>
          <input name="telefono" id="telefono" type="text" />
        </div>
        <div className="Contacto__contenedor_campos">
          <label for="pacientes">Pacientes mensuales</label>
          <input name="pacientes" id="pacientes" type="number" />
        </div>
        <button className="ContactoDemo__boton">¡Comencemos!</button>
      </form>
    </div>
  )
}

export default ContactoDemo