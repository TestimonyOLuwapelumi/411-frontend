import React from 'react'
import { BottomNav, Footer, Humour, HumourContent, Navbar } from '../component'

const HumourContentPage = ({allData}) => {
  return (
    <>

        <Navbar/>
        <HumourContent allData={allData}/>
        <Humour allData={allData}/>
        <Footer/>
        <BottomNav/>

    </>
  )
}

export default HumourContentPage