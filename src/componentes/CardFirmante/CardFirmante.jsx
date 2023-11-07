import './cardfirmante.css';

export const CardFirmante = (props) => {
  return (
    <div className="cardFirmante row text-center">
        <div className="col-11 row text-center p-0 m-0">
            <span className="cardFirmante-nombre col-12">{props.nombreVocalFirmante}</span>
            <span className="col-6">{props.caracterVocalFirmante}</span>
            <span className="col-6">{props.tipoFirmaVocal}</span>
        </div>
        <div className="cardFirmante--contenedorEliminar col-1 d-flex align-items-center text-center">
            <span className="p-0 m-0">
              <i onClick={props.onDelete} className="bi bi-trash3 cardFirmante--contenedorEliminar--boton"></i>
            </span>
        </div>
    </div>
  )
}
