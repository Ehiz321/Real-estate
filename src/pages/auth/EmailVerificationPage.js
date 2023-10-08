import React, { useContext, useRef, useState } from 'react'
import axios from '../../util/axios'
import emailImage from '../../assets/images/email-Image.jpeg'
import Title from '../../components/typography/Title'
import Subtitle from '../../components/typography/Subtitle'
import Input from '../../components/ui/Input'
import PrimaryButton from '../../components/ui/PrimaryButton'
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const EmailVerificationPage = () => {
  const [otp1, setOtp1] = useState('')
  const [otp2, setOtp2] = useState('')
  const [otp3, setOtp3] = useState('')
  const [otp4, setOtp4] = useState('')
  const { currentUser, setAuthToken, setCurrentUserId, updateCurrentUser } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(false)
  let navigate = useNavigate()
    const otp1Ref = useRef()
    const otp2Ref = useRef()
    const otp3Ref = useRef()
  const otp4Ref = useRef()
    let data = {
      otp1,
      otp2,
      otp3,
      otp4,
    }

    const isOtpValid = (obj) => {
      return Object.values(obj)
    }
  let otp = isOtpValid(data).join('').toString()
  const emailVerificationHandler = async (e) => {
    e.preventDefault()
   if (!otp) {
     toast.warn('Please provide the otp sent to your email')
     return false
   }


    setIsLoading(true)
    try {
      const response = await axios.post(
        '/api/v1/auth/verify',
        JSON.stringify({ otpCode: parseInt(otp) })
      )
      console.log(response)
          if (response.status && response.data.user.isActive) {
            console.log(response.token)
            setAuthToken(response.token)
            updateCurrentUser(response.data.user)
            setCurrentUserId(response.data.user._id)
            navigate('/')
            toast.success('You have logged in successfully')
          }
    } catch (error) {
      console.log(error)
      toast.error(error?.error || error)
    }
    setIsLoading(false)
  }
  const inputfocus = (elmnt) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2
      if (next > -1) {
        elmnt.target.form.elements[next].focus()
      }
    } else {

      const next = elmnt.target.tabIndex
      if (next < 4) {
        elmnt.target.form.elements[next].focus()
      }
    }
  }
  return (
    <div className='flex gap-x-24 w-full h-full max-[500px]:gap-x-0 max-[500px]:flex-col'>
      <div className='w-1/2 h-screen max-[500px]:h-36 max-[500px]:w-full'>
        <img
          src={emailImage}
          alt='login-back'
          className='w-full h-full object-cover'
        />
      </div>
      <div className='bg-white mr-24  w-1/2 flex flex-col justify-center max-[500px]:mr-0 max-[500px]:p-2 max-[500px]:w-full'>
        <div className='mb-14 max-[500px]:mb-7'>
          <Title className={'mb-4 max-[500px]:mb-2'}>Email Verification</Title>
          <Subtitle className={'w-2/3 mt-6'}>
            We sent a 4 digit Otp to {currentUser.email}
          </Subtitle>
        </div>
        <form
          onSubmit={emailVerificationHandler}
          autoComplete='new-password'
          className='w-full flex flex-col justify-between h-1/2'
        >
          <div className='flex justify-between max-[500px]:mb-14'>
            <input
              tabIndex='1'
              maxLength='1'
              className='w-24 h-24 border-2 border-primary300 rounded-xl text-center text-3xl max-[500px]:w-16 max-[500px]:h-16'
              ref={otp1Ref}
              name='otp1'
              value={otp1}
              onChange={(e) => setOtp1(e.target.value)}
              onKeyUp={(e) => inputfocus(e)}
              type='text'
            />
            <input
              tabIndex='2'
              maxLength='1'
              ref={otp2Ref}
              name='otp2'
              value={otp2}
              onChange={(e) => setOtp2(e.target.value)}
              onKeyUp={(e) => inputfocus(e)}
              className='w-24 h-24 border-2 border-primary300 rounded-xl text-center text-3xl max-[500px]:w-16 max-[500px]:h-16'
              type='text'
            />
            <input
              tabIndex='3'
              maxLength='1'
              className='w-24 h-24 border-2 border-primary300 rounded-xl text-center text-3xl max-[500px]:w-16 max-[500px]:h-16'
              ref={otp3Ref}
              name='otp3'
              value={otp3}
              onChange={(e) => setOtp3(e.target.value)}
              onKeyUp={(e) => inputfocus(e)}
              type='text'
            />
            <input
              tabIndex='4'
              maxLength='1'
              className='w-24 h-24 border-2 border-primary300 rounded-xl text-center text-3xl max-[500px]:w-16 max-[500px]:h-16'
              ref={otp4Ref}
              name='otp4'
              value={otp4}
              onChange={(e) => setOtp4(e.target.value)}
              onKeyUp={(e) => inputfocus(e)}
              type='text'
            />
          </div>
          <PrimaryButton type={'submit'} className={'mt-5'}>
            {isLoading ? 'Loading.....' : 'Verify'}
          </PrimaryButton>
        </form>
      </div>
    </div>
  )
}

export default EmailVerificationPage
