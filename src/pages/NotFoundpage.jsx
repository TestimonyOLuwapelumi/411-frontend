import React from 'react'

const NotFoundpage = () => {
  return (
    <>
         {/* <main className="grid min-h-full place-items-center py-24 px-6 mt-12 sm:py-32 lg:px-8">
         <img src="../public/vite.svg" class="absolute h-full w-full object-cover"/>

        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
          </div>
        </div>
      </main> */}

      <div class="bg-indigo-900 relative overflow-hidden h-screen">
 <img src="../public/vite.svg" class="absolute h-full w-full object-cover"/>
<div class="inset-0 bg-black opacity-25 absolute">
 </div>
 <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
 <div class="w-full font-mono flex flex-col items-center relative z-10">
 <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
 You are all alone here
 </h1>
<button>
<a
              href="/"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </a>
</button>
 <p class="font-extrabold text-8xl my-44 text-white animate-bounce">
 404
</p>
 </div>
 </div>
</div>

    </>
  )
}

export default NotFoundpage