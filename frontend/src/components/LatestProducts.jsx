import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestProducts = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);
    useEffect(() => {
        if (products) {
            setLatestProducts(products.slice(0, 10));
        }
    }, [products]); // depend on products so it updates when products become available

  return (
    <div className='my-10'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Latest '} text2={'Products'}/>
            <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                Discover our latest products that are designed to elevate your lifestyle. From innovative gadgets to stylish accessories, explore the newest additions to our collection that combine quality and functionality.
            </p> 
        </div>
        {/* Rendering Products Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
        {
            latestProducts.map((item, index) => (
                <ProductItem key={index} id={item.id} image={item.image} name={item.name} price={item.price}/>
            ))
        }
        </div>
    </div>
  );
}

export default LatestProducts;