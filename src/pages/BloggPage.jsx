import React from 'react'
import { Blogj, Footer, Navbar } from '../component'

const BloggPage = ({allDatab}) => {
  return (
    <>
    
    <Navbar/>
    <Blogj allDatab={allDatab}/>
    <Footer/>
    
    </>
  )
}

export default BloggPage