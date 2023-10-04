import React, {useState} from 'react';
import{menu, close, logo, logoo} from '../assets';
import { Link } from 'react-router-dom'
import { Routes, Route } from "react-router-dom";
import { useNavigate, Router,   } from 'react-router-dom';
import { NavLink, useParams } from 'react-router-dom';
// import { Navbar, Searchh, SearchI, Searchp, Searchv, Searchpo, Landing } from '../component';
import "./Nav.css"
import { FaSearch } from "react-icons/fa";
import { BottomNav, SearchI, Searcha, Searchh, Searchp, Searchpo, Searchv } from '../component';



const Search = ({allData,allDatai,allDatap,allDatab,allDatapo,allDatav,allDatac}) => {
    // const { blogTitle } = useParams();
    const navigate = useNavigate();


    const [searchQuery, setSearchQuery] = useState('');
    const [searchTerm, setSearchTerm] = useState("");
    const [toggle,setToggle]=useState(false);
    const handleClick = ()=>setToggle(!toggle)
    const [open, setOpen] = useState(false);
    const [showInput, setShowInput] = useState(true);
    const [data1, setData1] = useState(null);
    const [data2, setData2] = useState(null);
    const handleInputChange = (event) => setSearchQuery(event.target.value);
    const handleeClick = async () => {
        // navigate(`/home`);
        window.history.back();    
      setShowInput(!showInput);
    
    };
 



  return (
    <>
    
<div>
        {data1 && <pre>{JSON.stringify(data1, null, 2)}</pre>}
        {data2 && <pre>{JSON.stringify(data2, null, 2)}</pre>}
      </div>
    
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


            <div className=" ml-auto">
      <FaSearch className="search-icon " onClick={handleeClick} />
      {/* {showInput && <input type="text" placeholder="Search"  className=''   onChange={(event) => {setSearchTerm(event.target.value);
          }}/>} */}
       {showInput && <input type="text" placeholder="Search"  className=''   id="searchInput"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}/>}

{/* onChange={handleInputChange} value={searchQuery} */}

    </div>
               

                <div className=' ' onClick={handleClick}>
                    <img src={!toggle?menu:close} alt="menu" className='w-[28px] h-[28px] object-contain mr-5' />
                </div>

                

        </div>
        
    </div>
    <div className="w-full lg:w-full  mx-auto  drop-shadow-2xl bg-blue-800 h-[6px]">

    </div>

    <section className="sectt lg:h-[80px] sm:h-[80px] sm:h-[57px] z-10 bg-white drop-shadow-lg">
  <ul className="uu ">
    <Link to={"/home"}><li className="ll"><a href="#" className="aba ">Blogs</a></li></Link>
    <Link to={"/personality"}><li className="ll"><a href="#" className="aba bb">Personality Test</a></li></Link>
    <Link to={"/humour"}><li className="ll"><a href="#" className="aba">Humour</a></li></Link>
   <Link to={"/imagination"}> <li className="ll"><a href="#" className="aba">Imagination</a></li></Link>
    {/* <li className="ll"><a href="#" className="aba">Support</a></li> */}
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
    <div className="template_Container mb-24">
          {/*  */}

          {
            allDatab 
              .filter((val) => {
                if(searchTerm === ""){
                  return val;
                }else if(val.attributes.blogTitle.toLowerCase().includes(searchTerm.toLowerCase()) || val.attributes.blogDesc.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })

              .map((val) => {
                // navigate (`/search/${val.attributes.blogTitle}`);

                return(
                  <>
                    <Searcha val={val}/>                  
                  </>

                )
              })
          }



{/* {searchTerm &&
            allDatab
              .filter((val) => {
                if (val.attributes.blogTitle.toLowerCase().includes(searchTerm.toLowerCase()) || val.attributes.blogDesc.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
                }
              })
              .map((val) => {
                navigate (`/search/${val.attributes.blogTitle}`);
                return (
                  <>
                    <Searcha val={val}/>
                    
                  
                  </>
                );
              })} */}

{
            allData
              .filter((hum) => {
                 if(searchTerm === ""){
                    return hum;
                  }else if(hum.attributes.humourTitle.toLowerCase().includes(searchTerm.toLowerCase())|| hum.attributes.humourDesc.toLowerCase().includes(searchTerm.toLowerCase())){
                    return hum;
                  }
               
              })
              .map((hum) => {
                return (
                  <>
                    <Searchh hum={hum}/>
                    
                  </>
                );
              })}


{
            allDatai
              .filter((imag) => {
                if (imag.attributes.imaginationTitle.toLowerCase().includes(searchTerm.toLowerCase())|| imag.attributes.imaginationDesc.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return imag;
                }
              })
              .map((imag) => {
                return (
                  <>
                    {/* <SearchI imag={imag}/> */}
                    <SearchI imag={imag}/>
                    
                  </>
                );
              })}



{
            allDatap
              .filter((pers) => {
                if (pers.attributes.personalityTitle.toLowerCase().includes(searchTerm.toLowerCase())|| pers.attributes.personalityDesc.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return pers;
                }
              })
              .map((pers) => {
                return (
                  <>
              
                   <Searchp  pers={pers}/>
                    
                  </>
                );
              })}



{
            allDatapo
              .filter((pod) => {
                if (pod.attributes.podcastTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return pod;
                }
              })
              .map((pod) => {
                return (
                  <>
                   <Searchpo pod={pod}/>
                   
                    
                  </>
                );
              })}



{
            allDatav
              .filter((vid) => {
                if (vid.attributes.videoTitle.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return vid;
                }
              })
              .map((vid) => {
                return (
                  <>
                   <Searchv  vid={vid}/>
                   
                    
                  </>
                );
              })}

        </div>
<BottomNav/>


  















  
    </>
  )
}

export default Search