import React from 'react'
import { BottomNav, Footer, Imagination, ImaginationContent, Navbar } from '../component'

const ImaginationPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>

      <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
      {/* <ImaginationContent allDatai={allDatai}/> */}
      <Imagination allDatai={allDatai}/>
      <Footer/>
      <BottomNav/>

    </>
  )
}

export default ImaginationPage