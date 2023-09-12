import React from 'react'
import Input from '../../../../components/ui/Input'
import PrimaryButton from '../../../../components/ui/PrimaryButton'

const IndividualVerifyPage = () => {
  return (
    <form className='flex flex-col items-center justify-between h-96 mt-12 w-2/3 max-[500px]:h-full max-[500px]:w-full '>
      <div className='flex items-center w-full justify-between'>
        <Input
          label={'NIN'}
          divClass={'mt-3'}
          width={'w-[48%]'}
          className={'mt-2'}
        />
        <Input
          label={'Email'}
          divClass={'mt-3'}
          width={'w-[48%]'}
          className={'mt-2'}
        />
      </div>
      <PrimaryButton
        width={'w-72'}
        className={' rounded-3xl my-5 max-[500px]:h-16 max-[500px]:my-7'}
      >
        Next
      </PrimaryButton>
    </form>
  )
}

export default IndividualVerifyPage
