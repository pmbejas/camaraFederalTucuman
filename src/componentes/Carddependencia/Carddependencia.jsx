import './carddependencia.css';

export const Carddependencia = (props) => {
  console.log(props.imagen)
  return (
    <div className="carta pt-4 pb-4 d-flex align-items-center justify-content-center">
        <img className="cardDependencia-imagen" src={props.imagen} alt="" />
        <h4 className='p-0 m-0 ms-5'>{props.titulo}</h4>
    </div>
  )
}
