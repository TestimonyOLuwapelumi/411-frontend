import React from 'react'
import { BloggContent, Blogj, BottomNav, Footer, Navbar } from '../component'

const BloggContentPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>
    
        <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
        <BloggContent allDatab={allDatab}/>
        <Blogj  allDatab={allDatab}/>
        <Footer/>
        <BottomNav/>

    </>
  )
}

export default BloggContentPage