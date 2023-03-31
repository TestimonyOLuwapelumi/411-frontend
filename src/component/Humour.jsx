import React, {useEffect, useState} from 'react'
import axios from 'axios'
import{menu, close, logo, logoo} from '../assets';
import Carousel from './Carousel';
// import Carousel from "./Carousel"
import "./Hum.css"
import Carousell from './Carousell';
import { Link } from 'react-router-dom'

const Humour = ({allData}) => {
  
  // const [allData, setallData] = useState([])
  // const url = 'http://localhost:1337/api/humours?populate=*';

  // useEffect(() => {
  //   getData()
  // }, [])
  // const getData = () =>{
  //     axios.get(url).then(res =>setallData(res.data.data)).catch(err =>{console.log(er);})
  // }
  // console.log(allData);

  return (

    <>
    
    <section className="   ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    {/* {firstThre.map((firstblog)=> */}

    {allData.map((humour)=>
        <Link to={`/humour/${humour.id}`}>
    <div class="lg:hidden border-b-2">
            <div class="bg-white h-full w-full ">
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
				<img role="presentation" className="object-cover w-full rounded h-44   " src={humour.attributes.humourImg.data.attributes.url} />
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
    
		
		</div>
		{/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div> */}
	</div>
</section>
    
    </>
  )
}

export default Humour















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
// </section>