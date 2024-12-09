import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ContactForm from '../pages/ContactForm';
import AboutUs from '../pages/AboutUs';
import Gallery from '../pages/Gallery'



const Collection = () => {
  return (
    <div className='bg-gradient-to-t bg-gray-50  w-full h-full pt-8 flex flex-col items-center'>
    <Routes>
    <Route path='/contact' element={<ContactForm />} />
    <Route path="/about-us" element={<AboutUs/>} />
    <Route path="/" element={<Gallery/>} />
  </Routes>
    </div>

  )
}

export default Collection
// bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]