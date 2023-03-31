import React from 'react'
import { Footer, Navbar, Personality, PersonalityContent,} from '../component'

const PersonalityContentPage = ({allDatap}) => {
  return (
    <>
    
        <Navbar/>
        <PersonalityContent allDatap={allDatap}/>
        <Personality allDatap={allDatap}/>
        <Footer/>
    
    </>
  )
}

export default PersonalityContentPage