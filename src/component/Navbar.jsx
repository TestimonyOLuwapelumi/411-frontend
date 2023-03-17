import React, {useState} from 'react';
import{menu, close, logo} from '../assets';
import { Link } from 'react-router-dom'
// import myImage from "./Asset 1.png"

const Navbar = () => {
    const [toggle,setToggle]=useState(false);
    const handleClick = ()=>setToggle(!toggle)


  return (
    <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative ss:relative head'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

                <div className='flex items-center'>
                    <Link to={'/'}><img src={logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-[50px] h-[50px]' /></Link>
                </div>
          

                <div className='flex items-center'>
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

                </div>

                <div className='md:hidden' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-10' />
                </div>

                

        </div>
        <ul className={toggle?'absolute bg-white w-full px-8 md:hidden':'hidden'}>
                         <Link to={"/"}><li className='border-2 border-blue-500 hover:border-red-500 w-20'>Home</li></Link>
                         <br />
                        <Link to={"/videos"}><li className='border-2 border-blue-500 hover:border-red-500 space-y-16 w-20'>Videos</li></Link>
                        <br />
                       <Link to={"/podcasts"}><li className='border-2 border-blue-500 hover:border-red-500 space-y-16 w-20'>Podcast</li></Link>
                       <br />
                        <Link to={"/*"}><li className='border-2 border-blue-500 hover:border-red-500 space-y-16 w-20'>About</li></Link>
                        <br />
                        <Link to={"/*"}><li className='border-2 border-blue-500 hover:border-red-500 space-y-16 w-20'>Support</li></Link>
                        <div className='flex flex-col my-4'>
                            <Link to={"/animates"}><button className='bg-transparent text-black mb-4 py-3 px-8'>Animation Stories</button></Link>
                            <Link to={`/quizapp`}>  
                            <button className='px-8 py-3'>Quiz</button>
                            </Link>

                        </div>
        </ul>

    </div>
  )
}

export default Navbar