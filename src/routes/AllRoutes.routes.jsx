import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Private.routes.jsx";
import Login from "../pages/Login.jsx";
import Mapa from "../pages/Mapa.jsx";
import DashBoard from "../pages/DashBoard.jsx";
import BicicletasDisponibles from "../pages/BicicletasDisponibles.jsx";
import Register from "../pages/Register.jsx";

const AllRoutes = () => {
    return (
        <Routes>
            {/* public routes */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/* private routes */}
            <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<DashBoard/>} />
                <Route path="/bicicletas" element={<BicicletasDisponibles/>} />
                <Route path="/mapas" element={<Mapa/>} />
            </Route>
        </Routes>
    );
}

export default AllRoutes;
