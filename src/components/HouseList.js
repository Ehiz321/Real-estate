import React from 'react'
import HouseItem from './ui/HouseItem'

const HouseList = () => {
  return (
    <div className='flex flex-wrap mt-1 justify-between w-full'>
      {[1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => {
        return <HouseItem id={index} />
      })}

    </div>
  )
}

export default HouseList
