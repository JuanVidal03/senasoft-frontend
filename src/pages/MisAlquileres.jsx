import React, { useEffect, useContext, useState} from 'react'
import DashBoardLayout from '../layouts/DashBoardLayout'
import CardMisAlquileres from '../components/CardMisAlquileres'
import { getAllMisAlquileres } from '../services/misAlquileres'
import { AuthContext } from '../context/Auth.context'

export default function MisAlquileres() {
    const {user } = useContext(AuthContext)
    const [alquileres, setAlquileres] =useState()
    useEffect(()=>{
        const getAlquileres =async()=>{
            const response = await getAllMisAlquileres(user._id)
            console.log(response);
            setAlquileres(response.data)
        }
        getAlquileres()
    },[])
  return (
    <DashBoardLayout>
      <div className='flex flex-wrap gap-8'>
        <CardMisAlquileres alquileres={alquileres} />
      </div>
    </DashBoardLayout>
  )
}
