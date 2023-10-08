import React from 'react'
import Logo from '../assets/icons/logo.svg'
import instagram from '../assets/icons/icon1.svg'
import twitter from '../assets/icons/icon2.svg'
import facebook from '../assets/icons/icon3.svg'
import linkedin from '../assets/icons/icons4.svg'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
      <footer className='px-20 bg-accentColor w-full h-[400px] py-12 max-[500px]:px-3 max-[500px]:h-full max-[500px]:py-6 mt-16'>
        <div className='flex justify-between items-start max-[500px]:flex-col'>
          <div className='flex flex-col mb-7 max-[500px]:mb-4'>
            <img src={Logo} alt='' className='w-[50px] h-[45px]' />
            <div className='mt-7 '>
              <h4 className='text-[20px] font-normal text-white mb-2 max-[500px]:text-[15px]'>
                turfindng@gmail.com
              </h4>
              <h5 className='text-[20px] font-normal text-white mb-2 max-[500px]:text-[15px]'>
                Karu extension community 2, new Karu
              </h5>
              <h6 className='text-[20px] font-normal text-white mb-2 max-[500px]:text-[15px]'>
                08163421203
              </h6>
            </div>
          </div>
          <div className='flex items-center gap-4 max-[500px]:mb-5'>
            <Link
              to={
                'https://www.instagram.com/turfindng/?igshid=NTc4MTIwNjQ2YQ%3D%3D'
              }
              target='_blank'
            >
              <img src={instagram} alt='' />
            </Link>
            <Link
              to={
                'https://twitter.com/TurfindNg/status/1689899711925551104?s=20'
              }
              target='_blank'
            >
              <img src={twitter} alt='' />
            </Link>
            <Link>
              <img src={facebook} alt='' />
            </Link>
            <Link
              to={'https://www.linkedin.com/in/turfind-ng-864b3b287/'}
              target='_blank'
            >
              <img src={linkedin} alt='' className='h-[55px] w-[55px]' />
            </Link>
          </div>
        </div>
        <div className='mb-7 max-[500px]:flex flex-wrap'>
          <Link className='text-[20px] font-normal text-white underline max-[500px]:text-[15px]'>
            TERMS AND CONDITIONS
          </Link>
          <Link className='text-[20px] font-normal text-white mx-6 underline max-[500px]:text-[15px] max-[330px]:ml-0 max-[330px]:mt-3'>
            PRIVACY POLICY
          </Link>
          <Link className='text-[20px] font-normal text-white underline max-[500px]:text-[15px] max-[550px]:mt-3'>
            OUR BLOG
          </Link>
        </div>
        <div className='border-t border-[#D9D9D9] mt-6 text-center '>
          <h3 className='text-[20px] font-normal text-white py-6 max-[500px]:text-[15px] max-[500px]:pt-9'>
            @ 2023 Turfind Ltd. All Rights Reserved
          </h3>
        </div>
      </footer>
    </>
  )
}

export default Footer
