import './cardvocalia.css';


export const CardVocalia = (props) => {
  return (
    <div className="contenedor-card-vocalia--titulo text-start d-flex row align-items-center pb-3 pb-md-0">
        <div className="col-12 col-md-6 contenedor-card-vocalia--texto-titulo pt-4 pb-4 ps-4 d-flex gap-2 align-items-center">
            <h5 className="p-0 m-0 fw-bold">{props.nombreVocal} </h5>
            <h6 className="p-0 m-0">({props.caracter})</h6>
        </div>
        <div className="col-12 col-md-3 d-flex gap-2 align-items-center ps-5 ps-md-0 pb-3 pb-md-0">
            <img className="contenedor-card-vocalia--icono me-2" src="../../Images/misc/phoneBlanco.svg" alt=""/>
            <p className='contenedor-card-vocalia--texto p-0 m-0'>{props.telefono}</p>
        </div>
        <div className="col-12 col-md-3 d-flex gap-2 align-items-center ps-5 ps-md-0">
            <img className="contenedor-card-vocalia--icono me-2" src="../../Images/misc/emailBlanco.svg" alt=""/>
            <p className='contenedor-card-vocalia--texto p-0 m-0'>{props.email}</p>
        </div>
    </div>
  )
}
