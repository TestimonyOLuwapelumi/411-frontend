import React from 'react'
import { BottomNav, Firstblog, Footer, Navbar } from '../component'

const FirstPage = ({firstblogs, allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>
        <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
        <Firstblog firstblogs={firstblogs?firstblogs :""}/>
        <Footer/>
        <BottomNav/>
    </>
  )
}

export default FirstPage