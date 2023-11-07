import './cardsumario.css'

export const CardSumario = (props) => {
  return (
    <div className="contenedor-sumario py-10 px-10 mt-2 d-flex row justify-content-center">
        <div className="col-12 d-flex row pb-2 justify-content-center">
            <span className="col-12 fw-bold pt-2">
                Texto del Sumario:
            </span>
            <span className='col-12 ms-4'>
                {props.textoSumario}
            </span>
        </div>
        <div className="col-12 d-flex row mb-3">
            <span className="col-12 fw-bold">
                Voces del Sumario:
            </span>
            <div className="col-12 d-flex row justify-content-between align-items-center">
                {props.vocesSumario.length>0 && props.vocesSumario.map((voces, index) => (
                    <div className="col-12 ms-4" key={index}>
                    <span>
                            {voces}
                    </span>
                    </div>
                ))}
            </div>
        </div>
        <div className="col-12 d-flex align-items-center text-center justify-content-center cardSumario--contenedorEliminar">
            <span className="py-2 m-0">
              <i onClick={props.onDelete} className="bi bi-trash3 cardSumario--contenedorEliminar--boton"></i>
            </span>
        </div>
    </div>
  )
}
