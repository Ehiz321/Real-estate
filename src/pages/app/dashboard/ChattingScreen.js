import React from 'react'
import profile from '../../../assets/icons/profile-icon.svg'
import user from '../../../assets/images/user.png'
import PrimaryButton from '../../../components/ui/PrimaryButton'

const ChattingScreen = () => {
  return (
    <>
      <div className='w-full flex flex-col justify-between p-5 h-screen'>
        <div className='flex justify-between items-center bg-[#D9D9D980] rounded-full p-2'>
          <div className='flex items-center'>
            <img
              src={user}
              alt=''
              className='w-[60px] h-[60px] object-cover rounded-full'
            />
            <div className='ml-2'>
              <h3 className='text-[20px] font-medium'>Akintade Oluwaseun</h3>
              <p className='text-[15px] font-normal text-secondaryColor'>
                Customer
              </p>
            </div>
          </div>
          <img src={profile} alt='' className='w-[60px] h-[60px]' />
        </div>

        <div className='relative'>
          <input  className='bg-[#D9D9D980] w-full h-[70px] rounded-full px-12' placeholder='Write Something' />
          <PrimaryButton
            width={'w-[20%]'}
            className={'absolute right-2 top-2 rounded-[50px]'}
          >
            Send
          </PrimaryButton>
        </div>
      </div>
    </>
  )
}

export default ChattingScreen