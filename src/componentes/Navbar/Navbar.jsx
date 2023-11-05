import "./navbar.css";
import logo from "../../Images/escudo_argentina.png";
import { Link } from "react-router-dom";
import { useState } from "react";


const NavBar = () => {
  const [activeOption, setActiveOption] = useState('inicio');

  const handleNavClick = (option) => {
    setActiveOption(option);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
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
              <li className={`nav-item ${activeOption === 'inicio' ? 'active' : ''}`}>
                <Link to="/" className="nav-link" aria-current="page" href="#" onClick={() => handleNavClick('inicio')}>
                  Inicio
                </Link>
              </li>
              <li className={`nav-item ${activeOption === 'jueces' ? 'active' : ''}`}>
                <Link to="/jueces" className="nav-link" aria-current="page" href="#" onClick={() => handleNavClick('jueces')}>
                  Jueces
                </Link>
              </li>
              <li className={`nav-item ${activeOption === 'boletines' ? 'active' : ''}`}>
                <Link to="/boletines" className="nav-link" aria-current="page" href="#" onClick={() => handleNavClick('boletines')}>
                  Boletines
                </Link>
              </li>
              <li className={`nav-item ${activeOption === 'jurisprudencia' ? 'active' : ''}`}>
                <Link to="/jurisprudencia" className="nav-link" aria-current="page" href="#" onClick={() => handleNavClick('jurisprudencia')}>
                  Jurisprudencia
                </Link>
              </li>
              <li className={`nav-item ${activeOption === 'guia' ? 'active' : ''}`}>
                <Link to="/guia" className="nav-link" aria-current="page" href="#" onClick={() => handleNavClick('guia')}>
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
