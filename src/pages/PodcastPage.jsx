import React from 'react'
import { Footer, Navbar, Podcast } from '../component'

const PodcastPage = ({podcasts, firstpodcasts}) => {
    console.log(podcasts);
    console.log(firstpodcasts);
  return (
    <>
        <Navbar/>
        <Podcast podcasts={podcasts?podcasts: ""} firstpodcasts={firstpodcasts?firstpodcasts:""}/>
        <Footer/>

    </>
  )
}

export default PodcastPage