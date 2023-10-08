import { Suspense, useState } from 'react'
import { Outlet } from 'react-router-dom'
import ConditionalBar from './components/ConditionalBar'
import { useLocation } from 'react-router-dom'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { AppContextProvider } from './context/AppContext'
import { AuthContextProvider } from './context/AuthContext'

function App({ router }) {
  const [user, setUser] = useState('dd')

  return (
    <>
      <AuthContextProvider>
        <AppContextProvider
          value={{
            user,
            setUser,
          }}
        >
          <RouterProvider router={router} />
        </AppContextProvider>
      </AuthContextProvider>
    </>
  )
}

export default App

// {/* <ConditionalBar location={location} />
// <Suspense fallback={<div>Loading...</div>}>
//   <Outlet />
// </Suspense> */}
