import React from 'react'
import { Footer, Navbar, Personality } from '../component'

const PersonalityPage = ({allDatap}) => {
  return (
    <>
    <Navbar/>
    <Personality allDatap={allDatap}/>
    <Footer/>
    </>
  )
}

export default PersonalityPage