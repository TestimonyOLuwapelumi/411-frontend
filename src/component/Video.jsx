import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = ({videos}) => {
    console.log(videos);
    
    
    
    return (
            <>
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


            <div className="bg-[#fff] mt-12">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="mb-3 text-3xl md:text-3xl font-extrabold text-slate-50 flex flex-col items-center">Watch</h2>
                    <h2 className="mb-12 text-2xl md:text-2xl font-extrabold text-blue-700 flex flex-col items-center">Trending Videos</h2>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {videos.data.map((video)=> 
                        <Link to={`/videos/${video.id}`}>
                            <a key={video.id}  className="group">
                                <div className=" rounded overflow-hidden shadow-lg">
                                    <div className="relative h-64">
                                        {/* <img className="absolute w-full h-full object-cover" src={product.imageSrc} alt={product.imageAlt} /> */}
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
                                {/* <h3 className="mt-4 text-md text-slate-50">{video.attributes.videoTitle}</h3> */}
                            </a>
                            </Link>
                        )}
                    </div>

                </div>

            </div>

</>


  )
}

export default Blogs

























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