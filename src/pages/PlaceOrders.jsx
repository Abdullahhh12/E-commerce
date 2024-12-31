import React, { useState } from 'react'
import Title from '../componenets/Title'
import CartTotal from '../componenets/CartTotal'
import { assets } from '../assets/frontend_assets/assets'
import {useNavigate } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'
import { toast } from 'react-toastify'

const PlaceOrders = () => {

  const [method, setMethod] = useState('cod')
  const navigate = useNavigate(ShopContext);
  return (
    <div>
    <form action="">
    <div className=' flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t'>

       {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'}/>
        </div>

        <div className=' flex gap-3'>
          <input required  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='First Name'/>
          <input required  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Last Name'/>
        </div>
          <input  required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="email" placeholder='Email'/>
          <input  required className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Street'/>

          <div className=' flex gap-3'>
          <input required  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='City'/>
          <input required  className='border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='State'/>
        </div>
        <div className=' flex gap-3'> 
          <input required  className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Zipcode'/>
          <input required  className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="text" placeholder='Country'/>
        </div>
          <input required  className=' border border-gray-300 rounded py-1.5 px-3.5 w-full' type="number" placeholder='Phone'/>
     </div>

     {/* Right Side */}

     <div className='mt-8'>
      <div className='mt-8 min-w-80'>
        <CartTotal/>
      </div>
       <div className='mt-12'>
        <Title text1={'PAYMENT'} text2={'METHOD'}/>
         <div className='flex gap-3 flex-col lg:flex-row'>
          <div onClick={()=>setMethod('stripe')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==='stripe'?'bg-green-400':''}`}></p>
            <img src={assets.stripe_logo} className='h-5 mx-4' alt="" />
          </div>
          <div onClick={()=>setMethod('razorpay')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full  ${method ==='razorpay'?'bg-green-400':''} `}></p>
            <img src={assets.razorpay_logo} className='h-5 mx-4' alt="" />
          </div>
          <div onClick={()=>setMethod('cod')} className='flex items-center gap-3 border p-2 px-3 cursor-pointer'>
            <p className={`min-w-3.5 h-3.5 border rounded-full ${method ==='cod'?'bg-green-400':''} `}></p>
            <p className='text-gray-400'>CASH ON DELIVERY</p>
          </div>

         </div>

         <button onClick={()=>toast.success('Yayy Order Placed')} className='bg-black text-white px-5 mt-4 py-2'>PLACE ORDER</button>
       </div>
     </div>
    </div>
    </form>
    </div>
  )
}

export default PlaceOrders
