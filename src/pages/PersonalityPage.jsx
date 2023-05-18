import React from 'react'
import { BottomNav, Footer, Navbar, Personality } from '../component'

const PersonalityPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>
    <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
    <Personality allDatap={allDatap}/>
    <Footer/>
    <BottomNav/>
    </>
  )
}

export default PersonalityPage