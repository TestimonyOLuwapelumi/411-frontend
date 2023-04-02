import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
// import Carousell from './Carousell';
const Carousell = ({allDatac}) => {
    const allDac = allDatac.slice(2,3)
    const allDacc = allDatac.slice(3,4)
  return (
    <>
     <div className="">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
   
      <SwiperSlide>
      <div class="z-30 relative items-center justify-center w-full h-full overflow-auto">
      {allDac.map((carousel)=>
         <Link>

    <div class="inset-0 h-screen bg-cover bg-center"  style= {{ backgroundImage:  `url(${carousel.attributes.backImg.data.attributes.url})`}}>
    </div>
    <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
    <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
        <div class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
            style= {{ backgroundImage:  `url(${carousel.attributes.outImg.data.attributes.url})`}}>
                 {/* style={{ backgroundImage: `url(${blog.attributes.blogImg.data.attributes.url})`}}> */}

            <div class="grid grid-cols-12 gap-1">
                <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                    <div class="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                        <p class="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                           {carousel.attributes.carouselTitle}
                        </p>
                    </div>
                    <div class="text-gray-400 font-semibold text-xl mb-4">03</div>
                    <div class="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                </div>
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                    <div class="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                        <div class="p-8">
                            <p class="text-white text-xs md:text-sm lg:text-xl mb-4">
                                {carousel.attributes.carouselContent.substring(0, 300)}
                            </p>
                            <div class="bottom-0 absolute p-2 right-0">
                                {/* <button class="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>LEARN MORE</span>
                                </button>  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
    </Link>
        
        )}
</div>
      </SwiperSlide>
      <SwiperSlide> 
  
<div class="z-30 relative items-center justify-center w-full h-full overflow-auto">
    {allDac.map((carousel)=>
         <Link>

    <div class="inset-0 h-screen bg-cover bg-center"  style= {{ backgroundImage:  `url(${carousel.attributes.backImg.data.attributes.url})`}}>
    </div>
    <div class="absolute inset-0 z-20 flex items-center justify-center h-screen w-full bg-gray-900 bg-opacity-75"></div>
    <div class="absolute inset-0  z-30  flex flex-col items-center justify-center">
        <div class="shadow-2xl rounded-lg w-4/5 h-96 bg-cover bg-center"
            style= {{ backgroundImage:  `url(${carousel.attributes.outImg.data.attributes.url})`}}>
                 {/* style={{ backgroundImage: `url(${blog.attributes.blogImg.data.attributes.url})`}}> */}

            <div class="grid grid-cols-12 gap-1">
                <div class="relative my-6 px-8 col-span-12 sm:col-span-12 md:col-span-7 lg:col-span-7 xxl:col-span-7">
                    <div class="border-l-4 border-gray-400 py-20 px-5 mx-2 absolute left-0">
                        <p class="italic text-white text-xl md:text-4xl lg:text-6xl uppercase text-center  font-semibold ">
                           {carousel.attributes.carouselTitle}
                        </p>
                    </div>
                    <div class="text-gray-400 font-semibold text-xl mb-4">04</div>
                    <div class="absolute border-gray-400 border-t-4 bottom-0 py-1 px-4 w-4/5"></div>
                </div>
                <div class="col-span-12 sm:col-span-12 md:col-span-5 lg:col-span-5 xxl:col-span-5">
                    <div class="relative bg-pink-900 h-full md:h-96 w-full bg-opacity-50 rounded-tr-lg rounded-br-lg">
                        <div class="p-8">
                            <p class="text-white text-xs md:text-sm lg:text-xl mb-4">
                                {carousel.attributes.carouselContent.substring(0, 300)}
                            </p>
                            <div class="bottom-0 absolute p-2 right-0">
                                {/* <button class="opacity-75 bg-gray-100 hover:bg-pink-900 hover:text-white text-sm font-bold py-2 px-4 rounded inline-flex items-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <span>LEARN MORE</span>
                                </button>  */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
                
    </Link>
        
        )}
</div>
      </SwiperSlide>
      
    </Swiper>
    </div>

    
    </>
  )
}

export default Carousell