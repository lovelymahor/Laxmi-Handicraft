import React, { useContext, useState, useEffect } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';


const Products = () => {
  const { products, search, showSearch } = useContext(ShopContext); 
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [sortType, setSortType] = useState('default');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)) {
      setCategory(prev=> prev.filter(item => item !== e.target.value));
    }
    else{
      setCategory(prev => [...prev, e.target.value]);
    }
  }

  const toggleSubcategory = (e) => {
    if(subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(item => item !== e.target.value));
    }
    else{
      setSubCategory(prev => [...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if(category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }
    setFilterProducts(productsCopy);
  }

  const sortProducts = (sortType) => {
    let fpCopy = filterProducts.slice();
    switch(sortType) {
      case 'price-asc':
        setFilterProducts(fpCopy.sort((a, b) => a.price - b.price));
        break;

      case 'price-desc':
        setFilterProducts(fpCopy.sort((a, b) => b.price - a.price));
        break;
      case 'newest':
        setFilterProducts(fpCopy.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter();
  },[category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProducts();
  }, [sortType]);
  
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t border-gray-200'>
      {/* Filter List */}
      <div className='w-full sm:w-[195px]'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.backIcon} alt="toggle" />
        </p>

        {/* Filters Panel */}
        {/* Category Filter */}
        <div className={`border border-gray-300 px-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm font-medium mb-3'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="God Statues" onClick={toggleCategory} />
              God Statues
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Buddha Statues" onClick={toggleCategory} />
              Buddha Statues
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Animal Figurines" onClick={toggleCategory} />
              Animal Figurines
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Decorative Showpieces" onClick={toggleCategory}/>
              Decorative Showpieces
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Traditional Items" onClick={toggleCategory}/>
              Traditional Items
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Pooja Essentials" onClick={toggleCategory}/>
              Pooja Essentials
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Brass Lamps & Diyas" onClick={toggleCategory}/>
              Brass Lamps & Diyas
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Home Decor" onClick={toggleCategory}/>
              Home Decor
            </label>
          </div>
        </div>

        {/* Subcategory Filter */}
        <div className={`border border-gray-300 px-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='text-sm font-medium mb-3'>SUB-CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Lakshmi Idol" onClick={toggleSubcategory} />
              Lakshmi Idol
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Ganesh Idol" onClick={toggleSubcategory}/>
              Ganesh Idol
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Buddha Sitting" onClick={toggleSubcategory}/>
              Buddha Sitting
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Buddha Meditating" onClick={toggleSubcategory}/>
              Buddha Meditating
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Cow & Calf" onClick={toggleSubcategory}/>
              Cow & Calf
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Elephant Statue" onClick={toggleSubcategory}/>
              Elephant Statue
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Shankh & Bells" onClick={toggleSubcategory}/>
              Shankh & Bells
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Hanging Diyas" onClick={toggleSubcategory}/>
              Hanging Diyas
            </label>
            <label className='flex gap-2'>
              <input type="checkbox" className='w-3' value="Urli Bowls" onClick={toggleSubcategory}/>
              Urli Bowls
            </label>
          </div>
        </div>
      </div>

      {/* Product Grid (to be added here in the main area) */}
           {/* Right Side */}
      <div className='flex-1'>
        <div className='flex justify-between items-base sm:text-2xl mb-4'>
          <Title text1={'Our '} text2={'Products'} />
          {/* Product sort */}
          <select onClick={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 hover:border-gray-600 cursor-pointer px-2 text-sm'>
            <option value="default">Sort by</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="newest">Newest Arrivals</option>
          </select>
        </div>
        {/* More products can be added here */}
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {
              filterProducts.map((item, index) => (
                <ProductItem key={index} name={item.name} image={item.image[0]} price={item.price} id={item.id} />
              ))
            }
          </div>
      </div>
 
    </div>
  );
};

export default Products;

