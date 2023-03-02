import React from 'react';
import { Navbar, Blogs, Footer, Video } from "../component"

const Homepage = ({blogs, videos, firstblogs}) => {
   


  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs?blogs:""} firstblogs={firstblogs?firstblogs:""}/> 
      <Video videos={videos?videos:""}/>      
      <Footer />
    </div>
  )
}

export default Homepage