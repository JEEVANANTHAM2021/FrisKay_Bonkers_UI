import React,{ useEffect, useState, useRef } from 'react'
import { assets } from '../assets/assets'

const locations = [
  "Chennai",
  "Coimbatore",
  "Madurai",
  "Trichy",
  "Salem",
]

const Footer = () => {

    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState("India")
    const ref = useRef(null)

  // close on outside click
  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <footer className='min-h-auto bg-[#FFEBC3]'>
        <div className='flex md:flex items-center justify-between p-8'>
        {/*--------------- Footer-Logo on Left Side--------- */}
            <div className='flex-1 justify-start'>
                <img src={assets.logo} alt="" />
            </div>
            {/* ------------ NavLinks and Locations on Right Side -------------- */}
            <div className='md:flex-1 flex-col md:gap-4 gap-4'>
                <ul className="flex items-center gap-6 text-sm md:text-2xl font-semibold mb-6">
                 <li className="cursor-pointer hover:text-amber-500 transition">Our Food</li>
                 <li className="cursor-pointer hover:text-amber-500 transition">Where to Buy</li>
                 <li className="cursor-pointer hover:text-amber-500 transition">FAQ</li>
                 <li className="cursor-pointer hover:text-amber-500 transition">Contact</li>
                </ul>
    

                  <div ref={ref} className="relative mt-2 flex items-center gap-6 w-full max-w-xs text-sm">
            {/* Location Box */}
                    <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between px-4 py-2
                        border border-gray-900 rounded-md text-black bg-transparent hover:border-gray-400"
                        aria-expanded={open}>
                    <span className="flex items-center gap-2">{selected}</span>
                    <span className={`transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
                    </button>

            {/* Dropdown */}
                    {open && (
                    <div className="absolute bottom-full mb-2 w-full bg-white border border-gray-700 rounded-md overflow-hidden z-20">
                    {locations.map((city) => (
                    <div key={city} onClick={() => {setSelected(city); setOpen(false)}}
                    className="px-4 py-2 cursor-pointer text-black hover:bg-gray-300">{city}</div>
                    ))}
                    </div>
                    )}

            {/*-------- Arrow Button ---------- */}
                    <div className='flex items-center px-2 py-2 rounded-sm shadow-sm bg-[#FFD715]'>
                        <img className='w-5 cursor-pointer' src={assets.right_arrow} alt="right_arrow" />
                    </div>
                </div>
            </div>
        </div>

        {/*---------- bottom section--------- */}
        <hr className='w-full border-2 border-white' />
          <div className='w-full md:h-30  flex-row md:flex items-center justify-between gap-4 space-y-4  p-4'>
            <div className='flex items-center justify-start md:gap-2'>
              <p className='text-lg font-bold'>FrisKay Petcare Limited 2025. All rights reserved.</p>
            </div>

            <div className='flex items-center md:gap-4 gap-4'>
              <a href='' className='lg:text-lg text-sm font-semibold hover:text-amber-500'>Privacy Policy</a>
              <a href='' className='lg:text-lg text-sm font-semibold hover:text-amber-500'>Terms of Service</a>
              <a href='' className='lg:text-lg text-sm font-semibold hover:text-amber-500'>Cookie Policy</a>
            </div>
            
            <div className='flex items-center gap-6 md:gap-4 justify-center'>
              <img className='w-10' src={assets.email_icon} alt="mail_image" />
              <img className='w-10' src={assets.whatsapp_icon} alt="whatsapp_icon" />
              <img className='w-10' src={assets.instagram_icon} alt="instagram_icon" />
            </div>
          </div>
    </footer>
  )
}

export default Footer
