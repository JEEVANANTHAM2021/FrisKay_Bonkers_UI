import React from 'react'

const Textation = ({children, className = ''}) => {
  return (
       <div className="w-full mt-4 overflow-hidden bg-white py-4">
      <div className={`flex w-max whitespace-nowrap animate-[ticker-ltr_30s_linear_infinite] 
        font-['Times New Roman'] font-bold text-black text-lg md:text-xl ${className}`}>
        {children} 
      </div>
    </div>

  )
}

export default Textation
