import React from 'react'
import Title from '../components/Title'

import contact from '../assets/contact.png'
import NewsLetter from '../components/NewsLetter'

const Contact = () => {

  return (

    <div>

        <div className='text-2xl text-center pt-10 border-t'>

        <Title  text1={"CONTACT"} text2={"US"}/>

        </div>

        <div className='flex flex-col justify-center my-10 md:flex-row  gap-10 mb-28'>

          <img className='w-full md:max-w-[480px]' src={contact} alt="" />

          <div className='flex flex-col justify-center items-start gap-6'>

            <p className='font-semibold text-xl text-gray-600'>Our Store</p>

            <p className='text-gray-500'>54709 Willms Station <br />
            Suite 350, Washington, USA</p>

            <p className='text-gray-500'>Tel: (415) 555-0132 <br />
            Email: admin@clothique.com</p>

            <p className='font-semibold text-xl text-gray-600'>Careers at Forever</p>

            <p className='text-gray-500'>Learn more about our teams and job openings.</p>

            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>



          </div>

          

        </div>


        <NewsLetter />

      

    </div>
  )
}

export default Contact