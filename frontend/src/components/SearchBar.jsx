import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';

const SearchBar = () => {
    const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
    const location = useLocation();
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        if (location.pathname.includes('/products')){
            setVisible(true);
        }
        else {
            setVisible(false);
        }
    }, [location])

  return showSearch && visible ? (
    <div className='border-t border-b border-gray-200 bg-gray-50 text-center'>
        <div className='inline-flex items-center justify-center border border-gray-300 px-5 py-2 mx-3 my-5 rounded-full w-3/4 sm:w-1/2 '>
        <input 
            type="text" 
            placeholder='Search for products...' 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
            className='flex-1 outline-none bg-inherit text-sm'/>
        <img className='w-4' src={assets.searchIcon} alt=''/>
        </div>
        <img onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer' src={assets.searchIcon} alt=''/>
    </div>
  ) : null;
}

export default SearchBar