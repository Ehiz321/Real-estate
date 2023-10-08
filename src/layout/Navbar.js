import React, { useContext, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import PrimaryButton from '../components/ui/PrimaryButton'
import Logo from '../assets/icons/logo.svg'
import Menu from '../assets/icons/menu.svg'
import { AuthContext } from '../context/AuthContext'
import profile from '../assets/images/user-profile.png'
import { Add } from 'iconsax-react'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { currentUser, userId, getAuth } = useContext(AuthContext)
  let navigate = useNavigate()
  const token = getAuth()
  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }
  function sidebarStyle({ isActive }) {
    return {
      color: isActive ? '#008000' : '',
    }
  }
  const navigationHandler = () => {
    if (token && currentUser.isSeller) {
      navigate('/dashboard')
    } else if (token && !currentUser.isSeller) {
      navigate('/account')
    } else {
      navigate('/login')
    }
    return
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
          <Add
            size={30}
            
            onClick={() => handleSidebar()}
            className={`max-[500px]:absolute max-[500px]:top-3 max-[500px]:right-3 max-[500px]:z-50 hidden max-[500px]:block ${
              isSidebarOpen ? 'rotate-[135deg]' : 'rotate-0'
            } duration-700`}
          />
          {/* <p
            onClick={() => handleSidebar()}
            className='max-[500px]:absolute max-[500px]:top-3 max-[500px]:right-3 max-[500px]:z-50 hidden max-[500px]:block'
          >
            close
          </p> */}
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
              onClick={() => navigationHandler()}
              width={'w-48'}
              height={'h-10'}
              color={'text-black'}
              className={
                'bg-white max-[500px]:text-black mr-3 max-[500px]:my-4'
              }
            >
              {!currentUser.isSeller && token
                ? 'Become A Seller'
                : currentUser.isSeller && token
                ? 'Manage Properties'
                : 'Log in'}
            </PrimaryButton>

            {currentUser && token ? (
              <Link to={'/profile'}>
                <img
                  src={profile}
                  className='border-2 border-primary200 w-14 h-14 rounded-full object-cover ml-3'
                  alt=''
                />
              </Link>
            ) : (
              <PrimaryButton
                onClick={() => navigate('/signup')}
                width={'w-48'}
                height={'h-10'}
                className={'rounded-[10px]'}
              >
                Sign up
              </PrimaryButton>
            )}
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
