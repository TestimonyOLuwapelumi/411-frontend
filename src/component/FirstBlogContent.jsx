import React from 'react'
import { Link } from 'react-router-dom'

const FirstBlogContent = ({firstblogs}) => {
  return (
    <>
        {/* <div className="container px-5 py-24 mx-auto">
        {firstblogs.data.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
                <div className="lg:w-4/5 mx-auto flex flex-wrap bg-slate-50 p-4 rounded-lg">
                    <img  className="lg:w-1/2 w-full lg:h-auto h-34 object-cover object-center rounded" src={firstblog.attributes.firstblogImg.data.attributes.url}/>

                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col sm:flex-col justify-center">
                        <h2 className="text-sm font-bold text-slate-800">{firstblog.attributes.firstblogTitle}</h2>
                        <p className="text-1.5xl text-slate-900 dark:text-slate-400">{firstblog.attributes.firstblogDesc}</p>
                        <a href="/firstblogContent" className="w-1/2 px-5 py-2.5 mr-2 mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Read</a>
                    </div>
                </div>
                </Link>
                  ) }
            </div> */}
            {firstblogs.data.map((firstblog)=>
        <Link to={`/firstblog/${firstblog.id}`}>
            <div className="container px-5 py-24 mx-auto drop-shadow-md">
                <div className="lg:w-4/5 mx-auto flex flex-wrap bg-slate-50 p-4 rounded-lg">
                    <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-34 object-cover object-center rounded" src={firstblog.attributes.firstblogImg.data.attributes.url} />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 flex flex-col sm:flex-col justify-center">
                        <h2 className="text-sm font-bold text-slate-800">{firstblog.attributes.firstblogTitle}</h2>
                        <p className="text-1.5xl text-slate-900 dark:text-slate-400">{firstblog.attributes.firstblogDesc}</p>
                        <a href="/firstblogContent" className="w-1/2 px-5 py-2.5 mr-2 mt-5 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Read</a>
                    </div>
                </div>
            </div>
                </Link>
                  ) }

          
    </>
  )
}

export default FirstBlogContent