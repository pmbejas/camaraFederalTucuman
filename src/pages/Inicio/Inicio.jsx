import './inicio.css';
import { Link } from 'react-router-dom';
import { Backtitulo } from '../../componentes/Backtitulo/Backtitulo';
import { Separador } from '../../componentes/Separador/Separador';
import { CardServicios } from '../../componentes/CardServicios/CardServicios';
import iconoBoletinAzul from "../../Images/icons/iconoBoletinAzul.svg";
import iconoMazoAzul from '../../Images/icons/iconoMazoAzul.svg';
import iconoGuiaAzul from '../../Images/icons/iconoGuiaAzul.svg';

export const Inicio = () => {
  return (
    <div className="container-fluid m-0 p-0 mb-4">
      {/* <Backtitulo texto="Cámara Federal de Apelaciones de Tucumán" /> */}
      <section className="container-fluid d-flex mt-3 row">
        <span className="container-inicio--fondo-fijo col-12 m-0 p-0 text-center">
          <p className="titulo-seccion-principal fw-bold">Cámara Federal de Apelaciones de Tucumán</p>
        </span>
        <section className='col-12 bg-light d-flex row text-center justify-content-center'>
          <div className="primera-seccion col-8 pt-5 pb-5 bg-light">
            <h2 className='p-0 m-0 mb-5 fw-bold'>Nuestra Meta</h2>
            <p className='fs-4'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit reiciendis molestiae, soluta suscipit nihil fugiat repellat aliquam omnis? Vero facere, laboriosam hic harum voluptas unde distinctio provident dolorum illo nam.
            </p>
          </div>
          <div className="col-12 bg-light">
            <Separador 
              backgroundColor="rgb(0, 86, 143)" 
              alto="50px" 
              ancho="90%" 
              borderRadius="5px"
              titulo="Servicios"
              classTitulo="text-light p-0 m-0 fs-4 ps-3"
            />
          </div>
          <div className="col-12 d-flex row mt-4 gap-5 justify-content-center bg-light">
            <div className="col-12 col-md-3">
              <Link to="/jueces" className="nav-link h-100" href="#"> 
                <CardServicios 
                  icono={iconoGuiaAzul}
                  width="100%"
                  height="100%"
                  color="rgb(0, 86, 143)"
                  titulo="Jueces" 
                  subtitulo="Jueces que conforman la Camara Federal de Tucumán"
                />
              </Link>
            </div>
            <div className="col-12 col-md-3">
              <Link to="/fallos" className="nav-link h-100" href="#">
                <CardServicios 
                  icono={iconoMazoAzul}
                  width="100%"
                  height="100%"
                  color="rgb(0, 86, 143)"
                  titulo="Sentencias" 
                  subtitulo="Fallos de la Camara Federal de Apelaciones de Tucumán"
                />        
              </Link>
            </div>
            <div className="col-12 col-md-3">
              <Link to="/boletines" className="nav-link h-100" href="#">
                <CardServicios 
                  icono={iconoBoletinAzul}
                  width="100%"
                  height="100%"
                  color="rgb(0, 86, 143)"
                  titulo="Boletines" 
                  subtitulo="Boletín de jurisprudencia"
                />
              </Link>
            </div>

            <div className="col-12 col-md-3">
              <Link to="/guia" className="nav-link h-100" href="#"> 
                <CardServicios 
                  icono={iconoGuiaAzul}
                  width="100%"
                  height="100%"
                  color="rgb(0, 86, 143)"
                  titulo="Guia Judicial" 
                  subtitulo="Boletín de novedades"
                />
              </Link>
            </div>

            
            <div className="col-12 col-md-3">
              <Link to="/fallos" className="nav-link h-100" href="#">
                <CardServicios 
                  icono={iconoBoletinAzul}
                  width="100%"
                  height="100%"
                  color="rgb(0, 86, 143)"
                  titulo="Instructivos" 
                  subtitulo="Instructivos para diferentes trámites"
                />
              </Link>
            </div>
            <div className="col-12 col-md-3">
              <Link to="http://www.pjn.gov.ar/gestion-judicial" className="nav-link h-100" target="_blank" href="#">
                <CardServicios 
                  icono={iconoBoletinAzul}
                  width="100%"
                  height="100%"
                  color="rgb(0, 86, 143)"
                  titulo="Expedientes" 
                  subtitulo="Acceso al Portal de Gestion de causas del PJN"
                />
              </Link>
            </div>
          </div>
        </section>
      </section>
    </div>
  ) 
}

