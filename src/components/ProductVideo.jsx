import { tikVideos } from '../assets/assets'

const ProductVideo = () => {
  return (
    <section className="relative bg-[#FFEBC3] text-white p-6 md:p-8">

      {/* SCROLL AREA HEIGHT */}
      <div className="relative min-h-220vh md:min-h-[220vh] lg:min-h-[260vh]">

        {/* STICKY CENTER CONTENT */}
        <div className="sticky flex flex-col items-center text-center z-20 pointer-events-none">
          
          <button className="px-4 py-2 bg-[#FFD715] text-black 
                             text-base sm:text-xl md:text-3xl 
                             font-semibold rounded">
            THE VIRAL
          </button>

          <h1 className="mt-4 font-['FatFrank'] leading-none
                         text-4xl sm:text-6xl md:text-8xl lg:text-9xl">
            TIKTOK <br /> TREAT
          </h1>
        </div>

        {/* SCROLLING VIDEOS */}
        <div className="relative z-10 px-4 sm:px-10 md:px-20">

          {/* VIDEO 1 – LEFT */}
          <div className="flex justify-start">
            <video
              src={tikVideos.video_1}
              autoPlay
              loop
              muted
              playsInline
              className="w-40 sm:w-48 md:w-64 lg:w-72
                         aspect-9/16 object-cover
                         rounded-2xl shadow-xl"
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
              className="w-40 sm:w-48 md:w-64 lg:w-72
                         aspect-9/16 object-cover
                         rounded-2xl shadow-xl"
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
              className="w-40 sm:w-48 md:w-64 lg:w-72
                         aspect-9/16 object-cover
                         rounded-2xl shadow-xl"
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
              className="w-40 sm:w-48 md:w-64 lg:w-72
                         aspect-9/16 object-cover
                         rounded-2xl shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default ProductVideo
