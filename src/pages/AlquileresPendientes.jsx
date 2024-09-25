import React, { useEffect } from 'react'
import DashBoardLayout from '../layouts/DashBoardLayout'

import { Table , Button} from "flowbite-react";
import { getAllAlquileresPendientes } from '../services/alquileresPendientes';
import { useState } from 'react';
export default function AlquileresPendientes() {
    const [alquileres, setAlquileres] = useState();
    useEffect(()=>{
        const getAlquileresPendiente =async()=>{
            const response = await getAllAlquileresPendientes()
            setAlquileres(response.data.data)
        }
        getAlquileresPendiente()
    },[])
    console.log(alquileres)
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

          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">

            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              {alquiler.usuario.nombreCompleto}
            </Table.Cell>
            <Table.Cell>{alquiler.bicicleta.marca}</Table.Cell>
            <Table.Cell>{alquiler.valorTotal}</Table.Cell>
            {alquiler.estado ?    
            <Table.Cell><label htmlFor='check' className='text-green-700 font-semibold text-lg'> Pagado</label> </Table.Cell>
            :
            <Table.Cell>
                <div className='flex gap-4'>
                <label htmlFor='check' className='text-red-700  font-semibold text-lg'>No Pagado</label>
                <Button id='check'>Pagar</Button>
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
