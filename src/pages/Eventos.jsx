import { useState, useEffect, useContext } from "react";
import DashBoardLayout from "../layouts/DashBoardLayout.jsx";
import { getAllEventos as getAllEventosService } from "../services/eventos.services.js";
import EventosModal from "../components/EventosModal.jsx";
import EventoCard from "../components/EventoCard.jsx";
import { AuthContext } from "../context/Auth.context.jsx";
import DashBoardLayoutAdmin from "../layouts/DashBoardLayoutAdmin.jsx";


const Eventos = () => {
  document.title = `Eventos | ${import.meta.env.VITE_NOMBRE_APP}`;

  const { user } = useContext(AuthContext);

  // get all eventos
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    const getAllEventos = async () => {
      const eventos = await getAllEventosService();
      return setEventos(eventos.data.data);
    };
    getAllEventos();
  }, []);


  return (
    <>
    {user.rol == 'Usuario' ?  
    <DashBoardLayout>
        <div className="mb-6">
            <h1 className="text-3xl font-semibold mb-8">Eventos</h1>
            { user.rol === "Administrador" && <EventosModal /> }
        </div>

      <section className="grid grid-cols-4 gap-8">
        {eventos?.map((evento) => (
          
          <EventoCard
            key={evento._id}
            evento={evento}
          />

        ))}
      </section>
    </DashBoardLayout>
    :
    <DashBoardLayoutAdmin>
    <div className="mb-6">
        <h1 className="text-3xl font-semibold mb-8">Eventos</h1>
        { user.rol === "Administrador" && <EventosModal /> }
    </div>

  <section className="grid grid-cols-4 gap-8">
    {eventos?.map((evento) => (
      
      <EventoCard
        key={evento._id}
        evento={evento}
      />

    ))}
  </section>
</DashBoardLayoutAdmin>
}
    </>
  );
};

export default Eventos;
