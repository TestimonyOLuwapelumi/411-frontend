import React from 'react'
import { BottomNav, Footer, Navbar, Podcast, PodcastContent } from '../component'

const PodcastContentPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (

        <>
        <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
        <PodcastContent allDatapo={allDatapo}/>
        <Podcast allDatapo={allDatapo}/>
        <Footer/>
        <BottomNav/>
        </>

  )
}

export default PodcastContentPage