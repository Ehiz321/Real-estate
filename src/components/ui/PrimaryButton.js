import React from 'react'

const PrimaryButton = ({ children, className, disabled, type, style, width, height, color }) => {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`${width ? width : 'w-full'} ${
        height ? height : 'h-14'
      } bg-primary300 ${
        color?color:'text-white'
      } text-xl font-medium max-[500px]:text-base ${className} max-[500px]:h-10`}
      style={style}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
