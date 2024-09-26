import { useState, useEffect, useContext } from 'react';
import MarkerClusterGroup from "react-leaflet-cluster";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { AuthContext } from '../context/Auth.context.jsx';
import { getAllRegionales } from '../services/regional.services.js';
import { getAllAlquileresPendientes } from '../services/alquileresPendientes.js';
import { Link } from 'react-router-dom';

const MapContainerComponent = () => {

    const [regionales, setRegionales] = useState([]);
    const [alquileres, setAlquileres] = useState([]);
    
    const { user } = useContext(AuthContext);

    // get all regionales
    useEffect(() => {

        const renderAllRegionales = async() => {
    
          const regionales = await getAllRegionales();
          const alquileres = await getAllAlquileresPendientes();
            console.log(alquileres.data.data);
          setAlquileres(alquileres.data.data);
            setRegionales(regionales.data.data);
      
        }
        renderAllRegionales();
      }, []);

      // set a custom icon
      const customIcon = new Icon({
        iconUrl: "https://cdn-icons-png.flaticon.com/512/5695/5695326.png",
        iconSize: [60, 60]
      });

      const customIconHouse = new Icon({
        iconUrl: "https://sena.edu.co/Style%20Library/alayout/images/logoSena.png",
        iconSize: [70, 70]
      });


    return (
        <MapContainer className="w-full h-[90%] rounded-2xl shadow-xl" center={[user.regional.coordenadas.latitud, user.regional.coordenadas.longitud]} zoom={8} scrollWheelZoom={true}>
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
                            icon={customIconHouse}
                        >
                            <Link className='cursor-pointer' to="/alquileres-pendientes">
                                <Popup>
                                    <h2 className="text-base">{ regional.nombre } <br /> Bicicletas alquiladas: { regional.bicicletas.length } </h2>
                                </Popup>
                            </Link>
                        </Marker>
                    ))
                }

                {
                    alquileres?.map(alquiler => {
                        if(alquiler.destino) {

                            return alquiler.bicicleta.estado == "Inactivo" && (
                                <Marker
                                    key={alquiler._id}
                                    position={
                                        [ parseFloat(alquiler.destino.latitud),
                                        parseFloat(alquiler.destino.longitud) ]
                                    }
                                    icon={customIcon}
                                >
                                </Marker>
                            )
                        }

                    })
                }

            </MarkerClusterGroup>

        </MapContainer>
    );
}

export default MapContainerComponent;
