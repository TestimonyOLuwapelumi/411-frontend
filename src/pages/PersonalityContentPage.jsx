import React from 'react'
import { BottomNav, Footer, Navbar, Personality, PersonalityContent,} from '../component'

const PersonalityContentPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>
    
        <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
        <PersonalityContent allDatap={allDatap}/>
        {/* <Personality allDatap={allDatap}/> */}
        <Footer/>
        <BottomNav/>
    
    </>
  )
}

export default PersonalityContentPage