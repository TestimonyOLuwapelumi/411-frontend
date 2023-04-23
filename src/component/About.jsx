import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Humour from './Humour'
import { Link } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'
import "./Hum.css"


const About = ({allAbout}) => {
  console.log(allAbout);
   
  return (
    <>
          
<div class="max-w-screen-lg mx-auto mb-0">
    
   

    <main class="mt-2">
    {/* {allAbout.map((about)=> */}
      <div>
      <div class="mb-0 md:mb-0 w-full mx-auto relative">

        {/* <div class="px-4 lg:px-0">
         
          <a 
            href="#"
            class="py-2 text-green-700 inline-flex items-center justify-center mb-2"
          >
            
          </a>
        </div> */}
        {/* style={{height: "18em"}} */}
        {/* <img src={about.attributes.aboutImg.data.attributes.url} class="lg:w-full mx-auto w-96 object-cover lg:rounded lg:h-72  h-36" /> */}
      </div>
        <h1 class="lg:text-4xl text-2xl font-semibold text-gray-900 px-4 lg:px-0 py-1">
            {/* {about.attributes.aboutTitle} */}
            WHAT     IS     THE     411? 
          </h1>
          {/* <h1 className='mx-auto mt-0 max-w-md text-center text-2xl lg:text-1xl text-gray-100 '>What is the 411?</h1> */}


      <div class="flex flex-col lg:flex-row lg:space-x-12 border">

        <div class="px-4 lg:px-0 mt-3 text-gray-900 text-lg leading-relaxed w-full lg:w-3/4">
{/*   
        {about.attributes.aboutContent} */}
        {/* <ReactMarkdown className='line-break'>
       ABOUT 
What is the 411? is an entertainment and recreation group that promotes creativity through podcasting, animation videos, interesting and hilarious blog posts that keeps the mind away from worries.
MISSION
The 411 Squad is on a peacekeeping mission to eliminate your fears and worries from the turbulent life crises. This is because, everyone deserves to be happy!
GOAL
We want to have positive influence on our audience, unlock their creative minds and build a bigger creative industry.

        </ReactMarkdown> */}
       
        <p class="pb-6">
        In today's digital and information age, online entertainment has proven beyond doubt, to be the easiest panacea to help the human mind relax and cool off from the hustle and bustle of life.
Therefore, it goes that, even in the midst of emerging content creators in the industry, there will never be enough contents for the creative industry. Hence, the birth of this amazing and unique brand, What is the 411?

            </p>
            <h2>ABOUT </h2>
        <p class="pb-6">
       
What is the 411? is an entertainment and recreation group that promotes creativity through podcasting, animation videos, interesting and hilarious blog posts that keeps the mind away from worries.

            </p>
            <h2>

        MISSION
            </h2>
        <p class="pb-6">
The 411 Squad is on a peacekeeping mission to eliminate your fears and worries from the turbulent life crises. This is because, everyone deserves to be happy!

            </p>
            <h2>

        GOAL
            </h2>
        <p class="pb-6">
We want to have positive influence on our audience, unlock their creative minds and build a bigger creative industry.

            </p>


       
          

          {/* <p class="pb-6">{about.attributes.aboutDesc}</p> 

          <p class="pb-6">{about.attributes.motto}</p>  */}
          <p class="pb-6">WHAT IS THE 411?. 2023 ALL RIGHTS RESERVED.
</p> 

          {/* <p class="pb-6">{about.attributes.motto}</p>  */}
        </div>

        <aside class="w-full md:w-1/3 sm:w-24 flex lg:flex-col  flex-col-1 items-center px-3 lg:space-x-0 space-x-3  lg:mx-0">
        <div class="lg:w-full w-20 h-20  lg:h-full bg-white shadow flex flex-col my-4 p-6 text-center flex items-center justify-center cardd ">
            {/* <p class="lg:text-xl text-sm lg:font-semibold lg:pb-5 pb-0 font-xs">Social Medias</p> */}
        <Link to={"https://www.instagram.com/_thx411/"}>
            <div class="grid grid-cols-1 gap-3">
              
                <svg
                    fill="#1B3A9F" className='lg:w-24 lg:h-24 h-8 w-8' 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                
            </div>
        </Link>
        <Link to={"https://www.instagram.com/_thx411/"}>
            <a href="#" class="lg:w-full w-20 bg-blue-800 text-white font-semibold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center lg:px-2 lg:py-3 py-0 px-0 mt-0 lg:mt-6 lg:text-3xl text-0  hidden lg:block">
                @_thx411
            </a>
            </Link>
            <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
        

        </div>
        <div class="lg:w-full w-20 h-20  lg:h-full bg-white shadow flex flex-col my-4 p-6 text-center flex items-center justify-center cardd">
            {/* <p class="lg:text-xl text-sm font-semibold pb-5">Social Medias</p> */}
        <Link to={"https://twitter.com/_thx411"}>
            <div class="grid grid-cols-1 gap-3 flex items-center justify-center">
              
                <svg
                    fill="#1B3A9F" className='lg:w-24 lg:h-24 h-8 w-8' 
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                    />
                  </svg>
                  
            </div>
        </Link>
        <Link to={"https://twitter.com/_thx411"}>
            <a class="lg:w-full w-20 bg-blue-800 text-white font-semibold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center lg:px-2 lg:py-3 py-0 px-0 mt-0 lg:mt-6 lg:text-3xl text-1xl  hidden lg:block">
            @_thx411
            </a>
            </Link>
            <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
        </div>
        <div class="lg:w-full w-20 h-20 lg:h-full bg-white shadow flex flex-col my-4 p-6 text-center flex items-center justify-center  cardd">
            {/* <p class="lg:text-xl text-sm font-semibold pb-5">Social Medias</p> */}
        <Link to="https://www.tiktok.com/@thx411_">
            <div class="grid grid-cols-1 gap-3">
              
              
                  <svg fill="#1B3A9F" className='lg:w-24 lg:h-24 h-8 w-8'  viewBox="0 0 512 512" id="icons" xmlns="http://www.w3.org/2000/svg">
                        <path d="M412.19,118.66a109.27,109.27,0,0,1-9.45-5.5,132.87,132.87,0,0,1-24.27-20.62c-18.1-20.71-24.86-41.72-27.35-56.43h.1C349.14,23.9,350,16,350.13,16H267.69V334.78c0,4.28,0,8.51-.18,12.69,0,.52-.05,1-.08,1.56,0,.23,0,.47-.05.71,0,.06,0,.12,0,.18a70,70,0,0,1-35.22,55.56,68.8,68.8,0,0,1-34.11,9c-38.41,0-69.54-31.32-69.54-70s31.13-70,69.54-70a68.9,68.9,0,0,1,21.41,3.39l.1-83.94a153.14,153.14,0,0,0-118,34.52,161.79,161.79,0,0,0-35.3,43.53c-3.48,6-16.61,30.11-18.2,69.24-1,22.21,5.67,45.22,8.85,54.73v.2c2,5.6,9.75,24.71,22.38,40.82A167.53,167.53,0,0,0,115,470.66v-.2l.2.2C155.11,497.78,199.36,496,199.36,496c7.66-.31,33.32,0,62.46-13.81,32.32-15.31,50.72-38.12,50.72-38.12a158.46,158.46,0,0,0,27.64-45.93c7.46-19.61,9.95-43.13,9.95-52.53V176.49c1,.6,14.32,9.41,14.32,9.41s19.19,12.3,49.13,20.31c21.48,5.7,50.42,6.9,50.42,6.9V131.27C453.86,132.37,433.27,129.17,412.19,118.66Z"/>
                        </svg>
            </div>
        </Link>
        <Link to="https://www.tiktok.com/@thx411_">
            <a  class="lg:w-full w-20 bg-blue-800 text-white font-semibold text-sm uppercase rounded hover:bg-blue-700 flex items-center justify-center lg:px-2 lg:py-3 py-0 px-0 mt-0 lg:mt-6 lg:text-3xl text-1xl  hidden lg:block">
            @_thx411
            </a>
            </Link>
            <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
        </div>

        </aside>

              </div>

        </div>
        {/* )} */}
            </main>
          

          
          </div>
   </>
  )
}

export default About


