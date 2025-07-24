import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');

  const fetchProductData = async () => {
    products.map((item) => {
      if(item.id.toString() === productId){
        setProductData(item)
        setImage(item.image[0]); 
        return null;
      }
    })
  }
  useEffect(()=>{
    fetchProductData();
  }, [productId])
  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Details Section */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Image Section */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index) => (
                <img onClick={()=>setImage(item)} key={index} src={item} alt={''} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'/>
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} alt="Product" className='w-full h-70% object-cover' />

          </div>
        </div>
        {/* Product Info Section */}
        <div className='flex-1'>
          <h1 className='text-2xl font-semibold mt-3'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.starIcon} alt="" className="w-3 5" />
            <img src={assets.starIcon} alt="" className="w-3 5" />
            <img src={assets.starIcon} alt="" className="w-3 5" />
            <img src={assets.starIcon} alt="" className="w-3 5" />
            <img src={assets.starIcon} alt="" className="w-3 5" />
            <p className='text-sm text-gray-500'>(4.5)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency}{size ? size.price : productData.price}</p>
          <p className='mt-3 text-gray-500 md:4/5'>{productData.description}</p>
           {/* Product Attributes */}
          {productData.size && (
            <div className='flex items-center gap-4 my-8'>
              <p>Select Size:</p>
              <div className='flex gap-2'>
                {productData.size.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSize(item)}
                    className={`border border-gray-300 px-4 py-2 rounded hover:bg-gray-100 ${item.label === size?.label ? 'border-orange-500' : ''}`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          )}
          {/* Dynamic Info based on Size */}
          {size && (
            <div className='text-sm text-gray-700 space-y-1'>
              <p><strong>Weight:</strong> {size.weight}</p>
              <p><strong>Dimensions:</strong> {size.dimensions.height} x {size.dimensions.width} x {size.dimensions.depth}</p>
            </div>
          )}
          <button onClick={()=>addToCart(productData.id, size)} className='mt-5 bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors cursor-pointer'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5 bg-slate-200 border-gray-300'/>
          <div className='flex flex-col gap-2 mt-5 text-gray-500'>
            <p className='text-sm'>Material: {productData.material}</p>
            <p className='text-sm'>Finish: {productData.finish}</p>
            <p className='text-sm'>Stock: {productData.stock}</p>
            <p className='text-sm'>Care Instructions: {productData.careInstructions}</p>
            <p className='text-sm'>Origin: {productData.origin}</p>
            <p className='text-sm'>SKU: {productData.sku}</p>
            <p className='text-sm'>Tags: {productData.tags.join(', ')}</p>
            <p className='text-sm'>Features:</p>
            <p>100% original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>

        </div>
      </div>
      {/* Product Description and Features review Section */}
      <div className='mt-10 gap-2'>
        <div className='flex cursor-pointer'>
          <b className='border border-gray-300 px-5 py-3 text-sm'>Description</b>
          <p className='border border-gray-300 px-5 py-3 text-sm'>({productData.features.length} Reviews)</p>
        </div>
        <div className='flex border-gray-300 flex-col gap-4 border px-6 py-6 text-sm text-gray-600'>
          <p>Experience the perfect blend of style and functionality with this premium product. Crafted from high-quality materials, it offers exceptional durability and a sleek, modern design that complements any space. Whether for everyday use or special occasions, this item delivers outstanding performance and comfort. Enjoy easy maintenance and long-lasting value, making it a must-have addition to your collection.</p>
          <p>Discover the timeless elegance of our exclusive brass collection, designed to bring a touch of tradition and luxury to your home. Each piece is expertly handcrafted by skilled artisans, ensuring unique detailing and superior quality. Perfect for gifting or enhancing your décor, our brass products combine classic artistry with modern appeal, making them a cherished addition to any setting.</p>
        </div>
      </div>
      {/* Display Related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>
    </div>
  ) : <div className=' opacity-0'>

  </div>
}

export default Product