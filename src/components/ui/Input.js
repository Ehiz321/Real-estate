import React from 'react'

const Input = ({ label, textConfig, className, divClass, width, icon }) => {
  return (
    <div
      className={`${
        width ? width : 'w-full'
      } max-[500px]:my-3 ${divClass} relative`}
    >
      <label className='text-[15px] font-medium max-[500px]:text-xs'>{label}</label>
      <input
        className={`w-full h-[50px] px-3 outline-none bg-white border-2 border-black rounded-xl max-[500px]:mt-2 max-[500px]:h-11 ${className}`}
        {...textConfig}
        autoComplete='new-password'
      />
      {icon}
    </div>
  )
}

export default Input
