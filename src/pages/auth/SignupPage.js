import React, { useContext, useState } from 'react'
import axios from '../../util/axios'
import signupImage from '../../assets/images/signup-Image.jpeg'
import Title from '../../components/typography/Title'
import Subtitle from '../../components/typography/Subtitle'
import Input from '../../components/ui/Input'
import PrimaryButton from '../../components/ui/PrimaryButton'
import SocialContainer from '../../components/ui/SocialContainer'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { EyeSlash, Eye } from 'iconsax-react'
// import PhoneInput from 'react-phone-number-input'
// import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { toast } from 'react-toastify'

const SignupPage = () => {
  const { setAuthToken, updateCurrentUser, setCurrentUserId } =
    useContext(AuthContext)
  const [enteredFullName, setEnteredFullName] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  let navigate = useNavigate()
  const viewPasswordHandler = () => {
    setShowPassword(!showPassword)
  }

  const data = {
    fullName: enteredFullName,
    email: enteredEmail,
    password: enteredPassword,
    phonenumber: enteredPhoneNumber,
  }

  const signupHandler = async (e) => {
    e.preventDefault()
    if (!enteredFullName || !enteredEmail || !enteredPassword || !enteredPhoneNumber) {
      toast.warn('Please provide the required informations')
      return false
    }
    setIsLoading(true)
    try {
      const response = await axios.post(
        '/api/v1/auth/signup',
        JSON.stringify(data)
      )
      console.log(response)
      if (response.status && !response.data.user.isActive) {
        console.log(response.token)
        // setAuthToken(response.token)
        updateCurrentUser(response.data.user)
        setCurrentUserId(response.data.user._id)
        navigate('/verify')
        toast.warn('Please verify your email to continue')
      }
    } catch (error) {
      console.log(error)
      toast.error(error?.message || error)
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <div className='flex gap-x-24 w-full h-full max-[500px]:gap-x-0 max-[500px]:flex-col'>
      <div className='w-1/2 h-screen max-[500px]:h-36 max-[500px]:w-full'>
        <img
          src={signupImage}
          alt='login-back'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='bg-white mr-24  w-1/2 flex flex-col justify-center max-[500px]:mr-0 max-[500px]:p-2 max-[500px]:w-full'>
        <div className=''>
          <Title className={'mb-4 max-[500px]:mb-2'}>Create your account</Title>
          <Subtitle>Submit your details</Subtitle>
        </div>
        <form onSubmit={signupHandler} autoComplete='off' className='w-full '>
          <Input
            label={'Your Name'}
            divClass={'mt-2'}
            className={'mt-2'}
            textConfig={{
              placeholder: 'Please enter your full name',
              type: 'text',
              value: enteredFullName,
              onChange: (e) => setEnteredFullName(e.target.value),
            }}
          />
          <Input
            label={'Your Email'}
            divClass={'mt-2'}
            className={'mt-2'}
            textConfig={{
              placeholder: 'Please enter your email',
              type: 'email',
              value: enteredEmail,
              onChange: (e) => setEnteredEmail(e.target.value),
            }}
          />
          <Input
            label={'Password'}
            divClass={'mt-2'}
            className={'mt-2'}
            icon={
              <button
                type='button'
                className='absolute right-5 top-[55%]'
                onClick={viewPasswordHandler}
              >
                {showPassword ? <EyeSlash /> : <Eye />}
              </button>
            }
            textConfig={{
              placeholder: 'Please enter your password',
              type: showPassword ? 'text' : 'password',
              value: enteredPassword,
              onChange: (e) => setEnteredPassword(e.target.value),
            }}
          />
          <div className='my-2 w-full'>
            <label
              htmlFor='phoneHolder'
              className='max-[500px]:text-xs text-[15px] font-medium'
            >
              Phone Number
            </label>
            <PhoneInput
              international
              country='ng'
              limitMaxLength={true}
              name='phoneHolder'
              id='phoneHolder'
              value={enteredPhoneNumber}
              onChange={setEnteredPhoneNumber}
              autoComplete='new-password'
              inputStyle={{
                width: '100%',
                height: '100%',
              }}
              containerStyle={{
                width: '100%',
                border: '2px solid black',
                height: 52,
                marginTop: 8,
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            />
          </div>
          <div className='flex items-center'>
            <input type='checkbox' className='mr-2' />
            <p className='text-sm max-[500px]:text-[10px]'>
              I have read and i agree to the <br />{' '}
              <Link className='text-primary300 max-[500px]:text-[10px]'>
                Terms and Conditions
              </Link>{' '}
              and{' '}
              <Link className='text-primary300 max-[500px]:text-[10px]'>
                Privacy Policy
              </Link>
            </p>
          </div>
          <PrimaryButton className={'mt-5 rounded-[10px]'}>
            {isLoading ? 'Loading...' : 'Register'}
          </PrimaryButton>
        </form>
        <SocialContainer
          to={'/login'}
          link={'Login'}
          text={'Already have an account?'}
        />
      </div>
    </div>
  )
}

export default SignupPage
