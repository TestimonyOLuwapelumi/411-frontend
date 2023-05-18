import React from 'react'
import { BottomNav, Footer, Humour, Navbar } from '../component'

const HumourPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>
    <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
    <Humour allData={allData}/>
    <Footer/>
    <BottomNav/>

    </>
  )
}

export default HumourPage