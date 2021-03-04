import './Carreras.css'

const posiciones = [
  {
    titulo: 'Posición 01',
    modalidad: 'Remote, Part Time'
  },
  {
    titulo: 'Posición 02',
    modalidad: 'On site, Full Time'
  },
  {
    titulo: 'Posición 03',
    modalidad: 'Remote, Part Time'
  }
]

const Carreras = () => {
  return (
    <div className="Carreras">
      <h1 className="Carreras__titulo">Carreras</h1>
      {posiciones.map((pos, i) => (
        <div className="Carreras__posicion" key={`contenedor-posicion-${i}`}>
          <p>{pos.titulo}</p>
          <p>{pos.modalidad}</p>
          <button className="Carreras__boton_aplicar">
            Aplicar
          </button>
        </div>
      ))}
    </div>
  )
}

export default Carreras
