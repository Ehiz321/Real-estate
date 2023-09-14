import React from 'react'
import Logo from '../assets/icons/logo.svg'
import instagram from '../assets/icons/instagram.svg'
import facebook from '../assets/icons/facebook.svg'
import twitter from '../assets/icons/twitter.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='px-20 bg-accentColor w-full h-[400px] py-12'>
        <div className='flex justify-between items-start'>
          <div className='flex flex-col mb-7'>
            <img src={Logo} alt='' className='w-[50px] h-[45px]' />
            <div className='mt-7'>
              <h4 className='text-[20px] font-normal text-white mb-2'>
                turfindng@gmail.com
              </h4>
              <h5 className='text-[20px] font-normal text-white mb-2'>
                Karu extension community 2, new Karu
              </h5>
              <h6 className='text-[20px] font-normal text-white mb-2'>
                08163421203
              </h6>
            </div>
          </div>
          <div className='flex gap-4'>
            <Link>
              <img src={instagram} alt='' />
            </Link>
            <Link>
              <img src={twitter} alt='' />
            </Link>
            <Link>
              <img src={facebook} alt='' />
            </Link>
          </div>
        </div>
        <div className='mb-7'>
          <Link className='text-[20px] font-normal text-white underline'>
            TERMS AND CONDITIONS
          </Link>
          <Link className='text-[20px] font-normal text-white mx-6 underline'>
            PRIVACY POLICY
          </Link>
          <Link className='text-[20px] font-normal text-white underline'>
            OUR BLOG
          </Link>
        </div>
        <div className='border-t border-[#D9D9D9] mt-6 text-center'>
          <h3 className='text-[20px] font-normal text-white py-6'>
            @ 2023 Turfind Ltd. All Rights Reserved
          </h3>
        </div>
      </footer>
    </>
  )
}

export default Footer
