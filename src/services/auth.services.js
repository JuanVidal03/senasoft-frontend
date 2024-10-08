import axios from "./axios.js";

export const verifyToken = async() => {
    try {
        
        const response = await axios.get("/verify-token");
        return response.data.user;

    } catch (error) {
        return error.message;
    }
}

export const register = async(user) => {
    try {
        
        const response = await axios.post("/register", user);
        return response;

    } catch (error) {
        return error;
    }
}

export const login = async(credentials) => {
    try {
        
        const response = await axios.post("/login", credentials);
        return response;

    } catch (error) {
        console.log(error)
        return error;
    }
}

export const logout = async() => {
    try {
        
        const response = await axios.post("/logout");
        return response;

    } catch (error) {
        return error.message;
    }
}
