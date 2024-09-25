import axios from "./axios.js";

export const getAllRegionales = async() => {
    try {
        
        const regionales = await axios.get("/regionales");
        return regionales;

    } catch (error) {
        return error;
    }
}