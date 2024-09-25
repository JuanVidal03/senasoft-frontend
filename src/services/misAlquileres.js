import axios from './axios.js'


export const getAllMisAlquileres = async(id) => {
    try {
        
        const bicilcetas = await axios.get(`/alquiler/${id}`);
        return bicilcetas;

    } catch (error) {
        return error;
    }
}