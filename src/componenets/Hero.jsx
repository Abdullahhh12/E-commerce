import React from 'react'
import {assets} from '../assets/frontend_assets/assets'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div>

        <div className='flex flex-col sm:flex-row border-2 border-gray-400'>
           
           <div className='sm:w-[50%] '>
            <img src={assets.hero_img} alt="" />

           </div>

           <div className='sm:w-[50%] flex flex-col gap-5 items-center justify-center'>


            <h1 className=' prata-regular md:text-5xl pt-5 text-3xl text-gray-800'>Forever </h1>
            <span className='prata-regular sm:text-xl  text-sm text-gray-700'>Latest Collection</span>
           
            <Link to='/collection'>
            <button  className='prata-regular border-2 p-2 mb-5 hover:bg-black hover:text-white rounded text-gray-700 border-black'>SHOP NOW</button>
            </Link>


           </div>
          

        </div>
      
    </div>
  )
}

export default Hero
