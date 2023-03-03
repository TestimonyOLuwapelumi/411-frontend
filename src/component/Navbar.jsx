import React, {useState} from 'react';
import{menu, close, logo} from '../assets';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [toggle,setToggle]=useState(false);
    const handleClick = ()=>setToggle(!toggle)


  return (
    <div className='w-full h-[80px] z-10 bg-white fixed drop-shadow-lg relative ss:relative'>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

                <div className='flex items-center'>
                    <Link to={'/'}><img src={logo} alt="logo" className='sm:ml-10 ss:ml-10 md:ml-3 opacity-[55%] w-full h-[25px]' /></Link>
                </div>
          

                <div className='flex items-center'>
                    <ul className='hidden md:flex'>
                        <Link to={"/"}><li>Home</li></Link>
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
                        <Link to={"/"}><li>Home</li></Link>
                        <Link to={"/videos"}><li>Videos</li></Link>
                        <Link to={"/podcasts"}><li>Podcast</li></Link>
                        <Link to={"/*"}><li>About</li></Link>
                        <Link to={"/*"}><li>Support</li></Link>
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