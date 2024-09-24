import { Route, Routes } from "react-router-dom";
import PrivateRoutes from "./Private.routes.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import SideBard from "../components/SideBard.jsx";
import DashBoard from "../pages/DashBoard.jsx";
import Test from "../pages/Test.jsx";

const AllRoutes = () => {
    return (
        <Routes>
            {/* public routes */}
            <Route path="/login" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            {/* private routes */}
            <Route element={<PrivateRoutes/>}>
                <Route path="/" element={<DashBoard/>} />
                <Route path="/test" element={<Test/>} />

            </Route>
        </Routes>
    );
}

export default AllRoutes;
