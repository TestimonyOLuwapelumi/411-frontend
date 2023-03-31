import React from 'react'
import { Footer, Navbar, Video, VideoContent } from '../component'

const VideoPage = ({allDatav}) => {
  return (
    <>
    <Navbar/>
    {/* <VideoContent/> */}
    <Video allDatav={allDatav}/>
    <Footer/>
    </>
  )
}

export default VideoPage