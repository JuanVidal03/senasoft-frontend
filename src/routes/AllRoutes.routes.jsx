import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Private.routes.jsx";
import Login from "../pages/Login.jsx";
import Mapa from "../pages/Mapa.jsx";
import DashBoard from "../pages/DashBoard.jsx";
import Register from "../pages/Register.jsx";
import BicicletasDisponibles from "../pages/BicicletasDisponibles.jsx";

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
                <Route path="/bicicletas" element={<BicicletasDisponibles/>} />

            </Route>
        </Routes>
    );
}

export default AllRoutes;
