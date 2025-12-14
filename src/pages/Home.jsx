import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BestProduct from '../components/BestProduct'
import Textation from '../components/Textation'
import CatImages from '../components/CatImages'
import Products from '../components/Products'
import ProductVideo from '../components/ProductVideo'
import QualityCard from '../components/QualityCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='min-h-auto mx-auto'>
      <div className='p-4 bg-[#FFEBC3]'>
      <Navbar />
      <Hero />
      <BestProduct />
      </div>
    <div className='bg-white'>
      <CatImages />
      <Products />
      <ProductVideo />
      <QualityCard />
    </div>
    <Footer />
    </div>
  )
}

export default Home
