import React from 'react'
import seun from '../../assets/images/seun.jpeg'
import godwin from '../../assets/images/godwin.png'
import irene from '../../assets/images/irene.jpeg'
import jeho from '../../assets/images/jeho.PNG'
import Footer from '../../layout/Footer'

const AboutUsPage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full h-[500px] backimage text-center text-white'>
        <h2 className='text-[50px] font-bold my-4 max-[500px]:text-[25px] max-[500px]:my-1'>
          About Us
        </h2>
        <p className='text-[25px] font-normal my-4 max-[500px]:text-[13px] max-[500px]:my-1'>
          We are happy to tell you more about Turfind and <br />
          our skilled team
        </p>
      </div>
      <div className='px-20 mt-16 max-[500px]:px-5 max-[500px]:mt-8'>
        <div className='flex flex-col items-center text-center'>
          <h5 className='text-[40px] font-medium my-3 max-[500px]:text-[20px] max-[500px]:my-2'>
            More <span className='text-primary300'>About Us</span>
          </h5>
          <p className='text-[48px] font-medium my-4 max-[500px]:text-[20px] max-[500px]:my-2'>
            We are in the process of developing a sophisticated platform that
            facilitates the search for affordable homes, tailored to your
            specific preferences and specifications.
          </p>
          <p className='text-[25px] font-normal text-secondaryColor max-[500px]:text-[17px]'>
            We are dedicated to ensuring the widespread accessibility of
            affordable housing across the nation.
          </p>
        </div>
        <div className='flex flex-col items-center my-28 max-[500px]:my-12'>
          <div className='flex flex-col items-center text-center'>
            <span className='text-[25px] font-medium text-secondaryColor my-4 max-[500px]:text-[10px] max-[500px]:my-0'>
              THEY ARE ALL PROFESSIONALS
            </span>
            <h5 className='text-[40px] font-medium my-3 max-[500px]:text-[20px] max-[500px]:my-2'>
              Meet Our <span className='text-primary300'>Team</span>
            </h5>
            <p className='text-[20px] font-normal text-secondaryColor my-3 max-[500px]:text-[10px] max-[500px]:my-1'>
              Our team consists of individuals that are exceptionally
              intelligent and creative. Our ability to execute our goals is also
              facilitated by the fact that we have a diverse and relatively
              young team.
            </p>
          </div>
          <div className='grid grid-cols-4 gap-7 my-9 max-[500px]:grid-cols-1'>
            <div className='flex flex-col items-center'>
              <img src={seun} className='w-52 h-52' alt='' />
              <h4 className='text-[30px] font-bold max-[500px]:text-[21px]'>
                Akintade Oluwaseun
              </h4>
              <p className='text-[25px] font-medium text-secondaryColor max-[500px]:text-[19px]'>
                Founder, CEO
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={jeho} className='w-52 h-52' alt='' />
              <h4 className='text-[30px] font-bold max-[500px]:text-[21px]'>
                Egbe Jehoshaphat
              </h4>
              <p className='text-[25px] font-medium text-secondaryColor max-[500px]:text-[19px]'>
                Co-founder, COO
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={godwin} className='w-52 h-52' alt='' />
              <h4 className='text-[30px] font-bold max-[500px]:text-[21px]'>
                Okpe Onoja Godwin
              </h4>
              <p className='text-[25px] font-medium text-secondaryColor max-[500px]:text-[19px]'>
                CTO
              </p>
            </div>
            <div className='flex flex-col items-center'>
              <img src={irene} className='w-52 h-52' alt='' />
              <h4 className='text-[30px] font-bold max-[500px]:text-[21px]'>
                Irene Phembi Pitiko
              </h4>
              <p className='text-[25px] font-medium text-secondaryColor max-[500px]:text-[19px]'>
                Head of Marketing, PM
              </p>
            </div>
          </div>
        </div>

        <div className='my-24 flex flex-col max-[500px]:my-7'>
          <div className='flex flex-col items-center text-center'>
            <h5 className='text-[40px] font-medium my-3 '>
              Our <span className='text-primary300'>Values</span>
            </h5>
            <p className='text-[25px] font-normal text-secondaryColor max-[500px]:text-[17px] '>
              We pride ourselves on a strong foundation of principles that drive
              our every action. With a focus on delivering trust, excellence,
              and innovation, we work collaboratively to create a dynamic
              community for our valued clients. Expect a remarkable real estate
              journey with us."
            </p>
          </div>
        </div>
        <div className='grid grid-cols-2 gap-7 w-full max-[500px]:grid-cols-1 '>
          <div className='my-3'>
            <h2 className='text-[40px] font-medium max-[500px]:text-[30px]'>
              INTEGRITY
            </h2>
            <p className='text-[20px] font-normal text-secondaryColor max-[500px]:text-[17px]'>
              We prioritize honesty, transparency, and ethical conduct in every
              transaction. Trust is the foundation of our relationships with
              clients, partners, and the community.
            </p>
          </div>
          <div className='my-3'>
            <h2 className='text-[40px] font-medium max-[500px]:text-[30px]'>
              EXCELLENCE
            </h2>
            <p className='text-[20px] font-normal text-secondaryColor max-[500px]:text-[17px]'>
              Striving for excellence is at the heart of everything we do. From
              customer service to market insights, we are committed to
              delivering top-notch solutions and experiences.
            </p>
          </div>
          <div className='my-5'>
            <h2 className='text-[40px] font-medium max-[500px]:text-[30px]'>
              COLLABORATION
            </h2>
            <p className='text-[20px] font-normal text-secondaryColor max-[500px]:text-[17px]'>
              We believe in the power of teamwork and collaboration. By working
              together with our clients and colleagues, we can achieve greater
              success and foster a positive environment for growth.
            </p>
          </div>
          <div className='my-5'>
            <h2 className='text-[40px] font-medium max-[500px]:text-[30px]'>
              INNOVATION
            </h2>
            <p className='text-[20px] font-normal text-secondaryColor max-[500px]:text-[17px]'>
              Embracing innovation allows us to stay ahead in a dynamic
              industry. We continuously explore new technologies and approaches
              to provide cutting-edge solutions and enrich our clients'
              experiences.
            </p>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default AboutUsPage
