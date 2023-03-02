import React from 'react'
import { useParams } from 'react-router-dom'
import Animate from './Animate'
import SocialMedia from './UI/SocialMedia'

const AnimateContent = ({animates}) => {
    const {id} = useParams()

    let animate={}
    if(animate){
       let arr = animates.data.filter(animate=> animate.id == id)
       animate=arr[0]

    }else{
        animate={}
    }
    console.log(" blogcontentpage");
    console.log(animate);
  return (
    <>
        <div className="text-center">
                <header className="py-16">
                    <div className="container mx-auto px-4">
                        <h1 className="text-4xl font-bold mb-2">{animate.attributes.animateTitle}</h1>
                        <p className="text-lg">{animate.attributes.animateDesc} </p>
                    </div>
                </header>

                <main className="container mx-auto px-4 py-8">
                    <center>
                        <div className="flex flex-col items-center justify-center -mx-4">
                            <div className="w-full md:w-2/3 px-4">
                            {/* <iframe width="400" height="215" src="https://www.youtube.com/embed/F5wMOCZHcH4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                            <video   className="h-64 w-64"  controls >
                            <source src={animate.attributes.animateVideo.data.attributes.url} type="video/mp4" />
                            </video>
                                {/* <p className="text-lg mb-8">{podcast.attributes.podcastContent}</p> */}
                            </div>
                        </div>
                    </center>
                    {/* <Sharetosocials /> */}
                    <SocialMedia/>
                </main>
            </div>
            <Animate animates={animates?animates:""}/>
    </>
  )
}

export default AnimateContent