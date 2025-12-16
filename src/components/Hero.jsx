import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <main className="min-h-screen max-w-7xl mx-auto mt-12 px-8 md:px-2 flex flex-col lg:flex-row items-center justify-between gap-12 relative font-[Inter]">
      
      {/* ------- Left Side Content ------- */}
      <div className="flex-1 items-center justify-start text-center lg:text-left">
        <h1 className="font-['Dinosaur'] text-3xl sm:text-4xl lg:text-5xl">
          Your cat will go
        </h1>
        <div className="flex justify-center lg:justify-start my-4">
          <img className="w-56 sm:w-64 lg:w-72" src={assets.bonkers} alt="bonkers_image"/>
        </div>
        <p className="font-['rooneySansRegular'] text-base sm:text-lg lg:text-xl text-gray-700">
          ..for the World's best tasting cat food, sourced with
          only the finest ingredients. Made with love from the
          heart of Mississippi.
        </p>
        <button className="mt-6 px-6 py-4 text-lg sm:text-xl font-['Dinosaur'] rounded shadow-lg bg-amber-500 hover:bg-amber-300 transition cursor-pointer">
          Get Bonkers
        </button>
      </div>

      {/* ------- Right Side Image ------- */}
      <div className="flex-1 items-center justify-between relative">
        {/* Decorative circles */}
        <div className="absolute w-90 h-90 md:w-80 md:h-80 lg:w-100 lg:h-100 rounded-full border-12 border-white z-1"></div>
        <div className="absolute w-80 h-80 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full border-12 border-[#FFEBC3] z-2"></div>

        {/* Cat image */}
        <img className="relative w-80 md:w-80 lg:w-100 z-10" src={assets.cat} alt="cat_image"/>
      </div>
    </main>
  )
}

export default Hero
