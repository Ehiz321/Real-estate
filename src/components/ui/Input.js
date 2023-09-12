import React from 'react'

const Input = ({ label, textConfig, className, divClass, width }) => {
  return (
    <div className={`${width? width:'w-full'} my-3 mt-5 max-[500px]:my-3 ${divClass}`}>
      <label className='text-lg font-medium max-[500px]:text-xs'>{label}</label>
      <input
        className={`w-full h-14 px-3 outline-none bg-white border-2 border-black rounded-xl mt-4 max-[500px]:mt-2 max-[500px]:h-11 ${className}`}
        {...textConfig}
        autoComplete='none'
      />
    </div>
  )
}

export default Input
