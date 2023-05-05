import React from 'react'
import { Link } from 'react-router-dom'

const Imagination = ({allDatai}) => {
  return (
    <>
      {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, facere! */}
      <section className="   ">
    <div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
      
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {/* {firstThre.map((firstblog)=> */}
  
      {allDatai.map((imagination)=>
          <Link to={`/imagination/${imagination.id}`}>
            	{/* {bloggg.map((blog)=>
        <Link to={`/blog/${blog.id}`}> */}
      {/* <div class="lg:hidden border-b-2">
              <div class="bg-white h-full w-full ">
                <div>
                  <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                      <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
          backgroundImage: `url(${imagination.attributes.imaginationImg.data.attributes.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}></div>
                      <div class="pl-3 w-3/5">
                          <p class="text-xs text-gray-500 uppercase">#Imagination</p>
                          <h3 class="text-md font-semibold leading-tight mb-3">{imagination.attributes.imaginationTitle}</h3>
                          <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                              <div>{imagination.attributes.imaginationDesc}</div>
                          </div>
                      </div>
                  </a>
              </div>
            </div>
            </div> */}
             <div className='py-7'>

        <div className="max-w-sm mx-auto group hover:no-underline focus:no-underline      lg:block cardd">
          <img role="presentation" className="object-cover w-full rounded h-64   " src={imagination.attributes.imaginationImg.data.attributes.url} />
          <div className="p- space-y-">
          <h6 className='text-blue-800'>#Imagination</h6>
            <h3 className="lg:text-2xl text-base font-semibold   group-focus:underline">{imagination.attributes.imaginationTitle}</h3>
            <span className="text-xs ">{imagination.attributes.imaginationDesc}</span>
            <p></p>
          </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
        </div> 
        </div>
         </Link>
         )}
      
      
      </div>
      {/* <div className="flex justify-center">
        <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 dark:text-gray-400">Load more posts...</button>
      </div> */}
    </div>
  </section>

    </>
  )
}

export default Imagination