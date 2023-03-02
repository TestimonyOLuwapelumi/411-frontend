import React from 'react'
import { useParams } from 'react-router-dom'
import { Video } from '.'
import SocialMedia from './UI/SocialMedia'

const VideoContent = ({videos}) => {
    const {id} = useParams()

    let video={}
    if(video){
       let arr = videos.data.filter(video=> video.id == id)
       video=arr[0]

    }else{
    video={}
    }
    console.log(video);


    // const {id} = useParams()

    // let video={}
    // if(video){
    //    let arr = videos.data.filter(blog=> video.id == id)
    //    video=arr[0]

    // }else{
    // video={}
    // }
    // console.log(" blogcontentpage");
    // console.log(videos);
  return (
    <>
    <div className="text-center">
                <header className="py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-2">{video.attributes.videoTitle}</h1>
                        {/* <p className="text-lg">{video.attributes.videoDesc} </p> */}
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8">
                    <center>
                        <div className="flex flex-col items-center justify-center -mx-4">
                            <div className="w-full md:w-2/3 px-4">
                            {/* <iframe width="400" height="215" src="https://www.youtube.com/embed/F5wMOCZHcH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                            <video   className="h-64 w-64"  controls >
                             <source src={video.attributes.videoImg.data.attributes.url}  type="video/mp4" />
                            </video>
                                <p className="text-lg mb-8"></p>
                            </div>
                        </div>
                    </center>
                    {/* <Sharetosocials /> */}
                    <SocialMedia/>
                </main>
            </div>
                    <Video videos={videos?videos:""}/>
    </>
  )
}

export default VideoContent