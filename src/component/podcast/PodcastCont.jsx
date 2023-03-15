import React from 'react'
import "./Podcontent.css"
import { useParams } from 'react-router-dom';

const PodcastCont = ({podcasts}) => {
  const {id} = useParams()

  let podcast={}
  if(podcast){
     let arr = podcasts.data.filter(podcast=> podcast.id == id)
     podcast=arr[0]

  }else{
    podcast={}
  }
  console.log(" blogcontentpage");
  console.log(podcast);
  // console.log(podcasts);
  return (
    <>
        <div class="custom-video-player">
        <video controls="controls">
           <source src={podcast.attributes.podcastVideo.data.attributes.url} type="video/mp4" />
          <source src={podcast.attributes.podcastVideo.data.attributes.url} type="video/webm" /> 
          Your browser does not support the video tag.
        </video></div>
       {/* <iframe width="420" height="345"  className='' center
           src={podcast.attributes.podcastVideo.data.attributes.url}>
          </iframe> */}

      {/* <video width="320" height="2400" autoplay muted>
        <source src={podcast.attributes.podcastVideo.data.attributes.url} type="video/mp4"/>
        <source src={podcast.attributes.podcastVideo.data.attributes.url} type="video/ogg"/>
        Your browser does not support HTML video.
      </video> */}
    </>
  )
}

export default PodcastCont