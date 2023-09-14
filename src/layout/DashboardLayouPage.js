import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Sidebar from './Sidebar'
import DashNavbar from './DashNavbar'
import ChatComponent from './ChatComponent'

const DashboardLayouPage = () => {
  const location = useLocation()
  return (
    <>
      <section className='w-full h-screen bg-[#F9F9F9] flex justify-between fixed'>
        {location.pathname === '/chats' ? <ChatComponent/>  :  <Sidebar />}
        <div className='w-[78.8%] h-screen overflow-scroll relative z-10'>
          {location.pathname === '/chats'? null : <DashNavbar />}
          <>
            <Outlet />
          </>
        </div>
      </section>
    </>
  )
}

export default DashboardLayouPage
