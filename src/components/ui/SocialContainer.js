import React from 'react'
import { Link } from 'react-router-dom'
import googleIcon from '../../assets/icons/google.svg'
import facebookIcon from '../../assets/icons/facebook.svg'

const SocialContainer = ({ link , to, text}) => {
  return (
    <div className='text-center mt-7'>
      <p className='text-sm font-medium text-secondaryColor continue max-[500px]:text-[10px]'>
        or continue with
      </p>
      <div className='w-full flex items-center justify-between my-8 mb-9'>
        <Link className='w-56 max-[500px]:w-[45%] flex items-center justify-between border border-secondaryColor h-14 p-3 rounded-xl text-sm max-[500px]:justify-start max-[500px]:p-2'>
          <img src={googleIcon} alt='' className='max-[500px]:mr-2' />
          <p className='text-sm font-medium text-secondaryColor max-[500px]:text-[8px]'>
            Continue with google
          </p>
        </Link>
        <Link className='w-56 max-[500px]:w-[45%] flex items-center justify-between border border-secondaryColor h-14 p-3 rounded-xl text-sm max-[500px]:justify-start max-[500px]:p-2'>
          <img src={facebookIcon} alt='' className='max-[500px]:mr-0' />
          <p className='text-sm font-medium text-secondaryColor max-[500px]:text-[8px]'>
            Continue with facebook
          </p>
        </Link>
      </div>
      <p className='text-sm font-medium max-[500px]:mb-5 '>
        {text}
        <Link to={to} className='text-primary300'>
          {link}
        </Link>
      </p>
    </div>
  )
}

export default SocialContainer
