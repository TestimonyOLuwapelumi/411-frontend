import React from 'react';
import {FaFacebook, FaGithub, FaInstagram, FaTwitter, FaTwitch, FaTiktok} from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Animation from './Animation';


const Footer = () => {
  return (



    <footer className="p-4 bg-[#02044A] md:p-8 lg:p-10 ">
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#" className="flex justify-center items-center text-2xl font-semibold text-white">
                        <img src={"/src/logo/Asset 1.png"} alt="" width={80} height={80} />
                    </a>
                    <p className="my-6 text-gray-500 dark:text-gray-400">THX411 is a  Media brand. </p>
                    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="#" className="hover:underline"></a>. All Rights Reserved.</span>
                </div>
            </footer>
    // <div className='w-full bg-[#02044A] text-gray-300 py-8 px-2'>
    //     <div className='max-w-[1240px] mx-auto grid grid-cols-7 md:grid-cols-8 border-b-2 border-gray-600 py-8 justify-between text-center items-center'>
    //         <div>
    //             <h6 className='font-bold uppercase py-2'>COMPANY</h6>
    //             <ol>
    //                 <li className='py-1'> ABOUT</li>
    //                 <li className='py-1'>ADVERTISE WITH US</li>
    //                 <li className='py-1'>MAKE A DONATION</li>
    //                 <li className='py-1'>CONTACT US</li>
    //                 {/* <li className='py-1'>Marketing</li> */}
                   
    //             </ol>
    //         </div>
    //         <div>
    //             <h6 className='font-bold uppercase py-2'>LEGAL</h6>
    //             <ol>
    //                 <li className='py-1'>TERMS & CONDITIONS</li>
    //                 <li className='py-1'>PRIVACY POLICY</li>
    //                 <li className='py-1'>Marketing</li>
    //                 <li className='py-1'>Marketing</li>
    //                 <li className='py-1'>Marketing</li>
    //             </ol>
    //         </div>
    //         <div>
    //             <h6 className='font-bold uppercase py-2'>Solutions</h6>
    //             <ol>
    //                 <li className='py-1'>Marketing</li>
    //                 <li className='py-1'>Marketing</li>
    //                 <li className='py-1'>Marketing</li>
    //                 <li className='py-1'>Marketing</li>
    //                 <li className='py-1'>Marketing</li>
    //             </ol>
    //         </div>
    //         <div>
    //             <h6 className='font-bold uppercase py-2'>Solutions</h6>
    //             <ol>
    //                 <li className='py-1'>Marketing</li>
    //                 <li className='py-1'>Marketing</li>
    //                 <li className='py-1'>Marketing</li>
    //                 <li className='py-1'>Marketing</li>
    //                 <li className='py-1'>Marketing</li>
    //             </ol>
    //         </div>

    //         <div className='col-span-2 pt-2 md:pt-2'>
    //             <p className='font-bold uppercase'>Subscribe To Our Newsletter</p>
    //             <p className='py-4'>The latest news, articles, and resources
    //                 sent to your inbox weekly.
    //             </p>
    //             <form className='flex flex-col sm:flex-row'>
    //                 <input className='w-full p-2 mr-4 rounded-md  mb-2' type="email" placeholder="Enter email" />
    //                 <button className='p-2 mb-2 bg-[#00B86E] '>Subscribe</button>

    //             </form>

    //         </div>

    //     </div>

    //     <div className='flex flex-col max-w-[1240px] px-2 py-4 m-auto justify-between sm:flex-row text-center text-gray-500 items-center'>
    //         <p>THX411 is a  Media brand. Copyright © 2023. All rights reserved.</p>
    //         <Animation/>
    //         <div className='flex justify-between sm:w-[300px] pt-4 text-2xl gap-2'>
    //             <Link to={`https://www.tiktok.com/@_thx411`}><FaTiktok /></Link>
    //             {/* <Link><FaGithub /></Link> */}
    //             <Link to={`https://www.instagram.com/_thx411`}><FaInstagram /></Link>
    //             {/* <Link><FaTwitch /></Link> */}
    //             <Link to={`https://twitter.com/_thx411`}><FaTwitter /></Link>

    //         </div>

    //     </div>
        

    // </div>
  )
}

export default Footer