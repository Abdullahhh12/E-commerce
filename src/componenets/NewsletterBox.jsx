import React, { useState } from 'react'

const NewsletterBox = () => {
const [email, setemail] = useState("")

const handleChange = (e)=>{
    setemail(e.target.value)
}

const handleSubmit = (event)=>{
    event.preventDefault();
    setemail("")
}

  return (
    <div className='my-8 text-center'>

        <p className='text-xl sm:text-2xl p-2 font-semibold'>Subscribe Now get 20% OFF</p>
        <p className='text- pb-2 text-gray-700 '>Get insider offers on your emails</p>

        <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto pl-3 border my-6'>

        <input type="email" value={email} onChange={handleChange} placeholder='Enter Your Email 'required className='w-full sm:flex-1  outline-none' />
        <button type='submit' className='bg-black px-10 py-4 hover:bg-gray-800 text-sm text-white'>Subscribe</button>

        </form>


      
    </div>
  )
}

export default NewsletterBox
