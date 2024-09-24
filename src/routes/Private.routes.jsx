import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context.jsx";
import Loader from "../components/Loader.jsx";

const PrivateRoutes = () => {

    const { isAuthenticated, loading } = useContext(AuthContext);

    if(loading) return <Loader/>;
    if(!isAuthenticated && !loading) return <Navigate to="/login"/> 

    return <Outlet/>;
}

export default PrivateRoutes;
