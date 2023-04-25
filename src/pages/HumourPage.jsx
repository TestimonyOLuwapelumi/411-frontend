import React from 'react'
import { BottomNav, Footer, Humour, Navbar } from '../component'

const HumourPage = ({allData}) => {
  return (
    <>
    <Navbar/>
    <Humour allData={allData}/>
    <Footer/>
    <BottomNav/>

    </>
  )
}

export default HumourPage