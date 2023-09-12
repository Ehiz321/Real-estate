import React, { useState } from 'react'
import Logo from '../../../assets/icons/logo.svg'
import PrimaryButton from '../../../components/ui/PrimaryButton'
import individual from '../../../assets/icons/individual.svg'
import estate from '../../../assets/icons/estate.svg'
import company from '../../../assets/icons/company.svg'

const AccountTypePage = () => {
  const [selectedAccount, setSelectedAccount] = useState('')
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


  return (
    <>
      <div className='flex flex-col items-center w-full h-screen max-[500px]:h-full'>
        <div className='flex flex-col items-center mt-12 mb-10'>
          <img src={Logo} alt='turfind-logo' className='mb-5' />
          <h3 className='text-4xl font-bold max-[500px]:text-3xl'>
            Select Account Type
          </h3>
        </div>
        <form className='flex flex-col items-center justify-between h-1/2 mt-10 w-2/3 max-[500px]:h-full max-[500px]:w-full '>
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
            className={'rounded-3xl max-[500px]:h-16 max-[500px]:my-7'}
          >
            Next
          </PrimaryButton>
          </div>
        </form>
      </div>
    </>
  )
}

export default AccountTypePage
