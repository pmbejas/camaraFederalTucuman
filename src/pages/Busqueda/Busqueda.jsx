import './busqueda.css';
import { useEffect, useState } from "react";
import { CardFirmante } from '../../componentes/CardFirmante/CardFirmante';
import { CardVoces } from "../../componentes/CardVoces/CardVoces";
import { CardSumario } from "../../componentes/CardSumario/CardSumario";
import { Backtitulo } from '../../componentes/Backtitulo/Backtitulo';
import { getTesauro, getJuecesJuzgados, getJuzgados } from '../../Servicies/Servicies';
import Select from "react-select";


export const Busqueda = (props) => {
    const [firmantes, setFirmantes] = useState([]);
    const [voces, setVoces] = useState([]);
    const [sumarios, setSumarios] = useState([]);
    const [vocesSumario, setVocesSumario] = useState([]);
    const [selected, setSelected] = useState(''); 
    const [tesauro, setTesauro] = useState([]);
    const [juzgados, setJuzgados] = useState([]);
    const [juecesJuzgados, setJuecesJuzgados] = useState([]);

    useEffect(()=>{
        const cargarDatos = async () => {
            setTesauro(await getTesauro().then(response => response.data));
            setJuzgados(await getJuzgados().then(response => response.data));
            setJuecesJuzgados(await getJuecesJuzgados().then(response => response.data));
        }

        cargarDatos();
    }, []);

    useEffect(()=>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    }, []);
    
    const cargarOptions = () => {
        const array = [...tesauro];
        let opciones = [{}];
        array.forEach(voces => {
          opciones.push({value: voces.voces, label: voces.voces})
        })
        return [...opciones];
      }
    
    const options = cargarOptions();

    const handleChangeSelect = (selectedOption) => {
      setSelected(selectedOption.value)
    }
  
    const variableSetters = {
      voces: setVoces,
      vocesSumario: setVocesSumario,
      firmantes: setFirmantes,
      sumarios: setSumarios
    }
  
    const agregarFirmante = async () => {
      const firmante = {
          "nombreVocalFirmante": document.getElementById('nombreVocalFirmante').value,
          "caracterVocalFirmante": document.getElementById('caracterVocalFirmante').value,
          "tipoFirmaVocal": document.getElementById('tipoFirmaVocal').value
      }
      const firmanteEncontrado = firmantes.find(firmanteBuscado => firmanteBuscado.nombreVocalFirmante === firmante.nombreVocalFirmante);
      if (!firmanteEncontrado) {
        setFirmantes([...firmantes, firmante]);
        }  
    }
  
    const agregarVoces = () => {
      if (!selected=='') {
        const vocesEncontradas = voces.find(voz => voz === selected);
        if (!vocesEncontradas) {
            setVoces([...voces, selected]);
          }
      }
      setSelected('');
    }
  
    const agregarSumario = () => {
      const textAreaSumario = document.getElementById('textareaSumario');
      if (textAreaSumario.value.length>0) {
        const sumario = {
          "textoSumario": textAreaSumario.value,
          "vocesSumario": vocesSumario,
          "idFallo": ''
        }
        setSumarios([...sumarios, sumario]);
        textAreaSumario.value = "";
        setVocesSumario([]);
      }
    }
  
    const agregarVocesSumario = () => {
  
      if (!selected=='') {
        const vocesEncontradas = vocesSumario.find(voz => voz === selected);
        if (!vocesEncontradas) {
            setVocesSumario([...vocesSumario,selected]);
          }
        setSelected('');
      }
    }
  
    const eliminar = (array, index, variable) => {
      const arrayEliminar = [...array];
      arrayEliminar.splice(index,1);
  
      if (variableSetters[variable]) {
        variableSetters[variable]([...arrayEliminar]);
      }
    } 
  
      const mensajeError = (contenedor, mensaje) => {
      const contenedorError = document.getElementById(contenedor);
      const mensajeError = document.createElement('p');
      mensajeError.textContent = mensaje;
      mensajeError.classList.add('text-danger','fw-bold');
      contenedorError.appendChild(mensajeError);
      return true;
    }

    const buscarFallo=(event) => {
        event.preventDefault;
    }

  return (
    <div className="container-fluid m-0 p-0">
        <Backtitulo texto="Cámara Federal de Apelaciones de Tucumán"/>
        <div className="container contenedor-nuevofallo">
        <div className="container titulo-fallonuevo">
            <h5 className="p-0 m-0 ms-3"> Búsqueda de Fallos</h5>
        </div>

        <form className="container-fluid text-strong contenedor-formulario" onSubmit={buscarFallo}>
            <div className="container flex  row  contenedor-campos">

            <div className="col-12 campo col-md-3"> 
                <label htmlFor="idcamara" className="form-label fw-bold">Jurisdicción</label>
                <select className="form-select" name="idcamara" id="idcamara">
                <option value="Cámara Federal de Tucumán">Cámara Federal de Tucumán</option>
                </select>
            </div>
            <div className="col-12 campo col-md-3">
                <label className="form-label fw-bold" htmlFor="numeroExpediente">Número de Expediente</label>
                <input className="form-control" type="text" name="numeroExpediente" id="numeroExpediente" required/>
            </div>
            <div className="col-12 campo col-md-6">
                <label className="form-label fw-bold" htmlFor="caratula">Carátula del Expediente</label>
                <input className="form-control" type="text" name="caratula" id="caratula" required/>
            </div>
            </div>
            <div className="container flex row contenedor-campos">
            <div className="col-12 campo col-md-4">
                <label className="form-label fw-bold" htmlFor="fechaFalloDesde">Fecha Desde</label>
                <input className="form-control" type="date" name="fechaFalloDesde" id="fechaFalloDesde" required/>
            </div>
            <div className="col-12 campo col-md-4">
                <label className="form-label fw-bold" htmlFor="fechaFalloHasta">Fecha Hasta</label>
                <input className="form-control" type="date" name="fechaFalloHasta" id="fechaFalloHasta" required/>
            </div>
            <div className="col-12 campo col-md-4">
                <label className="form-label fw-bold" htmlFor="juzgadoOrigen">Juzgado de Origen</label>
                <select className="form-select" name="juzgadoOrigen" id="juzgadoOrigen">
                {juzgados && juzgados.length>0 && juzgados.map((juzgado, index) => (
                    <option key={index} value={juzgado.nombreJuzgado}>{juzgado.nombreJuzgado}</option>
                    ))}
                </select>
            </div>
            {/* <div className="col-12 campo col-md-4">
                <label className="form-label fw-bold" htmlFor="tipoExpediente">Tipo de Expediente</label>
                <select className="form-select" name="tipoExpediente" id="tipoExpediente">
                <option value="Principal">Principal</option>
                <option value="Incidente de Excarcelacion">Incidente de Excarcelacion</option>
                <option value="Habeas Corpus">Habeas Corpus</option>
                <option value="Incidente de Prisión Domiciliaria">Incidente de Prisión Domiciliaria</option>
                <option value="Incidente de Nulidad">Incidente de Nulidad</option>
                <option value="Incidente de Recusación">Incidente de Recusación</option>
                <option value="Cautelar">Cautelar</option>
                </select>
            </div> */}
            {/* <div className="col-12 campo col-md-4">
                <label className="form-label fw-bold" htmlFor="accesoCamara">Via de Acceso a Cámara</label>
                <select className="form-select" name="accesoCamara" id="accesoCamara">
                <option value="Apelación">Apelación</option>
                <option value="Apelacion en Subsidio">Apelacion en Subsidio</option>
                <option value="Habeas Corpus en Consulta">Habeas Corpus en Consulta</option>
                <option value="Homologación Prórroga de Prisión Preventiva">Homologación Prórroga de Prisión Preventiva</option>
                <option value="Incompetencia">Incompetencia</option>
                <option value="Queja">Queja</option>
                <option value="Recurso Directo">Recurso Directo</option>
                </select>
            </div> */}
            </div>
            <div className="container flex row  contenedor-campos">
            {/* <div className="col-12 campo col-md-4"> 
                <label className="form-label fw-bold" htmlFor="juezFirmanteJuzgado">Juez Firmante</label>
                <select className="form-select" name="juezFirmanteJuzgado" id="juezFirmanteJuzgado">
                {props.juecesJuzgados.length>0 && props.juecesJuzgados.map((juez, index) => (
                    <option key={index} value={`${juez.apellidoJuez}+", "+${juez.nombreJuez}`}>{juez.apellidoJuez}, {juez.nombreJuez}</option>
                    ))}
                </select>
            </div> */}
            {/* <div className="col-12 campo col-md-4">
                <label className="form-label fw-bold" htmlFor="caracterJuezFirmanteJuzgado">Carácter</label>
                <select className="form-select" name="caracterJuezFirmanteJuzgado" id="caracterJuezFirmanteJuzgado">
                <option value="Titular">Titular</option>
                <option value="Subrogante">Subrogante</option>
                </select>
            </div> */}
            </div>
            <div className="container flex row  contenedor-campos">
{/*             <div className="col-12 campo col-md-3">
                <label className="form-label fw-bold" htmlFor="secretariaRadicacion">Secretaría de Radicación</label>
                <select className="form-select" name="secretariaRadicacion" id="secretariaRadicacion">
                <option value="Civil">Civil</option>
                <option value="Leyes Especiales">Leyes Especiales</option>
                <option value="Penal">Penal</option>
                <option value="Previsional">Previsional</option>
                </select>
            </div> */}
            <div className="col-12 campo col-md-3">
                <label className="form-label fw-bold" htmlFor="materia">Materia</label>
                <select className="form-select" name="materia" id="materia">
                <option value="Civil">Civil</option>
                <option value="Leyes Especiales">Salud</option>
                <option value="Penal">Penal</option>
                <option value="Previsional">Previsional</option>
                <option value="Laboral">Laboral</option>
                <option value="Tributario">Tributario</option>
                <option value="Administrativo">Admnistrativo</option>
                <option value="Universidad">Universidad</option>
                </select>
            </div>
            <div className="col-12 campo col-md-3">
                <div className="form-check mb-2">
                <input className="form-check-input" type="checkbox" value="" name ="falloNovedoso" id="falloNovedoso" />
                <label className="form-check-label" htmlFor="falloNovedoso">
                    Fallo Novedoso
                </label>
                </div>
                <div className="form-check text-start">
                <input className="form-check-input" type="checkbox" value="" name ="cliche" id="cliche" />
                <label className="form-check-label" htmlFor="cliche">
                Cliche
                </label>
            </div>
            </div>
            <div className="col-12 campo col-md-3">
                <label className="form-label fw-bold" htmlFor="materia">Tipo de Novedad</label>
                <select className="form-select" name="tipoNovedad" id="tipoNovedad">
                <option value="Crea Criterio">Crea Criterio</option>
                <option value="Cambia Criterio">Cambia Criterio</option>
                </select>
            </div>
            </div>
            <div className="container flex row  contenedor-campos">
            <div className="col-12 campo col-md-4">
                <label className="form-label fw-bold" htmlFor="tipoFallo">Tipo de Fallo</label>
                <select className="form-select" name="tipoFallo" id="tipoFallo">
                <option value="Interlocutorio">Interlocutorio</option>
                <option value="Definitivo">Definitivo</option>
                </select>
            </div>
            <div className="col-12 campo col-md-4">
                <label className="form-label fw-bold" htmlFor="sentidoFallo">Sentido</label>
                <select className="form-select" name="sentidoFallo" id="sentidoFallo">
                <option value="Confirma">Confirma</option>
                <option value="Revoca totalmente">Revoca totalmente</option>
                <option value="Revoca Parcialmente">Revoca Parcialmente</option>
                <option value="Declara Abstracto">Declara Abstracto</option>
                <option value="Declara mal Concedido">Declara mal concedido</option>
                <option value="Declara desierto">Declara desierto</option>
                <option value="Declara desistido">Declara desistido</option>
                <option value="Anula">Anula</option>
                </select>
            </div>
            <div className="col-12 campo col-md-4">
                <label className="form-label fw-bold" htmlFor="integracionFallo">Integracion Fallo</label>
                <select className="form-select" name="integracionFallo" id="integracionFallo">
                <option value="Tribunal">Tribunal</option>
                <option value="Unipersonal">Unipersonal</option>
                </select>
            </div>
            </div>
            <div className="container flex row  contenedor-campos">
            <div className="col-12 campo mt-2">
                <label className="form-label fw-bold" htmlFor="normaDeclaradaInconstitucional">Norma Declarada Incostitucional</label>
                <textarea className="form-control" type="text" name="normaDeclaradaInconstitucional" id="normaDeclaradaInconstitucional" rows="4"/>
            </div>
            <div className="col-12 campo mt-2">
                <label className="form-label fw-bold" htmlFor="citaJurisprudencia">Cita Jurisprudencia</label>
                <textarea className="form-control" type="text" name="citaJurisprudencia" id="citaJurisprudencia" rows="4"/>
            </div>
            <div className="col-12 campo mt-2">
                <label className="form-label fw-bold" htmlFor="citaDoctrina">Cita Doctrina</label>
                <textarea className="form-control" type="text" name="citaDoctrina" id="citaDoctrina" rows="4"/>
            </div>
            </div>
            <div className="container-fluid subtitulo-form mb-3">
            <h5 className="p-0 m-0 ms-3">Firmantes</h5>
            </div>
            <div className="container flex row  contenedor-campos align-items-end" id="contenedorTablaFirmantes">
            <div className="col-12 campo col-md-4">
                <label className="form-label fw-bold" htmlFor="nombreVocalFirmante">Nombre del Vocal</label>
                <select className="form-select" name="nombreVocalFirmante" id="nombreVocalFirmante">
                <option value="Ricardo Mario Sanjuan">Ricardo Mario Sanjuan</option>
                <option value="Marina Cossio">Marina Cossio</option>
                <option value="Mario Rodolfo Leal">Mario Rodolfo Leal</option>
                <option value="Patricia Moltini">Patricia Moltini</option>
                <option value="Fernando Poviña">Fernando Poviña</option>
                </select>
            </div>
            {/* <div className="col-12 campo col-md-3">
                <label className="form-label fw-bold" htmlFor="caracterVocalFirmante">Carácter</label>
                <select className="form-select" name="caracterVocalFirmante" id="caracterVocalFirmante">
                <option value="Titular">Titular</option>
                <option value="Subrogante">Subrogante</option>
                </select>
            </div> */}
            <div className="col-12 campo col-md-3">
                <label className="form-label fw-bold" htmlFor="tipoFirmaVocal">Tipo Firma</label>
                <select className="form-select" name="tipoFirmaVocal" id="tipoFirmaVocal">
                <option value="Unanimidad">Unanimidad</option>
                <option value="Mayoría">Mayoría</option>
                <option value="Disidencia">Disidencia</option>
                <option value="Amplía Fundamentos">Amplía Fundamentos</option>
                </select>
            </div>
            <div className="col-12 campo col-md-2">
                <span className="text-dark px-2 py-1 fs-4 botonMas" onClick={async () => {await agregarFirmante()}}><i className="bi bi-plus-square"></i></span>
            </div>
            <div id="divFirmantes" className="col-12 campo px-5 mt-2 row gap-2 d-flex justify-content-between">
                {firmantes.length>0 && firmantes.map((firmante, index) => (
                    <div className="col-12 col-md-5" key={index}>
                    <CardFirmante
                        key={index}
                        nombreVocalFirmante={firmante.nombreVocalFirmante}
                        caracterVocalFirmante={firmante.caracterVocalFirmante}
                        tipoFirmaVocal={firmante.tipoFirmaVocal}
                        onDelete={()=>eliminar(firmantes, index, 'firmantes')}
                    />
                    </div>
                ))}
            </div>
            </div>
            <div className="container-fluid subtitulo-form">
            <h5 className="p-0 m-0 ms-3">Voces</h5>
            </div>
            <div className="container flex row  contenedor-campos align-items-end" id="contenedorTesauro">
            <div className="col-10 campo col-md-6">
                <label className="form-label fw-bold">Voces del Fallo</label>
                <Select options={options} onChange={handleChangeSelect} name="vocesFallo" id="vocesFallo">
                </Select>
            </div>
            <div className="col-2 campo">
                <span className="text-dark px-2 py-1 fs-4 botonMas" onClick={agregarVoces}><i className="bi bi-plus-square"></i></span>
            </div>
            <div className="col-12 campo px-5 mt-2 d-flex row gap-2 justify-content-between align-items-center">
                {voces.length>0 && voces.map((voz, index) => (
                    <div className="col-12 col-md-5" key={index}>
                    <CardVoces
                        key={index}
                        voz={voz}
                        onDelete={()=>eliminar(voces, index, 'voces')}
                    />
                    </div>
                ))}
            </div>
            </div>
            <div className="container-fluid subtitulo-form mb-3">
            <h5 className="p-0 m-0 ms-3">Sumarios</h5>
            </div>


            <div className="container flex row  contenedor-campos">
            <div className="col-12 d-flex row justify-content-center mb-4">
                <div className="col-11 contenedor-sumarios">
                {sumarios.length>0 && sumarios.map((sumario, index) => (
                    <CardSumario
                    key={index}
                    vocesSumario={sumario.vocesSumario}
                    textoSumario={sumario.textoSumario} 
                    onDelete={()=>eliminar(sumarios, index, 'sumarios')}
                    />
                ))}
                </div>
            </div>
            <div className="col-12 campo mt-2">
                <label className="form-label fw-bold" htmlFor="textareaSumario">Texto del Sumario</label>
                <textarea className="form-control" type="text" name="textareaSumario" id="textareaSumario" rows="4"/>
            </div>

            <div className="container flex row  contenedor-campos align-items-end" id="contenedorTesauroSumario">
                <div className="col-10 campo col-md-6">
                <label className="form-label fw-bold">Voces del Sumario</label>
                <Select options={options} onChange={handleChangeSelect} className="py-2" name="vocesSumario" id="vocesSumario">
                    {/* {props.tesauro.length>0 && props.tesauro.map((voces, index) => (
                        <option key={index} value={voces.voces}>{voces.voces}</option>
                    ))} */}
                </Select>
                </div>
                <div className="col-2 campo">
                <span className="btn btn-primary text-light px-3 py-2 botonMas" onClick={agregarVocesSumario}><i className="bi bi-check2"></i></span>
                </div>
                <div className="col-12 campo px-5 mt-2 d-flex row gap-2 justify-content-between align-items-center">
                {vocesSumario.length>0 && vocesSumario.map((voz, index) => (
                    <div className="col-12 col-md-5" key={index}>
                        <CardVoces
                        key={index}
                        voz={voz}
                        onDelete={()=>eliminar(vocesSumario, index, 'vocesSumario')}
                        />
                    </div>
                    ))}
                </div>
                <div className="col-12 mb-3 d-flex justify-content-center">
                <span className="btn btn-success px-5 py-1 fs-5" onClick={agregarSumario}>AGREGAR SUMARIO</span>
                </div>
            </div>
            </div>

            <div className="container d-flex row">
            <button className="btn btn-success col-12 campo fs-4" type="submit">Buscar Fallo</button>
            </div>
        </form>
        </div>
    </div>
  )
}
