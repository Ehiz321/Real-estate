import React from 'react'
import signupImage from '../../assets/images/signup-Image.jpeg'
import Title from '../../components/typography/Title'
import Subtitle from '../../components/typography/Subtitle'
import Input from '../../components/ui/Input'
import PrimaryButton from '../../components/ui/PrimaryButton'
import SocialContainer from '../../components/ui/SocialContainer'
import { Link } from 'react-router-dom'


const SignupPage = () => {
  return (
    <div className='flex gap-x-24 w-full h-full max-[500px]:gap-x-0 max-[500px]:flex-col'>
      <div className='w-1/2 h-screen max-[500px]:h-36 max-[500px]:w-full'>
        <img
          src={signupImage}
          alt='login-back'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='bg-white mr-24  w-1/2 flex flex-col justify-center max-[500px]:mr-0 max-[500px]:p-2 max-[500px]:w-full'>
        <div className=''>
          <Title className={'mb-4 max-[500px]:mb-2'}>Create your account</Title>
          <Subtitle>Submit your details</Subtitle>
        </div>
        <form autoComplete='new-password' className='w-full'>
          <Input
            label={'Your Name'}
            textConfig={{
              placeholder: 'Please',
              type: 'text',
            }}
          />
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
          <div className='flex items-center'>
            <input type='checkbox' className='mr-2' />
            <p className='text-sm max-[500px]:text-[10px]'>
              I have read and i agree to the <br />{' '}
              <Link className='text-primary300 max-[500px]:text-[10px]'>
                Terms and Conditions
              </Link>{' '}
              and{' '}
              <Link className='text-primary300 max-[500px]:text-[10px]'>
                Privacy Policy
              </Link>
            </p>
          </div>
          <PrimaryButton className={'mt-5'}>Register</PrimaryButton>
        </form>
        <SocialContainer
          to={'/login'}
          link={'Login'}
          text={'Already have an account?'}
        />
      </div>
    </div>
  )
}

export default SignupPage
