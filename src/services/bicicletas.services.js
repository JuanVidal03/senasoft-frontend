import axios from './axios.js'


export const getAllBicilcetas = async() => {
    try {
        
        const bicilcetas = await axios.get("/bicicletas");
        return bicilcetas;

    } catch (error) {
        return error;
    }
}