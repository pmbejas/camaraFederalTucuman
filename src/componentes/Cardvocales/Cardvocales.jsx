import './cardvocales.css'

export const Cardvocales = (props) => {
  return (
    <div className='card-vocales'>
        <h5 className='p-0 pt-2 pb-2 m-0 mb-1 text-center text-light bg-primary'>{props.nombre}</h5>
        <p className='p-0 ps-2 mb-1'>{props.secretaria}</p>
        <p className='p-0 ps-2 mb-1'>{props.ubicacion}</p>
        <p className='p-0 ps-2 mb-1'>{props.caracter}</p>
        <p className='p-0 ps-2 mb-1'>{props.telefono}</p>
        <p className='p-0 ps-2 mb-1'>{props.email}</p>
    </div>
  )
}
