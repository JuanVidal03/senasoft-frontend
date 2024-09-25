import { useState, useEffect, useContext } from 'react';
import MarkerClusterGroup from "react-leaflet-cluster";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { AuthContext } from '../context/Auth.context.jsx';
import { getAllRegionales } from '../services/regional.services.js';

const MapContainerComponent = () => {

    const [regionales, setRegionales] = useState([]);
    
    const { user } = useContext(AuthContext);

    // get all regionales
    useEffect(() => {

        const renderAllRegionales = async() => {
    
          const regionales = await getAllRegionales();
          setRegionales(regionales.data.data);
      
        }
        renderAllRegionales();
      }, []);

      // set a custom icon
      const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/5695/5695326.png",
        iconSize: [50, 50]
      });


    return (
        <MapContainer className="w-full h-[90%] rounded-2xl shadow-xl" center={[user.user.regional.coordenadas.latitud, user.user.regional.coordenadas.longitud]} zoom={8} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MarkerClusterGroup>
                {
                    regionales?.map(regional => (
                        <Marker
                            key={regional._id}
                            position={
                                [ parseFloat(regional.coordenadas.latitud),
                                parseFloat(regional.coordenadas.longitud) ]
                            }
                            icon={customIcon}
                        >
                            <Popup>
                                <h2 className="text-base">{ regional.nombre } <br /> Bicicletas disponibles: { regional.bicicletas.length } </h2>
                            </Popup>
                        </Marker>
                    ))
                }
            </MarkerClusterGroup>

        </MapContainer>
    );
}

export default MapContainerComponent;
