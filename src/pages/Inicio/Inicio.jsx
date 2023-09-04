import { Backtitulo } from '../../componentes/Backtitulo/Backtitulo';
import './inicio.css';
import construccion2 from '../../Images/under_construction2.png';

export const Inicio = () => {
  return (
    <div className="container-fluid m-0 p-0">
      <Backtitulo texto="INICIO" />
      <div className="container d-flex justify-content-center mt-3">
        <img src={construccion2} alt="" />
      </div>
    </div>
  ) 
}

