import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Video = ({allDatav}) => {

    //   const [allData, setallData] = useState([])
    //     const url = 'http://localhost:1337/api/videos?populate=*';

    //     useEffect(() => {
    //         getData()
    //     }, [])
    //     const getData = () =>{
    //         axios.get(url).then(res =>setallData(res.data.data)).catch(err =>{console.log(er);})
    //     }
    //     console.log(allData);
    
    
    return (
            <>


        {/* {allDatav.map((video)=>
       
                <div dangerouslySetInnerHTML={{ __html: video.attributes.videoYoutube}} />

            
         )} */}


<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-6 lg:py-8">
      {/* <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
        <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
          <span className="inline-block mb-1 sm:mb-4">
            The quick, brown fox
            <br className="hidden md:block" />
            jumps over a lazy dog
          </span>
          <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
        </h2>
        <p className="text-gray-700 lg:text-sm lg:max-w-md">
          "Sed ut perspiciatis unde omnis iste natus error sit iste voluptatem
          accusantium doloremque rem aperiam, ipsa eaque quae. Sed ut
          perspiciatis unde omnis iste."
        </p>
      </div> */}
      <div className="grid gap-6 row-gap-5 mb-3 lg:grid-cols-4 sm:grid-cols-2 sm:row-gap-2 sm:grid-cols-2">
      {allDatav.map((video)=>
          <Link to={`/video/${video.id}`}>
        <a href aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={video.attributes.videoImg.data.attributes.url}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                {video.attributes.videoTitle}
              </p>
            </div>
          </div>
          
        </a>
         </Link>
         )}

      
      </div>
      <div className="text-center">
        <a
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          See more
          <svg
            className="inline-block w-3 ml-2"
            fill="currentColor"
            viewBox="0 0 12 12"
          >
            <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
          </svg>
        </a>
      </div>
    </div>
        {/* <div className="w-full bg-[#f9f9f9] py-[50px]">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black">



                    {videos.data.map((video)=>

                    <Link to={`/video/${video.id}`}>
                        <div className="bg-white rounded-xl overflow-hidden drop-shadow-md"> */}
                        {/* <img className="h-56 w-full object-cover" src={video.attributes.videoImg.data.attributes.url}/> */}
                        {/* <video width="750" height="500" controls >
                    <source src={`http://localhost:1337/${video.attributes.videoImg.data.attributes.url}`} type="video/mp4"/>
                    </video> */}
                    {/* <video   className="h-56 w-full object-cover" controls >
                    <source src={video.attributes.videoImg.data.attributes.url} type="video/mp4" />
                    </video>
                        <div className="p-8">
                            <h3 className="font-bold text-2xl my-1">{video.attributes.videoTitle}</h3>
                            <p className="text-gray-600 text-xl">{video.attributes.videoDesc}</p>
                        </div>
                    </div>
                    </Link>

                    ) } */}






                    {/* {blogs1.map((blog)=>

                    <Link to={`/blog/${blog.id}`}>
                        <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                        <img className="h-56 w-full object-cover" src={blog.coverImg}/>
                        <div className="p-8">
                            <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                            <p className="text-gray-600 text-xl">{blog.desc}</p>
                        </div>
                    </div>
                    </Link>

                     ) } */}
                  
{/* 
                </div>
            </div>
        </div> */}


        {/* <div className="">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="mb-3 text-3xl md:text-3xl font-extrabold text-slate-50 flex flex-col items-center">Watch</h2>
                    <h2 className="mb-12 text-2xl md:text-2xl font-extrabold text-blue-700 flex flex-col items-center">Trending Videos</h2>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {videos.data.map((video)=> 
                            <a key={video.id}  className="group">
                                <div className=" rounded overflow-hidden shadow-lg">
                                    <div className="relative h-64">
                                        <img className="absolute w-full h-full object-cover" src={product.imageSrc} alt={product.imageAlt} />
                                        <video   className="h-56 w-full object-cover" controls >
                                        <source src={video.attributes.videoImg.data.attributes.url} type="video/mp4" />
                                        </video>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white opacity-75 hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 5v10l7-5-7-5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mt-4 text-md text-slate-50">{video.attributes.videoDesc}</h3>
                            </a>
                        )}
                    </div>

                </div>

            </div> */}


            {/* <div className="bg-[#fff] mt-12">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="mb-3 text-3xl md:text-3xl font-extrabold text-slate-50 flex flex-col items-center">Watch</h2>
                    <h2 className="mb-12 text-2xl md:text-2xl font-extrabold text-blue-700 flex flex-col items-center">Trending Videos</h2>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {videos.data.map((video)=> 
                        <Link to={`/videos/${video.id}`}>
                            <a key={video.id}  className="group">
                                <div className=" rounded overflow-hidden shadow-lg">
                                    <div className="relative h-64">
                                        <img className="absolute w-full h-full object-cover" src={product.imageSrc} alt={product.imageAlt} />
                                        <video   className="h-56 w-full object-cover" controls >
                                        <source src={video.attributes.videoImg.data.attributes.url} type="video/mp4" />
                                        <h3 className="mt-4 text-md text-slate-50">{video.attributes.videoTitle}</h3>
                                        </video>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white opacity-75 hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 5v10l7-5-7-5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mt-4 text-md text-slate-50">{video.attributes.videoTitle}</h3>
                            </a>
                            </Link>
                        )}
                    </div>

                </div>

            </div> */}

</>


  )
}

export default Video





// import React from 'react'

//  = () => {
//   return (
//     <div>Video</div>
//   )
// }





















// import React from 'react'
// import { Link } from 'react-router-dom'

// const Video = ({videos}) => {
//     // console.log(videos);
//     // console.log(videos.data.);
//   return (
//     <div className="w-full bg-[#f9f9f9] py-[50px]">
//     <div className="max-w-[1240px] mx-auto">
//         <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black">



//             {videos.data.map((video)=>

//             <Link to={`/videos/${video.id}`}>
//                 <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
//                 {/* <img className="h-56 w-full object-cover" src={blog.attributes.blogImg.data.attributes.url}/> */}
//                 {/* <video src={video.attributes.videoDisp.data.attributes.url}/> */}
//                 {/* <video width="500px" height="500px"
//                     controls="controls">
                    
//                 <source src={`http://localhost:1337/${video.attributes.videoDisp.data.attributes.url}`}/>
//                 </video> */}

//                 <video width="750" height="500" controls >
//                     <source src={`http://localhost:1337/${video.attributes.videoDisp.data.attributes.url}`} type="video/mp4"/>
//                     </video>
//                 <div className="p-8">
//                     {/* {/* <h3 className="font-bold text-2xl my-1">{blog.attributes.blogTitle}</h3> */}
//                     <p className="text-gray-600 text-xl">{video.attributes.videoDesc}</p> 
//                 </div>
//             </div>
//             </Link>

//             ) }

//                 </div>
//                 </div>
//                 </div>
//   )
// }

// export default Video