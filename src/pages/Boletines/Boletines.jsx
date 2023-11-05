import { Backtitulo } from '../../componentes/Backtitulo/Backtitulo'
import { useState, useEffect } from 'react';
import { getBoletines } from '../../Servicies/Servicies';
import { Separador } from '../../componentes/Separador/Separador';
import { CardBoletin } from '../../componentes/CardBoletin/CardBoletin';
import './boletines.css';

export const Boletines = () => {
    const [boletines, setBoletines] = useState([{}]);
    const fetchData = async () => setBoletines(await getBoletines().then(response=>response.data));
    
    useEffect(()=> {
        fetchData();
    }, []);

  return (
    <div className="container-fluid m-0 p-0">
        <Backtitulo texto="Cámara Federal de Apelaciones de Tucumán"/>
        <section className="container-fluid d-flex row justify-content-center">
            <div className="col-12 col-md-10 container-boletines-titulo">
                <h3 className="mt-5 mb-2  ps-2 text-start text-dark">Cómo leer nuestros Boletines</h3>
            </div>
            <Separador 
                    backgroundColor="rgb(0, 86, 143)" 
                    alto="5px" 
                    ancho="83%" 
                    borderRadius="5px"
                    titulo=""
                    classTitulo="text-light p-0 m-0 fs-4 ps-3"
                    />
            <div className="col-12 col-md-10">
                <p className='container-boletines-comoleer p-0 m-0 mt-4 fs-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex laboriosam voluptates non tenetur aperiam id suscipit quam assumenda voluptatum delectus excepturi dolorem totam facere, optio accusamus esse ab? In.
                </p>
            </div>
        </section>
        <section className="container-fluid d-flex row justify-content-center">
            <div className="col-12 col-md-10 container-boletines-titulo">
                <h3 className="mt-5 mb-2  ps-2 text-start text-dark">Boletines</h3>
            </div>
            <Separador 
                    backgroundColor="rgb(0, 86, 143)" 
                    alto="5px" 
                    ancho="83%" 
                    borderRadius="5px"
                    titulo=""
                    classTitulo="text-light p-0 m-0 fs-4 ps-3"
                    />
            <div className="col-12 col-md-10 d-flex row mt-5 mb-5">
                {boletines && boletines.map((boletin, key)=> (
                    <div className="col-11 col-md-3" key={key}>
                        <CardBoletin 
                            titulo={boletin.tituloBoletin} 
                            materia={boletin.materiaBoletin}
                            periodo={boletin.periodoBoletin}
                            urlImagen={`../../Images/boletines/${boletin.thumbnailBoletin}`}
                            urlPDF={`../../data/pdfboletines/${boletin.urlBoletin}`}
                        />
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}
