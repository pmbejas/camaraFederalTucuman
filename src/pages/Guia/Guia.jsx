
import { Outlet } from 'react-router-dom';
import { Backtitulo } from '../../componentes/Backtitulo/Backtitulo'
import { useState, useEffect } from 'react';
import { getDatos } from '../../Servicies/Servicies';

export const Guia = () => {
  const [datos, setDatos] = useState([{}]);
  const fetchData = async () => setDatos(await getDatos().then(response =>response.data.find(camara=>camara.idCamara==1)));
  
  useEffect(()=>{
    fetchData();
  }, []);

  return (
    <div className="container-fluid m-0 p-0">
      <Backtitulo texto={datos.nombreCamara} />
      <section>
        <Outlet context={datos} />
      </section>
    </div>
  )
}
