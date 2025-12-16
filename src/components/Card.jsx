import React from 'react'

const Card = ({children, className = ''}) => {

  return (
    <div className='w-auto mx-auto'>
      <div className={`rounded-3xl backdrop-blur-md bg-[#ffffff] border border-gray-200 shadow-md ${className}`}>
      {children}
      </div>
    </div>
  )
}

export default Card
