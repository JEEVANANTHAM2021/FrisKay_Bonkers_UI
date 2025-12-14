import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BestProduct from '../components/BestProduct'
import CatImages from '../components/CatImages'
import Products from '../components/Products'
import ProductVideo from '../components/ProductVideo'
import QualityCard from '../components/QualityCard'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <main className="w-full min-h-screen overflow-x-hidden">

      {/* --------- TOP SECTION --------- */}
      <section className="bg-[#FFEBC3] px-4 md:px-8 lg:px-16 py-4">
        <Navbar />
        <Hero />
        <BestProduct />
      </section>

      {/* --------- MAIN CONTENT --------- */}
      <section className="bg-white">
        <CatImages />
      <div className='relative isolate'>
        <Products />
      </div>
      <div className='relative isolate'>
        <ProductVideo />
        <QualityCard />
      </div>
      </section>

      {/* --------- FOOTER --------- */}
      <Footer />

    </main>
  )
}

export default Home
