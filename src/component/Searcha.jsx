import React from 'react'
import "./Search.css"
import { Link } from 'react-router-dom'

const Searcha = ({val}) => {

  console.log(val);
  return (
    <>
    <Link to={`/blog/${val.id}`}>
    {/* <div className="template" key={val.id}>
                      <img src={val.attributes.blogImg.data.attributes.url} alt="blog" />
                      <h3>{val.attributes.blogTitle}</h3>

                  </div> */}


<div class="lg:hidden md:hidden border-b-2 p-8">
                <div class="bg-white h-full w-full ">
                  <div>
                    <div   class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                         <div class="block h-28 w-2/5  rounded-t-lg  overflow-hidden"     style={{
            backgroundImage: `url(${val.attributes.blogImg.data.attributes.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}></div>
                        <div class="pl-3 w-3/5">
                            <p class="text-xs text-gray-500 uppercase">#Newupdate</p>
                            <h3 class="text-md font-semibold leading-tight mb-3">{val.attributes.blogTitle}</h3>
                            <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                                <div>{val.attributes.blogDesc}</div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
              </div>
    


  <div className=" hidden md:block lg:block mb-6 mt-9 ">
	<div className="container grid grid-cols-12 mx-auto  ring-offset-2 ring-2">
		<div className="bg-no-repeat bg-cover col-span-full lg:col-span-4" style={{backgroundImage: `url(${val.attributes.blogImg.data.attributes.url})`, 
    backgroundPosition: "center center",
     backgroundBlendMode: "multiply",
      backgroundSize: "cover",}}></div>
		<div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
			<div className="flex justify-start">
				<span className="px-2 py-1 text-xs rounded-full ">#Newupdate</span>
			</div>
			<h1 className="text-3xl font-semibold">{val.attributes.blogTitle}</h1>
			<p className="flex-1 pt-2">{val.attributes.blogDesc}</p>
			<a rel="noopener noreferrer" href="#" className="inline-flex items-center pt-2 pb-6 space-x-2 text-sm ">
				<span>Read more</span>
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
					<path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
				</svg>
			</a>
			<div className="flex items-center justify-between pt-2">
				<div className="flex space-x-2">
					{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 ">
						<path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd"></path>
					</svg> */}
          <img src={val.attributes.authorImg.data.attributes.url} className='w-5 h-5' alt="" />

					<span className="self-center text-sm">{val.attributes.authorName}</span>
				</div>
				<span className="text-xs">3 min read</span>
			</div>
		</div>
	</div>
</div>
    </Link>
    
    </>
  )
}

export default Searcha