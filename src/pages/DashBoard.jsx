import { useContext } from "react";
import DashBoardLayout from "../layouts/DashBoardLayout";
import { AuthContext } from "../context/Auth.context";
import Chart from "../components/Chart";

export default function DashBoard() {

  const { user } = useContext(AuthContext);

  return (
    <DashBoardLayout>
      <h1 className="text-3xl font-semibold">Hola, { user.nombreCompleto } 👋</h1>
      <main>
        <section className="grid grid-cols-4 gap-8 mt-8">
          <div className="w-full bg-red-500 rounded-lg">
          </div>
          <div className="w-full h-40 bg-red-500 rounded-lg"></div>
          <div className="w-full h-40 bg-red-500 rounded-lg"></div>
          <div className="w-full h-40 bg-red-500 rounded-lg"></div>
        </section>
        <Chart/>
      </main>
    </DashBoardLayout>
  )
}
