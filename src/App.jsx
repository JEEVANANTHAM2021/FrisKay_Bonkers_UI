import React from 'react'
import Home from './pages/Home'
import WhereToBuy from './pages/WhereToBuy'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'
import {Routes, Route} from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full'>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path='/buy' element={<WhereToBuy />} />
        <Route path='/FAQ' element={<FAQ />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
