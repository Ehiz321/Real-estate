import React from 'react'
import house from '../../assets/images/house.jpeg'
import location from '../../assets/icons/location.svg'
import tag from '../../assets/icons/tag.svg'
import bed from '../../assets/icons/bed.svg'
import bath from '../../assets/icons/bath.svg'
import car from '../../assets/icons/car.svg'
import { Link } from 'react-router-dom'
const HouseItem = ({id, divSize, textColor, imageSize}) => {
  return (
    <>
      <Link
        to={`/homes/details/${id}`}
        className={`${
          divSize ? divSize : 'w-64 h-80 bg-white'
        }  rounded-[20px] cursor-pointer mt-6`}
      >
        <div className={`w-full ${imageSize ? imageSize : 'h-48'}`}>
          <img
            src={house}
            className='w-full h-full rounded-[20px] object-cover object-center'
            alt=''
          />
        </div>
        <div className={`text-[11px] mt-2 px-3 ${textColor}`}>
          <div className='flex justify-between w-52 items-start '>
            <img src={location} alt='' />
            <p className='ml-2'>Karu extension community 2, New Karu</p>
          </div>
          <div className='flex mt-2 items-start'>
            <img src={tag} alt='' />
            <p className='ml-2'>$ 3.4m Annually</p>
          </div>
          <div className='flex items-center mt-2'>
            <div className='flex mr-2'>
              <img src={bed} alt='' />
              <p className='ml-2'>5</p>
            </div>
            <div className='flex mr-2'>
              <img src={bath} alt='' />
              <p className='ml-2'>7</p>
            </div>
            <div className='flex mr-2'>
              <img src={car} alt='' />
              <p className='ml-2'>4</p>
            </div>
            <div className='border-l-2 border-accentColor pl-2'>
              <p>Duplex</p>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}

export default HouseItem
