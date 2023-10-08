import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({ children }) => {
  const { currentUser, getAuth } = useContext(AuthContext)
  // const error = getAuth()
  // console.log(error)
  console.log(currentUser)
  return currentUser ? <>{children}</> : <Navigate to='/' />
}

export default PrivateRoute
