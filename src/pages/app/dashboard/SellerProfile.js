import React from 'react'
import houseImage from '../../../assets/images/house-back.jpeg'
import profile from '../../../assets/images/user-profile.png'
import More from '../../../components/icons/more'
import email from '../../../assets/icons/mail.svg'
import phone from '../../../assets/icons/phone.svg'
import marker from '../../../assets/icons/marker.svg'

const SellerProfile = () => {
  return (
    <div className='mt-40 mb-10 w-full pr-10'>
      <div className='w-full bg-white rounded-[50px] h-[430px] flex items-center'>
        <div
          className='h-full w-[36%] rounded-[50px] rounded-r-none overflow-hidden relative'
          style={{ backgroundImage: `url(${houseImage})` }}
        >
          {/* <img src={houseImage} alt='' className='h-full object-cover' /> */}
          <div className='absolute bottom-[5%] left-[8%] bg-secondary200 backdrop-blur-[2px] px-[15px] py-[10px] rounded-[10px] cursor-pointer'>
            <label className='text-white cursor-pointer'>
              Change Background Photo
              <input type='file' className='hidden' />
            </label>
          </div>
        </div>
        <div className='p-3 flex flex-col justify-evenly w-[55%] ml-[2.5%] relative'>
          <div className='absolute -left-[11.5%] top-[0%]'>
            <img
              src={profile}
              className='border-2 border-primary200 w-20 h-20 rounded-full mb-3 object-cover'
              alt=''
            />
          </div>
          <div className='ml-6'>
            <div className='relative flex justify-between mb-8'>
              <div>
                <h2 className='text-[30px] font-medium'>Efab Housing Estate</h2>
                <span className='text-[15px] text-secondaryColor font-normal'>
                  Estate
                </span>
              </div>
              <More />
            </div>
            <div className='w-full border rounded-[50px] h-56 pl-3 flex flex-col items-start justify-center'>
              <div className='flex items-start'>
                <img src={marker} alt='' />
                <div className='ml-2'>
                  <h5 className='text-[20px] font-normal'>
                    Karu extension community 2, New karu, Abuja.
                  </h5>
                  <span className='text-[15px] font-normal text-secondaryColor'>
                    Address
                  </span>
                </div>
              </div>
              <div className='flex justify-between w-full mt-5'>
                <div className='flex items-start'>
                  <img src={phone} alt='' />
                  <div className='ml-2'>
                    <h5 className='text-[20px] font-normal'>+2348163421203</h5>
                    <span className='text-[15px] font-normal text-secondaryColor'>
                      Phone
                    </span>
                  </div>
                </div>
                <div className='flex items-start'>
                  <img src={email} alt='' />
                  <div className='ml-2'>
                    <h5 className='text-[20px] font-normal'>
                      akintadeseun816@gmail.com
                    </h5>
                    <span className='text-[15px] font-normal text-secondaryColor'>
                      Email
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SellerProfile
