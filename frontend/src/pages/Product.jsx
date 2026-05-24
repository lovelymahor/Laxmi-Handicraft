import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'
import RelatedProducts from '../components/RelatedProducts'

const Product = () => {
  const { id } = useParams();   
  const { currency, addToCart } = useContext(ShopContext)

  const [productData, setProductData] = useState(null)
  const [image, setImage] = useState('')
  const [size, setSize] = useState(null)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/products/single/${id}`)
        setProductData(res.data.product)
        setImage(res.data.product.images[0])
      } catch (error) {
        console.error(error)
      }
    }

    fetchProduct()
  }, [id])

  // ✅ Loading state
  if (!productData) {
    return <p className='text-center mt-10'>Loading...</p>
  }

  return (
    <div className='border-t-2 pt-10 transition-opacity duration-500 opacity-100'>

      {/* Product Section */}
      <div className='flex gap-12 flex-col sm:flex-row'>

        {/* Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18%] w-full'>
            {
              productData.images.map((item, index) => (
                <img 
                  key={index}
                  onClick={() => setImage(item)}
                  src={item}
                  className='w-[24%] sm:w-full sm:mb-3 cursor-pointer'
                />
              ))
            }
          </div>

          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full object-cover rounded' />
          </div>
        </div>

        {/* Info */}
        <div className='flex-1'>
          <h1 className='text-2xl font-semibold'>{productData.name}</h1>

          {/* Rating */}
          <div className='flex items-center gap-1 mt-2'>
            {[...Array(5)].map((_, i) => (
              <img key={i} src={assets.starIcon} className='w-3' />
            ))}
            <p className='text-sm text-gray-500'>(4.5)</p>
          </div>

          {/* Price */}
          <p className='mt-5 text-3xl font-medium'>
            {currency}{size ? size.price : productData.price}
          </p>

          <p className='mt-3 text-gray-500'>{productData.description}</p>

          {/* Sizes */}
          {productData.sizes && productData.sizes.length > 0 && (
            <div className='flex gap-4 my-6'>
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border px-4 py-2 ${
                    size === item ? 'border-orange-500' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          )}

          {/* Add to Cart */}
          <button
            onClick={() => addToCart(productData._id, size)}
            className='mt-5 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600'
          >
            ADD TO CART
          </button>

          <hr className='mt-8' />

          {/* Extra Info */}
          <div className='mt-5 text-gray-500 text-sm space-y-2'>
            <p>100% original product.</p>
            <p>Cash on delivery available.</p>
            <p>Easy return within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className='mt-10'>
        <div className='border px-6 py-6 text-sm text-gray-600'>
          <p>{productData.description}</p>
        </div>
      </div>

      {/* Related Products */}
      <RelatedProducts 
        category={productData.category} 
        subCategory={productData.subCategory} 
      />
    </div>
  )
}

export default Product