import './cardvocales.css'

export const Cardvocales = (props) => {
  return (
    <div className='card-vocales d-flex row justify-content-between p-0 m-0'>
      <div className="col-5 p-0 m-0">
        <img className="card-vocales--imagen" src={props.imagen} alt="imagenVocales" />
      </div>
      <div className="col-7 p-0 m-0 d-flex row">
        <h2 className='col-12 p-0 pt-4 m-0 text-start ps-2 text-dark'>{props.nombre}</h2>
        <h5 className="col-12 p-0 m-0 ps-2">{props.caracter}</h5>
        <div className="col-12 p-0 m-0 pe-2 d-flex align-items-center row">
          <p className='p-0 ps-2 mb-1'>{props.texto}</p>
        </div>
      </div>

      </div>
  )
}
