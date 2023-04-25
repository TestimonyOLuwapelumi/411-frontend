import React from 'react'
import { BottomNav, Footer, Navbar, Podcast, PodcastContent } from '../component'

const PodcastContentPage = ({allDatapo}) => {
  return (

        <>
        <Navbar/>
        <PodcastContent allDatapo={allDatapo}/>
        <Podcast allDatapo={allDatapo}/>
        <Footer/>
        <BottomNav/>
        </>

  )
}

export default PodcastContentPage