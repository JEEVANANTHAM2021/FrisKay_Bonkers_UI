import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Textation from '../components/Textation'

const OurTreats = () => {
  return (
    <section className='w-full overflow-x-hidden bg-[#FFEBC3]'>
      <div className='px-4 md:px-8 lg:px-16 py-4'>
        <Navbar />
      </div>

{/*--------------- Main Content Area -------------------- */}
  <div className='px-4 md:px-8 lg:px-16 py-4'>
              {/* ------- Left Side Content ---------- */}
    <div className='flex flex-col gap-8 lg:flex-row border border-gray-100 rounded-4xl shadow-md bg-white p-6 md:p-6 mx-auto'>
      <div className="text flex-1 flex flex-col justify-start gap-8">
        <h3 className='font-[Dinosaur] text-[#FFEBC3] text-2xl'>BETTER WHEN IT’S BONKERS
          <p className="font-['FatFrank'] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#FFEBC3] mb-4">
          WHIFFY GOOD SNACKY SNACKS
          </p>
        </h3>
      
        <p className="font-['RooneySansRegular'] text-sm text-start sm:text-base lg:text-lg font-normal text-gray-900">
        Pets make life better. And they are absolutely BONKERS. Wag-first, 
        zoomie-powered, snack-obsessed little weirdos - and we love them for it. 
        We make snacks that celebrate the weird and wonderful joy of 
        pets. Whiffy-good, tail-wagging, purr-powered treats made to drive your pet absolutely 
        BONKERS (in the best way)! Carefully crafted, delightfully unhinged, and 
        loved by pets and their people everywhere 🤪
        </p>
      </div>

      {/* ------- Right Side Banner ---------- */}
      <div className="flex-1 flex items-center justify-center">
        <video
          className="w-full max-w-md lg:max-w-full rounded-3xl object-cover"
          src='../../public/videos/allProductsVideo.mp4'
          alt="product_video"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>
    </div>
  </div>

{/*-------------- Textation -------------- */}
    {/* --------- Textation Motion ---------- */}
    <Textation className="font-['Dinosaur'] bg-[#FFD715] shadow-lg py-3">
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

{/*----------- Footer ---------------- */}
      <div>
        <Footer />
      </div>
    </section>
  )
}

export default OurTreats

