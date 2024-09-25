import React from "react";
import { Button, Card } from "flowbite-react";
import ModalAlquilarBicicleta from "./ModalAlquilarBicicleta";
const CardBicicletas = ({ bicicletas }) => {
  return (
    <>
      {bicicletas &&
        bicicletas.map((bicicleta, index) => (
          <Card
            key={index}
            className={`max-w-72 
        ${
          bicicleta.estado == "Activo"
            ? "shadow-lg shadow-green-300 border border-green-200"
            : bicicleta.estado == "Inactivo"
            ? "shadow-lg shadow-red-300 border border-red-200"
            : bicicleta.estado == "Mantenimiento"
            ? "shadow-lg shadow-orange-300 border border-orange-200"
            : ""
        }`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
             Marca: {bicicleta.marca}
            </h5>
            <p className="font-semibold text-gray-700 dark:text-gray-400">
             Color: {bicicleta.color}
            </p>
            <p className="font-semibold text-gray-700 dark:text-gray-400">
             Estado: {bicicleta.estado}
            </p>
            <span className="text-3xl font-mono text-gray-900 flex gap-4 items-center dark:text-white">
                <h1 className="text-xl">Precio Base:</h1>
               ${bicicleta.precioBase}
            </span>
          <ModalAlquilarBicicleta bicicleta={bicicleta}/>
          </Card>
        ))}
    </>
  );
};

export default CardBicicletas;
