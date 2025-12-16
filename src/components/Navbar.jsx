import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative flex items-center justify-between px-4 py-3 md:px-2">
      
      {/* ------------ Left Side ------------ */}
      <div className="flex items-center gap-2 cursor-pointer">
      <Link to={'/'}><img className="w-16 md:w-full" src={assets.logo} alt="Bronker-logo"/></Link>
        <p className="text-sm md:text-base font-normal">- Home</p>
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
      <div className="flex items-center gap-3">
        <img className="w-8 md:w-9 cursor-pointer" src={assets.cart_icon} alt="cart_icon"/>
        <img className="w-8 md:w-9 cursor-pointer" src={assets.user_icon} alt="profile_icon"/>

        {/* Hamburger - Mobile only */}
        <img
          className="w-8 cursor-pointer md:hidden"
          src={assets.menu_icon}
          alt="hamburger"
          onClick={() => setOpen(!open)}
        />
      </div>

      {/* ------------ Mobile Menu ------------ */}
      <div
        className={`
          absolute top-full left-50 xs:left-70 sm:left-100 w-50 rounded-2xl shadow-2xl z-10 bg-[#FFEBC3]
          md:hidden
          transition-all duration-300 ease-in-out
          ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}
        `}
      >
        <ul className="flex-col flex items-center justify-end gap-6 py-6 text-lg font-semibold">
          <Link to={'/treats'} onClick={() => setOpen(false)} className="cursor-pointer hover:text-amber-500">Our Treats</Link>
          <Link to={'/buy'} onClick={() => setOpen(false)} className="cursor-pointer hover:text-amber-500">Where to Buy</Link>
          <Link to={'/faq'} onClick={() => setOpen(false)} className="cursor-pointer hover:text-amber-500">FAQ</Link>
          <Link to={'/contact'} onClick={() => setOpen(false)} className="cursor-pointer hover:text-amber-500">Contact</Link>
        </ul>
      </div>

    </header>
  )
}

export default Navbar
