import axios from "./axios.js";

export const getAllEventos = async() => {
    try {
        
        const eventos = await axios.get("/evento");
        return eventos;

    } catch (error) {
        return error;
    }
}

export const createEvento = async(evento) => {
    try {
        
        const createdEvento = await axios.post("/evento", evento);
        return createdEvento;

    } catch (error) {
        return error;
    }
}

export const addUserToEvento = async(id, idUser) => {
    try {
        
        const response = await axios.patch(`/evento/${id}`, idUser);
        return response;

    } catch (error) {
        return error;
    }
}
