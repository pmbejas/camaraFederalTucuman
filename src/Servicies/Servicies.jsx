import axios from "axios";

export const getDatos = async () => await axios.get("/data/data.json");
export const getJueces = async () => await axios.get("./data/vocales.json");
export const getSecretarias = async () => await axios.get("./data/secretarias.json");
export const getBoletines = async () => await axios.get("/data/boletines.json");

import { API_URL } from "../../config";

export const getTesauro = () => axios.get(API_URL+'/tesauro');
export const getJuzgados = () => axios.get(API_URL+'/juzgados');
export const getJuecesJuzgados = () => axios.get(API_URL+'/juecesJuzgados');