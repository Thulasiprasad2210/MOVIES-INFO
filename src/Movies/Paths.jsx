import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home'
import ComingSoon from './Coming Soon'
import AboutUs from './About Us'
import Contact from './Contact'

const Paths = () => {
  return (
    <>
      <div>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/COMING SOON' element={<ComingSoon/>}/>
        <Route path='/ABOUT US' element={<AboutUs/>}/>
        <Route path='/CONTACT' element={<Contact/>}/>
       </Routes>
      </div>
    </>
  )
}

export default Paths
