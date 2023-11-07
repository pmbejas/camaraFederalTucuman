import './cardpersonal.css'

export const CardPersonal = (props) => {

  return (

    <div className="wrapper">
      <div className="profile">
          <div className="overlay">
              <div className="about d-flex flex-column">
                  <h4>{props.nombre}</h4> <span>{props.texto}</span>
              </div>
              {/* <ul className="social-icons">
                  <li><i className="fa fa-facebook"></i></li>
                  <li><i className="fa fa-linkedin"></i></li>
                  <li><i className="fa fa-twitter"></i></li>
                  <li><i className="fa fa-instagram"></i></li>
              </ul> */}
          </div>
      </div>
    </div>

    
  )
}
