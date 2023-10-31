import './cardServicios.css';

export const CardServicios = (props) => {
  return (
    <div className="container-fluid card-servicios-main d-flex row pt-4 pb-4 gap-2 h-100">
        <div className="col-3 d-flex align-items-center justify-content-center">
            <img className="card-servicios-main--icono" src={props.icono} alt="" width={props.width} height={props.height} />
        </div>
        <div className="col-9 text-center d-flex row align-items-center justify-content-start text-start">
            <h3 className="col-12 card-servicios-main--titulo text-start">
                {props.titulo}
            </h3>
            <h6 className="col-12 card-servicios-main--subtitulo text-start">
                {props.subtitulo}
            </h6>
        </div>
    </div>
  )
}
