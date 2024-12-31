import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const OurPolicy = () => {
  return (
    
        <div className='flex flex-col sm:flex-row gap-12 sm:gap-2 text-center justify-around py-5'>

         <div className='flex flex-col items-center '>
            <img  className='w-12 m-ato mb-5' src={assets.exchange_icon} alt="" />
            <p className='text-lg font-semibold '>Easy Exchange Policy</p>
            <p className='text-gray-600'>We offer hassle free exchange</p>
         </div>
         <div className='flex flex-col items-center'>
            <img  className='w-12 m-ato mb-5' src={assets.quality_icon} alt="" />
            <p className='text-lg font-semibold '>7 days return</p>
            <p className='text-gray-600'>We provide 7 days free return policy</p>
         </div>
         <div className='flex flex-col items-center'>
            <img className='w-12 m-ato mb-5'  src={assets.support_img} alt="" />
            <p className='text-lg font-semibold '>Customer Support</p>
            <p className='text-gray-600'>We provide 24/7 support</p>
         </div>
        </div>

      
  
  )
}

export default OurPolicy
