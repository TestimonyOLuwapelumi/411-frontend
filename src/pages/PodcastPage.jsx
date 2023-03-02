import React from 'react'
import { Footer, Navbar, PodcastContent } from '../component'

const PodcastPage = ({podcasts}) => {
  return (
    <>
      <Navbar/>
      <PodcastContent podcasts= {podcasts ? podcasts :""}/>
      <Footer/>  
    </>
  )
}

export default PodcastPage