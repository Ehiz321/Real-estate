import React, { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import ConditionalBar from '../components/ConditionalBar'

const AppLayout = () => {
  const location = useLocation()
  return (
    <>
      <ConditionalBar location={location} />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}

export default AppLayout
