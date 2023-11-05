import './cardboletin.css';

export const CardBoletin = (props) => {

  return (
    <div className="card">      
        <a href={props.urlPDF} target="_blank">
        <img className="card-img-top" src={props.urlImagen} alt="Card image cap" />
        </a>
    </div>
  )
}
