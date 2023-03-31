import React from 'react'
import { Footer, Imagination, ImaginationContent, Navbar } from '../component'

const ImaginationPage = ({allDatai}) => {
  return (
    <>

      <Navbar/>
      {/* <ImaginationContent allDatai={allDatai}/> */}
      <Imagination allDatai={allDatai}/>
      <Footer/>

    </>
  )
}

export default ImaginationPage