import React from 'react';
import Title from '../components/Title';

const Contact = () => {
  return (
    <div>

      {/* Heading */}
      <div className='text-2xl text-center pt-10 border-t'>
        <Title text1={"CONTACT "} text2={"US"} />
      </div>

      {/* Main Section */}
      <div className='my-10 flex flex-col justify-center md:flex-row gap-16 mb-28 px-4'>

        {/* Image */}
        <img 
          className='w-full md:max-w-[450px] rounded-lg shadow-md'
          src="https://img.freepik.com/free-vector/contact-us-concept-landing-page_52683-19330.jpg"
          alt="Contact Us"
        />

        {/* Contact Details */}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>

          <p className='font-semibold text-2xl text-gray-800'>
            Laxmi Handicraft
          </p>

          {/* Address */}
          <div>
            <p className='font-semibold text-gray-600'>📍 Address</p>
            <p>Shiamgir, Uttar Pradesh, India</p>
          </div>

          {/* Phone */}
          <div>
            <p className='font-semibold text-gray-600'>📞 Phone</p>
            <p>+91-XXXXXXXXXX</p>
          </div>

          {/* Email */}
          <div>
            <p className='font-semibold text-gray-600'>📧 Email</p>
            <p>laxmihandicraft@gmail.com</p>
          </div>

          {/* Business Hours */}
          <div>
            <p className='font-semibold text-gray-600'>⏰ Business Hours</p>
            <p>Mon - Sat: 9:00 AM - 8:00 PM</p>
          </div>

          {/* WhatsApp Button */}
          <a 
            href="https://wa.me/917300645306" 
            target="_blank" 
            rel="noreferrer"
          >
            <button className='border border-green-600 px-8 py-3 text-sm text-green-600 rounded-md hover:bg-green-600 hover:text-white transition-all duration-500'>
              Chat on WhatsApp
            </button>
          </a>

        </div>
      </div>

      {/* Google Map */}
      <div className='px-4 mb-16'>
        <iframe
          title="location"
          src="https://www.google.com/maps?q=Shiamgir&output=embed"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className='rounded-lg shadow-md'
        ></iframe>
      </div>

    </div>
  );
};

export default Contact;