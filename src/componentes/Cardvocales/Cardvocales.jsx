import './cardvocales.css'

export const Cardvocales = (props) => {
  return (
    <div className='card-vocales d-flex row justify-content-between p-0 m-0'>
      <div className="col-3 p-0 m-0 d-flex align-items-center">
        <img className="card-vocales--imagen" src={props.imagen} alt="imagenVocales" />
      </div>
      <div className="col-9 p-0 m-0 ">
        <h2 className=' p-0 pt-4 m-0 text-start ps-2 text-dark'>{props.nombre}</h2>
        <h5 className=" p-0 ps-2 m-0 mb-3">{props.caracter}</h5>
        <div className="p-0 m-0 pe-2 d-flex align-items-center row">
          <p className='p-0 ps-2 mb-1'>{props.texto}</p>
        </div>
      </div>

      </div>
  )
}
