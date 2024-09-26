import SideBarAdmin from "../components/SideBarAdmin";


export default function DashBoardLayoutAdmin({children}) {
  return (
    <div className='flex gap-10'>
      <SideBarAdmin/>
      <section className='fixed w-full h-screen flex justify-end'>
        <div className='bg-gray-200 p-8 h-full overflow-y-auto' style={{ width: 'calc(100vw - 5rem)' }}>
          {children}
        </div>
      </section>
    </div>
  )
}
