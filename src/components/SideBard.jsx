import { HiArrowSmRight } from "react-icons/hi";
import { IoCalendar } from "react-icons/io5";
import { LiaBicycleSolid } from "react-icons/lia";
import { FaMapMarkedAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: 'DashBoard',
    path: '/',
    icon: <HiArrowSmRight className="text-3xl block" />
  },
  {
    title: 'Bicicletas',
    path: '/bicicletas',
    icon: <LiaBicycleSolid className="text-3xl block" />
  },
  {
    title: 'Mapas',
    path: '/mapas',
    icon: <FaMapMarkedAlt className="text-3xl block" />
  },
  {
    title: 'Eventos',
    path: '/eventos',
    icon: <IoCalendar className="text-3xl block" />
  },
]

export default function SideBard() {
  return (
    <div className=" fixed z-10 flex flex-col h-screen p-4 bg-gray-100 w-[4.5rem] group hover:w-[15vw] transition-all">
      <div className="flex w-full flex-col space-y-4">
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
                ({ isActive }) => (
                  <div className="flex items-center gap-3">
                    <div className="block">
                      {menuItem.icon}
                    </div>
                    <span className="transition-all hidden group-hover:block">{menuItem.title}</span>
                  </div>
                )
              }
            </NavLink>
          ))
        }
      </div>
    </div>
  );
}
