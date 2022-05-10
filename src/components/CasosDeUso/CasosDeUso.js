import './CasosDeUso.css'

const casos = [
  {
    nombre: 'Confirmaciones',
    descripcion: 'Confirmación y anulación básica de citas'
  },
  {
    nombre: 'Confirmaciones Multicita',
    descripcion: 'Confirmación y anulación básica de citas'
  },
  {
    nombre: 'Cancelación Espontánea',
    descripcion: 'Confirmación y anulación básica de citas'
  },
  {
    nombre: 'Re-agendamiento automático',
    descripcion: 'Confirmación y anulación básica de citas'
  },
  {
    nombre: 'Recaptura de paciente que NO asiste',
    descripcion: 'Confirmación y anulación básica de citas'
  },
  {
    nombre: 'Control de N meses',
    descripcion: 'Confirmación y anulación básica de citas'
  },
  {
    nombre: 'Bloqueos de Agenda',
    descripcion: 'Confirmación y anulación básica de citas'
  },
  {
    nombre: 'Lista de Espera',
    descripcion: 'Confirmación y anulación básica de citas'
  },
  {
    nombre: 'Derivaciones',
    descripcion: 'Confirmación y anulación básica de citas'
  },
]

const CasosDeUso = () => {
  return (
    <div className="CasosDeUso">
      <div className="CasosDeUso__modal">
        xxx
      </div>
      <h1 className="CasosDeUso__titulo">Casos de uso</h1>
      <div className="CasosDeUso__contenedor_tarjetas">
        {casos.map((caso, i) => (
          <div
            key={`caso-${i}`}
            className="CasosDeUso__tarjeta"
          >
            <h2 className="CasosDeUso__nombre_caso">{caso.nombre}</h2>
            {/* <p>{caso.descripcion}</p> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CasosDeUso