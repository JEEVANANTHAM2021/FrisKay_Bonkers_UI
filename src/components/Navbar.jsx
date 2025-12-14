import React from 'react'
import { assets } from '../assets/assets'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between px-4 py-3 md:px-2 font-[Inter]">
      
      {/* ------------ Left Side ------------ */}
      <div className="flex items-center gap-2 cursor-pointer">
        <img className="w-16 md:w-full lg:w-full" src={assets.logo} alt="Bronker-logo"/>
        <p className="text-sm md:text-base font-normal">- Home</p>
      </div>

      {/* ------------ Center (Desktop Menu) ------------ */}
      <nav className="hidden md:flex">
        <ul className="flex items-center gap-6 text-sm md:text-2xl font-semibold">
          <li className="cursor-pointer hover:text-amber-500 transition">Our Food</li>
          <li className="cursor-pointer hover:text-amber-500 transition">Where to Buy</li>
          <li className="cursor-pointer hover:text-amber-500 transition">FAQ</li>
          <li className="cursor-pointer hover:text-amber-500 transition">Contact</li>
        </ul>
      </nav>

      {/* ------------ Right Side ------------ */}
      <div className="flex items-center gap-3">
        <img className="w-8 md:w-9 cursor-pointer" src={assets.cart_icon} alt="cart_icon"/>
        <img className="w-8 md:w-9 cursor-pointer" src={assets.user_icon} alt="profile_icon"/>

        {/* Hamburger - Mobile only */}
        <img className="w-8 cursor-pointer md:hidden" src={assets.menu_icon} alt="hamburger"/>
      </div>
    </header>
  )
}

export default Navbar
