import './guiainicial.css';
import { Link, useOutletContext } from 'react-router-dom';
import { Carddependencia } from '../../componentes/Carddependencia/Carddependencia';
import { Cardvocales } from '../../componentes/Cardvocales/Cardvocales';
import { Cardjuzgado } from '../../componentes/Cardjuzgado/Cardjuzgado';

export const GuiaInicial = () => {
    const datos = useOutletContext();

  return (
    <div className="container">
        <h3 className="mt-4 mb-3 text-start text-primary">Dirección</h3>
         <section>
            <p className='m-0 p-0 mb-1'>Combate de las Piedras 418 - 4to Piso</p>
            <p className='m-0 p-0 mb-1'>(T4000BRJ) San Miguel de Tucuman</p>
            <p className='m-0 p-0 mb-1'>(0381) 484-6133 </p>
            <p className='m-0 p-0 mb-1'>cftucuman.prosecretaria@pjn.gov.ar</p>
        </section>
        { datos.jueces && 
            <section className="container-fluid m-0 mt-3 p-0 text-start seccion-vocales">
                <h3 className='mt-4 text-primary'>Vocalías</h3>
                <div className="container-fluid m-0 p-0 d-flex justify-content-start row">
                    {datos.jueces.map(juez => (
                        <div key={juez.orden} className="col-12 col-md-6 col-lg-4 mt-2">
                            <Cardvocales className="col-12 col-md-3" nombre={juez.nombre} caracter={juez.caracter} telefono={juez.telefono} email={juez.email} />
                        </div>
                    ))}
                </div>
            </section>
        }
        { datos.oficinas &&
            <section className="container-fluid m-0 mt-3 p-0 text-start seccion-vocales">
            <h3 className='mt-4 text-primary'>Secretarías</h3>
            <div className="container-fluid m-0 p-0 d-flex justify-content-start row">
                {datos.oficinas.map(secretaria => (
                    <div key={secretaria.idSecretaria} className="col-12 col-md-6 col-lg-4 mt-2">
                        <Cardjuzgado className="col-12 col-md-3"
                              nombreJuzgado={secretaria.nombre}
                              nombreCargo={secretaria.secretaria}
                              ubicacion={secretaria.ubicacion}
                              telefono={secretaria.telefono}
                              email={secretaria.email}
                            />
                    </div>
                ))}
            </div>
            </section>
        }
        { datos.jurisdiccion &&
            <section className="container-fluid m-0 mt-3 p-0 text-start seccion-vocales">
                <h3 className='mt-4 text-primary'>Jurisdicciones</h3>
                <div className="container-fluid m-0 pt-3 pb-3 d-flex row justify-content-around">
                    {datos.jurisdiccion.map(jurisdiccion => (
                        <div key={jurisdiccion.idJurisdiccion} className="col-12 col-md-4 mt-2 text-center">
                            <Link to={jurisdiccion.slug} style={{ textDecoration: 'none' }}>
                                <Carddependencia titulo={jurisdiccion.nombreJurisdiccion} />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        }
    </div>
  )
}
