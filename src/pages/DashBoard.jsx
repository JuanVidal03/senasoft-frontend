import { useContext } from "react";
import { AuthContext } from "../context/Auth.context";
import Chart from "../components/Chart";
import DashBoardLayoutAdmin from "../layouts/DashBoardLayoutAdmin";

export default function DashBoard() {

  const { user } = useContext(AuthContext);

  return (
    <DashBoardLayoutAdmin>
      <h1 className="text-3xl font-semibold">Hola, { user.nombreCompleto } 👋</h1>
      <main>
      
        <Chart/>
      </main>
    </DashBoardLayoutAdmin>
  )
}
