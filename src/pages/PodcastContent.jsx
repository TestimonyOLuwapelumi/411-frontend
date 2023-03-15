import React from 'react'
import { Footer, Navbar, PodcastCont, Podcastp } from '../component'

const PodcastContent = ({podcasts}) => {
  return (
    <>
        <Navbar/>
        <PodcastCont podcasts={podcasts?podcasts: ""}/>
        <Podcastp podcasts={podcasts?podcasts: ""}/>
        <Footer/>
    </>
  )
}

export default PodcastContent