import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Textation from '../components/Textation'
import CatImages from '../components/CatImages'
import ViewProduct from '../components/ViewProduct'
import Products from '../components/Products'
import { assets } from '../assets/assets'
import FooterReveal from '../components/FooterReveal'

const GetBonkers = () => {
  return (
    <section className='w-full'>
{/*----------- Navbar ----------------- */}
      <div className="bg-[#FFEBC3] px-4 md:px-8 lg:px-16 py-4">
        <Navbar />
      </div>

{/*----------- Main Content -------------- */}
      <div className="px-4 md:px-8 lg:px-16 py-6 bg-[#FFEBC3]">
        <div className="flex flex-col lg:flex-row gap-8 border border-gray-200 rounded-4xl shadow-md bg-white p-6 md:p-8">
        {/*---------- Left Text ----------- */}
          <div className="flex-1 flex flex-col gap-6">
            <h3 className="font-[Dinosaur] text-[#FFEBC3] text-5xl sm:text-7xl">
              Get Bonker'S
            </h3>
            
            <p className="font-['RooneySansRegular'] text-justify text-sm sm:text-base lg:text-lg text-gray-900 leading-relaxed">
              Pets make life better. And they are absolutely BONKERS. Wag-first,
              zoomie-powered, snack-obsessed little weirdos - and we love them
              for it. We make snacks that celebrate the weird and wonderful joy
              of pets. Whiffy-good, tail-wagging, purr-powered treats made to
              drive your pet absolutely BONKERS (in the best way)! Carefully
              crafted, delightfully unhinged, and loved by pets and their people
              everywhere 🤪
            </p>

          <Link to={'/Products-view'} onClick={() => window.scrollTo(0,0)}>
            <button className='px-3 py-4 bg-black text-white rounded-md font-["Dinosaur"] shadow-md'>Get Products</button>
          </Link>
          </div>
        {/* ------- Right Side Image ------- */}
            <div className="flex items-center relative translate-x-4 w-100 h-100 md:w-87.5 md:h-87.5">
              {/* Decorative circles */}
              <div className="absolute w-80 h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-12 border-[#FFEBC3] z-2"></div>
      
              {/* Cat image */}
              <img className="relative items-center translate-x-3 w-80 md:w-80 lg:w-100 z-10" src={assets.cat} alt="cat_image"/>
            </div>
        </div>
      </div>

{/*----------- Textation -------------- */}
        <Textation children className="font-['Dinosaur'] bg-[#FFD715] shadow-lg py-3 whitespace-nowrap">
        <span className="mx-8">YUMMO</span>
        <span className="mx-8">MULTI-AWARD WINNING</span>
        <span className="mx-8">OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8">NO ARTIFICIAL NASTIES</span>
        <span className="mx-8">FORMULATED BY ANIMALS NUTRITIONISTS</span>
        <span className="mx-8">VIRAL TIK-TOK TREAT</span>
        {/* Duplicates for loop */}
        <span className="mx-8">YUMMO</span>
        <span className="mx-8">MULTI-AWARD WINNING</span>
        <span className="mx-8">OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8">NO ARTIFICIAL NASTIES</span>
        <span className="mx-8">FORMULATED BY ANIMALS NUTRITIONISTS</span>
        <span className="mx-8">VIRAL TIK-TOK TREAT</span>
      </Textation>

{/*---------- All Components ----------- */}

      <div>
        <CatImages />
        <Products />
        <ViewProduct />
      </div>
{/*--------- Footer ---------------- */}
      <div>
        <FooterReveal />
      </div>
    </section>
  )
}

export default GetBonkers
