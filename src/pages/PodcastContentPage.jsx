import React from 'react'
import { Footer, Navbar, Podcast } from '../component'

const PodcastContentPage = ({podcasts}) => {
  return (
    <>
        <Navbar/>
        <Podcast podcasts={podcasts ? podcasts: ""}/>
        <Footer/>
    </>
  )
}

export default PodcastContentPage