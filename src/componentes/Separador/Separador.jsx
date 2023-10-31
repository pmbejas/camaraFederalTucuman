
export const Separador = (props) => {

    const myStyle = { borderRadius: props.borderRadius,
                      backgroundColor: props.backgroundColor,
                      width: props.ancho, 
                      height: props.alto}
                
  return (
    <div className="container-fluid d-flex align-items-center" style= {myStyle}>
        <span className={props.classTitulo}>
            {props.titulo}
        </span>
    </div>
  )
}
