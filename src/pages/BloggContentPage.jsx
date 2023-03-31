import React from 'react'
import { BloggContent, Blogj, Footer, Navbar } from '../component'

const BloggContentPage = ({allDatab}) => {
  return (
    <>
    
        <Navbar/>
        <BloggContent allDatab={allDatab}/>
        <Blogj  allDatab={allDatab}/>
        <Footer/>

    </>
  )
}

export default BloggContentPage