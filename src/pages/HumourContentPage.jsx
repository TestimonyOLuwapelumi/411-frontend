import React from 'react'
import { BottomNav, Footer, Humour, HumourContent, Navbar } from '../component'

const HumourContentPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>

        <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
        <HumourContent allData={allData}/>
        <Humour allData={allData}/>
        <Footer/>
        <BottomNav/>

    </>
  )
}

export default HumourContentPage