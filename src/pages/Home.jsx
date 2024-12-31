import React from 'react'
import Hero from '../componenets/Hero'
import LatestCollection from '../componenets/LatestCollection'
import BestSeller from '../componenets/BestSeller'
import OurPolicy from '../componenets/OurPolicy'
import NewsletterBox from '../componenets/NewsletterBox'

const Home = () => {
  return (
    <div>

      <Hero/>
      <LatestCollection/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      
    </div>
  )
}

export default Home
