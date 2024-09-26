import React, { useEffect,useContext } from 'react'
import DashBoardLayout from '../layouts/DashBoardLayout'
import { AuthContext } from '../context/Auth.context'
import CardBicicletas from '../components/CardBicicletas'
import { ModalInvitacion } from '../components/Modalnvitation'
import { Button } from 'flowbite-react'
import MisPuntos from '../components/MisPuntos'


const BicicletasDisponibles = () => {
    const { user } = useContext(AuthContext)
  
  return (
    <DashBoardLayout>


      <section>
        <nav className='flex justify-end'>
          <MisPuntos/>
          <ModalInvitacion/>
        </nav>

        <div className='flex flex-wrap gap-10 justify-around'>
          {user && (
          <CardBicicletas bicicletas={user.regional.bicicletas} /> 
          )}
        </div>
      </section>

    </DashBoardLayout>
  )
}

export default BicicletasDisponibles
