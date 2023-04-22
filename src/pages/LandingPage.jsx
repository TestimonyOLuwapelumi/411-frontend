import React from 'react'
import { Footer, Landing, Navbar } from '../component'

const LandingPage = ({allDatab, allDatap}) => {
  return (
    <>
    <Navbar allDatab={allDatab} allDatap={allDatap}/>
    <Landing/>
    <Footer/>
    
    </>
  )
}

export default LandingPage