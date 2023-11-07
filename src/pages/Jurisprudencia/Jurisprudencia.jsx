import './jurisprudencia.css'
import { Backtitulo } from '../../componentes/Backtitulo/Backtitulo'
import { useState, useEffect } from 'react';
import { Separador } from '../../componentes/Separador/Separador';
import iconoMazoAzul from '../../Images/icons/iconoMazoAzul.svg';
import { CardServicios } from '../../componentes/CardServicios/CardServicios';
import { CardPersonal } from '../../componentes/CardPersonal/CardPersonal';
import { Link } from 'react-router-dom';

export const Jurisprudencia = () => {

    useEffect(()=> {

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          
    }, []);


  return (
    <div className="container-fluid m-0 p-0">
        <Backtitulo texto="Cámara Federal de Apelaciones de Tucumán"/>
        <section className="container-fluid d-flex row justify-content-center">
            <div className="col-12 col-md-10 container-boletines-titulo">
                <h3 className="mt-5 mb-2  ps-2 text-start text-dark">Jurisprudencia</h3>
            </div>
            <div className="d-block d-md-none">
                <Separador className="d-" 
                        backgroundColor="rgb(0, 86, 143)" 
                        alto="5px" 
                        ancho="95" 
                        borderRadius="5px"
                        titulo=""
                        classTitulo="text-light p-0 m-0 fs-4 ps-3"
                        />
            </div>
            <div className="d-none d-md-block">
                <Separador 
                        backgroundColor="rgb(0, 86, 143)" 
                        alto="5px" 
                        ancho="83%" 
                        borderRadius="5px"
                        titulo=""
                        classTitulo="text-light p-0 m-0 fs-4 ps-3"
                        />
            </div>
            <div className="col-12 col-md-10">
                <p className='container-jurisprudencia-texto p-0 m-0 mt-4 fs-md-4'>
                    texto explicativo sobre jurisprudenica y demas
                </p>
                <p className='container-jurisprudencia-texto p-0 m-0 mt-4 fs-md-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex laboriosam voluptates non tenetur aperiam id suscipit quam assumenda voluptatum delectus excepturi dolorem totam facere, optio accusamus esse ab? In.
                </p>
            </div>
            <div className="col-12 col-md-4 mt-5 mb-3">
            <Link to="/busqueda" className="nav-link h-100 d-flex justify-content-center" href="#">
                <CardServicios 
                    icono={iconoMazoAzul}
                    width="100%"
                    height="100%"
                    color="rgb(0, 86, 143)"
                    titulo="Consulta de Fallos" 
                    subtitulo="Sistema de consulta de fallos dictados por la Camara Federal de Apelaciones de Tucumán"
                    />
            </Link>
            </div>
        </section>
        <section className="container-fluid d-flex row justify-content-center">
            <div className="col-12 col-md-10 container-boletines-titulo">
                <h3 className="mt-5 mb-2  ps-2 text-start text-dark">Oficina de Jurisprudencia</h3>
            </div>
            <div className="d-block d-md-none">
                <Separador className="d-" 
                        backgroundColor="rgb(0, 86, 143)" 
                        alto="5px" 
                        ancho="95" 
                        borderRadius="5px"
                        titulo=""
                        classTitulo="text-light p-0 m-0 fs-4 ps-3"
                        />
            </div>
            <div className="d-none d-md-block">
                <Separador 
                        backgroundColor="rgb(0, 86, 143)" 
                        alto="5px" 
                        ancho="83%" 
                        borderRadius="5px"
                        titulo=""
                        classTitulo="text-light p-0 m-0 fs-4 ps-3"
                        />
            </div>
            <div className="col-12 col-md-10">
                <p className='container-jurisprudencia-texto p-0 m-0 mt-4 fs-md-4'>

                    Texto sobre la Oficna de Jurisprudencia y las acordadas y que se hable sobre el proyecto
                </p>
                <p className='container-jurisprudencia-texto p-0 m-0 mt-4 fs-md-4'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo ex laboriosam voluptates non tenetur aperiam id suscipit quam assumenda voluptatum delectus excepturi dolorem totam facere, optio accusamus esse ab? In.
                </p>
            </div>
        </section>
        <section className="container-fluid d-flex row justify-content-center">
            <div className="col-12 col-md-10 container-boletines-titulo">
                <h3 className="mt-5 mb-2  ps-2 text-start text-dark">Integrantes</h3>
            </div>
            <div className="d-block d-md-none">
                <Separador className="d-" 
                        backgroundColor="rgb(0, 86, 143)" 
                        alto="5px" 
                        ancho="95" 
                        borderRadius="5px"
                        titulo=""
                        classTitulo="text-light p-0 m-0 fs-4 ps-3"
                        />
            </div>
            <div className="d-none d-md-block">
                <Separador 
                        backgroundColor="rgb(0, 86, 143)" 
                        alto="5px" 
                        ancho="83%" 
                        borderRadius="5px"
                        titulo=""
                        classTitulo="text-light p-0 m-0 fs-4 ps-3"
                        />
            </div>
            <div className="col-12 col-md-10 mb-5">
                <p className='container-jurisprudencia-texto p-0 m-0 mt-4 fs-md-4'>
                    texto sobre nosotros
                </p>
                <div className="col-12 mt-4 d-flex row justify-content-center">
                    <div className="col-3">
                        <CardPersonal 
                            nombre="Sofia Intile"
                            foto="../../Images/integrantes/pablo.jpg"
                            texto="Abogada"  />
                    </div>
                    <div className="col-3">
                        <CardPersonal 
                            nombre="Florencia Gómez Isa"
                            foto="../../Images/integrantes/pablo.jpg"
                            texto="Abogada"  />
                    </div>
                    <div className="col-3">
                        <CardPersonal 
                            nombre="Carolina Sanchis"
                            foto="../../Images/integrantes/pablo.jpg"
                            texto="Abogada"  />
                    </div>
                    <div className="col-3">
                        <CardPersonal 
                            nombre="María Falú"
                            foto="../../Images/integrantes/pablo.jpg"
                            texto="Abogada"  />
                    </div>
                    <div className="col-3">
                        <CardPersonal 
                            nombre="Solange Avellaneda"
                            foto="../../Images/integrantes/pablo.jpg"
                            texto="Abogada"  />
                    </div>
                    <div className="col-3">
                        <CardPersonal 
                            nombre="Alina Uriburu"
                            foto="../../Images/integrantes/pablo.jpg"
                            texto="Abogada" />
                    </div>
                    <div className="col-3">
                        <CardPersonal 
                            nombre="Pablo Bejas"
                            foto="../../Images/integrantes/pablo.jpg" 
                            texto="Desarrollo Web"/>
                    </div>
                    <div className="col-3">
                        <CardPersonal 
                            nombre="Gonzalo Guchea"
                            foto="../../Images/integrantes/pablo.jpg"
                            texto="Ing. Sistemas" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}
