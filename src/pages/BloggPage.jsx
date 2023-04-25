import React from 'react'
import { Blogj, BottomNav, Footer, Navbar } from '../component'

const BloggPage = ({allDatab}) => {
  return (
    <>
    
    <Navbar/>
    <Blogj allDatab={allDatab}/>
    <Footer/>
    <BottomNav/>
    
    </>
  )
}

export default BloggPage