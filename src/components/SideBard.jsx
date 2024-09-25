import { HiArrowSmRight } from "react-icons/hi";
import { FaMapMarkedAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: 'DashBoard',
    path: '/',
    icon: <HiArrowSmRight className="text-3xl block" />
  },
  {
    title: 'Mapas',
    path: '/mapas',
    icon: <FaMapMarkedAlt className="text-3xl block" />
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
                isActive ? "bg-slate-700 transition-all rounded-lg text-white py-1 px-1" : "hover:text-gray-500 px-1 py-1 transition-all"
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
