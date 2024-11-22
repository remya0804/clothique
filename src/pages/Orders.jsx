import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {

  const {productsArray,currency} = useContext(ShopContext);

  return (

    <div className='pt-16 border-t'>

      <div className='text-2xl'>

        <Title text1={'MY'} text2={'ORDERS'}/>


      </div>

      <div>

        {

          productsArray.slice(0,4).map((item,idx) => {

            return <div key={idx} className='border-t border-b py-4 text-gray-700 flex flex-col gap-4 md:flex-row md:items-center md:justify-between'> 

            <div className='flex items-start gap-6 text-sm'>

              <img className='w-10 sm:w-16' src={item.image} alt="" />

              <div>

                <p className='font-medium sm:text-base'>{item.name}</p>

                <div className='flex items-center gap-3 text-gray-700 text-base mt-2'>

                  <p className='text-lg'>{currency}{item.price}</p>
                  <p>Quantity: 1</p>
                  <p>Size: M</p>


                </div>

                <p className='mt-4'>Date: <span className='text-gray-400'>25, July, 2024</span></p>

              </div>


            </div>

            <div className='md:w-1/2 flex justify-between '>

              <div className='flex items-center gap-2'>

                <p className='min-w-2 h-2 rounded-full bg-green-500'></p>

                <p className='text-sm lg:text-base'>Ready to ship</p>


              </div>

              <button className='border px-4 py-2 text-sm font-medium rounded '>Track Order</button>


            </div>


            </div>


          })
        }
      </div>
      

    </div>
  )
}

export default Orders