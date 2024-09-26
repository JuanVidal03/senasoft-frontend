import axios from './axios.js'

export const getAllAlquileresPendientes = async() => {
    try {
        
        const alquiler = await axios.get("/alquiler");
        return alquiler;

    } catch (error) {
        return error;
    }
}

export const getMakeProfitMonth = async() => {
    try {
        
        const response = await axios.get("/makeProfitMonth");
        return response.data;

    } catch (error) {
        return error;
    }
}
