import React from 'react'
import Logo from '../assets/icons/logo.svg'
import { Outlet, useLocation } from 'react-router-dom'
import { getAccountTypeTitle } from '../util/title'

const AccountypeLayout = () => {
  const locaction = useLocation()
  return (
    <>
      <div className='flex flex-col items-center w-full h-screen max-[500px]:h-full'>
        <div className='flex flex-col items-center mt-8 mb-0'>
          <img src={Logo} alt='turfind-logo' className='mb-5' />
          <h3 className='text-4xl font-bold max-[500px]:text-3xl'>
            {getAccountTypeTitle(locaction)}
          </h3>
        </div>
        <>
          <Outlet />
        </>

      </div>
    </>
  )
}

export default AccountypeLayout
