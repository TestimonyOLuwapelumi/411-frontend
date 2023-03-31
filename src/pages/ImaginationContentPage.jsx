import React from 'react'
import { Footer, Imagination, ImaginationContent, Navbar } from '../component'

const ImaginationContentPage = ({allDatai}) => {
  return (
    <>
    
        <Navbar/>
        <ImaginationContent allDatai={allDatai}/>
        <Imagination allDatai={allDatai}/>
        <Footer/>
    
    </>
  )
}

export default ImaginationContentPage