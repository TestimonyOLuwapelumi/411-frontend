import React from 'react'
import { Footer, Humour, Navbar } from '../component'

const HumourPage = ({allData}) => {
  return (
    <>
    <Navbar/>
    <Humour allData={allData}/>
    <Footer/>

    </>
  )
}

export default HumourPage