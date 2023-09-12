import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Navigate } from 'react-router-dom'
const PrivateRoute = ({children}) => {
  const { user } = useContext(AppContext)


  return user ? <>{children}</>: <Navigate to='/' />
}

export default PrivateRoute
