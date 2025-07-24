import React from 'react';

const Footer = () => {
  return (
    <>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-2xl font-semibold'>Laxmi - Handicraft</h1>
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.
          </p>
        </div>
        <div>
          <h1 className='text-xl font-medium mb-5'>Quick Links</h1>
          <ul className='flex flex-col gap-1'>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Home</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Products</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>About Us</li>
            <li className='text-gray-500 hover:text-black cursor-pointer'>Contact Us</li>
          </ul>
        </div>
        <div>
          <h1 className='text-xl font-semibold mb-5'>Contact Us</h1>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li className='hover:text-black cursor-pointer'>laxmihandicraft@gmail.com</li>
            <li className='hover:text-black cursor-pointer'>9410645306</li>
          </ul>
        </div>
      </div>
      <hr/>
      <div className='hover:text-black text-center text-gray-500 mt-2'>
        <p>© 2023 E-Commerce. All rights reserved.</p>
        <p className='py-5 hover:text-black text-sm cursor-pointer'>Privacy Policy | Terms of Service</p>
      </div>
    </>
  );
};

export default Footer;
