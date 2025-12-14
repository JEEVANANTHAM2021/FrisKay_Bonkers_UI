import React from 'react'
import Textation from './Textation'
import { assets } from '../assets/assets'

const QualityCard = () => {
  return (
    <section className='h-auto'>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-center mt-6 gap-4 md:gap-6'>
        <div className='w-full h-80 rounded-3xl shadow-md flex flex-col items-center p-4 md:p-8 bg-[#FFEBC3]'>
            <h3 className='absoulte px-3 py-3 rounded-sm bg-amber-200 z-10'>WOW!</h3>
            <p className='relative uppercase text-center font-bold text-4xl text-white'>They Abosultely Love These Treats!</p>
            <span></span>
        </div>
        
        <div className='md:w-full md:h-80 h-80 w-full rounded-3xl shadow-md flex flex-col p-4 md:p-8 bg-[#FFEBC3]'>
            <h3 className='absoulte px-3 py-3 rounded-sm bg-amber-200 z-10'>CATS FAVE!</h3>
            <p className='uppercase text-center font-bold text-4xl'>Demolished In Seconds, Now a weekly Purchase</p>
            <span></span>
        </div>

        <div className='w-full h-80 rounded-3xl shadow-md flex flex-col p-4 md:p-8 bg-[#FFEBC3]'>
            <h3 className='absoulte px-3 py-3 rounded-sm bg-amber-200 z-10'>WENT BONKERS</h3>
            <p className='uppercase text-center font-bold text-4xl'>They are now addicted to Bonkers</p>
            <span></span>
       </div>
       </div>
       {/* ------------- Textation Motion---------------- */}
       <Textation className='bg-white rounded-b-2xl shadow-2xl flex p-2 gap-6 md:gap-12
                    w-max whitespace-nowrap animate-[ticker-ltr_12s_linear_infinite] items-center'>
            <img className='object-cover' src={assets.amazon_img} alt="" />
            <img className='object-cover' src={assets.chewy_img} alt="" />
            <img className='object-cover' src={assets.cvs_img} alt="" />
            <img className='object-cover' src={assets.meijer_img} alt="" />
            <img className='object-cover' src={assets.petco_img} alt="" />
            <img className='object-cover' src={assets.petsmart_img} alt="" />
            <img className='object-cover' src={assets.target_img} alt="" />
            <img className='object-cover' src={assets.walgreens_img} alt="" />
            <img className='object-cover' src={assets.walmart_img} alt="" />

        {/* ---------------- Duplicate images --------------- */}
            <img className='object-cover' src={assets.amazon_img} alt="" />
            <img className='object-cover' src={assets.chewy_img} alt="" />
            <img className='object-cover' src={assets.cvs_img} alt="" />
            <img className='object-cover' src={assets.meijer_img} alt="" />
            <img className='object-cover' src={assets.petco_img} alt="" />
            <img className='object-cover' src={assets.petsmart_img} alt="" />
            <img className='object-cover' src={assets.target_img} alt="" />
            <img className='object-cover' src={assets.walgreens_img} alt="" />
            <img className='object-cover' src={assets.walmart_img} alt="" />
       </Textation>
    </section>
  )
}

export default QualityCard
