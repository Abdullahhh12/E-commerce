import React, { useContext } from 'react'
import Title from '../componenets/Title'
import { products } from '../assets/frontend_assets/assets'
import { ShopContext } from '../context/ShopContext'

const Orders = () => {
    const {currency} = useContext(ShopContext)

  return (
    <div className='border-t pt-16'>

      <div className='text-2xl'>
        <Title text1={'MY'} text2={'ORDERS'}/>
      </div>

      <div>
        {
          products.slice(1,4).map((item,index)=>(
            <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col'>
              <div className='flex items-start gap-6 text-sm'>
                <img src={item.image[0]} className='w-16 sm:w-20' alt="" />
              </div>
              <p className='sm:text-base font-medium'>{item.name}</p>
              <div className='flex items-center gap-3 mt-2 text-base text-gray-500'>
                <p className='text-lg'>{currency}{item.price}</p>
                <p>Quantity:1</p>
                <p>Size:M</p>
              </div>
              <p className='mt-2'>Date: <span>12/02/2025</span></p>
            </div>

          ))

        }
      </div>
      
    </div>
  )
}

export default Orders
