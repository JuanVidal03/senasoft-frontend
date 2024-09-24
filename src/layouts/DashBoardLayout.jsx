import React from 'react'
import SideBard from '../components/SideBard'
export default function DashBoardLayout({children}) {
  return (
    
    <article className='flex gap-10'>
      <SideBard/>
      <section>
        {children}
      </section>
    </article>
  )
}
