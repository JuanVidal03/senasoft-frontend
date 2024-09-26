import { useContext } from "react";
import { Card, Button } from "flowbite-react";
import { format } from "date-fns";
import { AuthContext } from "../context/Auth.context";
import { addUserToEvento as addUserToEventoService } from "../services/eventos.services";
import { toast } from "react-toastify";

const EventoCard = ({ evento }) => {

  const { user } = useContext(AuthContext);
  
  // format evento date
  const formatDate = (dateToFormat) => {
    const date = new Date(dateToFormat);
    const dateFormated = format(date, "dd/MM/yyyy HH:mm");
    return dateFormated;
  };

  // add user to an event
  const addUserToEvento = async(id) => {
    try {

      const response = await addUserToEventoService(id, { idUser: user._id });

      if(response.status === 200) return toast.success("Fuiste agregado correctamente!");
      return toast.error("Hubo un error al registrarte, intentalo de nuevo.")
      
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <Card className="max-w-sm py-4 flex flex-col items-between justify-center transition-all hover:shadow-xl">
      <div className="h-full ">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-4">
          {evento.titulo}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400 mb-4">
          {evento.descripcion}
        </p>
        
      </div>

      <div className="flex flex-col space-y-3">
        <div className="space-y-1">
          <p>
            <span className="font-semibold">Fecha: </span>
            {formatDate(evento.fecha)}
          </p>
          <p>
            <span className="font-semibold">Regional: </span>
            {evento.regional.nombre}
          </p>
        </div>

        <Button onClick={ (e) => {
          addUserToEvento(evento._id);
        }} size="lg" className="uppercase">¡Asistir!</Button>
      </div>


    </Card>
  );
};

export default EventoCard;
