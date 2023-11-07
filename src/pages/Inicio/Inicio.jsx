import './inicio.css';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Backtitulo } from '../../componentes/Backtitulo/Backtitulo';
import { Separador } from '../../componentes/Separador/Separador';
import { CardServicios } from '../../componentes/CardServicios/CardServicios';
import iconoBoletinAzul from "../../Images/icons/iconoBoletinAzul.svg";
import iconoMazoAzul from '../../Images/icons/iconoMazoAzul.svg';
import iconoGuiaAzul from '../../Images/icons/iconoGuiaAzul.svg';
import igualdadAzul from '../../Images/icons/igualdadAzul.svg';
import instructivoAzul from '../../Images/icons/instructivoAzul.svg';
import consultaAzul from '../../Images/icons/consultaAzul.svg';


export const Inicio = () => {

  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);
  
  return (
    <div className="container-fluid m-0 p-0 mb-4">
      {/* <Backtitulo texto="Cámara Federal de Apelaciones de Tucumán" /> */}
      <section className="container-fluid contenedor-princial-inicio d-flex mt-3 row m-0 p-0">
        <span className="container-inicio--fondo-fijo col-12 m-0 p-0 text-center">
        </span>
        <div className="titulo-seccion-principal d-flex text-center align-items-center justify-content-center">
              <h2 className="text-white fw-bold d-block d-md-none">Cámara Federal de Apelaciones de Tucumán</h2>
              <h1 className="text-white fw-bold d-none d-md-block">Cámara Federal de Apelaciones de Tucumán</h1>
        </div>
        <section className='col-12 bg-light d-flex row text-center justify-content-center'>
          <div className="primera-seccion col-12 col-md-8 pt-5 pb-5 bg-light text-center d-flex row">
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
              <Link to="/jueces" className="nav-link h-100 d-flex justify-content-center" href="#"> 
                <CardServicios 
                  icono={igualdadAzul}
                  width="100%"
                  height="100%"
                  color="rgb(0, 86, 143)"
                  titulo="Jueces" 
                  subtitulo="Jueces que conforman la Camara Federal de Tucumán"
                />
              </Link>
            </div>
            <div className="col-12 col-md-3">
              <Link to="/busqueda" className="nav-link h-100 d-flex justify-content-center" href="#">
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
            <div className="col-12 col-md-3 ">
              <Link to="/boletines" className="nav-link h-100 d-flex justify-content-center" href="#">
                <CardServicios 
                  icono={iconoBoletinAzul}
                  width="100%"
                  height="100%"
                  color="rgb(0, 86, 143)"
                  titulo="Boletines" 
                  subtitulo="Novedades en jurisprudencia"
                />
              </Link>
            </div>

            <div className="col-12 col-md-3">
              <Link to="/guia" className="nav-link h-100 d-flex justify-content-center" href="#"> 
                <CardServicios 
                  icono={iconoGuiaAzul}
                  width="100%"
                  height="100%"
                  color="rgb(0, 86, 143)"
                  titulo="Guia Judicial" 
                  subtitulo="Listado de oficinas y teléfonos"
                />
              </Link>
            </div>

            
            <div className="col-12 col-md-3">
              <Link to="/guia" className="nav-link h-100 d-flex justify-content-center" href="#">
                <CardServicios 
                  icono={instructivoAzul}
                  width="100%"
                  height="100%"
                  color="rgb(0, 86, 143)"
                  titulo="Instructivos" 
                  subtitulo="Instructivos para diferentes trámites"
                />
              </Link>
            </div>
            <div className="col-12 col-md-3">
              <Link to="http://www.pjn.gov.ar/gestion-judicial" className="nav-link h-100 d-flex justify-content-center" target="_blank" href="#">
                <CardServicios 
                  icono={consultaAzul}
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

