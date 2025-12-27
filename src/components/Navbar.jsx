import React, { useState, useEffect, useRef } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import UserProfile from './UserProfile'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const sideRef = useRef(null);
    
    useEffect(() => {
      const handler = (e) => {
        if (sideRef.current && !sideRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
    
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, []); 
    
  return (
    <header className="relative w-full h-12 md:h-14 flex items-center justify-between px-4 py-3 md:px-2">
      
      {/* ------------ Left Side ------------ */}
      <div className="flex items-center gap-2 cursor-pointer">
          <img className="w-16 md:w-full" src={assets.logo} alt="Bronker-logo"/>
          <Link to={'/'}><div className='border'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </div>
          </Link>
      </div>
    

      {/* ------------ Center (Desktop Menu) ------------ */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-6 text-sm md:text-2xl font-['Dinosaur']">
          <Link to="/treats" className="cursor-pointer hover:text-amber-500 transition">Our Treats</Link>
          <Link to='/buy' className="cursor-pointer hover:text-amber-500 transition">Where to Buy</Link>
          <Link to='/faq' className="cursor-pointer hover:text-amber-500 transition">FAQ</Link>
          <Link to='/contact' className="cursor-pointer hover:text-amber-500 transition">Contact</Link>
        </ul>
      </nav>

      {/* ------------ Right Side ------------ */}
      <div className="flex items-center gap-3" ref={sideRef}>
        <img className="w-8 md:w-9 cursor-pointer" src={assets.cart_icon} alt="cart_icon"/>

        {/*Profile - Menu*/}
        <UserProfile />

        {/* Hamburger - Mobile only */}
        <img
          className="w-8 cursor-pointer md:hidden"
          src={assets.menu_icon}
          alt="hamburger"
          onClick={() => setOpen(!open)}
        />

        {/* ------------ Mobile Menu ------------ */}
        <div
          ref={sideRef}
          className={`
            absolute w-full top-full right-0 rounded-2xl shadow-2xl z-10 bg-[#FFEBC3]
            md:hidden
            transition-all duration-300 ease-in-out
            ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"}
          `}
        >
          <ul className="flex-col flex items-center justify-end gap-6 py-6 text-lg font-semibold">
            <Link to="/treats" onClick={() => setOpen(false)} className="hover:text-amber-500">Our Treats</Link>
            <Link to="/buy" onClick={() => setOpen(false)} className="hover:text-amber-500">Where to Buy</Link>
            <Link to="/faq" onClick={() => setOpen(false)} className="hover:text-amber-500">FAQ</Link>
            <Link to="/contact" onClick={() => setOpen(false)} className="hover:text-amber-500">Contact</Link>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Navbar
