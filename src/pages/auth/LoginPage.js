import React, { useContext, useReducer, useState } from 'react'
import axios from '../../util/axios'
import loginImage from '../../assets/images/login-Image.jpeg'
import Title from '../../components/typography/Title'
import Subtitle from '../../components/typography/Subtitle'
import Input from '../../components/ui/Input'
import { Link, useNavigate } from 'react-router-dom'
import PrimaryButton from '../../components/ui/PrimaryButton'
import SocialContainer from '../../components/ui/SocialContainer'
import { toast } from 'react-toastify'
import { AuthContext } from '../../context/AuthContext'
import { EyeSlash, Eye } from 'iconsax-react'

const LoginPage = () => {
  const { setAuthToken, updateCurrentUser, setCurrentUserId } =
    useContext(AuthContext)
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const viewPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  let navigate = useNavigate()

  const loginHandler = async (e) => {
    e.preventDefault()
    if (!enteredEmail || !enteredPassword) {
      toast.warn('Please provide the required informations')
      return false
    }
    setIsLoading(true)
    try {
      const response = await axios.post(
        '/api/v1/auth/login',
        JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
        })
      )
      if (response.status) {
        console.log(response.token)
        setAuthToken(response.token)
        updateCurrentUser(response.data.user)
        setCurrentUserId(response.data.user._id)
        navigate('/')
        if (response.data.user.lastLogin) {
          toast.success(`Welcome Back ${response?.data?.user?.fullName}`)
        } else {
          toast.success(`Welcome ${response?.data?.user?.fullName}`)
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className='flex gap-x-24 w-full h-full max-[500px]:gap-x-0 max-[500px]:flex-col'>
      <div className='w-1/2 h-screen max-[500px]:h-36 max-[500px]:w-full'>
        <img
          src={loginImage}
          alt='login-back'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='bg-white mr-24 flex  w-1/2 flex-col justify-center max-[500px]:mr-0 max-[500px]:p-2 max-[500px]:w-full'>
        <div className='w-2/3'>
          <Title className={'mb-4 max-[500px]:mb-0'}>
            Welcome back to Turfind !
          </Title>
          <Subtitle>Sign in to your account</Subtitle>
        </div>
        <form
          onSubmit={loginHandler}
          autoComplete='new-password'
          className='w-full mt-6'
        >
          <Input
            label={'Your Email'}
            className={'mt-3'}
            divClass={'mt-6'}
            textConfig={{
              placeholder: 'Please',
              type: 'email',
              value: enteredEmail,
              onChange: (e) => setEnteredEmail(e.target.value),
            }}
          />
          <Input
            label={'Password'}
            className={'mt-3'}
            divClass={'mt-6'}
            icon={
              <button
                type='button'
                className='absolute right-5 top-[57%]'
                onClick={viewPasswordHandler}
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </button>
            }
            textConfig={{
              placeholder: 'Please',
              type: showPassword ? 'text' : 'password',
              value: enteredPassword,
              onChange: (e) => setEnteredPassword(e.target.value),
            }}
          />
          <Link className='text-lg text-secondaryColor float-right max-[500px]:text-sm'>
            Forgot Password ?
          </Link>
          <PrimaryButton type={'submit'} className={'mt-10 rounded-[10px]'}>
            {isLoading ? 'Loading.....' : 'Login'}
          </PrimaryButton>
        </form>
        <SocialContainer
          to={'/signup'}
          link={'Register'}
          text={'Don’t have an account ?'}
        />
      </div>
    </div>
  )
}

export default LoginPage
