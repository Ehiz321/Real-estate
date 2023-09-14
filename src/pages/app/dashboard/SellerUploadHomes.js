import React from 'react'
import Input from '../../../components/ui/Input'
import TextField from '../../../components/ui/TextField'
import PrimaryButton from '../../../components/ui/PrimaryButton'
import arrowBack from '../../../assets/icons/arrow-back.svg'
import plus from '../../../assets/icons/plus.svg'
import { useNavigate } from 'react-router-dom'
const SellerUploadHomes = () => {
  const navigate = useNavigate()
  return (
    <div className='mt-32 mb-10 pr-6'>
      <div className='bg-white rounded-[20px] w-full p-6'>
        <div className='flex items-center'>
          <img
            src={arrowBack}
            alt=''
            role='button'
            onClick={() => navigate(-1)}
          />
          <p className='ml-3 text-2xl font-medium'>Add home</p>
        </div>

        <form className='w-full'>
          <div className='flex w-full justify-between items-center'>
            <Input
              label={'Property name'}
              width={'w-[48%]'}
              className={'border-primary300 mt-1'}
            />
            <Input
              label={'Property type'}
              width={'w-[48%]'}
              className={'border-primary300 mt-1'}
            />
          </div>
          <div className='flex w-full justify-between'>
            <Input
              label={'Property name'}
              width={'w-[65%]'}
              className={'border-primary300 mt-1'}
            />
            <Input
              label={'Property Location'}
              width={'w-[25%]'}
              className={'border-primary300 mt-1'}
            />
          </div>
          <div className='flex w-[47%]'>
            <Input
              label={'Property name'}
              className={'border-primary300 mt-1'}
            />
          </div>
          <div className='flex w-full'>
            <Input
              label={'No. of Bedrooms'}
              width={'w-[25%]'}
              className={'border-primary300 mt-1'}
            />
            <Input
              label={'No. of Bathrooms'}
              width={'w-[25%] mx-4'}
              className={'border-primary300 mt-1'}
            />
            <Input
              label={'No. of Square feet'}
              width={'w-[25%]'}
              className={'border-primary300 mt-1'}
            />
          </div>
          <div>
            <TextField
              label={'Property Description'}
              className={'border-primary300 mt-1'}
            />
          </div>
          <div className='flex items-start justify-between mt-4'>
            <TextField
              label={'Property Description'}
              className={'border-primary300 mt-1'}
              width={'w-[65%]'}
            />
            <div className='w-[25%]'>
              <Input
                label={'Property Price'}
                divClass={'mt-0'}
                className={'border-primary300 mt-1'}
              />
              <div className=' w-full'>
                <p className='w-52 float-right'>
                  Note: 5% will be taking out of the initial property price
                </p>
              </div>
            </div>
          </div>

          <div className='flex w-[47%]'>
            <Input
              label={'Virtual Tour Link'}
              className={'border-primary300 mt-1'}
            />
          </div>

          <div className='w-full mt-5'>
            <label className='text-lg font-medium max-[500px]:text-xs'>
              Add Images
            </label>
            <div className='grid grid-cols-6 gap-5 mt-2'>
              {[1, 2, 3, 4, 5, 6, 7, 8].map(() => {
                return (
                  <label className='border-2 rounded-[20px] bg-white border-primary300 col-span-1 h-52 relative'>
                    <img
                      src={plus}
                      alt=''
                      className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]'
                    />
                    <input type='file' className='hidden' />
                  </label>
                )
              })}
            </div>
          </div>

          <div className='flex w-[47%] mt-4 mb-10'>
            <Input
              label={'Document Verification'}
              className={'border-primary300 mt-1'}
            />
          </div>
          <PrimaryButton width={'w-[40%]'} className={'mt-4 h-10'}>
            Upload Home
          </PrimaryButton>
        </form>
      </div>
    </div>
  )
}

export default SellerUploadHomes
