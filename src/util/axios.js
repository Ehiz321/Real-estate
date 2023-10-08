import axios from 'axios'
import { getAuth } from '../context/AuthContext'
import { toast } from 'react-toastify'
const token = getAuth()
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  // timeout: 30000,
  headers: {
    Authorization: `Bearer ${token}`,
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://turfind.onrender.com',
  },
  timeoutErrorMessage: 'Timeout Please Check your network and try again',

})
instance.interceptors.request.use(
  (config) => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    console.log(error)

    Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    if (error.code === 'ECONNABORTED') {
      toast.error(error.message)
    } console.log(error)
    return Promise.reject(error?.response?.data)
  }
)
export default instance
