import React from 'react'
import { assets } from '../assets/assets'; 
 // Assuming you have a privacy policy icon


const OurPolicy = () => {
  return (
    <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center p-20 text-xs sm:text-sm md:text-base text-gray-700'>
        <div>
            <img className='w-12 m-auto mb-5' src= {assets.PrivacyPolicy} alt="Quality Icon" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer a hassle-free exchange policy to ensure you are completely satisfied with your purchase.</p>
        </div>
         <div>
            <img className='w-12 m-auto mb-5' src={assets.ReturnIcon} alt="Quality Icon" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>If you are not satisfied with your purchase, you can return it within 7 days for a full refund.</p>
        </div>
        <div>
            <img className='w-12 m-auto mb-5' src="https://cdn-icons-png.flaticon.com/512/190/190411.png" alt="Quality Icon" />
            <p className='font-semibold'>Best Customer Support</p>
            <p className='text-gray-400'>Our customer support team is available 24/7 to assist you with any queries or issues.</p>
        </div>
    </div>
  )
}

export default OurPolicy