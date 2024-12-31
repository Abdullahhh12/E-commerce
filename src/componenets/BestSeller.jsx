import React, { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useEffect } from 'react'
import Title from './Title'
import ProductItem from './ProductItem'

const BestSeller = () => {

const {products} = useContext(ShopContext)

const [BestSeller, setBestSeller] = useState([])

useEffect(()=>{

    const bestProduct = products.filter((item)=>(item.bestseller))
    setBestSeller(bestProduct.slice(0,10));

},[])

  return (
    <div className='my-8'>
        <div className='text-center text-3xl py-8'>
            <Title text1={'BEST'} text2={'SELLERS'}/>
            <p className='prata-regular w-3/4 m-auto mb-4 text-xs sm:text-sm md:text-base text-gray-900'>
             Grab them now
            </p>

            {/* Rendering Best Seller Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6'>
            {
                BestSeller.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>

                ))
            }
        </div>
        </div>
      
    </div>
  )
}

export default BestSeller
