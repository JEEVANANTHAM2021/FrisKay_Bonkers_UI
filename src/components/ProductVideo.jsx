import { tikVideos } from '../assets/assets'
import { useState, useEffect, useRef } from 'react'

const data = [
  {
    video: tikVideos.video_1,
    title: "Crunchy Treats",
    desc: "Irresistible crunch loved by pets."
  },
  {
    video: tikVideos.video_2,
    title: "Healthy Bites",
    desc: "Made with natural ingredients."
  },
  {
    video: tikVideos.video_3,
    title: "Viral Choice",
    desc: "Trending across TikTok."
  },
  {
    video: tikVideos.video_4,
    title: "Daily Delight",
    desc: "Perfect for everyday rewards."
  }
]

const ProductVideo = () => {
  const refs = useRef([])
  const [active, setActive] = useState(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(Number(entry.target.dataset.index))
          }
        })
      },
      { threshold: 0.8 }
    )

    refs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section className="bg-black text-white px-4 sm:px-6 lg:px-16 py-20 sm:py-32 space-y-20 sm:space-y-32 lg:space-y-40">
    {/*-------Header Text Content----- */}
      <div className="sticky flex flex-col items-center text-center pointer-events-none">  
          <button className="font-['Dinosaur'] px-4 py-2 bg-[#FFD715] text-black text-base sm:text-xl md:text-3xl font-semibold rounded translate-y-3 md:translate-y-5 rotate-6">
            THE VIRAL
          </button>
          <h1 className="font-['FatFrank'] leading-none text-4xl sm:text-6xl md:text-8xl lg:text-9xl z-30">
            TIKTOK <br /> TREAT
          </h1>
        </div>

    {/*----------Video & Text Area------------ */}
      {data.map((item, i) => {
        const isLeft = i % 2 === 0
        const isActive = active === i

        return (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            data-index={i}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 sm:gap-14 lg:gap-20">
        {/* VIDEO */}
            <div className={`flex ${isLeft ? "md:order-1" : "md:order-2"} justify-center md:justify-${isLeft ? "start" : "end"}`}>
              <video
                src={item.video}
                autoPlay
                loop
                muted
                playsInline
                className="w-48 sm:w-56 md:w-64 lg:w-72 xl:w-80 rounded-xl shadow-lg"/>
            </div>

        {/* TEXT */}
            <div
              className={`
                transition-opacity duration-700
                ${isActive ? "opacity-100" : "opacity-40"}
                text-center
                md:text-${isLeft ? "left" : "right"}
                ${isLeft ? "md:order-2" : "md:order-1"}
               `}
            >
              <h3 className="text-2xl sm:text-3xl lg:text-7xl font-['Dinosaur'] mb-3 sm:mb-4">
                {item.title}
              </h3>
              <p className="text-gray-200 font-['rooneySansRegular'] text-2xl text-center max-w-md mx-auto md:mx-0">
                {item.desc}
              </p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ProductVideo
