import SideBard from '../components/SideBard';

export default function DashBoardLayout({children}) {
  return (
    <div className='flex gap-10'>
      <SideBard/>
      <section className='fixed w-full h-screen flex justify-end'>
        <div className='bg-gray-200 p-8 h-full overflow-y-auto' style={{ width: 'calc(100vw - 4.5rem)' }}>
          {children}
        </div>
      </section>
    </div>
  )
}
