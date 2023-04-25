import React from 'react'
import { About, BottomNav, Footer, Navbar } from '../component'
import { all } from 'axios';

const AboutPage = ({allAbout}) => {
    // console.log(allDa);
  return (
    <>
        <Navbar/>
        <About allAbout={allAbout}/>
        <Footer/>
        <BottomNav/>
    
    </>
  )
}

export default AboutPage