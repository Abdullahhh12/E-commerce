import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Collection from './pages/Collection'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrders from './pages/PlaceOrders'
import Orders from './pages/Orders'
import Navbar from './componenets/Navbar'
import Footer from './componenets/Footer'
import SearchBar from './componenets/SearchBar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] '>
      <ToastContainer 
        position="bottom-right"
        autoClose={1500} 
        hideProgressBar={false} />
      <Navbar/>
      <SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/place-orders' element={<PlaceOrders/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>
      <Footer/>
     
    </div>
  )
}

export default App
