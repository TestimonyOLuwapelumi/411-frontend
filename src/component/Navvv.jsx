import React, {useState} from 'react';
import{menu, close, logo, logoo} from '../assets';
import { Link } from 'react-router-dom'
import Nav from './Nav';
import "./Nav.css"
import myImage from "../images/newsletter-bg.jpg"
import AdsComponent from './AdsComponent';
import Search from './Search';

const Navbar = ({searchTerm, setSearchTerm}) => {
  
  const [toggle,setToggle]=useState(false);
  const handleClick = ()=>setToggle(!toggle)
  const [open, setOpen] = useState(false);
  

  

  return (
    <>

{/* <div>
        {data1 && <pre>{JSON.stringify(data1, null, 2)}</pre>}
        {data2 && <pre>{JSON.stringify(data2, null, 2)}</pre>}
      </div> */}
    
    {/* <AdsComponent/> */}
    <div className='had'>

    <div className='w-full lg:h-[80px] h-[55px] z-10 bg-white  drop-shadow-lg mb- head '>
        <div className='flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto'>

                <div className='flex items-center'>
                    <Link to={'/'}><img src={logoo} alt="logo" className='sm:ml-1 ss:ml-1 md:ml-2 opacity-[100%] w-full h-[50px]  ml-3' /></Link>
                    <div className="divv h-10 lg:h-24 w-25 lg:w-full ml-2">

                    <h1 className='ml-1 lg:ml-2 text-1xl lg:text-3xl w-34 lg:w-full font-bold textt'>What is the 411?</h1>
                    </div>
                </div>
            {/* <input type="text" className='w-24 ' /> */}


            <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
               

                <div className=' ' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-5' />
                </div>

                

        </div>
        
    </div>
    <div class="w-full lg:w-full  mx-auto  drop-shadow-2xl bg-blue-800 h-[6px]">

    </div>

    <section class="sectt lg:h-[80px] sm:h-[80px] sm:h-[57px] z-10 bg-white drop-shadow-lg">
  <ul class="uu ">
    <Link to={"/home"}><li class="ll"><a href="#" class="aba ">Blogs</a></li></Link>
    <Link to={"/personality"}><li class="ll"><a href="#" class="aba bb">Personality Test</a></li></Link>
    <Link to={"/humour"}><li class="ll"><a href="#" class="aba">Humour</a></li></Link>
   <Link to={"/imagination"}> <li class="ll"><a href="#" class="aba">Imagination</a></li></Link>
    {/* <li class="ll"><a href="#" class="aba">Support</a></li> */}
  </ul>
    </section>



    <ul className={toggle?'absolute bg-white w-64 lg:w-96 h-screen px-8 right-0 text-center ':'hidden'}>
            <Link to={"/home"}><li className='  hover:border-red-500 w-20 inline-block'>Home</li></Link>
            <br />
            <Link to={"/video"}><li className=' hover:border-red-500 space-y-16 w-20 inline-block'>Videos</li></Link>
            <br />
            <Link to={"/podcast"}><li className=' hover:border-red-500 space-y-16 w-20 inline-block'>Podcast</li></Link>
            {/* <Link to={"/personality"}><li className=' hover:border-red-500 space-y-16 w-20 inline-block'>Personality Test</li></Link>
            <Link to={"/humour"}><li className=' hover:border-red-500 space-y-16 w-20 inline-block'>Humour</li></Link>
            <Link to={"/Imagination"}><li className=' hover:border-red-500 space-y-16 w-20 inline-block'>Imagination</li></Link> */}
            <br />
            {/* <Link to={""}></Link> */}
            <Link to={"/about"}><li className='  hover:border-red-500 space-y-16 w-20 inline-block'>About</li></Link>
            <br />
            <Link to={"/*"}><li className='  hover:border-red-500 space-y-16 w-20 inline-block'>Support</li></Link>

            <div className='flex flex-col my-4 text-center'>
            

            </div>
            <div className="mx-auto">
      {/* <p>Some content here</p> */}
    </div>
        </ul>


      
    </div>


   
    </>
  )
}

export default Navbar