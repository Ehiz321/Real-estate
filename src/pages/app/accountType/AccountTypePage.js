import React, { useContext, useState } from 'react'
import axios from '../../../util/axios'
import Logo from '../../../assets/icons/logo.svg'
import PrimaryButton from '../../../components/ui/PrimaryButton'
import individual from '../../../assets/icons/individual.svg'
import estate from '../../../assets/icons/estate.svg'
import company from '../../../assets/icons/company.svg'
import { AuthContext } from '../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { USER_TYPE } from '../../../util/userType'

const AccountTypePage = () => {
  const [selectedAccount, setSelectedAccount] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { userId, currentUser } = useContext(AuthContext)
  let navigate = useNavigate()
  const accountType = [
    {
      id: 1,
      name: 'Individual',
      imgUri: individual,
    },
    {
      id: 2,
      name: 'Estate',
      imgUri: estate,
    },
    {
      id: 3,
      name: 'Company',
      imgUri: company,
    },
  ]

  const handleAccountType = (enteredAccount) => {
    setSelectedAccount(enteredAccount)
  }

  const registerSellerHandler = async (e) => {
    e.preventDefault()
    console.log('yes')
      if (!selectedAccount) {
        toast.error('Please select a seller type')
        return false
      }
    setIsLoading(true)
    try {
      const response = await axios.post(`/api/v1/user/reqseller/${userId}`, {
        account_type: selectedAccount.toLocaleLowerCase(),
      })
      if (response.status) {
        if (currentUser.account_type === USER_TYPE.INDIVIDUAL) {
          navigate('/accounts/individual')
          return
        } else if (currentUser.account_type === USER_TYPE.ESTATE) {
          navigate('/accounts/estate')
          return
        } else if (currentUser.account_type === USER_TYPE.COMPANY) {
          navigate('/accounts/company')
          return
        }
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className='flex flex-col items-center w-full h-screen max-[500px]:h-full'>
        <div className='flex flex-col items-center mt-12 mb-10'>
          <img src={Logo} alt='turfind-logo' className='mb-5' />
          <h3 className='text-4xl font-bold max-[500px]:text-3xl'>
            Select Account Type
          </h3>
        </div>
        <form
          onSubmit={registerSellerHandler}
          className='flex flex-col items-center justify-between h-1/2 mt-10 w-2/3 max-[500px]:h-full max-[500px]:w-full '
        >
          <div className='flex flex-wrap justify-between w-full max-[500px]:h-full max-[500px]:items-center max-[500px]:justify-center max-[500px]:mb-4'>
            {accountType.map((account, index) => {
              return (
                <button
                  onClick={() => handleAccountType(account.name)}
                  key={index}
                  type='button'
                  className={`w-64 h-64 shadow-lg text-lg text-medium rounded-xl max-[500px]:w-24 max-[500px]:h-12 ${
                    selectedAccount === account.name
                      ? 'bg-primary200 shadow-none'
                      : ''
                  } max-[500px]:h-60 max-[500px]:w-60 max-[500px]:my-6`}
                >
                  <img
                    src={account.imgUri}
                    alt='account-type'
                    className='w-full h-24'
                  />
                  <span className='text-3xl font-medium'>{account.name}</span>
                </button>
              )
            })}
          </div>

          <div className='w-[30%]'>
            <PrimaryButton
              type={'submit'}
              className={'rounded-3xl max-[500px]:h-16 max-[500px]:my-7'}
            >
              {isLoading? 'Loading....' : 'Next'}
            </PrimaryButton>
          </div>
        </form>
      </div>
    </>
  )
}

export default AccountTypePage
