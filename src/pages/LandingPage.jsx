import React from 'react'
import { BottomNav, Footer, Landing, Navbar } from '../component'

const LandingPage = ({allDatab, allDatap}) => {
  return (
    <>
    <Navbar allDatab={allDatab} allDatap={allDatap}/>
    <Landing/>
    <Footer/>
    <BottomNav/>
    
    
    </>
  )
}

export default LandingPage