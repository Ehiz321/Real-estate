import React from 'react'

const Subtitle = ({ children, className }) => {
  return (
    <h5
      className={`text-secondaryColor text-xl font-medium max-[500px]:text-sm ${className}`}
    >
      {children}
    </h5>
  )
}

export default Subtitle
