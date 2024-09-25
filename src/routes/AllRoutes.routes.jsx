import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Private.routes.jsx";
import Login from "../pages/Login.jsx";
import Mapa from "../pages/Mapa.jsx";
import DashBoard from "../pages/DashBoard.jsx";
import BicicletasDisponibles from "../pages/BicicletasDisponibles.jsx";
import Eventos from "../pages/Eventos.jsx";
import { AuthContext } from "../context/Auth.context.jsx";
import Register from "../pages/Register.jsx";
import MisAlquileres from "../pages/MisAlquileres.jsx";
import AlquileresPendientes from "../pages/AlquileresPendientes.jsx";

const AllRoutes = () => {

    return (
        <Routes>
            {/* public routes */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/* private routes */}
            <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<DashBoard/>} />
                <Route path="/mapas" element={<Mapa/>} />
                <Route path="/eventos" element={<Eventos/>} />
                <Route path="/bicicletas" element={<BicicletasDisponibles/>} />
                <Route path="/mapas" element={<Mapa/>} />
                <Route  path="/alquileres" element={<MisAlquileres/>}/>
                <Route  path="/alquileres-pendientes" element={<AlquileresPendientes/>}/>
            </Route>
        </Routes>
    );
}

export default AllRoutes;
