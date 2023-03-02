import React from 'react'
import { AnimateContent, Footer, Navbar } from '../component'

const Animatecontent = ({animates}) => {
  return (
    <>
    <Navbar/>
    <AnimateContent animates={animates?animates:""}/>
    <Footer/>

    </>
  )
}

export default Animatecontent