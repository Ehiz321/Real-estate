import React, { useState } from 'react'
import axios from '../../util/axios'
import Input from '../../components/ui/Input'
import PrimaryButton from '../../components/ui/PrimaryButton'
import Subtitle from '../../components/typography/Subtitle'
import Title from '../../components/typography/Title'
import forgotImage from '../../assets/images/forgot-Image.jpeg'

const ForgotPasswordPage = () => {
  const [enteredEmail, setEnteredEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const data = {
    email:enteredEmail
  }
  const forgotPasswordHandler = async (e) => {
    setIsLoading(true)
    try {
      const response = await axios.post('/api/v1/auth/forgotPassword', JSON.stringify(data))
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
          <Title className={'mb-4'}>Forgot Password ?</Title>
          <Subtitle className={'w-2/3 mt-9 max-[500px]:w-full max-[500px]:mt-0 '}>
            Enter your valid email address an we will send u an otp to reset
            your password
          </Subtitle>
        </div>
        <form
          onSubmit={forgotPasswordHandler}
          autoComplete='new-password'
          className='w-full flex flex-col justify-between h-2/5'
        >
          <Input
            label={'Your Email'}
            textConfig={{
              placeholder: 'Please',
              type: 'email',
              value: enteredEmail,
              onChange: (e)=>setEnteredEmail(e.target.value)
            }}
          />
          <PrimaryButton type={'submit'} className={'mt-10'}>Send</PrimaryButton>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordPage
