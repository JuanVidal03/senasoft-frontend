import React, { useEffect,useContext } from 'react'
import { getAllBicilcetas } from '../services/bicicletas.services'
import DashBoardLayout from '../layouts/DashBoardLayout'
import { getAllRegionales } from '../services/regional.services'
import { AuthContext } from '../context/Auth.context'


const BicicletasDisponibles = () => {
    const {user } = useContext(AuthContext)
    useEffect(()=>{
        const getBicicletas =async()=>{
            const response =await getAllBicilcetas()
            const responeRegional = await getAllRegionales()
            console.log(responeRegional.data)
            console.log(user)
         
        }
        getBicicletas()
    },[])
  return (
    <DashBoardLayout>
        <h1>Hola mundo</h1>
    </DashBoardLayout>
  )
}

export default BicicletasDisponibles
