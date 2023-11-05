import axios from "axios";

export const getDatos = async () => await axios.get("/data/data.json");
export const getJueces = async () => await axios.get("./data/vocales.json");
export const getSecretarias = async () => await axios.get("./data/secretarias.json");
export const getBoletines = async () => await axios.get("/data/boletines.json");
