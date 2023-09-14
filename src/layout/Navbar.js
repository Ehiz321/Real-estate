import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import PrimaryButton from '../components/ui/PrimaryButton'
import Logo from '../assets/icons/logo.svg'
import Menu from '../assets/icons/menu.svg'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
   function sidebarStyle({ isActive }) {
     return {
       color: isActive ? '#008000' : '',
     }
   }
  return (
    <>
      <nav className='flex justify-between lg:justify-between py-6 items-center px-20 max-[500px]:px-5 '>
        <div>
          <Link to={'/'}>
            <img
              src={Logo}
              alt=''
              className='max-[500px]:w-7 max-[500px]:h-7 '
            />
          </Link>
        </div>
        <div
          className={`flex justify-between lg:justify-between items-center w-[85%] max-[500px]:fixed ${
            isSidebarOpen ? 'max-[500px]:right-[0]' : 'max-[500px]:-right-[65%]'
          } max-[500px]:bg-white max-[500px]:flex-col max-[500px]:h-full max-[500px]:z-50 max-[500px]:top-0 max-[500px]:w-[65%] max-[500px]:justify-start max-[500px]:z-30 max-[500px]:py-9 transition-all duration-500`}
        >
          <p
            onClick={() => handleSidebar()}
            className='max-[500px]:absolute max-[500px]:top-3 max-[500px]:right-3 max-[500px]:z-50 hidden max-[500px]:block'
          >
            close
          </p>
          {/* <div> */}
          <ul className='flex items-center justify-between max-[500px]:flex-col max-[500px]:my-4 transition-all'>
            <li className='max-[500px]:my-5 transition-all'>
              <NavLink
                to={'/'}
                className='p-3 mx-5 font-medium max-[500px]:my-4'
                style={sidebarStyle}
              >
                Home
              </NavLink>
            </li>
            <li className='max-[500px]:my-5 transition-all'>
              <NavLink
                to={'/services'}
                className='p-3 mx-5 font-medium'
                style={sidebarStyle}
              >
                Services
              </NavLink>
            </li>
            <li className='max-[500px]:my-5 transition-all'>
              <NavLink
                to={'/about'}
                className='p-3 mx-5 font-medium'
                style={sidebarStyle}
              >
                About us
              </NavLink>
            </li>
            <li className='max-[500px]:my-5 transition-all'>
              <NavLink
                to={'/contact'}
                className='p-3 mx-5 font-medium'
                style={sidebarStyle}
              >
                Contact us
              </NavLink>
            </li>
          </ul>
          {/* </div> */}

          <div className='flex items-center max-[500px]:flex-col'>
            <PrimaryButton
              width={'w-36'}
              height={'h-10'}
              color={'text-black'}
              className={
                'bg-white max-[500px]:text-black mr-3 max-[500px]:my-4'
              }
            >
              Log in
            </PrimaryButton>
            <PrimaryButton width={'w-36'} height={'h-10'}>
              Sign up
            </PrimaryButton>
          </div>
        </div>
        <img
          src={Menu}
          className='hidden max-[500px]:block'
          alt=''
          onClick={() => handleSidebar()}
        />
      </nav>
    </>
  )
}

export default Navbar
