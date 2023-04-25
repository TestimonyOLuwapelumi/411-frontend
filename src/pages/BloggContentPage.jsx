import React from 'react'
import { BloggContent, Blogj, BottomNav, Footer, Navbar } from '../component'

const BloggContentPage = ({allDatab}) => {
  return (
    <>
    
        <Navbar/>
        <BloggContent allDatab={allDatab}/>
        <Blogj  allDatab={allDatab}/>
        <Footer/>
        <BottomNav/>

    </>
  )
}

export default BloggContentPage