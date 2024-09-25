import { Card, Button } from "flowbite-react";
import { format } from "date-fns";

const EventoCard = ({ evento }) => {
  
  // format evento date
  const formatDate = (dateToFormat) => {
    const date = new Date(dateToFormat);
    const dateFormated = format(date, "dd/MM/yyyy HH:mm");
    return dateFormated;
  };

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

        <Button size="lg" className="uppercase">¡Asistir!</Button>
      </div>


    </Card>
  );
};

export default EventoCard;
