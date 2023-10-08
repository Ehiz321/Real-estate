import React, { useState } from 'react'
import axios from '../../util/axios'
import Input from '../../components/ui/Input'
import PrimaryButton from '../../components/ui/PrimaryButton'
import Subtitle from '../../components/typography/Subtitle'
import Title from '../../components/typography/Title'
import forgotImage from '../../assets/images/forgot-Image.jpeg'
import { Eye, EyeSlash } from 'iconsax-react'

const NewPasswordPage = () => {
  const [otpCode, setOtpCode] = useState('')
  const [enteredPassword, setEnteredPassword] = useState('')
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const viewPasswordHandler = () => {
    setShowPassword(!showPassword)
  }
  const data = {
    otpCode: otpCode,
    password: enteredPassword,
    passwordConfirm: enteredConfirmPassword,
  }

  if (enteredPassword && enteredConfirmPassword) {
    if (enteredPassword !== enteredConfirmPassword) {
      console.log('Error')
    } else if (enteredPassword === enteredConfirmPassword) {
      console.log('Success')
    }
  }

  const createPasswordHandler = async (e) => {
    if (!otpCode || !enteredPassword || !enteredConfirmPassword) {
      return
    }
    setIsLoading(true)
    try {
      const response = await axios.post(
        '/api/v1/auth/resetpassword',
        JSON.stringify(data)
      )
      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className='flex gap-x-24 w-full h-full max-[500px]:gap-x-0 max-[500px]:flex-col'>
      <div className='w-1/2 h-screen max-[500px]:h-36 max-[500px]:w-full'>
        <img
          src={forgotImage}
          alt='login-back'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='bg-white mr-24 flex  w-1/2 flex-col justify-center max-[500px]:mr-0 max-[500px]:p-2 max-[500px]:w-full'>
        <div className='mb-4'>
          <Title className={'mb-4'}>Create New Password</Title>
          <Subtitle
            className={'w-2/3 mt-9 max-[500px]:w-full max-[500px]:mt-0 '}
          >
            Enter your new password
          </Subtitle>
        </div>
        <form
          onSubmit={createPasswordHandler}
          autoComplete='new-password'
          className='w-full flex flex-col justify-between h-2/4 mt-6'
        >
          <Input
            label={'New Password'}
            className={'mt-3'}
            divClass={'mt-5'}
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
              onChange: (e) => setEnteredPassword(e.target.value),
              type: showPassword ? 'text' : 'password',
            }}
          />
          <Input
            label={'Re enter password'}
            className={'mt-3'}
            textConfig={{
              type: showPassword ? 'text' : 'password',
              onChange: (e) => setEnteredConfirmPassword(e.target.value),
            }}
          />
          <PrimaryButton
            type={'submit'}
            className={'rounded-xl max-[500px]:mt-10'}
          >
            Send
          </PrimaryButton>
        </form>
      </div>
    </div>
  )
}

export default NewPasswordPage
