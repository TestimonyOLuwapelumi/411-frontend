import React from 'react'
import { BottomNav, Footer, Navbar, Personality } from '../component'

const PersonalityPage = ({allDatap}) => {
  return (
    <>
    <Navbar/>
    <Personality allDatap={allDatap}/>
    <Footer/>
    <BottomNav/>
    </>
  )
}

export default PersonalityPage