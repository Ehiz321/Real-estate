import React from 'react'
import { Link } from 'react-router-dom'
import HouseItem from '../../../components/ui/HouseItem'
import HouseList from '../../../components/HouseList'

const SellerHomesPage = () => {
  return (
    <>
      <div className='mt-32 px-6 mb-10'>
        <div className='text-right'>
          <Link to='/homes/add' className='text-primary300'>Add Homes</Link>
        </div>
        <div className=''>
        <HouseList/>
        <HouseList/>
        <HouseList/>
        </div>
      </div>
    </>
  )
}

export default SellerHomesPage
