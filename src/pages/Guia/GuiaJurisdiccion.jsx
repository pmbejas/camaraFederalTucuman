import { useParams, useOutletContext,Link } from 'react-router-dom';
import './guiajurisdiccion.css';
import { useEffect, useState } from 'react';
import { Cardjuzgado } from '../../componentes/Cardjuzgado/Cardjuzgado';

export const GuiaJurisdiccion = () => {
  const datos = useOutletContext();

  const [jurisdiccion, setJurisdiccion] = useState([{}]);
  const { slug } = useParams();


  useEffect(() => {
    setJurisdiccion(datos.jurisdiccion.find(jurisdiccion => jurisdiccion.slug == slug));
  }, []);

  return (
      <div className="container-fluid container-md mb-4">
        <Link to="/guia">Volver</Link>
        <h2 className="mt-4 mb-3 text-start text-primary">Provincia de {jurisdiccion.nombreJurisdiccion}</h2>
        {jurisdiccion &&
          <section className="container-fluid m-0 mt-3 p-0 text-start">
              <h3 className='mt-4 text-primary'>Juzgados</h3>
              {jurisdiccion.juzgados && jurisdiccion.juzgados.map(juzgado => (
                  <div key={juzgado.idjuzgado} className="mt-3 border p-3 contenedor-juzgado">
                    <h4>{juzgado.nombre}</h4>
                    <div className="container-fluid">
                      <h4 className='mt-4 text-primary'>Juez a cargo</h4>
                      <div className="ms-2">
                        <h4>{juzgado.jueces.nombre} ({juzgado.jueces.titular})</h4>
                        <p className='p-0 mb-1'>{juzgado.jueces.ubicacion}</p>
                        <p className='p-0 mb-1'>{juzgado.jueces.telefono}</p>
                        <p className='p-0 mb-1'>{juzgado.jueces.email}</p>
                      </div>
                      <h4 className='mt-4 text-primary'>Secretarías</h4>
                      <div className="ms-2 mb-3 d-flex row">
                        {juzgado.secretarias && juzgado.secretarias.map(secretaria => (
                          <div key={secretaria.id} className="col-12 col-md-6 col-lg-4 mt-3">
                            <Cardjuzgado 
                              nombreJuzgado={secretaria.nombre}
                              nombreCargo={secretaria.acargo}
                              ubicacion={secretaria.ubicacion}
                              telefono={secretaria.telefono}
                              email={secretaria.email}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                    
                  </div>
              ))}
          </section>
        }
      </div>
  )
}
