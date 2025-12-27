import React from 'react'
import AllProducts from '../components/AllProducts'
import Navbar from '../components/Navbar'
import Textation from '../components/Textation'
import FooterReveal from '../components/FooterReveal'

const ProductsView = () => {
  return (
    <section className='w-full'>
{/*-------- Navbar ----------- */}
      <div className="bg-[#FFEBC3] px-4 md:px-8 lg:px-16 py-4">
        <Navbar />
      </div>
        {/*-------- All Products -------------- */}
        <div className='bg-[#FFEBC3]'>
            <AllProducts />
        </div>
{/*-------- Textation -------------- */}
      <Textation className="bg-[#FFD715] font-['Dinosaur'] font-normal py-2 md:py-4">
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
        <span className="mx-8 uppercase">Better When It's Bonkers</span>
      </Textation>
{/*--------- Footer ----------*/}
      <div>
        <FooterReveal />
      </div>
    </section>
  )
}

export default ProductsView
