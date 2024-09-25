import React, { useEffect,useContext } from 'react'
import DashBoardLayout from '../layouts/DashBoardLayout'
import { AuthContext } from '../context/Auth.context'
import CardBicicletas from '../components/CardBicicletas'


const BicicletasDisponibles = () => {
    const { user } = useContext(AuthContext)
  
  return (
    <DashBoardLayout>
        {user && (
        <CardBicicletas bicicletas={user.regional.bicicletas} /> 
        )}
    </DashBoardLayout>
  )
}

export default BicicletasDisponibles
