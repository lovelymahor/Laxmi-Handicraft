import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandler = (event) => {
        event.preventDefault();
        c
    }
  return (
    <div className='text-center '>
        <p className='text-2xl font-medium text-gray-800 mb-2'>Subscribe to our Newsletter</p>
        <p className='text-gray-400 mt-4'>Get the latest updates and offers</p>
        <form>
            <input 
                type="email" 
                placeholder='Enter your email' 
                className='w-full sm:flex-1 outline-none md:w-1/3 lg:w-1/4 px-4 py-2 border border-gray-300 rounded-lg mt-4'
            />
            <button 
                type='submit' 
                className='bg-black text-white px-6 py-2 rounded-md ml-2 hover:bg-gray-800 transition duration-300 cursor-pointer'
            >
                Subscribe
            </button>
        </form>
    </div>
  )
}

export default NewsletterBox