import React from 'react'
import { assets } from '../assets/assets'

const CatImages = () => {
  return (
    <section className='min-h-auto'>
      <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 items-center justify-center mt-6 gap-8'>
        <img className='object-cover rounded-3xl' src={assets.carousel_image1} alt="" />
        <img className='object-cover rounded-3xl' src={assets.carousel_image2} alt="" />
        <img className='object-cover rounded-3xl' src={assets.carousel_image3} alt="" />
      </div>
    </section>
  )
}

export default CatImages
