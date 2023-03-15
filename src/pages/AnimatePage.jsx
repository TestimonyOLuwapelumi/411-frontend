import React from 'react'
import { Footer, Navbar, Podcast } from '../component'

const AnimatePage = () => {
    // console.log(animates);
  return (
    <>
        <Navbar/>
        {/* <Animate animates={animates?animates:""}/> */}
        <Podcast/>
        <Footer/>
    </>
  )
}

export default AnimatePage