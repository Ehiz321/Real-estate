import React from 'react'

const DashNavbar = () => {
  return (
    <div className='fixed top-0 mb-20 bg-white w-full h-28 flex items-center rounded-[20px] z-50'>
      <input
        className='w-[35%] border-none bg-secondary200 rounded-full h-14 ml-9 p-5 '
        placeholder='Search here'
      />
    </div>
  )
}

export default DashNavbar
