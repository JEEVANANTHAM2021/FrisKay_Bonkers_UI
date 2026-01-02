import React, { useState, useEffect, useRef, useCallback } from "react"
import Textation from "./Textation"
import { assets } from "../assets/assets"
import PexelsVideo from "./PexelsVideo"
import { useCart } from "../context/Context"

const ViewProduct = ({ product }) => {
  const { addToCart } = useCart();
  const data = [
    { src: assets.barkery_prod,title: "Barkery-Bonkers", desc: "Big Meaty Taste" },
    { src: assets.barkery_prod2,title: "Barkery-Bonkers", desc: "Big Meaty Taste Medium" },
    { src: assets.barkery_prod3,title: "Barkery-Bonkers", desc: "Big Meaty Taste Small" },
    { src: assets.bbq_prod, title: "Steak-Cuts", desc: "Grill inspired Meat Treats" },
    { src: assets.bbq_prod2, title: "Steak-Cuts", desc: "Grill inspired Meat Treats" },
    { src: assets.catbites_prod, title: "Salmon Supreme", desc: "Crunchy, Gooey Snacky Snacks" },
    { src: assets.zoomers_prod, title: "BBQ Beef", desc: "Soft & Chewy Snacky Snacks" },
    { src: assets.zoomers_prod2, title: "BBQ Beef", desc: "Soft & Chewy Snacky Snacks" },
    { src: assets.purrpops_prod, title: "Tip Top Tuna", desc: "100% Freeze-Dried Meat Treats" },
    { src: assets.mixx_prod, title: "Tasty Tuna", desc: "Creamy Meat Treats" },
    { src: assets.dogbites_prod, title: "Bacon Bitties", desc: "Crunchy, Gooey Snacky Snacks" },
  ]

  const total = data.length
  const [index, setIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startX = useRef(0)
  const deltaX = useRef(0)
  const autoRef = useRef(null)
  const visibleCount = () => {
    if (window.innerWidth < 640) return 1
    if (window.innerWidth > 640) return 3
  } 

//Start & Stop Auto function with Callback
    const stopAuto = useCallback(() => {
      if (autoRef.current) {
        clearInterval(autoRef.current)
        autoRef.current = null
      }
    }, [])

    const startAuto = useCallback(() => {
      stopAuto()
      autoRef.current = setInterval(() => {
        setIndex((prev) => (prev + 1) % total)
      }, 3500)
    }, [stopAuto, total])

    useEffect(() => {
      startAuto()
      return stopAuto
    }, [startAuto, stopAuto])


  // ---------- SWIPE LOGIC ----------
  const handleStart = (x) => {
    stopAuto()
    setIsDragging(true)
    startX.current = x
  }

  const handleMove = (x) => {
    if (!isDragging) return
    deltaX.current = x - startX.current
  }

  const handleEnd = () => {
    if (!isDragging) return
    setIsDragging(false)

    if (deltaX.current > 80) {
      // swipe right
      setIndex((prev) => (prev === 0 ? total - 1 : prev - 1))
    } else if (deltaX.current < -80) {
      // swipe left
      setIndex((prev) => (prev + 1) % total)
    }

    deltaX.current = 0
    startAuto()
  }

  return (
    <section className="w-full">
    {/*---------- Header text-------------- */}
        <div className="flex items-center justify-center text-2xl md:text-5xl text-[#FFEBC3] font-['Dinosaur'] mb-10">
            <h3 className="uppercase">More Ways to Get Bonkers</h3>
        </div>

      {/* ---------- SLIDER ---------- */}
      <div
        className="w-full overflow-hidden cursor-default"
        onMouseDown={(e) => handleStart(e.clientX)}
        onMouseMove={(e) => handleMove(e.clientX)}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={(e) => handleStart(e.touches[0].clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
        onTouchEnd={handleEnd}
      >
        <div className="flex transition-transform duration-500 ease-in-out"
          style={{transform: `translateX(-${(index * 100) / visibleCount() }%)`}}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="w-full sm:w-1/2 lg:w-1/3 shrink-0 flex flex-col items-center text-center px-4">
              {/* IMAGE */}
              <img
                src={item.src}
                alt={item.title}
                className="w-1/3 h-full flex items-center object-cover rounded-lg cursor-pointer 
                hover:animate-[tilt-shake_0.3s_linear_infinite]"
                draggable={false}
              />

              {/* TITLE */}
              <h3 className="mt-6 text-lg sm:text-xl md:text-2xl font-['Dinosaur']">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="mt-2 text-gray-600 text-sm md:text-base font-['rooneySansRegular']">
                {item.desc}
              </p>

              {/* BUTTON */}
              <button onClick={addToCart} className="mt-5 px-6 py-2 font-['Dinosaur'] bg-black text-white rounded-full hover:bg-gray-800 transition">
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* -------------- Pexel Videos --------------- */}
      <div className="mt-2">
        <PexelsVideo />
      </div>

      {/* ---------- TEXTATION ---------- */}
      <Textation className="bg-[#FFD715] font-['Dinosaur'] font-normal py-2 md:py-4">
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
      </Textation>
    </section>
  )
}

export default ViewProduct
