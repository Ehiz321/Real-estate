import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import Logo from '../assets/icons/logo.svg'
import profile from '../assets/images/user-profile.png'
import DashboardIcon from '../components/icons/dashboard'
import HomeIcon from '../components/icons/home'
import NotificationIcon from '../components/icons/notification'
import ChatIcon from '../components/icons/chat'
import { getCurrentColor } from '../util/title'

const Sidebar = () => {
  const location = useLocation()
    function sidebarStyle({ isActive }) {
      return {
        backgroundColor: isActive ? '#008000' : '',
        color: isActive ? 'white' : '',
      }
    }
  console.log()
  return (
    <>
      <aside className='bg-white w-1/5 h-screen border-2 border-primary200 rounded-[20px] flex flex-col items-center py-4 px-8 justify-between'>
        <div className='w-full flex flex-col items-center'>
          <img src={Logo} alt='Turfind' className='w-11 h-11 mb-6' />
          <nav className='border-t-2 w-full border-secondary100 py-6'>
            <ul className='w-full h-full'>
              <li className='my-4'>
                <NavLink
                  className={'p-2 w-full flex items-center rounded-2xl h-12'}
                  to={'/dashboard'}
                  style={sidebarStyle}
                >
                  <DashboardIcon
                    color={getCurrentColor(location, '/dashboard')}
                  />
                  <span className='ml-3'>Dashboard</span>
                </NavLink>
              </li>
              <li className='my-4'>
                <NavLink
                  to={'/homes'}
                  className={'p-2 w-full flex items-center rounded-2xl h-12'}
                  style={sidebarStyle}
                >
                  <HomeIcon color={getCurrentColor(location, '/homes')} />
                  <span className='ml-3'>Homes</span>
                </NavLink>
              </li>
              <li className='my-4'>
                <NavLink
                  to={'/notifications'}
                  className={'p-2 w-full flex items-center rounded-2xl h-12'}
                  style={sidebarStyle}
                >
                  <NotificationIcon
                    color={getCurrentColor(location, '/notifications')}
                  />
                  <span className='ml-3'>Notifications</span>
                </NavLink>
              </li>
              <li className='my-4'>
                <NavLink
                  to={'/chats'}
                  className={'p-2 w-full flex items-center rounded-2xl h-12'}
                  style={sidebarStyle}
                >
                  <ChatIcon color={getCurrentColor(location, '/chats')} />
                  <span className='ml-3'>Chats</span>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div className='flex flex-col items-center w-full'>
          <img
            src={profile}
            className='border-2 border-primary200 w-20 h-20 rounded-full mb-3 object-cover'
            alt=''
          />
          <div className='text-center'>
            <h2 className='text-2xl text-accentColor'>Efab Housing Estate</h2>
            <p className='text-sm text-secondaryColor'>
              efabhousing2001@gmail.com
            </p>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
