import React from 'react'
import { BottomNav, Footer, Navbar, Personality, PersonalityContent,} from '../component'

const PersonalityContentPage = ({allDatap}) => {
  return (
    <>
    
        <Navbar/>
        <PersonalityContent allDatap={allDatap}/>
        <Personality allDatap={allDatap}/>
        <Footer/>
        <BottomNav/>
    
    </>
  )
}

export default PersonalityContentPage