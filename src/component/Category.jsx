import React from 'react'
import "./Category.css"
import { Link } from 'react-router-dom'

const Category = () => {
  return (
    <>
    {/* <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
	<div className="container p-6 mx-auto space-y-8">
		<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-40 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
				</a>
				
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-40 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?2" />
				</a>
				
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-40 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?3" />
				</a>
				
			</article>
			<article className="flex flex-col dark:bg-gray-900">
				<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
					<img alt="" className="object-cover w-full h-40 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?4" />
				</a>
				
			</article>
		</div>
	</div>
</section> */}









<div className="container p-2 mx-auto sm:p-4 text-gray-700">
	<h2 className=" ml-16 lg:ml-64 mb-4 text-2xl font-semibold leading-tight mx-auto">Categories</h2>
	<div className="flex flex-col overflow-x-auto text-xs h-[200px] lg:h-[300px] secc ml-auto">
		{/* <div className="flex text-left dark:bg-gray-700 ">
			<h2>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti praesentium quod repudiandae nulla cupiditate quos nam ut recusandae labore veritatis!</h2>
		</div> */}
		
		<Link to={"/humour"}>

		<div className="flex border-b border-opacity-20  py-4">
			{/* <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box1" />
			</div> */}
			<h2  className='px-16 lg:px-64'>Humour</h2>
		</div>
			</Link>
		<Link to={"/imagination"}>
		<div className="flex border-b border-opacity-20  py-4">
			{/* <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box1" />
			</div> */}
			<h2 className='px-16 lg:px-64'>Imagination</h2>
		</div>
			</Link>
			<Link to={"/personality"}>
        <div className="flex border-b border-opacity-20  py-4">
			{/* <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box1" />
			</div> */}
			<h2  className='px-16 lg:px-64'>Personality Test.</h2>
		</div>
			</Link>
		{/* <div className="flex border-b border-opacity-20 dark:border-gray-700 dark:bg-gray-900 py-4"> */}
			{/* <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box1" />
			</div> */}
			{/* <h2  className='px-16 lg:px-64'>Lorem ipsum dolor sit amet consectetur.</h2>
		</div> */}
		<Link to={"/podcast"}>
		<div className="flex border-b border-opacity-20  py-4">
			{/* <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box1" />
			</div> */}
			<h2  className='px-16 lg:px-64'>Podcast.</h2>
		</div>
			</Link>
			<Link to={"/video"}>
		<div className="flex border-b border-opacity-20  py-4">
			{/* <div className="flex items-center justify-center w-8 px-2 py-3 sm:p-3">
				<input type="checkbox" className="w-3 h-3 rounded-sm accent-violet-400" name="Box1" />
			</div> */}
			<h2  className='px-16 lg:px-64'>Video.</h2>
		</div>
			</Link>
		

	</div>
</div>

    </>
  )
}

export default Category