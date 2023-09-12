import React from 'react'
import house2 from '../../../assets/images/house2.jpeg'
import house3 from '../../../assets/images/house3.jpeg'
import house4 from '../../../assets/images/house4.jpeg'
import mapview from '../../../assets/images/mapview.png'
import bed from '../../../assets/icons/bed.svg'
import bath from '../../../assets/icons/bath.svg'
import car from '../../../assets/icons/car.svg'
import arrowBack from '../../../assets/icons/arrow-back.svg'
import arrowDown from '../../../assets/icons/arrow-down.svg'
import PrimaryButton from '../../../components/ui/PrimaryButton'
import { Link, useNavigate } from 'react-router-dom'

const HomeDetailsPage = () => {
   const navigate = useNavigate()
  return (
    <div className='mt-32 mb-10 w-full pr-10'>
      <div className='flex items-center'>
        <img
          src={arrowBack}
          alt=''
          role='button'
          onClick={() => navigate(-1)}
        />
        <p className='ml-3 text-2xl font-medium'>Home Details</p>
      </div>
      <div className='mt-6'>
        <div className='w-full'>
          <h2 className='text-2xl font-semibold text-accentColor'>
            Efab Housing Estate, No. 309 , Wuse, Abuja
          </h2>
          <div className='flex items-center mt-2'>
            <div className='flex mr-2 text-accentColor items-center'>
              <img src={bed} alt='' />
              <p className='ml-2 text-sm'>5</p>
            </div>
            <div className='flex mr-2 text-accentColor items-center'>
              <img src={bath} alt='' />
              <p className='ml-2 text-sm'>7</p>
            </div>
            <div className='flex mr-2 text-accentColor items-center'>
              <img src={car} alt='' />
              <p className='ml-2 text-sm'>4</p>
            </div>
            <div className='border-l-2 border-accentColor pl-2'>
              <p>Duplex</p>
            </div>
          </div>
        </div>

        <div className='w-full h-[450px] flex items-center justify-between mt-6'>
          <div className='w-7/12 h-full relative -z-20'>
            <img src={house2} alt='' className='w-full h-full object-cover' />
            <p className='text-white bg-primary300 text-sm font-medium absolute top-8 left-4 p-2'>
              Rent
            </p>
          </div>
          <div className='w-4/12 h-[450px] flex flex-col items-center justify-between'>
            <div className='w-full h-36'>
              <img src={house3} alt='' className='w-full h-full object-cover' />
            </div>
            <div className='w-full h-64 relative -z-20'>
              <img src={house4} alt='' className='w-full h-full object-cover' />
              <PrimaryButton
                style={{
                  color: '#008000',
                  fontSize: 17,
                }}
                width={'w-60'}
                className={
                  'bg-white border-none h-10 absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
                }
              >
                See all Photos
              </PrimaryButton>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <div className='w-2/3 border-b-2 border-secondaryColor pb-11'>
            <h3 className='text-[40px] font-medium text-accentColor'>
              Property Description
            </h3>
            <p className='text-[19px] font-normal text-accentColor my-3'>
              Welcome to the epitome of luxury living - a remarkable estate that
              seamlessly blends opulence and comfort. This exquisite residence
              sprawls over 10,000 square feet, offering the utmost privacy and
              exclusivity.
            </p>
            <button className='text-primary300 flex items-center'>
              <span className='text-[17px] font-normal text-primary300 mr-2'>
                Read more
              </span>{' '}
              <img src={arrowDown} alt='' />
            </button>
          </div>
          <div className='w-2/3 border-b-2 border-secondaryColor pb-11 mt-11'>
            <h3 className='text-[40px] font-medium text-accentColor'>
              Property Features
            </h3>
            <div className='grid grid-cols-2 w-1/2 my-4'>
              <p className='text-[18px] font-normal my-1'>Swimming Pool</p>
              <p className='text-[18px] font-normal my-1'>Security Cameras</p>
              <p className='text-[18px] font-normal my-1'>Kitchen</p>
              <p className='text-[18px] font-normal my-1'>4 car Garage</p>
              <p className='text-[18px] font-normal my-1'>Panic Rooms</p>
              <p className='text-[18px] font-normal my-1'>2333 Square Feet</p>
              <p className='text-[18px] font-normal my-1'>Library</p>
              <p className='text-[18px] font-normal my-1'>Built-in Wardrobes</p>
            </div>
            <button className='text-primary300 flex items-center'>
              <span className='text-[17px] font-normal text-primary300 mr-2'>
                Read more
              </span>{' '}
              <img src={arrowDown} alt='' />
            </button>
          </div>
          <div className='w-2/3 border-b-2 border-secondaryColor pb-11 mt-6'>
            <h3 className='text-[40px] font-medium text-accentColor'>
              Virtual Tour
            </h3>
            <Link className='text-[#4285F4]'>
              https://www.figma.com/file/PTfmrKwx8Wdr8d011pw4gf/Turfind?type=design&node-id=733-684&mode=design&t=DInGqbuf1eZSHs7F-0
            </Link>
          </div>
        </div>
        <div className='w-full mt-16'>
          <h3 className='text-[40px] font-medium text-accentColor'>
            Location View
          </h3>
          <div className='w-full mt-6'>
            <img src={mapview} className='w-full object-cover' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeDetailsPage
