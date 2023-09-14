import React from 'react'
import { Link } from 'react-router-dom'
import appleStore from '../../assets/icons/apple-store.svg'
import googleStore from '../../assets/icons/google-store.svg'
import group1 from '../../assets/images/group1.png'
import iPhone14a from '../../assets/images/iPhone14a.png'
import iPhone14b from '../../assets/images/iPhone14b.png'
import iPhone14c from '../../assets/images/iPhone14c.png'
import Google1a from '../../assets/images/Google1a.png'
import MacBook1a from '../../assets/images/MacBook1a.png'
import buyHome from '../../assets/icons/buy-home.svg'
import rentHome from '../../assets/icons/rent-home.svg'
import vaction from '../../assets/icons/vacation.svg'
import seller from '../../assets/icons/seller.svg'
import tours from '../../assets/icons/tours.svg'
import sales from '../../assets/icons/sales.svg'
import arrowRight from '../../assets/icons/arrow-right.svg'
import check from '../../assets/icons/check.svg'
import PrimaryButton from '../../components/ui/PrimaryButton'
import HouseItem from '../../components/ui/HouseItem'
import Input from '../../components/ui/Input'
import TextField from '../../components/ui/TextField'
import AccordionList from '../../components/ui/AccordionList'
import Footer from '../../layout/Footer'
const Homepage = () => {
  return (
    <>
      <div className='mb-16'>
        <div className='px-20 max-[500px]:px-2'>
          <div className='flex flex-col items-center justify-between max-[500px]:px-2'>
            <div className='flex flex-col items-center w-[68%] mb-20 max-[500px]:w-full'>
              <p className='text-[20px] font-semibold text-primary300 my-2 max-[500px]:text-[9px]'>
                Affordable Housing made available for everyone
              </p>
              <h3 className='text-[50px] font-semibold my-2 text-center max-[500px]:text-[17px]'>
                We are revolusionalizing the search process for affordable
                housing in the nation
              </h3>
              <p className='text-[18px] font-medium my-2 text-secondaryColor text-center max-[500px]:text-[8px]'>
                Turfind’s number one priority is to help everyone that has a
                hard time finding the perfect home of their desire get quick and
                easy access to such homes.
              </p>
              <div className='flex my-5 items-center'>
                <Link className='mr-3'>
                  <img src={appleStore} alt='apple-store' />
                </Link>
                <Link className='ml-3'>
                  <img src={googleStore} alt='google-store' />
                </Link>
              </div>
            </div>
            <img src={group1} alt='' className='mt-20 max-[500px]:mt-0' />
          </div>

          <div className='flex flex-col items-center justify-between mt-20 w-full max-[500px]:mt-10'>
            <div className='w-full'>
              <p className='text-[20px] font-semibold text-primary300 my-2 text-center max-[500px]:text-[9px]'>
                Our Services
              </p>
              <h2 className='text-[50px] font-semibold my-2 text-center max-[500px]:text-[17px]'>
                What to expect from{' '}
                <span className='text-primary300'>Turfind</span>
              </h2>
            </div>
            <div className='flex items-center justify-between w-full my-20 max-[500px]:flex-col max-[500px]:px-3 max-[500px]:my-8'>
              <div className='w-[26%] max-[500px]:w-[100%]'>
                <div className=' flex flex-col items-center text-center mb-10'>
                  <img src={buyHome} />
                  <h3 className='text-[30px] font-medium my-2 max-[500px]:text-[17px]'>
                    Buy a home
                  </h3>
                  <p className='text-[15px] font-medium text-secondaryColor max-[500px]:text-[10px]'>
                    Fully purchase your dream home with us today, thanks to our
                    extensive selection of homes and optimized payment sysytem
                  </p>
                </div>
                <div className=' flex flex-col items-center text-center mb-10'>
                  <img src={rentHome} />
                  <h3 className='text-[30px] font-medium my-2 max-[500px]:text-[17px]'>
                    Rent a home
                  </h3>
                  <p className='text-[15px] font-medium text-secondaryColor max-[500px]:text-[10px]'>
                    Renting? Turfind's got you covered with a variety of
                    properties for your perfect home
                  </p>
                </div>
                <div className=' flex flex-col items-center text-center mb-10'>
                  <img src={vaction} />
                  <h3 className='text-[30px] font-medium my-2 max-[500px]:text-[17px]'>
                    Vacation/Short stays
                  </h3>
                  <p className='text-[15px] font-medium text-secondaryColor max-[500px]:text-[10px]'>
                    Planning holidays or parties? Look no further, Turfind
                    offers short-stay homes.
                  </p>
                </div>
              </div>
              <img src={iPhone14a} className='max-[500px]:order-last' alt='' />
              <div className='w-[26%] max-[500px]:w-[100%]'>
                <div className=' flex flex-col items-center text-center mb-10'>
                  <img src={seller} />
                  <h3 className='text-[30px] font-medium my-2 max-[500px]:text-[17px]'>
                    Become a seller
                  </h3>
                  <p className='text-[15px] font-medium text-secondaryColor max-[500px]:text-[10px]'>
                    Utilize our platform to sell your properties, whether you're
                    an estate, company, or individual.
                  </p>
                </div>
                <div className=' flex flex-col items-center text-center mb-10'>
                  <img src={tours} />
                  <h3 className='text-[30px] font-medium my-2 max-[500px]:text-[17px]'>
                    Virtual tours
                  </h3>
                  <p className='text-[15px] font-medium text-secondaryColor max-[500px]:text-[10px]'>
                    We also offer virtual tour services, allowing users to
                    experience homes from anywhere in the world
                  </p>
                </div>
                <div className=' flex flex-col items-center text-center mb-10'>
                  <img src={sales} />
                  <h3 className='text-[30px] font-medium my-2 max-[500px]:text-[17px]'>
                    Land sales
                  </h3>
                  <p className='text-[15px] font-medium text-secondaryColor max-[500px]:text-[10px]'>
                    FInd the perfect land space to build your dream home on
                    using our platform.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-between my-28 max-[500px]:flex-col max-[500px]:items-start max-[500px]:my-12'>
            <div className='w-[60%] max-[500px]:w-full'>
              <div className='mb-4'>
                <h2 className='text-[50px] font-bold max-[500px]:text-[15px]'>
                  We Are Changing The Face of Affordable Housing in Nigeria
                </h2>
                <p className='text-[25px] font-normal text-secondaryColor my-3 max-[500px]:text-[10px]'>
                  Our application consist of top gear features that help enhance
                  the experience for the search process for affordable housing
                  options
                </p>
              </div>
              <ul className={`my-6`}>
                <li className='text-[20px] font-normal bg-checkmark bg-no-repeat pl-8 bg-[length:20px] bg-left my-4 max-[500px]:text-[10px] max-[500px]:bg-[length:16px]'>
                  Filtering and Customization Options
                </li>
                <li className='text-[20px] font-normal bg-checkmark bg-no-repeat pl-8 bg-[length:20px] bg-left my-4 max-[500px]:text-[10px] max-[500px]:bg-[length:16px]'>
                  Incorporation of KYC Dojah Verification
                </li>
                <li className='text-[20px] font-normal bg-checkmark bg-no-repeat pl-8 bg-[length:20px] bg-left my-4 max-[500px]:text-[10px] max-[500px]:bg-[length:16px]'>
                  Integration of 360-degree property experience
                </li>
                <li className='text-[20px] font-normal bg-checkmark bg-no-repeat pl-8 bg-[length:20px] bg-left my-4 max-[500px]:text-[10px] max-[500px]:bg-[length:16px]'>
                  Legal and Documents proving rightful ownership to homes
                </li>
                <li className='text-[20px] font-normal bg-checkmark bg-no-repeat pl-8 bg-[length:20px] bg-left my-4 max-[500px]:text-[10px] max-[500px]:bg-[length:16px]'>
                  Real-time chat functionality for communication with agents
                </li>
              </ul>
            </div>
            <img src={iPhone14b} alt='iphone 14' />
          </div>

          <div className='flex items-center justify-between my-28 w-full max-[500px]:flex-col max-[500px]:items-start'>
            <div className='w-[60%] max-[500px]:mb-12 max-[500px]:w-full'>
              <div className='mb-4'>
                <h2 className='text-[50px] font-bold max-[500px]:text-[20px]'>
                  Become A Seller
                </h2>
                <p className='text-[25px] font-normal text-secondaryColor my-3 w-full max-[500px]:text-[10px]'>
                  Become a seller and unlock your property's potential.
                  Effortlessly showcase homes to a vast network of buyers. Our
                  expert team offers full support and market insights. Join our
                  community of successful sellers now! List your properties
                  today and experience the difference.
                </p>
              </div>
              <div>
                <ul className={`my-6`}>
                  <li className='text-[20px] font-normal bg-checkmark bg-no-repeat pl-8 bg-[length:20px] bg-left my-4 max-[500px]:text-[10px] max-[500px]:bg-[length:16px]'>
                    Effortless Listing: Easily upload and manage your
                    properties.
                  </li>
                  <li className='text-[20px] font-normal bg-checkmark bg-no-repeat pl-8 bg-[length:20px] bg-left my-4 max-[500px]:text-[10px] max-[500px]:bg-[length:16px]'>
                    Vast Buyer Network: Connect with a wide range of potential
                    buyers
                  </li>
                  <li className='text-[20px] font-normal bg-checkmark bg-no-repeat pl-8 bg-[length:20px] bg-left my-4 max-[500px]:text-[10px] max-[500px]:bg-[length:16px]'>
                    Expert Support: Receive personalized assistance and market
                    insights.
                  </li>
                  <li className='text-[20px] font-normal bg-checkmark bg-no-repeat pl-8 bg-[length:20px] bg-left my-4 max-[500px]:text-[10px] max-[500px]:bg-[length:16px]'>
                    Trusted Platform: Sell securely and confidently with us
                  </li>
                </ul>
                <PrimaryButton
                  width={'w-52 max-[500px]:w-20'}
                  className={'max-[500px]:text-[12px]'}
                >
                  Get Started
                </PrimaryButton>
              </div>
            </div>
            <img
              src={MacBook1a}
              alt='MacBook 14'
              className='ml-7 max-[500px]:ml-0'
            />
          </div>
        </div>
        <div className='bg-accentColor w-full h-screen px-20 py-16 mt-52 max-[500px]:px-5 max-[500px]:py-6 max-[500px]:h-full'>
          <div className='flex justify-between items-center max-[500px]:flex-col max-[500px]:items-end'>
            <div className='w-[600px] max-[500px]:w-full'>
              <p className='text-[30px] text-white font-medium mb-5 max-[500px]:text-[15px]'>
                Featured Properties
              </p>
              <h2 className='text-[50px] text-white font-semibold max-[500px]:text-[20px]'>
                We’ll Help You Find the Perfect Home
              </h2>
            </div>
            <img src={arrowRight} alt='' className='max-[500px]:w-7 h-5' />
          </div>
          <div className='flex flex-wrap justify-between mt-10 max-[500px]:mt-3'>
            <HouseItem
              divSize={'w-[32%] h-[400px] max-[500px]:w-full max-[500px]:'}
              textColor={'text-white'}
              imageSize={'h-[65%]'}
            />
            <HouseItem
              divSize={'w-[32%] h-[400px] max-[500px]:w-full'}
              textColor={'text-white'}
              imageSize={'h-[65%]'}
            />
            <HouseItem
              divSize={'w-[32%] h-[400px] max-[500px]:w-full'}
              textColor={'text-white'}
              imageSize={'h-[65%]'}
            />
            {/* <HouseItem/>
            <HouseItem/> */}
          </div>
        </div>

        <div className='px-20 mt-52 max-[500px]:px-0'>
          <div className='bg-primary200 rounded-[20px] w-full h-full flex flex-col items-center justify-center px-40 py-10 max-[500px]:px-0'>
            <div className='w-[89%]'>
              <p className='text-[20px] font-semibold text-primary300 my-4 text-center max-[500px]:text-[7px] max-[500px]:my-2'>
                Get in Touch
              </p>
              <h3 className='text-[50px] font-semibold my-4 text-center max-[500px]:text-[12px] max-[500px]:my-2'>
                Contact Us
              </h3>
              <p className='text-[18px] font-medium my-4 text-secondaryColor text-center max-[500px]:text-[7px] max-[500px]:my-2'>
                We are available 24/7 to answer all your questions and
                complaints.
                <br /> We are constantly collecting and acting on our users
                feedback regarding additional features and what improvement to
                make. We would be happy to receive your feedback. Send us your
                feedback
              </p>
            </div>
            <form className='w-[80%] flex flex-col items-center max-[500px]:w-full max-[500px]:px-5'>
              <Input label={'Full name'} />
              <Input label={'Email'} />
              <TextField
                label={'Message'}
                className={'mt-4'}
                divClass={'mt-5'}
              />
              <PrimaryButton width={'w-[30%]'} className={'my-9'}>
                Submit
              </PrimaryButton>
            </form>
          </div>
        </div>
        <div className='bg-accentColor w-full h-screen px-20 py-16 mt-52 flex flex-col items-center max-[500px]:px-3'>
          <div className='w-[600px] text-center max-[500px]:w-full'>
            <h2 className='text-[50px] text-white font-semibold max-[500px]:text-[25px]'>
              Don't take our word, Take theirs
            </h2>
            <p className='text-[20px] font-medium mb-5 text-secondaryColor max-[500px]:text-[12px]'>
              Here are some feedbacks from people who use Turfind
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center my-20'>
          <div className='text-center flex flex-col items-center mb-12'>
            <div>
              <img src={vaction} alt='' />
            </div>
            <h2 className='text-[50px] font-semibold my-3'>
              Frequently Asked Questions
            </h2>
            <p className='text-[18px] font-medium text-secondaryColor'>
              Everything you need to know about Turfind
            </p>
          </div>
          <div className='w-[70%]'>

          <AccordionList />
          </div>
        </div>

        <div className='px-20 mt-52 max-[500px]:px-0'>
          <div className='bg-primary200 rounded-[20px] w-full h-full flex items-center justify-between px-20 2xl:px-52 max-[500px]:px-2 max-[500px]:flex-col max-[500px]:py-10'>
            <img src={Google1a} />
            <div className='flex flex-col items-center w-[45%] max-[500px]:w-full max-[500px]:my-8'>
              <div>
                <p className='text-[20px] font-medium text-primary300 my-2 text-center max-[500px]:text-[9px]'>
                  What are you waiting for ?
                </p>
                <h3 className='text-[40px] font-semibold my-2 text-center text-accentColor max-[500px]:text-[17px]'>
                  Find the perfect home of your dreams now
                </h3>
              </div>
              <div className='flex my-5 items-center'>
                <Link className='mr-3'>
                  <img src={appleStore} alt='apple-store' />
                </Link>
                <Link className='ml-3'>
                  <img src={googleStore} alt='google-store' />
                </Link>
              </div>
            </div>
            <img src={iPhone14c} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Homepage
