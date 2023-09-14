import React from 'react'
import arrow from '../assets/icons/arrow.svg'
import user from '../assets/images/user.png'
import { useNavigate } from 'react-router-dom'

const ChatComponent = () => {
  const navigate = useNavigate()
  return (
    <aside className='bg-white w-[38%] h-screen border-2 border-primary200 rounded-r-[20px] flex flex-col items-center  px-8 justify-between'>
      <div className='w-full flex flex-col items-center my-5 mb-0 overflow-hidden'>
        <div className='w-full flex items-start'>
          <img src={arrow} alt='arrow' className='w-11 h-11 mb-6 mr-5 cursor-pointer' onClick={()=> navigate(-1)} />
          <h3 className='text-accentColor font-semibold text-[30px]'>CHATS</h3>
        </div>
        <input
          className='w-full bg-[#D9D9D980] h-[45px] rounded-[20px] px-4'
          placeholder='Search'
        />
        <div className='my-12 w-full grid grid-cols-1 gap-y-5 overflow-scroll h-screen mb-0'>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
          <button className='flex w-full items-start'>
            <div className='flex items-center gap-5 w-full'>
              <img
                src={user}
                className='w-[50px] h-[50px] object-cover rounded-full flex-none'
                alt='user'
              />
              <div className='text-left grow h-14'>
                <h2 className='text-[25px] font-medium'>John Doe</h2>
                <p className='text-[12px] font-normal text-secondaryColor'>
                  Hey can we have a quick virtual meeting
                </p>
              </div>
            </div>
            <span className='flex-none text-[12px] font-normal text-secondaryColor'>
              Today 8:30pm
            </span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default ChatComponent
