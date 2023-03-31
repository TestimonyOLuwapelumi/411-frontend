import React from 'react'
import { Footer, Navbar, Video, VideoContent } from '../component'

const VideoContentPage = ({allDatav}) => {
    // console.log(videos);
  return (
    <>
    <Navbar/>
    {/* <Video /> */}
    <VideoContent allDatav={allDatav}/>
    <Video allDatav={allDatav}/>
    <Footer/>
    </>
  )
}

export default VideoContentPage