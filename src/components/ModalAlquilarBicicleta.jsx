import { Button, Label, Modal, TextInput } from "flowbite-react";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/Auth.context";
import axios from "../services/axios";
import { calcularTarifaTotal } from "../utils/calcularValorTotal";
import { toast } from "react-toastify";
import { aplicarDescuentoPorEstrato } from "../utils/calcularDescuento";

export default function ModalAlquilarBicicleta({ bicicleta }) {
  const { user } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState();
  const [fechaInicio, setFechaInicio] = useState();
  const [fechaFin, setFechaFin] = useState();
  const [coords, setCoords] = useState([2.43823, -76.61316])


  const alquilarBicicleta = async () => {
    const valorTotal = calcularTarifaTotal(
      fechaInicio,
      fechaFin,
      bicicleta.precioBase
    );
    const valorConDescuento = aplicarDescuentoPorEstrato(
      valorTotal,
      user.estrato
    );
    const alquiler = {
      usuario: user._id,
      bicicleta: bicicleta._id,
      fechaInicio,
      fechaFin,
      valorTotal: valorConDescuento,
      precioUso: bicicleta.precioBase,
      destino: {
        longitud: coords[1],
        latitud: coords[0]
      }
    };

    const response = await axios.post("/alquiler", alquiler);
    const setStateBicicleta = await axios.patch( `${import.meta.env.VITE_BACKEND_URL}/bicicletaPatch/${bicicleta._id}`, { estado:  "Inactivo"});
    console.log(setStateBicicleta);
    console.log(response);

    toast.success(response.data.message);
    setOpenModal(false);
  };
  function onCloseModal() {
    setOpenModal(false);
  }


  // obtener las coordenadas segun un texto
  const [locationName, setLocationName] = useState("Carrera 6 #4-35 popayán");

  useEffect(() => {

    const obtenerCoordenadas = async (nombreUbicacion) => {

      try {

        const response = await fetch(`http://api.positionstack.com/v1/forward?access_key=${import.meta.env.VITE_ACCESS_KEY}&query=${encodeURIComponent(nombreUbicacion)}&limit=1`);
        
        if (!response.ok) {
          throw new Error('Error al obtener las coordenadas');
        }

        const data = await response.json();
        console.log(data);
        
        if (response.data.length > 0) {
          const { lat, lon } = response.data[0];
          setCoords([parseFloat(latitude), parseFloat(longitude)]);
        } else {
          console.error('No se encontraron coordenadas para esa ubicación.');
        }
      } catch (error) {
        console.error('Error al obtener las coordenadas:', error);
      }
    };

    obtenerCoordenadas(locationName);

  }, [locationName]);


  return (
    <>
      <Button onClick={() => setOpenModal(true)}>
        Alquilar
        <svg
          className="-mr-1 ml-2 h-4 w-4 mt-1 bg-green-700"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </Button>
      <Modal className="backdrop-blur-md" show={openModal} size="2xl" onClose={onCloseModal} popup>
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6 ">
            <h3 className="text-2xl font-bold text-center drop-shadow-md text-gray-900 dark:text-white">
              Ingresa las fechas para registrar la bicicleta
            </h3>
            <div className="flex gap-10 justify-around  py-7">
              <div>
                <div>
                  <div className=" block">
                    <Label
                      className="text-xl font-medium tracking-tight text-gray-900 dark:text-white"
                      htmlFor="email"
                      value="Usuario"
                    />
                  </div>
                  <h1 className="text-xl font-semibold tracking-tight text-gray-600 dark:text-white">
                    {user.nombreCompleto}
                  </h1>
                </div>
                <div>
                  <div className="block">
                    <Label
                      className="text-xl font-medium tracking-tight text-gray-900 dark:text-white"
                      htmlFor="password"
                      value="Bicicleta"
                    />
                  </div>
                  <h1 className="text-xl font-semibold tracking-tight text-gray-600 dark:text-white">
                    {" "}
                    {bicicleta.marca}
                  </h1>
                </div>
              </div>
              <div>
                <div>
                  <div className="block">
                    <Label
                      htmlFor="fechaInicio"
                      value="Ingresa la fecha de inicio"
                    />
                  </div>
                  <TextInput
                    className="w-64"
                    id="fechaInicio"
                    type="date"
                    onChange={(event) => setFechaInicio(event.target.value)}
                    required
                  />
                </div>
                <div>
                  <div className="block">
                    <Label htmlFor="fechaFin" value="Ingresa la fecha de Fin" />
                  </div>
                  <TextInput
                    id="fechaFin"
                    type="date"
                    onChange={(event) => setFechaFin(event.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="pb-6 space-y-3">
              <label>Ingresa la direcciónde tu destino</label>
              <input
                onChange={(e) => setLocationName(e.target.value)}
                className="w-full rounded-lg"
                type="text"
                placeholder="Carrera 10 # 3 - 44 popayán"
              />
            </div>
          </div>


          <div className="w-full">
            <Button onClick={() => alquilarBicicleta()}>
              Registrar Bicicleta
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
