import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'
const About = () => {
  return (
  <div>
    <div className='text-2xl text-center pt-8 border-t'>
      <Title text1="ABOUT " text2="US" />
    </div>
    <div className='my-10 flex flex-col md:flex-row gap-16'>
      <img className = 'w-full md:max-w-[450px]' src={assets.img1} alt=''/>
      <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
        <p className='text-lg'>Welcome to our e-commerce store! We are dedicated to providing you with the best online shopping experience. Our mission is to offer a wide range of high-quality products at competitive prices, along with exceptional customer service.</p>
        <p className='text-lg'>At our store, we believe in the power of choice. That's why we have curated a diverse selection of products to cater to your unique needs and preferences. Whether you're looking for the latest fashion trends, cutting-edge electronics, or everyday essentials, we've got you covered.</p>
        <b className='text-gray-800'>Our Mission</b>
        <p className='text-lg'>Our mission is to make online shopping easy, convenient, and enjoyable for everyone. We strive to create a seamless shopping experience by offering a user-friendly website, secure payment options, and fast shipping. We are committed to providing excellent customer service and ensuring that your satisfaction is our top priority.</p>
      </div>
    </div>
    <div className='text-4xl py-4'>
      <Title text1="Why " text2="Choose US" />

    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-10 text-gray-700 mb-16'>
      <div className='flex flex-col items-center text-center px-4'>
        <b>Quality Assurance: </b>
        <p className='mt-2'>We carefully select our products from trusted suppliers to ensure that you receive only the highest quality items. We are committed to providing products that meet your expectations and exceed your standards.</p>
      </div>
      <div className='flex flex-col items-center text-center px-4'>
        <b>Convenience: </b>
        <p className='mt-2'>Shop from the comfort of your own home, at any time that suits you. Our user-friendly website makes it easy to browse and find what you're looking for, with detailed product descriptions and images to help you make informed decisions.</p>
      </div>
      <div className='flex flex-col items-center text-center px-4'>
        <b>Exceptional Customer Service: </b>
        <p className='mt-2'>Our dedicated customer service team is here to assist you with any questions or concerns you may have. We are committed to providing prompt and helpful support to ensure that your shopping experience is smooth and enjoyable.</p>
      </div>
    </div>
    <NewsletterBox/>
  </div>
  )
}

export default About
