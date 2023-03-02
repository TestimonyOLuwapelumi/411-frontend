import React from 'react'
import { Animate, Footer, Navbar } from '../component'

const AnimatePage = ({animates}) => {
    // console.log(animates);
  return (
    <>
        <Navbar/>
        <Animate animates={animates?animates:""}/>
        <Footer/>
    </>
  )
}

export default AnimatePage