import { Backtitulo } from '../../componentes/Backtitulo/Backtitulo'
import { useState, useEffect } from 'react';
import { getDatos } from '../../Servicies/Servicies';
import { Cardvocales } from '../../componentes/Cardvocales/Cardvocales';
import { Separador } from '../../componentes/Separador/Separador';
import './jueces.css';

export const Jueces = () => {
  const [datos, setDatos] = useState([{}]);
  const fetchData = async () => setDatos(await getDatos().then(response =>response.data.find(camara=>camara.idCamara==1)));
  
  useEffect(()=>{
    fetchData();
  }, []);
  
  return (
    <div className="container-fluid m-0 p-0">
      <Backtitulo texto={datos.nombreCamara} />
      <section>
        <div className="container">
        <div className="container-fluid d-flex justify-content-center">
            <div className="container-jueces-titulo">
                <h3 className="mt-5 mb-5  ps-2 text-start text-dark">Jueces que conforman el Tribunal</h3>
            </div>
        </div>
          <Separador 
            backgroundColor="rgb(0, 86, 143)" 
            alto="5px" 
            ancho="90%" 
            borderRadius="5px"
            titulo=""
            classTitulo="text-light p-0 m-0 fs-4 ps-3"
          />
          <div className="container  d-flex justify-content-center mb-4 mt-4">
            <div className="container-jueces-imagen d-flex justify-content-center row">
                    <img className="col-12 imagen-tribunal mt-4 mb-4" src="../../Images/vocales/tribunal.jpg" alt="" />
                    <p className="col-12">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe non ab ad provident quo accusantium doloribus incidunt corrupti nesciunt cupiditate nulla quos, aliquid maiores dolores ipsum placeat in. Placeat, laborum.
                        Sit nobis accusamus possimus omnis quod dolores sint sunt minus porro. Explicabo necessitatibus iure soluta eligendi aliquam repellat commodi, corrupti accusamus aperiam exercitationem modi, ullam, minima provident consectetur porro nihil.
                    </p>
            </div>
          </div>
          <div className="mb-5">
            <Separador 
                backgroundColor="rgb(0, 86, 143)" 
                alto="5px" 
                ancho="90%" 
                borderRadius="5px"
                titulo=""
                classTitulo="text-light p-0 m-0 fs-4 ps-3"
            />
          </div>
            { datos.jueces && 
                <section className="container-fluid m-0 mt-3 mb-3 p-0 text-start seccion-vocales">
                    <div className="container-fluid m-0 p-0 justify-content-evenly row gap-4">
                        {datos.jueces.map(juez => (
                            <div key={juez.orden} className="col-12 col-md-8 mt-2">
                                <Cardvocales 
                                    className="col-12 col-md-3" 
                                    nombre={juez.nombre}
                                    caracter={juez.caracter} 
                                    texto={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, consequuntur dolorem odit sequi reiciendis doloribus dignissimos vel quos. Esse mollitia veniam atque ab rerum hic, perferendis aspernatur soluta pariatur laboriosam.'} 
                                    imagen={'../../Images/vocales/'+juez.imagen}
                                />
                            </div>
                        ))}
                    </div>
                </section>
            } 
        </div>
      </section>
    </div>
  )
}