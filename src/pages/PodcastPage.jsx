import React from 'react'
import { BottomNav, Footer, Navbar, Podcast } from '../component'

const PodcastPage = ({allDatapo}) => {
    
  return (
    <>
        <Navbar/>
        <Podcast allDatapo={allDatapo}/>
        <Footer/>
        <BottomNav/>
    </>
  )
}

export default PodcastPage