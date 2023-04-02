import React from 'react'
import { useParams } from 'react-router-dom'

import SocialMedia from './UI/SocialMedia'


const VideoContent = ({allDatav}) => {
    const {id} = useParams()

    let video={}
    if(video){
       let arr = allDatav.filter(video=> video.id == id)
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
                {/* <header className="py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-2">{video.attributes.videoTitle}</h1>
                        <p className="text-lg">{video.attributes.videoDesc} </p>
                    </div>
                </header> */}

                <main className="container mx-auto px-4 py-8">
                    <center>
                    {/* <div
                        class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                        style={{paddingTop: "56.25%"}}>
                        
                            <div  class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full" dangerouslySetInnerHTML={{ __html: video.attributes.videoYoutube}} />

                        </div> */}
                 
                   
                    
                    
                        <div className="flex flex-col items-center justify-center -mx-4">
                            
                            <div className="w-full md:w-2/3 px-4">
                            <div
                        class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                        style={{paddingTop: "56.25%"}}>
                   
                            <div  class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full" dangerouslySetInnerHTML={{ __html: video.attributes.videoYoutube}} />

                        </div>
                            {/* <div dangerouslySetInnerHTML={{ __html: video.attributes.videoYoutube}} /> */}
                            <h1 className="text-4xl font-bold mb-2">{video.attributes.videoTitle}</h1>
                                <p className="text-lg mb-8">{video.attributes.videoContent}</p>
                            </div>
                        </div>
                    </center>
                    {/* <Sharetosocials /> */}
                    <SocialMedia/>
                </main>
            </div>
                    {/* <Video /> */}
                   
    </>
  )
}

export default VideoContent