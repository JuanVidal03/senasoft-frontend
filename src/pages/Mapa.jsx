import DashBoardLayout from "../layouts/DashBoardLayout.jsx";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = () => {


  return (
    <DashBoardLayout>
      <h1 className="text-3xl font-semibold mb-8">Ver ubicación de las bicicletas</h1>

      <MapContainer className="w-full h-[500px]" center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </DashBoardLayout>
  );
};

export default Mapa;
