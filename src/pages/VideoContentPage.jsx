import React from 'react'
import { Footer, Navbar, Video } from '../component'

const VideoContentPage = ({videos}) => {
    // console.log(videos);
  return (
    <>
    <Navbar/>
    <Video videos={videos?videos:""}/>
    <Footer/>
    </>
  )
}

export default VideoContentPage