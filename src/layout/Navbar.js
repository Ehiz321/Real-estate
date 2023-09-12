import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import PrimaryButton from '../components/ui/PrimaryButton'
import Logo from '../assets/icons/logo.svg'
import Menu from '../assets/icons/menu.svg'

const Navbar = () => {
  return (
    <>
      <nav className='flex justify-between lg:justify-between py-4 px-20 max-[500px]:px-5'>
        <div>
          <Link>
            <img src={Logo} alt='' />
          </Link>
        </div>
        <div className='flex justify-between lg:justify-between items-center w-[85%] max-[500px]:fixed max-[500px]:-right-[65%] max-[500px]:bg-white max-[500px]:flex-col max-[500px]:h-full max-[500px]:z-50 max-[500px]:top-0 max-[500px]:w-[65%] max-[500px]:justify-start max-[500px]:z-30 max-[500px]:py-9'>
          <p className='max-[500px]:absloute max-[500px]:top-0 max-[500px]:right-0 '>
            close
          </p>
          {/* <div> */}
          <ul className='flex items-center justify-between max-[500px]:flex-col max-[500px]:my-6'>
            <li className='max-[500px]:my-5'>
              <NavLink
                to={'/'}
                className='p-3 mx-5 font-medium max-[500px]:my-4'
              >
                Home
              </NavLink>
            </li>
            <li className='max-[500px]:my-5'>
              <NavLink to={'/about'} className='p-3 mx-5 font-medium'>
                Services
              </NavLink>
            </li>
            <li className='max-[500px]:my-5'>
              <NavLink to={'#'} className='p-3 mx-5 font-medium'>
                About us
              </NavLink>
            </li>
            <li className='max-[500px]:my-5'>
              <NavLink to={'/'} className='p-3 mx-5 font-medium'>
                Contact us
              </NavLink>
            </li>
          </ul>
          {/* </div> */}

          <div className='flex items-center max-[500px]:flex-col'>
            <PrimaryButton
              width={'w-36'}
              height={'h-10'}
              className={
                'bg-white text-black max-[500px]:text-black mr-3 max-[500px]:my-4'
              }
            >
              Log in
            </PrimaryButton>
            <PrimaryButton width={'w-36'} height={'h-10'}>
              Sign up
            </PrimaryButton>
          </div>
        </div>
        <img src={Menu} className='hidden max-[500px]:block' />
      </nav>
    </>
  )
}

export default Navbar
