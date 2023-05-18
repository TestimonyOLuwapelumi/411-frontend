import React from 'react'
import { BottomNav, Footer, Navbar, Podcast } from '../component'

const PodcastPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
    
  return (
    <>
        <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
        <Podcast allDatapo={allDatapo}/>
        <Footer/>
        <BottomNav/>
    </>
  )
}

export default PodcastPage