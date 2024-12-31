import React from 'react'
import Title from '../componenets/Title'
import { assets } from '../assets/frontend_assets/assets'

function About() {
  return (
    <div className='flex flex-col gap-3 items-center'>
      <div className='text-2xl text-gray-500'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='flex flex-col md:flex-row items-center'>
        <img src={assets.about_img} className='w-[70%] md:w-[35%]' alt="" />

         <p className='text-gray-700 m-5 text-center '>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.
Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>

      </div>
      
    </div>
  )
}

export default About
