import React from 'react'
import Input from '../../../../components/ui/Input'
import PrimaryButton from '../../../../components/ui/PrimaryButton'

const CompanyFormPage = () => {
  return (
    <form className='flex flex-col items-center justify-between h-full mt-3 w-2/3 max-[500px]:h-full max-[500px]:w-full '>
      <div className='flex w-full justify-between'>
        <Input
          label={'Company Name'}
          divClass={'mt-3'}
          className={'mt-2'}
          width={'w-[48%]'}
        />
        <Input
          label={'Company Email'}
          divClass={'mt-3'}
          className={'mt-2'}
          width={'w-[48%]'}
        />
      </div>
      <div className='flex w-full justify-between'>
        <Input
          label={'Company Phonenumber'}
          divClass={'mt-3'}
          className={'mt-2'}
          width={'w-[48%]'}
        />
        <Input
          label={'Company Address'}
          width={'w-[48%]'}
          divClass={'mt-3'}
          className={'mt-2'}
        />
      </div>
      <div className='flex flex-col w-full'>
        <label className='text-lg font-medium max-[500px]:text-xs'>
          Company Bio
        </label>
        <textarea className='border-2 h-60 outline-none p-3 rounded-xl mt-2'></textarea>
      </div>
      <PrimaryButton
        width={'w-72'}
        className={'rounded-3xl my-5 max-[500px]:h-16 max-[500px]:my-7'}
      >
        Next
      </PrimaryButton>
    </form>
  )
}

export default CompanyFormPage
