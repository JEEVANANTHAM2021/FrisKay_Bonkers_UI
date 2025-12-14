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
        <div className='flex-row md:flex items-center justify-between p-8'>
        {/*--------------- Footer-Logo on Left Side--------- */}
            <div className='flex-1 justify-start'>
                <img src={assets.logo} alt="" />
            </div>
            {/* ------------ NavLinks and Locations on Right Side -------------- */}
            <div className='flex-1'>
                <ul className="flex items-center gap-6 text-sm md:text-2xl font-semibold">
                 <li className="cursor-pointer hover:text-amber-500 transition">Our Food</li>
                 <li className="cursor-pointer hover:text-amber-500 transition">Where to Buy</li>
                 <li className="cursor-pointer hover:text-amber-500 transition">FAQ</li>
                 <li className="cursor-pointer hover:text-amber-500 transition">Contact</li>
                </ul>
    

                <div ref={ref} className="relative w-full max-w-xs text-sm">
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
                    <div className='flex-1 justify-between'>
                        <img className='w-5' src={assets.right_arrow} alt="right_arrow" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
