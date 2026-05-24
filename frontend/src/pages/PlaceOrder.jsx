import React, { useContext, useState } from 'react'
import Title from '../components/Title';
import CartTotal from '../components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../context/ShopContext';
const PlaceOrder = () => {
  const [method, setMethod] = useState('strip');
  const {navigate} = useContext(ShopContext);
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>
      {/*-----left side for cart items-----*/}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-2xl sm:text-2xl my-3'>
          <Title text1="DELIVERY " text2="INFORMATION" />
        </div>
        <div className='flex gap-3'>
          <input type="text" placeholder='First Name' className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' /> 
          <input type="text" placeholder='Last Name' className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' /> 
        </div>
        <input type="Email " placeholder='email address' className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' /> 
        <input type="text" placeholder='Street' className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' /> 
        <div className='flex gap-3'>
          <input type="text" placeholder='City' className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' /> 
          <input type="text" placeholder='State' className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' /> 
        </div>
        <div className='flex gap-3'>
          <input type="zipcode" placeholder='Zip code' className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' /> 
          <input type="text" placeholder='Country' className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' /> 
        </div>
        <div className='flex gap-3'>
          <input type="number" placeholder='Phone' className='w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500' /> 
        </div>
      </div>
         {/*-----Right side for cart items-----*/}
      <div className='mt-8'>
        <div className='mt-8 min-w-80'>
          <CartTotal/>
        </div>
        <div className='mt-12'>
          <Title text1="PAYMENT " text2="METHOD" />
          {/* ----- Payment method Selection------- */}
          <div className='flex flex-col gap-3 lg:flex-row'>
            <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full `}></p>
              <img src={assets.StripIcon} alt=' ' className='h-5 mx-4' />
            </div>
             <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full `}></p>
              <img src={assets.RazorpayIcon} alt=' ' className='h-10 mx-4' />
            </div>
             <div className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
              <p className={`min-w-3.5 h-3.5 border rounded-full `}></p>
              <p className='text-gray-500 text-sm font-medium mx-4 '>Cash On Delivery</p>
            </div>
          </div>
          <div className='w-full text-end mt-8 '>
            <button onClick={()=>navigate('/orders')} className='bg-black text-white px-16 py-3 text-sm '>PLACE ORDER</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder