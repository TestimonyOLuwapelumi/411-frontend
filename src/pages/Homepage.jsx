import React from 'react';
import { Navbar, Blogs, Footer, Video, Podcastp } from "../component"

const Homepage = ({blogs, videos, firstblogs, podcasts}) => {
   


  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs?blogs:""} firstblogs={firstblogs?firstblogs:""}/> 
      {/* <Video videos={videos?videos:""}/> */}
      {/* <Podcastp podcasts={podcastData?podcastData : ""}/>       */}
      {/* <Podcastp podcasts={podcasts?podcasts:""}/> */}
      <Footer />
    </div>
  )
}

export default Homepage