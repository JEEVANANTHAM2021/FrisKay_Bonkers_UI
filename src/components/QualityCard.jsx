import React from 'react'
import Textation from './Textation'
import { assets } from '../assets/assets'

const QualityCard = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-12 py-8">
      <div className="flex md:grid flex-nowrap md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible 
      snap-x snap-mandatory pb-4">
  {/* Card 1 */}
        <div className="min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-center min-h-340px sm:min-h-360px md:min-h-380px 
        rounded-3xl shadow-md flex flex-col items-center justify-between p-10 sm:p-14 md:p-20 bg-[#FFEBC3] text-center">
          <h3 className="px-4 py-2 rounded-sm bg-[#FFD715] text-sm font-bold translate-3 md:translate-y-7 rotate-5">
            WOW!
          </h3>
          <p className="uppercase font-bold text-3xl sm:text-2xl md:text-3xl text-white z-50">
            They Absolutely Love These Treats!
          </p>
          <div className="flex gap-1 text-2xl sm:text-3xl">
            ⭐⭐⭐⭐⭐
          </div>
        </div>

        {/* Card 2 */}
        <div className="min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-center min-h-340px sm:min-h-360px md:min-h-380px
        rounded-3xl shadow-md flex flex-col items-center justify-between p-10 sm:p-14 md:p-20 bg-[#FFEBC3] text-center">
          <h3 className="px-4 py-2 rounded-sm bg-[#FFD715] text-sm font-bold translate-y-2 rotate-5 ">
            CATS FAVE!
          </h3>
          <p className="uppercase font-bold text-3xl sm:text-2xl md:text-3xl text-white z-50">
            Demolished In Seconds, Now a Weekly Purchase
          </p>
          <div className="flex gap-1 text-2xl sm:text-3xl">
            ⭐⭐⭐⭐⭐
          </div>
        </div>

        {/* Card 3 */}
        <div className="min-w-[85%] sm:min-w-[70%] md:min-w-0 snap-center min-h-340px sm:min-h-360px md:min-h-380px
        rounded-3xl shadow-md flex flex-col items-center justify-between p-10 sm:p-14 md:p-20 bg-[#FFEBC3] text-center">
          <h3 className="px-4 py-2 rounded-sm bg-[#FFD715] text-sm font-bold translate-3 md:translate-y-7 rotate-5">
            WENT BONKERS
          </h3>
          <p className="uppercase font-bold text-3xl sm:text-2xl md:text-3xl text-white z-50">
            They Are Now Addicted To Bonkers
          </p>
          <div className="flex gap-1 text-2xl sm:text-3xl">
            ⭐⭐⭐⭐⭐
          </div>
        </div>

      </div>

      {/* ---------- Textation Motion ---------- */}
      <div className="mt-10 overflow-hidden">
        <Textation className="bg-white rounded-2xl shadow-xl flex items-center gap-8 md:gap-14 p-4
                     w-max whitespace-nowrap animate-[ticker-ltr_12s_linear_infinite]">
          {[
            assets.amazon_img,
            assets.chewy_img,
            assets.cvs_img,
            assets.meijer_img,
            assets.petco_img,
            assets.petsmart_img,
            assets.target_img,
            assets.walgreens_img,
            assets.walmart_img,
          ].map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
          ))}

          {/* Duplicate loop */}
          {[
            assets.amazon_img,
            assets.chewy_img,
            assets.cvs_img,
            assets.meijer_img,
            assets.petco_img,
            assets.petsmart_img,
            assets.target_img,
            assets.walgreens_img,
            assets.walmart_img,
          ].map((img, i) => (
            <img
              key={`dup-${i}`}
              src={img}
              alt=""
              className="h-8 sm:h-10 md:h-12 object-contain"
            />
          ))}
        </Textation>
      </div>

    </section>
  )
}

export default QualityCard
