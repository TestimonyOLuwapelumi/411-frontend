

import React, {useState} from 'react';
import{menu, close, logo, logoo} from '../assets';
import { Link } from 'react-router-dom'
import Nav from './Nav';
import "./Nav.css"
import myImage from "../images/newsletter-bg.jpg"

const Navbar = () => {
    const [toggle,setToggle]=useState(false);
    const handleClick = ()=>setToggle(!toggle)
    const [open, setOpen] = useState(false);


  return (
    <>
    <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg mb-1 head'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

                <div className='flex items-center'>
                    <Link to={'/'}><img src={logoo} alt="logo" className='sm:ml-1 ss:ml-1 md:ml-2 opacity-[100%] w-full h-[50px]  ml-3' /></Link>
                    
                    <h1 className='ml-3 lg:ml-7 text-2xl lg:text-3xl divv'>What is the 411?</h1>
                </div>
          

                {/* <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <Link to={"/"}><li className='border-2 border-blue-500 hover:border-red-500'>Home</li></Link>
                        <Link to={"/videos"}><li>Videos</li></Link>
                       <Link to={"/podcasts"}><li>Podcast</li></Link>
                        <Link to={"/*"}><li>About</li></Link>
                        <Link to={"/*"}><li>Support</li></Link>
                    </ul>
                </div>



                <div className='hidden md:flex sm:mr-10 md:mr-10'>
                    <Link to={"/animates"}><button className='border-none bg-transparent text-black mr-4 text-black mb-4 py-3 px-8'>Animation Stories</button></Link>
                  <Link to={`/quizapp`}>  
                  <button className='px-8 py-3'>Quiz</button>
                  </Link>

                </div> */}

                {/* <input type="email" class="border-l border-t border-b border-gray-200 rounded-l-md lg:w-64 text-base md:text-lg px-3 py-2 lg:ml-0 mb-20 object-contain mr-5 w-20 " placeholder="Enter Your Email"/> */}
                <div className=' ' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-5' />
                </div>

                

        </div>
        <ul className={toggle?'absolute bg-white w-64 lg:w-96 h-screen px-8 right-0 text-center ':'hidden'}>
            <Link to={"/"}><li className='  hover:border-red-500 w-20 inline-block'>Home</li></Link>
            <br />
            <Link to={"/video"}><li className=' hover:border-red-500 space-y-16 w-20 inline-block'>Videos</li></Link>
            <br />
            <Link to={"/podcast"}><li className=' hover:border-red-500 space-y-16 w-20 inline-block'>Podcast</li></Link>
            {/* <Link to={"/personality"}><li className=' hover:border-red-500 space-y-16 w-20 inline-block'>Personality Test</li></Link>
            <Link to={"/humour"}><li className=' hover:border-red-500 space-y-16 w-20 inline-block'>Humour</li></Link>
            <Link to={"/Imagination"}><li className=' hover:border-red-500 space-y-16 w-20 inline-block'>Imagination</li></Link> */}
            <br />
            <Link to={"/*"}><li className='  hover:border-red-500 space-y-16 w-20 inline-block'>About</li></Link>
            <br />
            <Link to={"/*"}><li className='  hover:border-red-500 space-y-16 w-20 inline-block'>Support</li></Link>

            <div className='flex flex-col my-4 text-center'>
            {/* <Link to={"/animates"}><button className='bg-transparent text-black mb-4 py-3 px-8 inline-block'>Animation Stories</button></Link> */}
            {/* <Link to={`/quizapp`}>
                <button className='px-8 py-3 inline-block'>Quiz</button>
            </Link> */}

            </div>
            <div className="mx-auto">
      {/* <p>Some content here</p> */}
    </div>
        </ul>

    </div>
    <header class="w-full container mx-auto pt-20 lg:pt-20 drop-shadow-2xl bg-blue-800 ">
      <div class="flex flex-col items-center py-1 lg:py-1 ">
        {/* <img src={myImage} alt="" className='h-96 w-full'/> */}
            {/* <a class="font-bold text-gray-800 uppercase hover:text-gray-900 text-4xl lg:text-6xl text-white" href="#">
                Thx 411
            </a>
            <p class="text-lg text-gray-600 text-white hover:text-gray-900">
                What is the 411?
            </p> */}
        </div>
    </header>
    <section class="sectt w-full h-[80px] z-10 bg-white drop-shadow-lg">
      {/* <div class="divv"><h1>j</h1><h1>j</h1></div> */}
  <ul class="uu ">
    <Link to={"/personality"}><li class="ll"><a href="#" class="aba bb">Personality Test</a></li></Link>
    <Link to={"/humour"}><li class="ll"><a href="#" class="aba">Humour</a></li></Link>
   <Link to={"/imagination"}> <li class="ll"><a href="#" class="aba">Imagination</a></li></Link>
    {/* <li class="ll"><a href="#" class="aba">Products</a></li>
    <li class="ll"><a href="#" class="aba">Contact</a></li>
    <li class="ll"><a href="#" class="aba">Blog</a></li>
    <li class="ll"><a href="#" class="aba">FAQs</a></li> */}
    <li class="ll"><a href="#" class="aba">Support</a></li>
  </ul>
  {/* <div class="divv"><h1>j</h1><h1>j</h1></div> */}
    </section>





    {/* <nav className="w-full py-4 border-t border-b bg-gray-100">
      <div className="block sm:hidden">
        <a
          href="#"
          className="block md:hidden text-base font-bold uppercase text-center flex justify-center items-center"
          onClick={() => setOpen(!open)}
        >
          Topics <i className={`fas ml-2 ${open ? 'fa-chevron-down' : 'fa-chevron-up'}`} />
        </a>
      </div>
      <div className={`w-full flex-grow sm:flex sm:items-center sm:w-auto ${open ? 'block' : 'hidden'}`}>
        <div className="w-full container mx-auto flex flex-col sm:flex-row items-center justify-center text-sm font-bold uppercase mt-0 px-6 py-2">
          <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Technology
          </a>
          <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Automotive
          </a>
          <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Finance
          </a>
          <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Politics
          </a>
          <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Culture
          </a>
          <a href="#" className="hover:bg-gray-400 rounded py-2 px-4 mx-2">
            Sports
          </a>
        </div>
      </div>
    </nav> */}
    {/* <Nav/> */}
    </>
  )
}

export default Navbar