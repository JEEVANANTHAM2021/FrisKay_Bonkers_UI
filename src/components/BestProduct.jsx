import React from 'react'
import Card from './Card'
import { assets } from '../assets/assets'
import Textation from './Textation'

const BestProduct = () => {

  return (
  <section className="w-full">
      {/* ------- Left Side Content ---------- */}
      <div className='flex flex-col gap-8 lg:flex-row border border-gray-100 rounded-4xl shadow-md bg-white p-6 md:p-6 mx-auto'>
      <div className="text flex-1 flex flex-col justify-center">
        <h3 className="font-['FatFrank'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFEBC3] mb-4">
          WHIFFY GOOD SNACKY SNACKS
        </h3>

        <p className="font-['RooneySansRegular'] text-sm text-start sm:text-base lg:text-lg font-normal text-gray-900">
        Pets make life better. And they are absolutely BONKERS. Wag-first, 
        zoomie-powered, snack-obsessed little weirdos - and we love them for it. 
        We make snacks that celebrate the weird and wonderful joy of 
        pets. Whiffy-good, tail-wagging, purr-powered treats made to drive your pet absolutely 
        BONKERS (in the best way)! Carefully crafted, delightfully unhinged, and 
        loved by pets and their people everywhere 🤪
        </p>

        {/* -------- Product Cards ---------- */}
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Card 1 */}
          <Card className="w-full sm:w-80 cursor-pointer overflow-hidden group">
            <div className="overflow-hidden rounded-3xl">
              <img
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={assets.card_image_1}
                alt="card_image1"
              />
            </div>

            <div className="flex items-center justify-between bg-amber-400 p-6 md:p-4 transition-transform duration-500 group-hover:scale-105">
              <h3 className="font-['Dinosaur']">Our Treats</h3>
              <img className="w-5" src={assets.right_arrow} alt="right_arrow" />
            </div>
          </Card>

          {/* Card 2 */}
          <Card className="w-full sm:w-80 cursor-pointer overflow-hidden group">
            <div className="overflow-hidden rounded-3xl">
              <img
                className="w-full object-cover transition-transform duration-500 group-hover:scale-110"
                src={assets.card_image_2}
                alt="card_image2"
              />
            </div>

            <div className="flex items-center justify-between bg-amber-400 p-6 md:p-4 transition-transform duration-500 group-hover:scale-105">
              <h3 className="font-['Dinosaur']">Where to Buy</h3>
              <img className="w-5" src={assets.right_arrow} alt="right_arrow" />
            </div>
          </Card>
        </div>
      </div>

      {/* ------- Right Side Banner ---------- */}
      <div className="flex-1 flex items-center justify-center">
        <img
          className="w-full max-w-md lg:max-w-full rounded-3xl object-cover"
          src={assets.banner}
          alt="banner_image"
        />
      </div>
    </div>
    {/* --------- Textation Motion ---------- */}
    <Textation className="font-['Dinosaur']">
       <span className="mx-8"> YUMMO</span>
        <span className="mx-8"> MULTI-AWARD WINNING</span>
        <span className="mx-8"> OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8"> NO ARTIFICIAL NASTIES</span>
        <span className="mx-8"> FORMULATED BY ANIMALS NUTRITIONISTS</span>
        <span className="mx-8"> VIRAL TIK-TOK TREAT</span>
    {/* duplicate for seamless loop */}
        <span className="mx-8"> YUMMO</span>
        <span className="mx-8"> MULTI-AWARD WINNING</span>
        <span className="mx-8"> OVER 15000 FIVE STAR REVIEWS</span>
        <span className="mx-8"> NO ARTIFICIAL NASTIES</span>
        <span className="mx-8"> FORMULATED BY ANIMALS NUTRITIONISTS</span>
        <span className="mx-8"> VIRAL TIK-TOK TREAT</span>
    </Textation>
  </section>
  )
}

export default BestProduct
