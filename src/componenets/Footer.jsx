import React from 'react'
import { assets } from '../assets/frontend_assets/assets'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 my-10 text-sm'>
            <div>
                <img src={assets.logo} className='mb-5 w-32' alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod quis ullam repudiandae quas alias quidem nisi quasi quae fuga officia? A fuga saepe at velit harum maiores dicta suscipit architecto?</p>
            </div>

            <div>
              <h1 className='text-xl font-semibold mb-5'>COMPANY</h1>
              <ul className='text-gray-600 flex flex-col gap-1'>
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
                <li>Privacy</li>
              </ul>
            </div>

            <div>
              <h1 className='text-sm text-black font-semibold mb-5 sm:text-lg'>GET IN TOUCH</h1>
              
              <ul className='text-gray-600 flex flex-col gap-1'>
              <li>+91980000</li>
              <li>hello@forever.in</li>
              </ul>
            </div>

        </div>

        <div className='text-center border-t-2 border-gray-500 text-black'>
        <p className='text-sm sm:textlg'>Copyright &copy; {currentYear} Forever. All rights reserved.</p>

        </div>
      
    </div>
  )
}

export default Footer
