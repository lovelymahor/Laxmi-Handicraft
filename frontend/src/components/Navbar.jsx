import React, { useContext, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import searchIcon from '../assets/search_icon.png';
import profileIcon from '../assets/profile_icon.png';
import cartIcon from '../assets/Cart_icon.png';
import menuIcon from '../assets/menu_icon.png';
import backIcon from '../assets/back_icon.png';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch, getCartCount} = useContext(ShopContext);
    return (
        <div className="flex items-center justify-between py-5 px-4 font-medium">
            <h1 className="w-36 text-2xl font-bold text-gray-800">Laxmi - Handicraft</h1>

            <ul className="hidden sm:flex gap-5 text-sm text-gray-700 list-none">
                <NavLink to='/' className="flex flex-col items-center gap-1">
                    <p>HOME</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to='/products' className="flex flex-col items-center gap-1">
                    <p>PRODUCTS</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to='/about' className="flex flex-col items-center gap-1">
                    <p>ABOUT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
                <NavLink to='/contact' className="flex flex-col items-center gap-1">
                    <p>CONTACT</p>
                    <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
                </NavLink>
            </ul>
            <div className="flex items-center gap-2">
                <div className="relative w-[200px] h-[30px]">
                    <input type="text" placeholder="Search..." className="w-full h-full border border-gray-300 rounded-[1.25rem] px-10 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                    <img onClick={()=>setShowSearch(false)} src={searchIcon} alt="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 sm:w-5 sm:h-5 md:w-4 md:h-4 object-contain cursor-pointer"/>
                </div>
           </div>
            <div className="flex items-center gap-4">
                <div className='group relative'>
                    <img className='w-5 cursor-pointer' src={profileIcon} alt="Profile" />
                    <div className='group-hover:block bg-white shadow-lg rounded-md p-4 hidden absolute dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 pg-slat-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My Profile</p>
                            <p className='cursor-pointer hover:text-black'>My Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img src={cartIcon} className='w-5 min-w-5 cursor-pointer' />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>
                <img onClick={()=>setVisible(true)} src={menuIcon} className='w-6 cursor-pointer block sm:hidden' />
            </div>
            { /* side bar menu for small screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-gray-600'>
                    <div onClick={()=>setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
                        <img className='h-4 rotate-180' src={backIcon} alt=''/>
                        <p>Back</p>
                    </div>
                    <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/' >HOME</NavLink>
                    <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/products' >PRODUCTS</NavLink>
                    <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='/about' >ABOUT</NavLink>
                    <NavLink onClick={()=>setVisible(false)}className='py-2 pl-6 border' to='contact' >CONTACT</NavLink>
                </div> 
            </div>
        </div>
    );
};

export default Navbar;
