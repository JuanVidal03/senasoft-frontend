import { useState, useEffect, createContext } from 'react';
import Cookies from "js-cookie";
import { verifyToken } from '../services/auth.services.js';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        
        const checkLogin = async() => {

            const cookies = Cookies.get();
            if(!cookies.token) {
                setUser(null);
                setIsAuthenticated(false);
                return setLoading(false);
            }

            try {

                const token = await verifyToken(cookies.token);

                if(!token.data){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return setUser(null);
                }

                setLoading(false);
                setIsAuthenticated(true);
                return setUser(token.data);
                
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
                return setLoading(false);
            }
        }
        checkLogin();
        
    }, []);


    return (
        <AuthContext.Provider value={{
            user,
            setUser,
            isAuthenticated,
            setIsAuthenticated,
            loading,
            setLoading
        }}>
            { children }
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
