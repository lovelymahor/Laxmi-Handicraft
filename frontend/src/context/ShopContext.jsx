import React, { createContext, useEffect, useState } from 'react';
import { products as productsData } from '../assets/assets'; 
import { toast } from 'react-toastify';

export const ShopContext = createContext();

export const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});

const addToCart = async (itemId, sizeObj) => {
  if (!sizeObj || !sizeObj.label) {
    toast.error('Product size is required to add to cart');
    return;
  }

  const sizeLabel = sizeObj.label;
  let cartData = structuredClone(cartItems);

  if (!cartData[itemId]) {
    cartData[itemId] = {};
  }

  if (cartData[itemId][sizeLabel]) {
    cartData[itemId][sizeLabel].quantity += 1;
  } else {
    cartData[itemId][sizeLabel] = {
      quantity: 1,
      sizeDetails: sizeObj,
    };
  }

  setCartItems(cartData);
};



const getCartCount = () => {
  let totalCount = 0;
  for (const itemId in cartItems) {
    for (const sizeLabel in cartItems[itemId]) {
      const entry = cartItems[itemId][sizeLabel];
      if (entry && entry.quantity > 0) {
        totalCount += entry.quantity;
      }
    }
  }
  return totalCount;
};


const updateQuantity = async (itemId, sizeLabel, quantity) => {
  let cartData = structuredClone(cartItems);

  if (!cartData[itemId] || !cartData[itemId][sizeLabel]) return;

  if (quantity <= 0) {
    delete cartData[itemId][sizeLabel];
    if (Object.keys(cartData[itemId]).length === 0) {
      delete cartData[itemId];
    }
  } else {
    cartData[itemId][sizeLabel].quantity = quantity;
  }

  setCartItems(cartData);
};

const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
        let itemInfo = productsData.find(item => item.id === Number(itemId));
        for (const item in cartItems[itemId]){
            try{
                if (cartItems[itemId][item] > 0) {
                    totalAmount += itemInfo.price * cartItems[itemId][item];
                }
            } catch (error) {
            }
        }
    }
    return totalAmount; 
}

    const value = {
        products: productsData,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
    };

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    );
}
