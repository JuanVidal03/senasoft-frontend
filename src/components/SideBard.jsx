import { useState, useContext } from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import { LiaBicycleSolid } from "react-icons/lia";
import { HiPencilAlt } from "react-icons/hi";
import { HiClock } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import { IoCalendar, IoStatsChart, IoLogOut } from "react-icons/io5";
import logoSena from "../assets/logoSena.png";
import { logout as logoutService } from "../services/auth.services";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/Auth.context";
import Loader from "./Loader";

const menuItems = [
  {
    title: 'Bicicletas',
    path: '/bicicletas',
    icon: <LiaBicycleSolid className="text-3xl block" />
  },
   {
     title: 'Mis Alquileres',
     path: '/alquileres',
     icon: <HiPencilAlt className="text-3xl block" />
  },
  {
    title: 'Mapas',
    path: '/mapas',
    icon: <FaMapMarkedAlt className="text-3xl block" />
  },
  {
    title: 'Alquileres Pendientes',
    path: '/alquileres-pendientes',
    icon: <HiClock className="text-3xl block" />
  },
  {
    title: 'Eventos',
    path: '/eventos',
    icon: <IoCalendar className="text-3xl block" />
  },
  {
    title: 'Estadisticas',
    path: '/estadisticas',
    icon: <IoStatsChart className="text-3xl block" />
  },
]

export default function SideBard() {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const { setUser, setIsAuthenticated } = useContext(AuthContext);

  // handle logout user
  const handleLogout = async() => {

    setLoading(true);
    try {
      const logout = await logoutService();

      if (logout.status === 200) {
        toast.success("Sesión cerrada correctamente!");
        setUser(null);
        setIsAuthenticated(false);
        navigate("/login");
        return setLoading(false);
      }
      
    } catch (error) {
      console.log(error);
      setLoading(false);
    }

  }


  return (
    <div className=" fixed z-10 flex flex-col h-screen p-4 bg-gray-100 w-[4.5rem] group hover:w-[15vw] hover:shadow-lg transition-all">
      <div className="flex w-full flex-col space-y-4">

        <Link
          to="/"
          className="transition-all rounded-lg text-green-sena p-1" 
        >
          <div className="flex items-center gap-3">
            <figure className="block w-[2rem] h-[2rem]">
              <img className="w-full h-full" src={logoSena} alt="logo del SENA" />
            </figure>
            <span className="transition-all text-nowrap hidden font-bold group-hover:block">SENA</span>
          </div>
        </Link>


        {
          menuItems?.map(menuItem => (
            <NavLink
              to={menuItem.path}
              key={menuItem.path}
              className={({ isActive }) =>
                isActive ? "bg-green-sena-hard transition-all rounded-lg text-white p-1" : "hover:bg-gray-200 p-1 transition-all rounded-lg"
              }
            >
              {
                  <div className="flex items-center gap-3">
                    <div className="block">
                      {menuItem.icon}
                    </div>
                    <span className="transition-all text-nowrap hidden group-hover:block">{menuItem.title}</span>
                  </div>
              }
            </NavLink>
          ))
        }
        { loading && <Loader/> }
        <button onClick={handleLogout} className="bg-red-700 transition-all rounded-lg text-white p-1 hover:bg-red-800">
          <div className="flex items-center gap-3">
            <div className="block">
              <IoLogOut className="text-3xl block"/>
            </div>
            <span className="transition-all text-nowrap hidden group-hover:block">Cerrar Sesión</span>
          </div>
        </button>

      </div>
    </div>
  );
}
