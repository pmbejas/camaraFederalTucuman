import './guiainicial.css';
import { useEffect } from 'react';
import { Link, useOutletContext } from 'react-router-dom';
import { Carddependencia } from '../../componentes/Carddependencia/Carddependencia';
import { Cardjuzgado } from '../../componentes/Cardjuzgado/Cardjuzgado';
import { CardVocalia } from '../../componentes/CardVocalia/CardVocalia';
import { Separador } from '../../componentes/Separador/Separador';

export const GuiaInicial = () => {
    const datos = useOutletContext();

    useEffect(() => {  
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }, []);

  return (
    <div className="container">
        <h2 className="mt-5 mb-5 text-start text-dark fs-1">GUIA JUDICIAL</h2>
        <h3 className="mt-4 mb-2 text-start text-dark">Domicilio</h3>
        <Separador 
            backgroundColor="rgb(0, 86, 143)" 
            alto="5px" 
            ancho="100%" 
            borderRadius="5px"
            titulo=""
            classTitulo="text-light p-0 m-0 fs-4 ps-3"
          />
         <section className="mt-4">
            <p className='m-0 p-0 mb-1'>Combate de las Piedras 418 - 4to Piso</p>
            <p className='m-0 p-0 mb-1'>(T4000BRJ) San Miguel de Tucuman</p>
            <p className='m-0 p-0 mb-1'>(0381) 484-6133 </p>
            <p className='m-0 p-0 mb-1'>cftucuman.prosecretaria@pjn.gov.ar</p>
        </section>

        { datos.jueces && 
            <section className="container-fluid m-0 mt-3 p-0 text-start seccion-vocales">
                <h3 className='mt-4 text-dark'>Vocalías</h3>
                <Separador 
                    backgroundColor="rgb(0, 86, 143)" 
                    alto="5px" 
                    ancho="100%" 
                    borderRadius="5px"
                    titulo=""
                    classTitulo="text-light p-0 m-0 fs-4 ps-3"
                />
                <div className="container-fluid m-0 mt-5 p-0 justify-content-evenly row">
                    {datos.jueces.map(juez => (
                        <div key={juez.orden} className="col-12 mb-4 pb-2">
                            <CardVocalia 
                                imagenJuez={`../../Images/vocales/${juez.imagen}`}
                                caracter={juez.caracter}
                                nombreVocal={juez.nombre}
                                telefono={juez.telefono}
                                email={juez.email}
                            />
                        </div>
                    ))}
                </div>
            </section>
        }
        { datos.oficinas &&
            <section className="container-fluid m-0 mt-3 p-0 text-start seccion-vocales">
            <h3 className='mt-5 text-dark'>Secretarías</h3>
            <Separador 
                    backgroundColor="rgb(0, 86, 143)" 
                    alto="5px" 
                    ancho="100%" 
                    borderRadius="5px"
                    titulo=""
                    classTitulo="text-light p-0 m-0 fs-4 ps-3"
                />
            <div className="container-fluid m-0 mt-5 p-0 d-flex justify-content-start row">
                {datos.oficinas.map(secretaria => (
                    <div key={secretaria.idSecretaria} className="col-12 col-md-6 col-lg-4 mb-5 gap-5">
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
            <section className="container-fluid m-0 mt-5 p-0 text-start seccion-vocales">
                <h3 className='mt-4 text-dark'>Jurisdicciones</h3>
                <Separador 
                    backgroundColor="rgb(0, 86, 143)" 
                    alto="5px" 
                    ancho="100%" 
                    borderRadius="5px"
                    titulo=""
                    classTitulo="text-light p-0 m-0 fs-4 ps-3"
                />
                <div className="container-fluid m-0 mt-4 mb-4 pt-3 pb-3 d-flex row justify-content-around">
                    {datos.jurisdiccion.map(jurisdiccion => (
                        <div key={jurisdiccion.idJurisdiccion} className="col-12 col-md-4 mt-2 text-center">
                            <Link to={jurisdiccion.slug} style={{ textDecoration: 'none' }}>
                                <Carddependencia 
                                    titulo={jurisdiccion.nombreJurisdiccion} 
                                    imagen={`../../Images/misc/${jurisdiccion.imagen}.svg`}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        }
    </div>
  )
}
