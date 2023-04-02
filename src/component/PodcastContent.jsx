import React from 'react'
import { useParams } from 'react-router-dom'
import SocialMedia from './UI/SocialMedia'

const PodcastContent = ({allDatapo}) => {
    const {id} = useParams()

    let podcast={}
    if(podcast){
       let arr = allDatapo.filter(podcast=> podcast.id == id)
       podcast=arr[0]

    }else{
    podcast={}
    }
    console.log(podcast);
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
                        <div className="flex flex-col items-center justify-center -mx-4">
                            <div className="w-full md:w-2/3 px-4">
                            {/* <iframe width="400" height="215" src="https://www.youtube.com/embed/F5wMOCZHcH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                            <div
                        class="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                        style={{paddingTop: "56.25%"}}>

                            <div class="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full" dangerouslySetInnerHTML={{ __html: podcast.attributes.podcastYoutube}} />
                        </div>
                            <h1 className="text-4xl font-bold mb-2">{podcast.attributes.podcastTitle}</h1>
                                <p className="text-lg mb-8">{podcast.attributes.podcastContent}</p>
                            </div>
                        </div>
                    </center>
                    {/* <Sharetosocials /> */}
                    <SocialMedia/>
                </main>
            </div>
    
    </>
  )
}

export default PodcastContent