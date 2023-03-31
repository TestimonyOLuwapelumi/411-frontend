import React from 'react'
import { Footer, Humour, HumourContent, Navbar } from '../component'

const HumourContentPage = ({allData}) => {
  return (
    <>

        <Navbar/>
        <HumourContent allData={allData}/>
        <Humour allData={allData}/>
        <Footer/>

    </>
  )
}

export default HumourContentPage