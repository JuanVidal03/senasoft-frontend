import DashBoardLayout from "../layouts/DashBoardLayout.jsx";
import MapContainerComponent from "../components/MapContainer.jsx";

const Mapa = () => {
  document.title = `Interacción de bicicletas | ${
    import.meta.env.VITE_NOMBRE_APP
  }`;

  return (
    <DashBoardLayout>
      <h1 className="text-3xl font-semibold mb-8">
        Ubicación de las bicicletas alquiladas
      </h1>
      <MapContainerComponent/>
    </DashBoardLayout>
  );
};

export default Mapa;
