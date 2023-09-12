import React from 'react'
import loginImage from '../../assets/images/login-Image.jpeg'
import Title from '../../components/typography/Title'
import Subtitle from '../../components/typography/Subtitle'
import Input from '../../components/ui/Input'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../components/ui/PrimaryButton'
import SocialContainer from '../../components/ui/SocialContainer'

const LoginPage = () => {
  return (
    <div className='flex gap-x-24 w-full h-full max-[500px]:gap-x-0 max-[500px]:flex-col'>
      <div className='w-1/2 h-screen max-[500px]:h-36 max-[500px]:w-full'>
        <img
          src={loginImage}
          alt='login-back'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='bg-white mr-24 flex  w-1/2 flex-col justify-center max-[500px]:mr-0 max-[500px]:p-2 max-[500px]:w-full'>
        <div className='w-2/3'>
          <Title className={'mb-4 max-[500px]:mb-0'}>
            Welcome back to Turfind !
          </Title>
          <Subtitle>Sign in to your account</Subtitle>
        </div>
        <form autoComplete='new-password' className='w-full'>
          <Input
            label={'Your Email'}
            textConfig={{
              placeholder: 'Please',
              type: 'email',
            }}
          />
          <Input
            label={'Password'}
            textConfig={{
              placeholder: 'Please',
              type: 'password',
            }}
          />
          <Link className='text-lg text-secondaryColor float-right max-[500px]:text-sm'>
            Forgot Password ?
          </Link>
          <PrimaryButton className={'mt-10'}>Login</PrimaryButton>
        </form>
        <SocialContainer
          to={'/signup'}
          link={'Register'}
          text={'Don’t have an account ?'}
        />
      </div>
    </div>
  )
}

export default LoginPage
