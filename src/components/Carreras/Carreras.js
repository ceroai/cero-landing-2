import './Carreras.css'

const posiciones = [
  {
    titulo: 'Sales Development Representative',
    modalidad: 'Chile, Remote, Full Time',
    link: 'https://www.linkedin.com/jobs/view/2464218670/?refId=iVwZ9TYQYA%2FtJOZPGL7BDA%3D%3D&trackingId=yu8FzLDz%2BQpVkQWgf4%2FJDA%3D%3D'
  },
  {
    titulo: 'Lead Generator',
    modalidad: 'Chile, Remote, Full Time',
    link: 'https://www.linkedin.com/jobs/view/2464218670/?refId=iVwZ9TYQYA%2FtJOZPGL7BDA%3D%3D&trackingId=yu8FzLDz%2BQpVkQWgf4%2FJDA%3D%3D'
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
          <a href={pos.link} target="_blank" rel="noreferrer noopener" className="Carreras__boton_aplicar">
            Aplicar
          </a>
        </div>
      ))}
    </div>
  )
}

export default Carreras
