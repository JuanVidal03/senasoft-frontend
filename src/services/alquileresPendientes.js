import axios from './axios.js'


export const getAllAlquileresPendientes = async() => {
    try {
        
        const alquiler = await axios.get("/alquiler");
        return alquiler;

    } catch (error) {
        return error;
    }
}