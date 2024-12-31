import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

    const {products} = useContext(ShopContext);

    const [latestProdcuts, setLatestProdcuts] = useState([])

    useEffect(() => {
      const latestProduct = products.filter((item)=>(!item.bestseller))
      setLatestProdcuts(latestProduct.slice(0,8));
    }, [])
    

 
    
  return (
    <div className='my-8'>
        <div className='text-center py-8 text-3xl'>
            <Title text1={'Featured'} text2={'Products'}/>
            <p className='prata-regular  w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-900'>
             Latest Collection
            </p>
        </div>

        {/* Rendeering Products */}
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4 gap-y-6'>
            {
                latestProdcuts.map((item,index)=>(
                    <ProductItem key={index} id={item._id} image={item.image} price={item.price} name={item.name}/>

                ))
            }
        </div>
      
    </div>
  )
}

export default LatestCollection
