import {
  HiArrowSmRight,
  HiChartPie,
  HiInbox,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { NavLink } from "react-router-dom";

const menuItems = [
  {
    title: 'DashBoard',
    path: '/',
    icon: <HiArrowSmRight className="text-3xl block" />
  },
  {
    title: 'Kanban',
    path: '/test',
    icon: <HiChartPie className="text-3xl block" />
  },
  {
    title: 'Inbox',
    path: '/inbox',
    icon: <HiInbox className="text-3xl block" />
  },
  {
    title: 'Users',
    path: '/users',
    icon: <HiUser className="text-3xl block" />
  },
  {
    title: 'Products',
    path: '/products',
    icon: <HiShoppingBag className="text-3xl block" />
  },
  {
    title: 'SignIn',
    path: '/signin',
    icon: <HiTable className="text-3xl block" />
  },
  {
    title: 'SignUp',
    path: '/signup',
    icon: <HiViewBoards className="text-3xl block" />
  }
]

export default function SideBard() {
  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100 w-[4.5rem] group hover:w-[15vw] transition-all">
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
