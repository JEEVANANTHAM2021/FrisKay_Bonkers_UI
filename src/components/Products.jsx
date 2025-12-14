import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'

const Products = () => {
  const items = [
    { title: "BARKERY", bg: assets.dogbites_image, product: assets.barkery_prod },
    { title: "CAT BITES", bg: assets.catbites_image, product: assets.catbites_prod },
    { title: "BBQ", bg: assets.bbq_image, product: assets.bbq_prod },
    { title: "MIXX", bg: assets.mixx_image, product: assets.mixx_prod },
    { title: "ZOOMERS", bg: assets.zoomers_image, product: assets.zoomers_prod },
    { title: "PURRPOPS", bg: assets.purrpops_image, product: assets.purrpops_prod },
    { title: "DOG BITES", bg: assets.bbq_image, product: assets.dogbites_prod}
  ]


  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const total = items.length


  useEffect(() => {
    if (paused) return

    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % total)
    }, 2500)

    return () => clearInterval(timer)
  }, [paused, total])


  return (
    <section className="min-h-auto p-8">
      <div className="relative w-full max-w-7xl min-h-[15vh] sm:min-h-[25vh] lg:min-h-[30vh] flex items-center justify-center
          rounded-3xl bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${items[index].bg})`,
        }}>

        {/* heading */}
        <h1 key={index} className="relative text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-['Times_New_Roman']
            text-white text-center transition-opacity duration-500">
          {items[index].title}
        </h1>
      </div>
{/* ---------- Responsive 3 Product Slider ---------- */}
        <div className="mt-12 flex items-center justify-center gap-4 px-4 sm:gap-6 md:gap-10 lg:gap-26"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}>
  {/* LEFT – hidden on mobile */}
        <img src={items[(index - 1 + items.length) % items.length].product} alt="prev" 
        className="hidden md:block w-28 sm:w-32 md:w-36 lg:w-40 scale-100 object-cover overflow-hidden transition-all 
        duration-500 cursor-pointer hover:animate-[shake_0.25s_ease-in-out]"/>

  {/* CENTER */}
        <img src={items[index].product} alt="current" className="w-36 sm:w-44 md:w-52 lg:w-60 scale-100 
        transition-all duration-500 object-cover overflow-hidden cursor-pointer hover:animate-[shake_0.25s_ease-in-out]"/>

  {/* RIGHT – hidden on very small screens */}
        <img src={items[(index + 1) % items.length].product} alt="next" className="hidden sm:block
        w-28 sm:w-32 md:w-36 lg:w-40 scale-100 transition-all 
        duration-500 cursor-pointer object-cover overflow-hidden hover:animate-[shake_0.25s_ease-in-out]"/>
      </div>

  {/*--------- Bottom Center Navigate page */}
  <div className='flex-1 flex items-center justify-center gap-6 mt-10'>
    <button className='px-4 py-3 rounded-sm bg-[#FFD715] font-bold font-["face"]'>Learn More</button>
    <button className='px-4 py-3 rounded-sm bg-[#FFD715] font-bold font-["face"]'>Where To Buy</button>
  </div>
    </section>
  )
}

export default Products
