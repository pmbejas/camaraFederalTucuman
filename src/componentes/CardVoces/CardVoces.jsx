import './cardVoces.css';

export const CardVoces = (props) => {
  return (
    <div className='card-voces text-center d-flex row border-1'>
        <div className="col-11 py-2">
            <span className="">
                {props.voz}
            </span>
        </div>
        <div className="card-voces--eliminar col-1 d-flex align-items-center text-center">
            <i onClick={props.onDelete} className="bi bi-trash3 text-light card-voces--eliminar--boton"></i>
        </div>
    </div>
  )
}

