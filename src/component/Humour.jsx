import React, {useEffect, useState} from 'react'
import axios from 'axios'
import{menu, close, logo, logoo} from '../assets';
import Carousel from './Carousel';
// import Carousel from "./Carousel"


const images = [
  "https://source.unsplash.com/random/480x360?1",
  "https://source.unsplash.com/random/480x360?1",
  "https://source.unsplash.com/random/480x360?",
];
const Humour = () => {
    const [allData, setallData] = useState([])
    const url = 'http://localhost:1337/api/humours?populate=*';

    useEffect(() => {
      getData()
    }, [])
    const getData = () =>{
        axios.get(url).then(res =>setallData(res.data.data)).catch(err =>{console.log(er);})
    }
    console.log(allData);

  return (

    <>
		<section className="dark:bg-gray-800 dark:text-gray-100 ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p></p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p></p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p></p>
				</div>
			</a>
		</div>
		{/* <div className="flex justify-center">
			<button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 dark:text-gray-400">Load more posts...</button>
		</div> */}
	</div>
</section>

		<section className="dark:bg-gray-800 dark:text-gray-100 ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p></p>
				</div>
			</a> 
      <div class="lg:hidden ">
            <div class="bg-white h-full w-full border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p></p>
				</div>
			</a>
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p></p>
				</div>
			</a>
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p></p>
				</div>
			</a>
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
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p></p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p></p>
				</div>
			</a>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p></p>
				</div>
			</a>
      <div className="flex justify-center lg:hidden">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800 dark:text-gray-100">Load more posts...</button>
		</div>
		</div>
		<div className="flex justify-center hidden lg:block">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800 dark:text-gray-100">Load more posts...</button>
		</div>
	</div>
</section>



<section className="dark:bg-gray-800 dark:text-gray-100 ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p></p>
				</div>
			</a> 
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p></p>
				</div>
			</a>
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p></p>
				</div>
			</a>
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p></p>
				</div>
			</a>
    	<div className="flex justify-center lg:hidden">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800 dark:text-gray-100">Load more posts...</button>
		</div>
		</div>
    <div className="flex justify-center hidden lg:block">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800 dark:text-gray-100">Load more posts...</button>
		</div>
	</div>
</section>






  <div class="m-10 mx-auto p-16 sm:p-24 lg:p-48 bg-gray-200">
    <div class="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl" style={{minHeight: "19rem;"}}>
      <div class="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg" style={{minHeight: "19rem;"}}>
        <img class="absolute inset-0 w-full h-full object-cover object-center" src="https://stripe.com/img/v3/payments/overview/photos/missguided.jpg" alt=""/>
        <div class="absolute inset-0 w-full h-full bg-indigo-900 opacity-75"></div>
        <div class="absolute inset-0 w-full h-full flex items-center justify-center fill-current text-white">
          <svg class="w-full h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 239 120"><path d="M4.21 86.4V33.31h8.94l4 28.85.86 9.52.87-9.52 4-28.85h9.02V86.4h-5.19V42.83l-.87 7.22-5.19 36.35h-5.19l-5.2-36.93-.57-6.64V86.4zm35.79 0h6V33.31h-6zm114.24 0h6.06V33.31h-6.06zm46.16-24h5.48v-6.01h-5.48v-17h9.23v-6.08h-15.31V86.4h15.29v-6.06h-9.23zm-60-29.14v44.19a2.89 2.89 0 1 1-5.77 0V33.31h-6.34v44.14a9.23 9.23 0 1 0 18.46 0V33.31zm40.11 44.14V42.55a2.9 2.9 0 0 0-2.89-2.89h-2.88v41h2.88a3.68 3.68 0 0 0 2.89-3.18zm-3.21-44.09a9.12 9.12 0 0 1 9.23 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.23m51.64 44.14v-34.9a2.89 2.89 0 0 0-2.88-2.89h-2.89v41h2.89a3.67 3.67 0 0 0 2.88-3.18zm-2.88-44.14a9.06 9.06 0 0 1 8.94 9.24v34.9a9.12 9.12 0 0 1-9.23 9.24h-9.23V33.31h9.52M89.31 57.55c-2.88-2.6-5.19-4.91-5.19-9.23v-5.77A2.89 2.89 0 0 1 87 39.66a3.1 3.1 0 0 1 2.89 2.89v6.05H96v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c.58 6.93 4.62 10.68 7.5 13.56 2.89 2.6 5.2 4.91 5.2 9.24v6a2.89 2.89 0 1 1-5.77 0v-8.89h-6.11v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.57-7.22-4.32-10.68-7.5-13.85m-25.1 0C61.33 55 59 52.64 59 48.32v-5.77a2.89 2.89 0 1 1 5.77 0v6.05h6.06v-6.05a9.24 9.24 0 1 0-18.47 0v6.05c0 6.93 4 10.68 6.93 13.56 2.88 2.6 5.19 4.91 5.19 9.24v6a2.89 2.89 0 0 1-2.88 2.89 3.1 3.1 0 0 1-2.89-2.89v-8.89h-5.46v8.94a9.23 9.23 0 1 0 18.46 0v-6c-.28-7.22-4.32-10.68-7.5-13.85m56.84-9.23v-5.82a9.24 9.24 0 1 0-18.47 0v34.9a9.45 9.45 0 0 0 9 9.24 6.63 6.63 0 0 0 6.34-4l2.89 4V62.45h-9.23v6.06h2.88v8.94a2.73 2.73 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89v-34.9a2.9 2.9 0 0 1 2.89-2.89 3.1 3.1 0 0 1 2.88 2.89v6.05h6.64z"></path></svg>
        </div>
      </div>
      <div class="w-full md:w-3/5 h-full flex items-center bg-gray-100 rounded-lg">
        <div class="p-12 md:pr-24 md:pl-16 md:py-12">
          <p class="text-gray-600"><span class="text-gray-900">Missguided</span> is a UK-based fashion retailer that has nearly doubled in size since last year. They integrated Stripe to deliver seamless checkout across mobile and web for customers in 100+ countries, all while automatically combating fraud.</p>
          <a class="flex items-baseline mt-3 text-indigo-600 hover:text-indigo-900 focus:text-indigo-900" href="">
            <span>Learn more about our users</span>
            <span class="text-xs ml-1">&#x279c;</span>
          </a>
        </div>
        <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-gray-100 -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
      </div>
      <button class="absolute top-0 mt-32 left-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -ml-6 focus:outline-none focus:shadow-outline">
        <span class="block" style={{transform: "scale(-1);"}}>&#x279c;</span>
      </button>
      <button class="absolute top-0 mt-32 right-0 bg-white rounded-full shadow-md h-12 w-12 text-2xl text-indigo-600 hover:text-indigo-400 focus:text-indigo-400 -mr-6 focus:outline-none focus:shadow-outline">
        <span class="block" style={{transform: "scale(1);"}}>&#x279c;</span>
      </button>
    </div>
    

    <div class="flex items-center pt-5 justify-between">
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/kickstarter.svg" alt="" style={{maxHeight: "60px;"}}/></button>
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/slack.svg" alt="" style={{maxHeight: "60px;"}}/></button>
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/glossier.svg" alt="" style={{maxHeight: "60px;"}}/></button>
      <button class="px-2 opacity-50 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/charity_water.svg" alt="" style={{maxHeight: "60px;"}}/></button>
      <button class="px-2 opacity-100 hover:opacity-100 focus:opacity-100"><img class="w-full" src="https://stripe.com/img/v3/payments/overview/logos/missguided.svg" alt="" style={{maxHeight: "60px;"}}/></button>
    </div>
    
  </div>


  <section className="dark:bg-gray-800 dark:text-gray-100 ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p></p>
				</div>
			</a> 
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p></p>
				</div>
			</a>
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p></p>
				</div>
			</a>
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p></p>
				</div>
			</a>
    <div className="flex justify-center lg:hidden">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800">Load more posts...</button>
		</div>
		</div>
    <div className="flex justify-center hidden lg:block">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800 dark:text-gray-100">Load more posts...</button>
		</div>
	</div>
</section>


<section className="dark:bg-gray-800 dark:text-gray-100 ">
	<div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
		
		<div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
    <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?1" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 21, 2021</span>
					<p></p>
				</div>
			</a> 
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?2" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 22, 2021</span>
					<p></p>
				</div>
			</a>
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p></p>
				</div>
			</a>
      <div class="lg:hidden border-b-2">
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
          </div>
			<a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 hidden lg:block">
				<img role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src="https://source.unsplash.com/random/480x360?3" />
				<div className="p-6 space-y-2">
					<h3 className="text-2xl font-semibold   group-focus:underline">In usu laoreet repudiare legendos</h3>
					<span className="text-xs dark:text-gray-400">January 23, 2021</span>
					<p></p>
				</div>
			</a>
    	<div className="flex justify-center lg:hidden">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800 dark:text-gray-100">Load more posts...</button>
		</div>
		</div>
    <div className="flex justify-center hidden lg:block">
			<button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800 dark:text-gray-100">Load more posts...</button>
		</div>
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
                            <path d="M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L448,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z" opacity="0.4"/><path d="M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a79.989,79.989,0,0,1-46.888-15.192L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z"/>
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
      <div className="grid gap-6 row-gap-5 mb-3 lg:grid-cols-4 sm:grid-cols-2 sm:row-gap-2 sm:grid-cols-2">
        <a href aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Sed ut perspiciatis unde omnis iste natus error
              </p>
            </div>
          </div>
        </a>
        <a href aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Leverage agile frameworks to provide a robust synopsis
              </p>
            </div>
          </div>
        </a>
        <a href aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly
              </p>
            </div>
          </div>
        </a>
        <a href aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Rough pomfret lemon shark plownose chimaera
              </p>
            </div>
          </div>
        </a>
      </div>
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
    </div>


	<div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-lg md:px-24 lg:px-6 lg:py-8">
     
      <div className="grid gap-6 row-gap-5 mb-4 lg:grid-cols-3 sm:row-gap-6 sm:grid-cols-2">
        
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3182750/pexels-photo-3182750.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Leverage agile frameworks to provide a robust synopsis
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Dingy I'm tellin' you rhubaahb Bangah Jo-Jeezly
              </p>
            </div>
          </div>
        </a>
        <a href="/" aria-label="View Item">
          <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
            <img
              className="object-cover w-full h-56 md:h-64 xl:h-80"
              src="https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
              alt=""
            />
            <div className="absolute inset-x-0 bottom-0 px-6 py-4 bg-black bg-opacity-75">
              <p className="text-sm font-medium tracking-wide text-white">
                Rough pomfret lemon shark plownose chimaera
              </p>
            </div>
          </div>
        </a>
      </div>
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
                           <path d="M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L448,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z" opacity="0.4"/><path d="M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a79.989,79.989,0,0,1-46.888-15.192L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z"/>
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

export default Humour















// <section className="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
// <div className="container p-6 mx-auto ">
// 	<div className="space-y-2 text-center">
// 		<h2 className="text-3xl font-bold">Partem reprimique an pro</h2>
// 		<p className="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
// 	</div>

// 	<div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
// 	{allData.map((datall)=>
// 		<article className="flex flex-col dark:bg-gray-900">
// 			<a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
// 				<img alt="" className="object-cover w-full h-52 dark:bg-gray-500" src="https://source.unsplash.com/200x200/?fashion?1" />
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