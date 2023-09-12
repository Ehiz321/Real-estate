import React from 'react'
import Input from '../../../../components/ui/Input'
import PrimaryButton from '../../../../components/ui/PrimaryButton'

const EstateVerifyPage = () => {
  return (
    <form className='flex flex-col items-center justify-between h-80 mt-20 w-2/3 max-[500px]:h-full max-[500px]:w-full '>
      <Input
        label={'Estate CAC Number'}
        divClass={'mt-3 w-[50%]'}
        className={'mt-2'}
      />
        <PrimaryButton
          width={'w-72'}
          className={' rounded-3xl my-5 max-[500px]:h-16 max-[500px]:my-7'}
        >
          Next
        </PrimaryButton>
    </form>
  )
}

export default EstateVerifyPage
