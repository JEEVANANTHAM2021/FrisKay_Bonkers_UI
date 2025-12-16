import React from 'react'
import { assets } from '../assets/assets'

const CatImages = () => {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-8 bg-white">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src={assets.carousel_image1}
          alt=""
          className="w-full h-[full] sm:h-260px md:h-300px lg:h-340px
                     object-cover rounded-3xl shadow-md"
        />

        <img
          src={assets.carousel_image2}
          alt=""
          className="w-full h-[full] sm:h-260px md:h-300px lg:h-340px
                     object-cover rounded-3xl shadow-md"
        />

        <img
          src={assets.carousel_image3}
          alt=""
          className="w-full h-[full] sm:h-260px md:h-300px lg:h-340px
                     object-cover rounded-3xl shadow-md"
        />

      </div>
    </section>
  )
}

export default CatImages
