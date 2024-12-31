import React, { useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
import { assets } from '../assets/frontend_assets/assets';
import { useLocation } from 'react-router-dom';


const SearchBar = () => {

const {search,setSearch,showSearch,setShowSearch} = useContext(ShopContext);
const [visible, setvisible] = useState(false)
const location = useLocation();

useEffect(() => {
  if(location.pathname.includes('collection')){
    setvisible(true)
  }
  else{
    setvisible(false)
  }
  
}, [location])




  return showSearch && visible ? (
    <div className=' border-t border-b bg-gra text-center'>
        <div className='inline-flex items-center justify-center border border-gray-400 px-5 py-2 my-5 rounded-full w-3/4 sm:w-1/2 '>

               <input value={search} onChange={(e)=>setSearch(e.target.value)} className='flex-1 outline-none bg-inherit text-sm' type="text"  placeholder='search'/>
               <img src={assets.search_icon} className='w-4' alt="" />
        </div>

        <img src={assets.cross_icon} onClick={()=>setShowSearch(false)} className='inline w-3 m-3 cursor-pointer' alt="" />

      
    </div>
  ) : null
}

export default SearchBar
