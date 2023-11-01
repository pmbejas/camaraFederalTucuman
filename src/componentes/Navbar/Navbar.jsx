import "./navbar.css";
import logo from "../../Images/escudo_argentina.png";
import { Link } from "react-router-dom";


const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to ="/" className="navbar-brand ms-3">
            <div className="contenedor-logo">
              <img className="contenedor-logo--img-logo" src={logo} alt="" />
              <div className="contenedor-logo--texto-logo">
                <p className="m-0 p-0 fw-bold">Cámara Federal de Tucumán</p>
                <p className="texto-pjn m-0 p-0">Poder Judicial de la Nación</p>
              </div>
            </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse flex-row-reverse me-3" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="#">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jueces" className="nav-link" href="#">
                  Jueces
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/boletines" className="nav-link" href="#">
                  Boletines
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/jurisprudencia" className="nav-link" href="#">
                  Jurisprudencia
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/guia" className="nav-link" href="#">
                  Guia Judicial
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
