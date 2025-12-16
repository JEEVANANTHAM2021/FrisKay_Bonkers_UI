import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import BestProduct from '../components/BestProduct'
import CatImages from '../components/CatImages'
import Products from '../components/Products'
import ProductVideo from '../components/ProductVideo'
import QualityCard from '../components/QualityCard'
import Footer from '../components/Footer'
import ViewProduct from '../components/ViewProduct'

const Home = () => {
  return (
    <main className="w-full min-h-screen relative overflow-x-hidden object-cover">
      {/* --------- TOP SECTION --------- */}
      <section className="bg-[#FFEBC3] px-4 md:px-8 lg:px-16 py-4">
        <Navbar />
        <Hero />
        <BestProduct />
      </section>

      {/* --------- MAIN CONTENT --------- */}
      <section className="bg-white">
        <CatImages />
        <Products />
        <ProductVideo />
        <QualityCard />
        <ViewProduct />
      </section>

      {/* --------- FOOTER --------- */}
      <Footer />
    </main>
  )
}

export default Home
