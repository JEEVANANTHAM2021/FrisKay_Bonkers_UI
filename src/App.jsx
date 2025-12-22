import React from 'react'
import Home from './pages/Home'
import WhereToBuy from './pages/WhereToBuy'
import Contact from './pages/Contact'
import {Routes, Route} from 'react-router-dom'
import FaqData from './pages/FaqData'
import OurTreats from './pages/OurTreats'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div className='w-full'>
      <Routes>
        <Route path= "/" element={<Home />} />
        <Route path='/treats' element={<OurTreats />} />
        <Route path='/buy' element={<WhereToBuy />} />
        <Route path='/FAQ' element={<FaqData />} />
        <Route path='/contact' element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App
