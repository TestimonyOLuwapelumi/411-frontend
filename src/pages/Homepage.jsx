import React from 'react';
import { Navbar, Blogs, Footer } from "../component"

const Homepage = ({blogs}) => {
   


  return (
    <div>
      <Navbar />
      <Blogs blogs={blogs?blogs:""}/>       
      <Footer />
    </div>
  )
}

export default Homepage