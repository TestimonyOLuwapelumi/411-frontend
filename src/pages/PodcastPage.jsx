import React from 'react'
import { Footer, Navbar, Podcast } from '../component'

const PodcastPage = ({allDatapo}) => {
    
  return (
    <>
        <Navbar/>
        <Podcast allDatapo={allDatapo}/>
        <Footer/>

    </>
  )
}

export default PodcastPage