import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../layout/Navbar'

const ConditionalBar = ({ location }) => {
  const params = useParams()
console.log(params)
  const excludedPath = [
    '/preferences',
    '/update-kyc',
    '/account',
    '/account/estate',
    '/account/estate/process',
    '/account/individual',
    '/account/individual/process',
    '/account/company',
    '/account/company/process',
    '/dashboard',
    '/homes',
    `/homes/details/${params.id}`,
    '/homes/add',
    '/profile',
  ]
  if (excludedPath.includes(location.pathname)) {
    return null
  }
  return (
    <Navbar/>
  )
}

export default ConditionalBar
