import React, { useState } from 'react'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';

import stripe from '../assets/stripe.png'
import razor from '../assets/razor.png'
import { useNavigate } from 'react-router-dom';


const PlaceOrder = () => {

  const [paymentMethod,setPaymentMethod] = useState('cod'); 

  const navigate = useNavigate();

  return (

    <div className='min-h-[80vh] flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 '>

      <div className='w-fuu flex flex-col gap-4 sm:max-w-[480px]'>

        <div className='text-xl sm:text-2xl my-3 '>

          <Title text1={'DELIVERY'} text2={'DETAILS'}/>

        </div>

        <div className='flex gap-3'>
          
          <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='First name'/>
          <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Last name'/>

        </div>

        <input type="email" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Email Id'/>
        <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Street'/>

        <div className='flex gap-3'>
          
          <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='City'/>
          <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='State'/>

        </div>
        <div className='flex gap-3'>
          
          <input type="number" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Zipcode'/>
          <input type="text" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Country'/>

        </div>

        <input type="number" className='border border-gray-300 rounded px-3.5 py-1.5 w-full' placeholder='Contact number'/>


      </div>

      <div className='mt-8'>

        <div className='mt-8 min-w-60'> 

          <CartTotal />

        </div>

        <div className='mt-12'> 

          <Title text1={'PAYMENT'} text2={'METHOD'}/>

          <div className='flex flex-col gap-3 lg:flex-row'>

            <div onClick={() => setPaymentMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>

              <p className={`min-w-3.5 h-3.5 border rounded-full ${paymentMethod==="stripe" ? "bg-green-400" : ""}`}></p>

              <img className='h-10 mx-4' src={stripe} alt="" />

            </div>
            <div onClick={() => setPaymentMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>

              <p className={`min-w-3.5 h-3.5 border rounded-full  ${paymentMethod==="razorpay" ? "bg-green-400" : ""}`}></p>

              <img className='h-12 mx-4' src={razor} alt="" />

            </div>
            <div onClick={() => setPaymentMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>

              <p className={`min-w-3.5 h-3.5 border rounded-full  ${paymentMethod==="cod" ? "bg-green-400" : ""}`}></p>

              <p className='text-sm font-medium text-gray-500 mx-4'>CASH ON DELIVERY</p>

            </div>


          </div>


        </div>

        <div className='w-fll mt-8 text-end'>

          <button onClick={() => navigate('/orders')} className='bg-black text-white text-sm px-16 py-3'>PLACE ORDER</button>


        </div>

        


      </div>


    </div>

  )
}

export default PlaceOrder