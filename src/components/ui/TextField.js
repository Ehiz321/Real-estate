import React from 'react'

const TextField = ({ label, divClass, className, textConfig, width }) => {
  return (
    <div className={`flex flex-col ${width ? width : 'w-full'}  ${divClass}`}>
      <label className='text-lg font-medium max-[500px]:text-xs'>{label}</label>
      <textarea
        className={`border-2 h-60 outline-none p-3 rounded-xl mt-2 ${className}`}
        {...textConfig}
      ></textarea>
    </div>
  )
}

export default TextField
