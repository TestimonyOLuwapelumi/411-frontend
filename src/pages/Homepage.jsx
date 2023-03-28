import React from 'react';
import { Navbar, Blogs, Footer, Video, Podcastp, Home } from "../component"

const Homepage = () => {
   


  return (
    <div>
      <Navbar />
      <Home/>
      {/* <Blogs blogs={blogs?blogs:""} firstblogs={firstblogs?firstblogs:""}/>  */}
      {/* <Video videos={videos?videos:""}/> */}
      {/* <Podcastp podcasts={podcastData?podcastData : ""}/>       */}
      {/* <Podcastp podcasts={podcasts?podcasts:""}/> */}
      <Footer />
    </div>
  )
}

export default Homepage