import React from 'react'
import { About, Footer, Navbar } from '../component'
import { all } from 'axios';

const AboutPage = ({allAbout}) => {
    // console.log(allDa);
  return (
    <>
        <Navbar/>
        <About allAbout={allAbout}/>
        <Footer/>
    
    </>
  )
}

export default AboutPage