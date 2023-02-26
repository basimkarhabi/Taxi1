
import React from 'react'
import {Routes,Route,Navigate}from 'react-router-dom'
import Home from "../pages/Home";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import BookingForm from "../components/UI/BookingForm"

const Routers = () => {
  return <Routes>
          {/*
          <Route path="/" element={<Navigate to="/home" />}
          */}
      {/*<Route path="/home" element={<Home />} />*/}
      <Route path="/" element={<Home/>} reloadDocument/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/BookingForm" element={<BookingForm />} />
      <Route path="*" element={<div>Error 404 page noe found </div>} />  
  </Routes>
  
}

export default Routers