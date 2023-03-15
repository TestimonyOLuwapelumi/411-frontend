import React from 'react'
import { Navbar, Podcastp} from '../component'

const Pod = ({podcasts}) => {
  return (
    <>
    <Navbar/>
    <Podcastp podcasts={podcasts?podcasts: ""}/>
    </>
  )
}

export default Pod