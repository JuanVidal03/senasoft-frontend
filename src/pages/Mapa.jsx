
import MapContainerComponent from "../components/MapContainer.jsx";
import DashBoardLayoutAdmin from "../layouts/DashBoardLayoutAdmin.jsx";

const Mapa = () => {
  document.title = `Interacción de bicicletas | ${
    import.meta.env.VITE_NOMBRE_APP
  }`;

  return (
    <DashBoardLayoutAdmin>
      <h1 className="text-3xl font-semibold mb-8">
        Ubicación de las bicicletas alquiladas
      </h1>
      <MapContainerComponent/>
    </DashBoardLayoutAdmin>
  );
};

export default Mapa;
