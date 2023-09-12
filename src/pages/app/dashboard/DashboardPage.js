import React from 'react'
import home from '../../../assets/icons/home.svg'
import peopleAdd from '../../../assets/icons/people-add.svg'
import people from '../../../assets/icons/people.svg'

const DashboardPage = () => {
  return (
    <>
      <div className='w-full overflow-scroll relative -z-10 mt-36'>
        <div className='flex flex-wrap'>
          <div className='w-[35%] bg-white h-44 rounded-[20px] p-4 mr-[4%] mb-[4%]'>
            <div className='flex justify-between items-center my-2'>
              <p className='text-primary300 text-xl'>No. of Uploaded Homes</p>
              <img src={home} alt='' />
            </div>
            <h2 className='text-7xl text-accentColor'>345</h2>
          </div>
          <div className='w-[35%] bg-white h-44 rounded-[20px] p-4'>
            <div className='flex justify-between items-center my-2'>
              <p className='text-primary300 text-xl'>No. of Customers</p>
              <img src={peopleAdd} alt='' />
            </div>
            <h2 className='text-7xl text-accentColor'>200</h2>
          </div>
          <div className='w-[35%] bg-white h-44 rounded-[20px] p-4'>
            <div className='flex justify-between items-center my-2'>
              <p className='text-primary300 text-xl'>No. of Tenants</p>
              <img src={people} alt='' />
            </div>
            <h2 className='text-7xl text-accentColor'>59</h2>
          </div>
        </div>
      </div>
    </>
  )
}

export default DashboardPage
