//import React, { useEffect, useState } from 'react'
import { tikVideos } from '../assets/assets'

const ProductVideo = () => {

   // const [scrollY, setScrollY] = useState(0)

   // useEffect(() => {
    //     const handleScroll = () => setScrollY(window.scrollY)
    //     window.addEventListener("scroll", handleScroll)
    //     return () => window.removeEventListener("scroll", handleScroll)
    // },[])


  return (
   <section className="relative h-auto bg-[#FFEBC3] text-white">

      {/* TALL SCROLL AREA */}
      <div className="">

        {/* STICKY CENTER CONTENT */}
        <div className="sticky top-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
          
          <button className="px-4 py-2 bg-[#FFD715] text-black text-3xl font-semibold rounded">
            THE VIRAL
          </button>

          <h1 className="text-4xl md:text-9xl font-['FatFrank'] text-center leading-none">
            TIKTOK <br /> TREAT
          </h1>
        </div>

        {/* SCROLLING VIDEOS */}
        <div className="relative z-10  px-6 md:px-20 space-y-32">

          {/* VIDEO 1 – LEFT */}
          <div className="flex justify-start">
            <video
              src={tikVideos.video_1}
              autoPlay
              loop
              muted
              playsInline
              className="w-44 md:w-64 rounded-xl shadow-lg"
            />
          </div>

          {/* VIDEO 2 – RIGHT */}
          <div className="flex justify-end">
            <video
              src={tikVideos.video_2}
              autoPlay
              loop
              muted
              playsInline
              className="w-44 md:w-64 rounded-xl shadow-lg"
            />
          </div>

          {/* VIDEO 3 – LEFT */}
          <div className="flex justify-start">
            <video
              src={tikVideos.video_3}
              autoPlay
              loop
              muted
              playsInline
              className="w-44 md:w-64 rounded-xl shadow-lg"
            />
          </div>

          {/* VIDEO 4 – RIGHT */}
          <div className="flex justify-end">
            <video
              src={tikVideos.video_4}
              autoPlay
              loop
              muted
              playsInline
              className="w-44 md:w-64 rounded-xl shadow-lg"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProductVideo
