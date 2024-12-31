import React, { useState } from 'react'
import Title from '../componenets/Title'

const Login = () => {

  const [current, setCurrent] = useState('Sign up')
  return (
    <div className=' flex flex-col mt-8 items-center gap-6'>

      <div  className='text-2xl text-gray-900'>
        <Title text1={current}/>
      </div>
      
      <form action="" className='flex flex-col gap-4 items-center'>

      <div className='flex flex-col items-center gap-5'>
        
        {
          current == 'Log in' ? "" : <input required className='border-gray-600 border-2 px-2 py-1 w-full' type="text" placeholder='Name' id="" />
        }
        
        <input required className='border-gray-600 border-2 px-2 py-1 w-full' type="email" placeholder='Email' id="" />
        <input required className='border-gray-600 border-2 px-2 py-1 w-full' type="password" placeholder='Password' id="" />
      </div>
      <div className='text-gray-900 hover:text-red-700'>
        {
          current == 'Log in' ? <p onClick={()=>setCurrent('Sign Up')}>New user ? Create Account</p> : <p onClick={()=>setCurrent('Log in')}> Already a user ? Log In </p>
        }
        
      </div>

      <div>
        <button className='bg-black text-white px-4 py-2'>
          {
            current == 'Log in' ? "Log In" : "Sign up"
          }
          </button>
      </div>
          </form>
      
    </div>
  )
}

export default Login
