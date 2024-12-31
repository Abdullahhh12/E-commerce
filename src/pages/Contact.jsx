import React from 'react'
import Title from '../componenets/Title'
import { assets } from '../assets/frontend_assets/assets'
import NewsletterBox from '../componenets/NewsletterBox'
const Contact = () => {
  return (
    <div className='flex flex-col gap-3 items-center'>
      <div className='text-2xl text-gray-500'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='flex flex-col md:flex-row items-center'>
        <div className='w-[50%]'>
        <img src={assets.contact_img} className='' alt="" />
        </div>

        <div className='flex flex-col gap-2 items-center justify-between p-5'>
          <h2 className='text-bold text-gray-800 text-2xl'>Our Store</h2>
          <p>Texas,USA</p>
          <p>tel:+90034000</p>
          <p>Email:info@forever.com</p>
        </div>
      

      
      </div>
        <div className='w-full'>
          <NewsletterBox/>
        </div>
      
    </div>
  )
}

export default Contact
