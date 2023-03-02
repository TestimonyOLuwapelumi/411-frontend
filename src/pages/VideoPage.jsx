import React from 'react'
import { Footer, Navbar, VideoContent } from '../component'

const VideoPage = ({videos}) => {
  return (
    <>
    <Navbar/>
    <VideoContent videos={videos?videos:""}/>
    <Footer/>
    </>
  )
}

export default VideoPage