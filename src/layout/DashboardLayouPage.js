import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import DashNavbar from './DashNavbar'

const DashboardLayouPage = () => {
  return (
    <>
      <section className='w-full h-screen bg-[#F9F9F9] flex justify-between fixed'>
        <Sidebar />
        <div className='w-[78.8%] h-screen overflow-scroll relative z-10'>
          <DashNavbar />
          <>
            <Outlet />
          </>
        </div>
      </section>
    </>
  )
}

export default DashboardLayouPage
