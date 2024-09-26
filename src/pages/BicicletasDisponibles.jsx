import React, { useEffect,useContext } from 'react'
import DashBoardLayout from '../layouts/DashBoardLayout'
import { AuthContext } from '../context/Auth.context'
import CardBicicletas from '../components/CardBicicletas'


const BicicletasDisponibles = () => {
    const { user } = useContext(AuthContext)
  
  return (
    <DashBoardLayout>
      <div className='flex flex-wrap gap-10 justify-around'>
        {user && (
        <CardBicicletas bicicletas={user.regional.bicicletas} /> 
        )}
      </div>
    </DashBoardLayout>
  )
}

export default BicicletasDisponibles
