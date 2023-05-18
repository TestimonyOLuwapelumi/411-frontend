import React from 'react'
import { Blogj, BottomNav, Footer, Navbar } from '../component'

const BloggPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>
    
    <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
    <Blogj allDatab={allDatab}/>
    <Footer/>
    <BottomNav/>
    
    </>
  )
}

export default BloggPage