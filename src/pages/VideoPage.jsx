import React from 'react'
import { BottomNav, Footer, Navbar, Video, VideoContent } from '../component'

const VideoPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  return (
    <>
    <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
    {/* <VideoContent/> */}
    <Video allDatav={allDatav}/>
    <Footer/>
    <BottomNav/>
    </>
  )
}

export default VideoPage