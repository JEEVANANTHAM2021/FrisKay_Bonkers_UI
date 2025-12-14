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
    { title: "DOG BITES", bg: assets.bbq_image, product: assets.dogbites_prod },
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
    <section className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-12">

      {/* ---------- BACKGROUND TITLE ---------- */}
      <div
        className="relative w-full max-w-7xl mx-auto
                   min-h-[22vh] sm:min-h-[28vh] md:min-h-[32vh]
                   flex items-center justify-center
                   rounded-3xl bg-cover bg-center
                   transition-all duration-700"
        style={{ backgroundImage: `url(${items[index].bg})` }}
      >
        <h1
          key={index}
          className="text-white text-center font-bold
                     text-3xl sm:text-5xl md:text-6xl lg:text-7xl
                     font-['Times_New_Roman'] transition-opacity duration-500"
        >
          {items[index].title}
        </h1>
      </div>

      {/* ---------- PRODUCT SLIDER ---------- */}
      <div
        className="mt-10 flex items-center justify-center
                   gap-4 sm:gap-6 md:gap-10 lg:gap-14"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >

        {/* LEFT */}
        <img
          src={items[(index - 1 + total) % total].product}
          alt="prev"
          className="hidden md:block 
                     w-28 md:w-36 lg:w-40
                     transition-transform duration-500
                     cursor-pointer hover:animate-[shake_0.25s_ease-in-out]"
        />

        {/* CENTER */}
        <img
          src={items[index].product}
          alt="current"
          className="w-36 sm:w-44 md:w-52 lg:w-60 
                     transition-transform duration-500
                     cursor-pointer hover:animate-[shake_0.25s_ease-in-out]"
        />

        {/* RIGHT */}
        <img
          src={items[(index + 1) % total].product}
          alt="next"
          className="hidden sm:block
                     w-28 sm:w-32 md:w-36 lg:w-40 
                     transition-transform duration-500
                     cursor-pointer hover:animate-[shake_0.25s_ease-in-out]"
        />
      </div>

      {/* ---------- ACTION BUTTONS ---------- */}
      <div className="mt-10 flex flex-col sm:flex-row
                      items-center justify-center gap-4 sm:gap-6">
        <button className="px-6 py-3 bg-[#FFD715] rounded-sm font-bold">
          Learn More
        </button>
        <button className="px-6 py-3 bg-[#FFD715] rounded-sm font-bold">
          Where To Buy
        </button>
      </div>

    </section>
  )
}

export default Products
