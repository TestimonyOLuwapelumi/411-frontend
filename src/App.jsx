

import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import {   FirstPage, Homepage, BlogContentPage} from "./pages";
import NotFoundpage from "./pages/NotFoundpage";
import myImage from "./Asset 1.png"
import { About, Animate, AnimateContent } from "./component";
import AboutPage from "./pages/AboutPage";

export default function App() {
  // const { loading: blogLoading, data: blogData, error: blogError } = useFetch(
  //   "https://four11admin.onrender.com/api/blogs?populate=*",
  //   {},
  //   []
  // );

  // const { loading: firstblogLoading, data: firstblogData, error: firstblogError } = useFetch(
  //   "https://four11admin.onrender.com/api/firstblogs?populate=*",
  //   {},
  //   []
  // );




  // if (blogLoading || firstblogLoading )
  //   return (
     
  //     <section className="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">
  //       <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

  //       <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

  //       <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

  

  //       <img src={myImage} className="w-20 h-20" alt="" />
  //     </section>
  //   );
  // if (blogError  || firstblogError) return <p>Error</p>;
  //     console.log(blogData);
  return (
    <>
    {/* <About/> */}
    <AboutPage/>
    
      {/* <Routes>
        <Route path="/" element={<Homepage blogs={blogData ? blogData : ""}   firstblogs={firstblogData ? firstblogData : ""} />} />
        <Route path="/blog/:id" element={<BlogContentPage blogs={blogData ? blogData : ""}/>} />
      
        <Route path="/*" element={<NotFoundpage/>} />
        <Route path="/firstblog/:id" element={<FirstPage  firstblogs={firstblogData ? firstblogData : ""}/>} />
       

        


        



      </Routes> */}
      
    </>
  );
}
