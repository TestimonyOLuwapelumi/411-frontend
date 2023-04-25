import React from 'react'
import { BottomNav, Firstblog, Footer, Navbar } from '../component'

const FirstPage = ({firstblogs}) => {
  return (
    <>
        <Navbar/>
        <Firstblog firstblogs={firstblogs?firstblogs :""}/>
        <Footer/>
        <BottomNav/>
    </>
  )
}

export default FirstPage