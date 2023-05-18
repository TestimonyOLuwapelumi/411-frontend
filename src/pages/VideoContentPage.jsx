import React from 'react'
import { BottomNav, Footer, Navbar, Video, VideoContent } from '../component'

const VideoContentPage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
    // console.log(videos);
  return (
    <>
    <Navbar allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatapo={allDatapo} allDatav={allDatav} allDatac={allDatac}/>
    {/* <Video /> */}
    <VideoContent allDatav={allDatav}/>
    <Video allDatav={allDatav}/>
    <Footer/>
    <BottomNav/>
    </>
  )
}

export default VideoContentPage