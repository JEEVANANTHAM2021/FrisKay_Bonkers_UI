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
    const interval = setInterval(() => {
      setIndex((prev) => (prev === total - 1 ? 0 : prev + 1))
    }, 2500)
    return () => clearInterval(interval)
  }, [paused, total])

  return (
    <section className="w-full px-4 py-12">
      {/* TITLE */}
      <div className="relative w-full max-w-6xl mx-auto min-h-[20vh] m:min-h-[25vh] flex items-center justify-center rounded-3xl
                   bg-cover bg-center transition-all duration-700"
                   style={{ backgroundImage: `url(${items[index].bg})` }}>
        <h1 className="text-white text-6xl font-['FatFrank']">
          {items[index].title}
        </h1>
      </div>

      {/* SLIDER */}
      <div className="mt-10 flex justify-center"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        >
        <div className="w-full overflow-hidden">
          <div className="flex transition-transform duration-700 ease-in-out" 
          style={{ transform: `translateX(-${index * 100}%)` }}>
            {items.map((item, i) => (
              <div key={i} className="w-full h-full shrink-0 flex items-center justify-center text-4xl 
              font-bold rounded-lg cursor-pointer hover:animate-[tilt-shake_0.3s_linear_infinite]">
                <img src={item.product} alt={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BUTTONS */}
      <div className="mt-10 flex justify-center gap-6">
        <button className="px-6 py-3 bg-[#FFD715] shadow-lg hover:scale-105 hover:bg-[#FFD714] transition-transform font-['Dinosaur']">Learn More</button>
        <button className="px-6 py-3 bg-[#FFD715] shadow-lg hover:scale-105 hover:bg-[#FFD714] transition-transform font-['Dinosaur']">Where To Buy</button>
      </div>

    </section>
  )
}

export default Products
