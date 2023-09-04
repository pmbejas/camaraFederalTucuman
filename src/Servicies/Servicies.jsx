import axios from "axios";

export const getDatos = () => axios.get("/data/data.json");
export const getJueces = () => axios.get("./data/vocales.json");
export const getSecretarias = () => axios.get("./data/secretarias.json");
