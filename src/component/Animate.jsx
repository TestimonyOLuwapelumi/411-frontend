import React from 'react'
import { Link } from 'react-router-dom'

const Animate = ({animates}) => {
    console.log(animates);
  return (
    <>
        <div className="bg-[#000] mt-12">
                <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="mb-3 text-3xl md:text-3xl font-extrabold text-slate-50 flex flex-col items-center">Watch</h2>
                    <h2 className="mb-12 text-2xl md:text-2xl font-extrabold text-blue-700 flex flex-col items-center">Trending Animate Series</h2>

                    <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {animates.data.map((animate)=> 
                        <Link to={`/animates/${animate.id}`}>
                            <a key={animate.id}  className="group">
                                <div className=" rounded overflow-hidden shadow-lg">
                                    <div className="relative h-64">
                                        {/* <img className="absolute w-full h-full object-cover" src={product.imageSrc} alt={product.imageAlt} /> */}
                                        <video   className="h-56 w-full object-cover" controls >
                                        <source src={animate.attributes.animateVideo.data.attributes.url} type="video/mp4" />
                                        {/* <h3 className="mt-4 text-md text-slate-50">{animate.attributes.animateTitle}</h3> */}
                                        </video>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <svg className="w-16 h-16 text-white opacity-75 hover:opacity-100" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M8 5v10l7-5-7-5z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <h3 className="mt-4 text-md text-slate-50">{animate.attributes.animateTitle}</h3>
                            </a>
                            </Link>
                        )}
                    </div>

                </div>

            </div>
    </>
  )
}

export default Animate