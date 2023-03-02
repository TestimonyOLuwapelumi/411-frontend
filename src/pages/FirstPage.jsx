import React from 'react'
import { Firstblog, Footer, Navbar } from '../component'

const FirstPage = ({firstblogs}) => {
  return (
    <>
        <Navbar/>
        <Firstblog firstblogs={firstblogs?firstblogs :""}/>
        <Footer/>
    </>
  )
}

export default FirstPage