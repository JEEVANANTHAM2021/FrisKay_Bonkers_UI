import React from 'react'
import Home from './pages/Home'
import WhereToBuy from './pages/WhereToBuy'
import Contact from './pages/Contact'
import {Routes, Route} from 'react-router-dom'
import FaqData from './pages/FaqData'

const App = () => {
  return (
    <div className='w-full'>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path='/buy' element={<WhereToBuy />} />
        <Route path='/FAQ' element={<FaqData />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
