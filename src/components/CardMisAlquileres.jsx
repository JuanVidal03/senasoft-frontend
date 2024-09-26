import React from "react";
import { Button, Card } from "flowbite-react";
import Swal from 'sweetalert2'


export default function CardMisAlquileres({ alquileres }) {

  return (
    <>
      {alquileres &&
        alquileres.map((alquiler, index) => (
          <Card
            key={index}
            className={`max-w-72 
        ${
          alquiler.estado == true
            ? "shadow-lg shadow-green-300 border border-green-200"
            : alquiler.estado == false
            ? "shadow-lg shadow-red-300 border border-red-200"
            : ""
        }`}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Bicicleta: {alquiler.bicicleta.marca}
            </h5>
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              Color: {alquiler.bicicleta.color}
            </p>
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              Fecha Inicio: {alquiler.fechaInicio.split("T")[0]}
            </p>
            <p className="font-semibold text-gray-700 dark:text-gray-400">
              Fecha Inicio: {alquiler.fechaFin.split("T")[0]}
            </p>
            <span className="text-3xl font-mono text-gray-900 flex gap-4 items-center dark:text-white">
              <h1 className="text-xl">Valor total:</h1>${alquiler.valorTotal}
            </span>
            {alquiler.estado === false && (
              <h1 className="text-red-700 drop-shadow-lg">Tienes una reserva por pagar</h1>
            ) }
          </Card>
        ))}
    </>
  );
}
