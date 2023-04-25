import React from 'react'
import { BottomNav, Footer, Imagination, ImaginationContent, Navbar } from '../component'

const ImaginationContentPage = ({allDatai}) => {
  return (
    <>
    
        <Navbar/>
        <ImaginationContent allDatai={allDatai}/>
        <Imagination allDatai={allDatai}/>
        <Footer/>
        <BottomNav/>
    
    </>
  )
}

export default ImaginationContentPage