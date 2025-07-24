import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const ProductItem = ({id, name, price, image}) => {
    const { currency } = useContext(ShopContext);
  return (
    <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
        <div className='overflow-hidden'>
            <img className='w-full h-48 object-cover hover:scale-110 transition ease-in-out' src={image} alt={name} />
        </div>
        <p className='pt-3 pb-1 text-sm'>{name}</p>
        <p className='text-sm font-semibold'>{currency === 'INR' ? '₹' : '$'}{price}</p>

    </Link>
  )
}

export default ProductItem