import Cookies from 'js-cookie'
import { createContext, useEffect, useState } from 'react'
export const getAuth = () => {
  try {
    const token = localStorage.getItem('Token')
    return token
  } catch (error) {
    console.log(error)
    return error
  }
}
export const AuthContext = createContext({
  currentUser: null,
  updateCurrentUser: (value) => {},
  setAuthToken: (value) => {},
  logout: (route) => {},
  getAuth,
  userId: null,
  setCurrentUserId: (id) => {},
})

export const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('CurrentUser')) || {}
  )
  const [userId, setUserId] = useState(
    localStorage.getItem('CurrentUserId') || null
  )
  console.log(userId)

  const logout = (route) => {
    localStorage.removeItem('CurrentUser')
    localStorage.removeItem('CurrentUserId')
    localStorage.removeItem('Token')
    window.location.href = route ? route : '/'
  }

  const setAuthToken = (value) => {
    value
      ? localStorage.setItem('Token', value)
      : localStorage.removeItem('Token')
  }

  const updateCurrentUser = (value) => {
    if (value) {
      localStorage.setItem('CurrentUser', JSON.stringify(value))
      setCurrentUser(value)
    }
  }

  const setCurrentUserId = (id) => {
    if (id) {
      localStorage.setItem('CurrentUserId', id)
      return
    }
    setUserId(id)
  }

  useEffect(() => {
    const token = Cookies.get('Token')
    const currentUser = localStorage.getItem('CurrentUser')
    if (token) setAuthToken(token)
    if (currentUser) updateCurrentUser(JSON.parse(currentUser))
  }, [])
  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setAuthToken,
        logout,
        updateCurrentUser,
        getAuth,
        setCurrentUserId,
        userId,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
