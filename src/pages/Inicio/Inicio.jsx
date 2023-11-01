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
      <Backtitulo texto="INICIO" />
      <section className="container-fluid d-flex justify-content-center mt-3 row">
        <div className="container-inicio--primera-seccion col-10 mt-4">
            <img className="float-start" src="../../Images/edificiocfa.jpg" alt="" style={{width: "40%"}}/>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, soluta. Maiores, recusandae at eaque nisi, in minus tempore laboriosam sit labore, aperiam assumenda similique reprehenderit itaque? Alias, perferendis ipsum! Illo!
            </p>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, soluta. Maiores, recusandae at eaque nisi, in minus tempore laboriosam sit labore, aperiam assumenda similique reprehenderit itaque? Alias, perferendis ipsum! Illo!
            </p>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, soluta. Maiores, recusandae at eaque nisi, in minus tempore laboriosam sit labore, aperiam assumenda similique reprehenderit itaque? Alias, perferendis ipsum! Illo!
            </p>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, soluta. Maiores, recusandae at eaque nisi, in minus tempore laboriosam sit labore, aperiam assumenda similique reprehenderit itaque? Alias, perferendis ipsum! Illo!
            </p>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, soluta. Maiores, recusandae at eaque nisi, in minus tempore laboriosam sit labore, aperiam assumenda similique reprehenderit itaque? Alias, perferendis ipsum! Illo!
            </p>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, soluta. Maiores, recusandae at eaque nisi, in minus tempore laboriosam sit labore, aperiam assumenda similique reprehenderit itaque? Alias, perferendis ipsum! Illo!
            </p>
            <p className=''>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, soluta. Maiores, recusandae at eaque nisi, in minus tempore laboriosam sit labore, aperiam assumenda similique reprehenderit itaque? Alias, perferendis ipsum! Illo!
            </p>
        </div>
        <div className="col-12">
          <Separador 
            backgroundColor="rgb(0, 86, 143)" 
            alto="50px" 
            ancho="90%" 
            borderRadius="5px"
            titulo="Servicios"
            classTitulo="text-light p-0 m-0 fs-4 ps-3"
          />
        </div>
        <div className="col-12 d-flex row mt-4 gap-5 justify-content-center">
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
    </div>
  ) 
}

