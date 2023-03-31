import React from 'react'
// import React, { useState, useEffect } from 'react';
import{menu, close, logo, logoo} from '../assets';

const Loader = () => {
  return (
    <>
    
    <section className="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">
        <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

        <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

        <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

       <img src={logo} className="w-20 h-20" alt="" />

        
      </section>
    
    </>
  )
}

export default Loader