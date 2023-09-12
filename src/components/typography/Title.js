import React from 'react'

const Title = ({ children, className }) => {
  return (
    <h1 className={`text-primary300 text-5xl font-bold max-[500px]:text-2xl  ${className}`}>
      {children}
    </h1>
  )
}

export default Title
