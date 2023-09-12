import React from 'react'
import kycImage from '../../assets/images/kyc-Image.jpeg'
import Title from '../../components/typography/Title'
import Subtitle from '../../components/typography/Subtitle'
import Input from '../../components/ui/Input'
import PrimaryButton from '../../components/ui/PrimaryButton'

const UpdateKycPage = () => {
  return (
    <div className='flex gap-x-24 w-full h-full max-[500px]:gap-x-0 max-[500px]:flex-col'>
      <div className='w-1/2 h-screen max-[500px]:h-36 max-[500px]:w-full'>
        <img
          src={kycImage}
          alt='login-back'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='bg-white mr-24 flex  w-1/3 flex-col justify-center max-[500px]:mr-0 max-[500px]:p-2 max-[500px]:w-full'>
        <div className='mb-4'>
          <Title className={'mb-4'}>Update KYC Information</Title>
          <Subtitle className={'mt-4 max-[500px]:w-full max-[500px]:mt-0 '}>
            Our number one priority is security, help us keep Turfind secure
          </Subtitle>
        </div>
        <form
          autoComplete='new-password'
          className='w-full flex flex-col justify-between h-2/4'
        >
          <div>
            <Input
              label={'Fullname'}
              className={'mt-2'}
              textConfig={{
                placeholder: 'Please',
                type: 'email',
              }}
              divClass={'mt-2'}
            />
            <div className='flex justify-between'>
              <div className='flex flex-col w-[47%]'>
                <label className='text-lg font-medium max-[500px]:text-xs'>
                  NIN
                </label>
                <input className='w-full h-14 px-3 outline-none bg-white border-2 border-black rounded-xl mt-4 max-[500px]:mt-2 max-[500px]:h-11' />
              </div>
              <div className='flex flex-col w-[47%]'>
                <label className='text-lg font-medium max-[500px]:text-xs'>
                  BVN
                </label>
                <input className='w-full h-14 px-3 outline-none bg-white border-2 border-black rounded-xl mt-4 max-[500px]:mt-2 max-[500px]:h-11' />
              </div>
            </div>
          </div>
          <PrimaryButton className={'mt-10'}>Verify</PrimaryButton>
        </form>
      </div>
    </div>
  )
}

export default UpdateKycPage
