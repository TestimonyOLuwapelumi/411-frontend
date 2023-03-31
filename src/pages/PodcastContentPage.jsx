import React from 'react'
import { Footer, Navbar, Podcast, PodcastContent } from '../component'

const PodcastContentPage = ({allDatapo}) => {
  return (

        <>
        <Navbar/>
        <PodcastContent allDatapo={allDatapo}/>
        <Podcast allDatapo={allDatapo}/>
        <Footer/>
        </>

  )
}

export default PodcastContentPage