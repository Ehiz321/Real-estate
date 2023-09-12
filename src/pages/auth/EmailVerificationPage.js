import React from 'react'
import emailImage from '../../assets/images/email-Image.jpeg'
import Title from '../../components/typography/Title'
import Subtitle from '../../components/typography/Subtitle'
import Input from '../../components/ui/Input'
import PrimaryButton from '../../components/ui/PrimaryButton'

const EmailVerificationPage = () => {
  return (
    <div className='flex gap-x-24 w-full h-full max-[500px]:gap-x-0 max-[500px]:flex-col'>
      <div className='w-1/2 h-screen max-[500px]:h-36 max-[500px]:w-full'>
        <img
          src={emailImage}
          alt='login-back'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='bg-white mr-24  w-1/2 flex flex-col justify-center max-[500px]:mr-0 max-[500px]:p-2 max-[500px]:w-full'>
        <div className='mb-14 max-[500px]:mb-7'>
          <Title className={'mb-4 max-[500px]:mb-2'}>Email Verification</Title>
          <Subtitle className={'w-2/3 mt-6'}>
            We sent a 4 digit Otp to akintadeseun816@gmail.com
          </Subtitle>
        </div>
        <form
          autoComplete='new-password'
          className='w-full flex flex-col justify-between h-1/2'
        >
          <div className='flex justify-between max-[500px]:mb-14'>
            <input className='w-24 h-24 border-2 border-primary300 rounded-xl text-center text-3xl max-[500px]:w-16 max-[500px]:h-16' />
            <input className='w-24 h-24 border-2 border-primary300 rounded-xl text-center text-3xl max-[500px]:w-16 max-[500px]:h-16' />
            <input className='w-24 h-24 border-2 border-primary300 rounded-xl text-center text-3xl max-[500px]:w-16 max-[500px]:h-16' />
            <input className='w-24 h-24 border-2 border-primary300 rounded-xl text-center text-3xl max-[500px]:w-16 max-[500px]:h-16' />
          </div>
          <PrimaryButton className={'mt-5'}>Verify</PrimaryButton>
        </form>
      </div>
    </div>
  )
}

export default EmailVerificationPage
