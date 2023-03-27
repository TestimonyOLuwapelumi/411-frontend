import React from 'react'
import { Footer, Humour } from '../component'
import About from '../component/About'
import Navbar from '../component/Navbar'

const AboutPage = () => {
  return (
    <>
      <Navbar/>
      {/* <About/> */}
      <Humour/>
      <Footer/>
    </>
  )
}

export default AboutPage