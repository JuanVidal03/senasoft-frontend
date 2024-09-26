import React, { useEffect } from 'react'
import DashBoardLayout from '../layouts/DashBoardLayout'
import { Table , Button} from "flowbite-react";
import { getAllAlquileresPendientes } from '../services/alquileresPendientes';
import { useState } from 'react';
import axios from 'axios';
export default function AlquileresPendientes() {
    const [alquileres, setAlquileres] = useState();
    const [cambio, setCambio] = useState(false)
    useEffect(()=>{
        const getAlquileresPendiente =async()=>{
            const response = await getAllAlquileresPendientes()
            setAlquileres(response.data.data)
        }
        getAlquileresPendiente()
    },[cambio])


    const cambiarEstadoBicicleta =async(id, idAlquiler)=>{
      
      const response = await axios.patch( `${import.meta.env.VITE_BACKEND_URL}/bicicletaPatch/${id}`, { estado:  "Activo"});
      const alquiler = await axios.patch(`${import.meta.env.VITE_BACKEND_URL}/alquilerpatch/${idAlquiler}` )
      setCambio(!cambio)

    }

  return (
    <DashBoardLayout>
        <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Nombre Usuario</Table.HeadCell>
          <Table.HeadCell>Bicicleta</Table.HeadCell>
          <Table.HeadCell>Valor a Pagar</Table.HeadCell>
          <Table.HeadCell>Estado de Pago</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            {alquileres && alquileres.map((alquiler)=>(

          <Table.Row key={alquiler._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">

            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {alquiler.usuario.nombreCompleto}
            </Table.Cell>
            <Table.Cell>{alquiler.bicicleta.marca}</Table.Cell>
            <Table.Cell>{alquiler.valorTotal}</Table.Cell>
            {alquiler.estado  ?    
            <Table.Cell><label htmlFor='check' className='text-green-700 font-semibold text-lg'> Pagado</label> </Table.Cell>
            :
            <Table.Cell>
                <div className='flex gap-4'>
                <label htmlFor='check' className='text-red-700  font-semibold text-lg'>No Pagado</label>
                <Button onClick={()=> cambiarEstadoBicicleta(alquiler.bicicleta._id, alquiler._id)} id='check'>Pagar</Button>
                </div>
                 </Table.Cell>
        }
           
          </Table.Row>
         ))}
          
        </Table.Body>
      </Table>
    </div>
    </DashBoardLayout>
  )
}
