import React, {useEffect, useState} from 'react'
import axios from 'axios'
import{menu, close, logo, logoo} from '../assets';
import Carousel from './Carousel';
// import Carousel from "./Carousel"
import "./Hum.css"
import Carousell from './Carousell';
import { Link } from 'react-router-dom'

const Home = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
  const humour = allData.slice(0, 1);
  const humour2 = allData.slice(1, 2);
  const humour3 = allData.slice(2, 3);
  const humour4 = allData.slice(3, 5);



  const imagination = allDatai.slice(0,1)
  const imagination2 = allDatai.slice(1,2)
  const imagination3 = allDatai.slice(2,3)
  const imagination4 = allDatai.slice(3,5)
 


  const personality = allDatap.slice(0,1)
  const personality2 = allDatap.slice(1,2)
  const personality3 = allDatap.slice(2,3)
  const personality4 = allDatap.slice(3,4)
  const personality5 = allDatap.slice(4,6)



  const allDatavv = allDatav.slice(0,3)
  const allDatapoo = allDatapo.slice(0,4)


  const blog = allDatab.slice(0,4)
  const blog1 = allDatab.slice(4,6)

    // const [allData, setallData] = useState([])
    // const url = 'http://localhost:1337/api/humours?populate=*';

    // useEffect(() => {
    //   getData()
    // }, [])
    // const getData = () =>{
    //     axios.get(url).then(res =>setallData(res.data.data)).catch(err =>{console.log(er);})
    // }
    console.log(allData);
    console.log(allDatac);

  return (

    <>
		<section className="  ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {personality.map((personality)=>
    <Link to={`/personality/${personality.id}`}>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
				<img role="presentation" className="object-cover w-full rounded h-96   " src={personality.attributes.personalImg.data.attributes.url} />
				<div className="p-6 space-y-2">
          <h6 className='text-blue-800'>#Personality Test</h6>
          {/* <span>#Personality Test</span> */}
					<h3 className="text-2xl font-semibold   group-focus:underline">{personality.attributes.personalityTitle}</h3>
					<span className="text-xs ">{personality.attributes.personalityDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a>
      </Link>
    )}



    {humour.map((humour)=>
     <Link to={`/humour/${humour.id}`}>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
				<img role="presentation" className="object-cover w-full rounded h-96   " src={humour.attributes.humourImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Humour</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{humour.attributes.humourTitle}</h3>
					<span className="text-xs ">{humour.attributes.humourDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a>
       </Link>
       )}



       {imagination.map((imagination)=>
     <Link to={`/imagination/${imagination.id}`}>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
				<img role="presentation" className="object-cover w-full rounded h-96   " src={imagination.attributes.imaginationImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Imagination</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{imagination.attributes.imaginationTitle}</h3>
					<span className="text-xs ">{imagination.attributes.imaginationDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a>
      </Link>
       )}
		</div>
		{/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div> */}
	</div>



</section>

		<section className="   ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {personality2.map((personality)=>
     <Link to={`/personality/${personality.id}`}>
    <div class="lg:hidden border-b-2">
            <div class="bg-white h-full w-full ">
              <div>
                <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${personality.attributes.personalImg.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div class="pl-3 w-3/5">
                        <p class="text-xs text-gray-500 uppercase">#Personality Test</p>
                        <h3 class="text-md font-semibold leading-tight mb-3">{personality.attributes.personalityTitle}</h3>
                        <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>{personality.attributes.personalityDesc}</div>
                        </div>
                    </div>
                </a>
            </div>
          </div>
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
				<img role="presentation" className="object-cover w-full rounded h-72   " src={personality.attributes.personalImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Personality Test</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{personality.attributes.personalityTitle}</h3>
					<span className="text-xs ">{personality.attributes.personalityDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a> 
      </Link>
       )}



       {humour2.map((humour)=>
     <Link to={`/humour/${humour.id}`}>
      <div class="lg:hidden ">
            <div class="bg-white h-full w-full border-b-2">
              <div>
                <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${humour.attributes.humourImg.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div class="pl-3 w-3/5">
                        <p class="text-xs text-gray-500 uppercase">#Humour</p>
                        <h3 class="text-md font-semibold leading-tight mb-3">{humour.attributes.humourTitle}</h3>
                        <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>{humour.attributes.humourDesc}</div>
                        </div>
                    </div>
                </a>
            </div>
          </div>
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
				<img role="presentation" className="object-cover w-full rounded h-72   " src={humour.attributes.humourImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Humour</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{humour.attributes.humourTitle}</h3>
					<span className="text-xs ">{humour.attributes.humourDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a>
      </Link>
      )}


      {imagination2.map((imagination)=>
     <Link to={`/imagination/${imagination.id}`}>
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
				<img role="presentation" className="object-cover w-full rounded h-72   " src={imagination.attributes.imaginationImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Imagination</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{imagination.attributes.imaginationTitle}</h3>
					<span className="text-xs ">{imagination.attributes.imaginationDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a>
      </Link>
      )}


      {personality3.map((personality)=>
     <Link to={`/personality/${personality.id}`}>
      <div class="lg:hidden border-b-2">
            <div class="bg-white h-full w-full ">
              <div>
                <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${personality.attributes.personalImg.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div class="pl-3 w-3/5">
                        <p class="text-xs text-gray-500 uppercase">#Personality Test</p>
                        <h3 class="text-md font-semibold leading-tight mb-3">{personality.attributes.personalityTitle}</h3>
                        <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>{personality.attributes.personalityDesc}</div>
                        </div>
                    </div>
                </a>
            </div>
          </div>
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
				<img role="presentation" className="object-cover w-full rounded h-72   " src={personality.attributes.personalImg.data.attributes.url}  />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Personality Test</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{personality.attributes.personalityTitle}</h3>
					<span className="text-xs ">{personality.attributes.personalityDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a>
       </Link>
       )}
		</div>
		{/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div> */}
	</div>
</section>

{/* <div class="lg:hidden ">
            <div class="bg-white h-full w-full ">
              <div>
                <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${"https://source.unsplash.com/200x200/?fashion?1"})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div class="pl-3 w-3/5">
                        <p class="text-xs text-gray-500 uppercase">MUSIC</p>
                        <h3 class="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                        <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>Rowena Wheeler</div>
                        </div>
                    </div>
                </a>
            </div>
          </div>
          </div> */}




<section className="text-gray-900 ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {humour3.map((humour)=>
     <Link to={`/humour/${humour.id}`}>
    <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
				<img role="presentation" className="object-cover w-full rounded h-72   " src={humour.attributes.humourImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Humour</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{humour.attributes.humourTitle}</h3>
					<span className="text-xs ">{humour.attributes.humourDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a>
      </Link>
       )}
        {imagination3.map((imagination)=>
     <Link to={`/imagination/${imagination.id}`}>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
				<img role="presentation" className="object-cover w-full rounded h-72   " src={imagination.attributes.imaginationImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Imagination</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{imagination.attributes.imaginationTitle}</h3>
					<span className="text-xs ">{imagination.attributes.imaginationDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a>
      </Link>
       )}
        {personality4.map((personality)=>
     <Link to={`/personality/${personality.id}`}>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
				<img role="presentation" className="object-cover w-full rounded h-72   " src={personality.attributes.personalImg.data.attributes.url} />
				<div className="p-6 space-y-2">
          <h6 className='text-blue-800'>#Personality Test</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{personality.attributes.personalityTitle}</h3>
					<span className="text-xs ">{personality.attributes.personalityDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a>
       </Link>
       )}
       <div></div>
       <Link to={"/personality"}>
      <div className="flex justify-center lg:hidden">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800">Load more posts...</button>
		</div>
    </Link>
		</div>
    <Link to={"/personality"}>
		<div className="flex justify-center hidden lg:block">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800 ">Load more posts...</button>
		</div>
    </Link>
	</div>
</section>




{/* -------------------------------------------
---------------------------
1111111111111111111111carousel 1 */}

<Carousel allDatac={allDatac}/>




<section className="   ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {blog.map((blog)=>
     <Link to={`/blog/${blog.id}`}>
    <div class="lg:hidden border-b-2">
            <div class="bg-white h-full w-full ">
              <div>
                <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${blog.attributes.blogImg.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div class="pl-3 w-3/5">
                        <p class="text-xs text-gray-500 uppercase">#Newupdate</p>
                        <h3 class="text-md font-semibold leading-tight mb-3">{blog.attributes.blogTitle}</h3>
                        <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>{blog.attributes.blogDesc}</div>
                        </div>
                    </div>
                </a>
            </div>
          </div>
          </div>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
				<img role="presentation" className="object-cover w-full rounded h-64   " src={blog.attributes.blogImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Newupdate</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{blog.attributes.blogTitle}</h3>
					<span className="text-xs ">{blog.attributes.blogDesc}</span>
          <p>

          {new Date(blog.attributes.publishedAt).toLocaleString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric',
            daySuffix: function(day) {
              if (day === 1 || day === 21 || day === 31) {
                return 'st';
              } else if (day === 2 || day === 22) {
                return 'nd';
              } else if (day === 3 || day === 23) {
                return 'rd';
              } else {
                return 'th';
              }
            },
          })};

          </p>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a> 
      </Link>
    )}
     <Link to={"/blog"}>
    	<div className="flex justify-center lg:hidden">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800">Load more posts...</button>
		</div>
    </Link>
		</div>
    <Link to={"/blog"}>
    <div className="flex justify-center hidden lg:block">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800">Load more posts...</button>
		</div>
    </Link>
	</div>
</section>



{/* ----------------------------------------
---------------------------------------
1111111111111111111111111Carousell */}


  <Carousell allDatac={allDatac}/>


  <section className="   ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {personality5.map((personality)=>
     <Link to={`/personality/${personality.id}`}>
    <div class="lg:hidden border-b-2">
            <div class="bg-white h-full w-full ">
              <div>
                <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                    <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
        backgroundImage: `url(${personality.attributes.personalImg.data.attributes.url})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}></div>
                    <div class="pl-3 w-3/5">
                        <p class="text-xs text-gray-500 uppercase">#Personality Test</p>
                        <h3 class="text-md font-semibold leading-tight mb-3">{personality.attributes.personalityTitle}</h3>
                        <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                            <div>{personality.attributes.personalityDesc}</div>
                        </div>
                    </div>
                </a>
            </div>
          </div>
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
				<img role="presentation" className="object-cover w-full rounded h-72   " src={personality.attributes.personalImg.data.attributes.url} />
				<div className="p-6 space-y-2">
        <h6 className='text-blue-800'>#Personality Test</h6>
					<h3 className="text-2xl font-semibold   group-focus:underline">{personality.attributes.personalityTitle}</h3>
					<span className="text-xs ">{personality.attributes.personalityDesc}</span>
					<p></p>
				</div>
        <span class="spann topp"></span>
      <span class="spann rightt"></span>
      <span class="spann bottomm"></span>
      <span class="spann leftt"></span>
			</a> 
      </Link>
       )}

    {humour4.map((humour)=>
        <Link to={`/humour/${humour.id}`}>
          <div class="lg:hidden ">
                <div class="bg-white h-full w-full border-b-2">
                  <div>
                    <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                        <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
            backgroundImage: `url(${humour.attributes.humourImg.data.attributes.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}></div>
                        <div class="pl-3 w-3/5">
                            <p class="text-xs text-gray-500 uppercase">#Humour</p>
                            <h3 class="text-md font-semibold leading-tight mb-3">{humour.attributes.humourTitle}</h3>
                            <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                                <div>{humour.attributes.humourDesc}</div>
                            </div>
                        </div>
                    </a>
                </div>
              </div>
              </div>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
            <img role="presentation" className="object-cover w-full rounded h-72   " src={humour.attributes.humourImg.data.attributes.url} />
            <div className="p-6 space-y-2">
            <h6 className='text-blue-800'>#Humour</h6>
              <h3 className="text-2xl font-semibold   group-focus:underline">{humour.attributes.humourTitle}</h3>
              <span className="text-xs ">{humour.attributes.humourDesc}</span>
              <p></p>
            </div>
            <span class="spann topp"></span>
          <span class="spann rightt"></span>
          <span class="spann bottomm"></span>
          <span class="spann leftt"></span>
          </a>
          </Link>
          )}

          <Link to={"/humour"}>
    	<div className="flex justify-center lg:hidden">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800">Load more posts...</button>
		</div>
    </Link>
		</div>
    <Link to={"/humour"}>
    <div className="flex justify-center hidden lg:block">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800">Load more posts...</button>
		</div>
    </Link>
	</div>
</section>


<section className="   ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

    {imagination4.map((imagination)=>
        <Link to={`/imagination/${imagination.id}`}>
          <div class="lg:hidden border-b-2">
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
              </div>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
            <img role="presentation" className="object-cover w-full rounded h-72   " src={imagination.attributes.imaginationImg.data.attributes.url} />
            <div className="p-6 space-y-2">
            <h6 className='text-blue-800'>#Imagination</h6>
              <h3 className="text-2xl font-semibold   group-focus:underline">{imagination.attributes.imaginationTitle}</h3>
              <span className="text-xs ">{imagination.attributes.imaginationDesc}</span>
              <p></p>
            </div>
            <span class="spann topp"></span>
          <span class="spann rightt"></span>
          <span class="spann bottomm"></span>
          <span class="spann leftt"></span>
          </a>
          </Link>
          )}


    {blog1.map((blog)=>
     <Link to={`/blog/${blog.id}`}>
          <div class="lg:hidden border-b-2">
                <div class="bg-white h-full w-full ">
                  <div>
                    <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                        <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
            backgroundImage: `url(${blog.attributes.blogImg.data.attributes.url})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}></div>
                        <div class="pl-3 w-3/5">
                            <p class="text-xs text-gray-500 uppercase">#Newupdate</p>
                            <h3 class="text-md font-semibold leading-tight mb-3">{blog.attributes.blogTitle}</h3>
                            <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                                <div>{blog.attributes.blogDesc}</div>
                            </div>
                        </div>
                    </a>
                </div>
              </div>
              </div>
          <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
            <img role="presentation" className="object-cover w-full rounded h-72   " src={blog.attributes.blogImg.data.attributes.url} />
            <div className="p-6 space-y-2">
            <h6 className='text-blue-800'>#Newupdate</h6>
              <h3 className="text-2xl font-semibold   group-focus:underline">{blog.attributes.blogTitle}</h3>
              <span className="text-xs ">{blog.attributes.blogDesc}</span>
              <p></p>
            </div>
            <span class="spann topp"></span>
          <span class="spann rightt"></span>
          <span class="spann bottomm"></span>
          <span class="spann leftt"></span>
          </a>
          </Link>
          )}

          <Link to={"/imagination"}>
    	<div className="flex justify-center lg:hidden">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800">Load more posts...</button>
		</div>
    </Link>
		</div>
    <Link to={"/imagination"}>
    <div className="flex justify-center hidden lg:block">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800">Load more posts...</button>
		</div>
    </Link>
	</div>
</section>






<div class="antialiased font-nunito bg-blue-800 flex items-center justify-center h-screen">
   
 
    <div class="container px-4 sm:px-8 mx-auto max-w-lg">

       
        <div class="wrapper bg-white rounded-sm shadow-lg">

            <div class="card px-8 py-4">
                <div class="card-image mt-10 mb-6">
                    <svg 
                        class="w-10 h-10 text-blue-800 fill-current"
                        xmlns="http://www.w3.org/2000/svg" 
                        width="512" height="512.002" 
                        viewBox="0 0 512 512.002">
                        <g transform="translate(0 0.002)">
                            <path d="M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L728,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z" opacity="0.4"/><path d="M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a79.989,79.989,0,0,1-46.888-15.192L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z"/>
                        </g>
                    </svg>
                </div>

                <div class="card-text">
                    <h1 class="text-xl md:text-2xl font-bold leading-tight text-gray-900">Get the latest content update right into your inbox!</h1>
                    <p class="text-base md:text-lg text-gray-700 mt-3 ">Join 4k+ happy subscribers!</p>
                </div>

                <div class="card-mail flex items-center my-10">
                    <input type="email" class="border-l border-t border-b border-gray-200 rounded-l-md w-full text-base md:text-lg px-3 py-2 " placeholder="Enter Your Email"/>
                    <button class="bg-blue-800 hover:bg-gray-100 hover:border-gray-100 text-white font-bold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b border-blue-800 ml-3">subscribe</button>
                </div>
            </div>
        </div>
    </div>


</div>

{/*  */}


{/* 
<div className=" bg-blue-800 w-full">
<form className="max-w-sm mx-auto mt-10 p-6 border rounded-lg shadow-lg">
  <div className="mb-6">
    <label htmlFor="email" className="block mb-2 text-lg font-bold text-gray-100">
      Subscribe to our newsletter
    </label>
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Enter your email address"
      className="w-full p-4 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  </div>
  <button
    type="submit"
    className="w-full py-4 px-6 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
  >
    Subscribe
  </button>
</form>
</div> */}




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
      <div className="grid gap-6 row-gap-5 mb-3 lg:grid-cols-4 sm:grid-cols-2 grid-cols-2 sm:row-gap-2 sm:grid-cols-2">
      {allDatapoo.map((podcast)=>
          <Link to={`/podcast/${podcast.id}`}>
        <a href aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src={podcast.attributes.podcastImg.data.attributes.url}
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                {podcast.attributes.podcastTitle}
              </p>
            </div>
          </div>
          
        </a>
         </Link>
         )}
       
       
      </div>
      <Link to={"/podcast"}>
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
      </Link>
    </div>


	<div className="px-4 py-0 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-6 lg:py-0 ">
     
      <div className="grid gap-6 row-gap-5 mb-4 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 grid-cols-2">
        
      {allDatavv.map((video)=>
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
        <Link to={"/video"}>
      <div className="text-center">
        <a
          href=""
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
        </Link>
    </div>
    <div class="antialiased font-nunito bg-blue-800 flex items-center justify-center h-screen">
   
 
   <div class="container px-4 sm:px-8 mx-auto max-w-lg">

      
       <div class="wrapper bg-white rounded-sm shadow-lg">

           <div class="card px-8 py-4">
               <div class="card-image mt-10 mb-6">
                   <svg 
                       class="w-10 h-10 text-blue-800 fill-current"
                       xmlns="http://www.w3.org/2000/svg" 
                       width="512" height="512.002" 
                       viewBox="0 0 512 512.002">
                       <g transform="translate(0 0.002)">
                           <path d="M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L728,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z" opacity="0.4"/><path d="M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a79.989,79.989,0,0,1-46.888-15.192L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z"/>
                       </g>
                   </svg>
               </div>

               <div class="card-text">
                   <h1 class="text-xl md:text-2xl font-bold leading-tight text-gray-900">Get the latest content update right into your inbox!</h1>
                   <p class="text-base md:text-lg text-gray-700 mt-3 ">Join 4k+ happy subscribers!</p>
               </div>

               <div class="card-mail flex items-center my-10">
                   <input type="email" class="border-l border-t border-b border-gray-200 rounded-l-md w-full text-base md:text-lg px-3 py-2 " placeholder="Enter Your Email"/>
                   <button class="bg-blue-800 hover:bg-gray-100 hover:border-gray-100 text-white font-bold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b border-blue-800 ml-3">subscribe</button>
               </div>
           </div>
       </div>
   </div>


</div>













    </>
  )
}

export default Home













{/* 

// <section className="py-6 sm:py-12   dark:text-gray-100">
// <div className="container p-6 mx-auto ">
// 	<div className="space-y-2 text-center">
// 		<h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
// 		<p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
// 	</div>

// 	<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
// 	{allData.map((datall)=>
// 		<article className="flex flex-col    ">
// 			<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
// 				<img alt="" className="object-cover w-full h-52   " src="https://source.unsplash.com/200x200/?fashion?1" />
// 			</a>
// 			<div className="flex flex-col flex-1 p-6">
// 				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
// 				<a rel="noopener noreferrer" href="#" className="text-xs tracking-wider uppercase hover:underline dark:text-violet-400">Convenire</a>
// 				<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{datall.attributes.blogTitle}</h3>
// 				<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
// 					<span>June 1, 2020</span>
// 					<span>2.1K views</span>
// 				</div>
// 			</div>
// 		</article>
// 			) }
		
// 	</div>
// </div>
// </section> */}