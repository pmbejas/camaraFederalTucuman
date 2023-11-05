import './cardjuzgado.css';

export const Cardjuzgado = (props) => {
  return (
    <div className='contenedor-card-juzgado bg-light'>
        <div className="contenedor-card-juzgado--titulo text-start text-light">
            <h5 className="pt-2 pb-2 ps-4">{props.nombreJuzgado}</h5>
        </div>
        <div className="contenedor-card-juzgado--contenido p-0 m-0 mt-2 ps-4">
            <h5 className='p-0 m-0 mb-1'>{props.nombreCargo}</h5>
            <p className='p-0 m-0 mb-1'>{props.ubicacion}</p>
            <p className='p-0 m-0 mb-1'>{props.telefono}</p>
            <p className='p-0 m-0 mb-1'>{props.email}</p>
        </div>
    </div>
  )
}

