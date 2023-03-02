import { BlogContentPage, Homepage } from "./pages";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";

export default function App2 () {
    let {loading, data, error} = useFetch('https://four11-backend.onrender.com/api/blogs?populate=*')
    if(loading) return <section className="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">   
    
    <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>
    
    <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>
    
    <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
    
    
    {/* <p class="text-bold w-200">411</p> */}
    <img src={"../public/vite.svg"} className="w-20 h-20" />
    </section>
    if(error) return <p>Error</p>
  return (
  <>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, dolore?</p>
  <Routes>
    {/* <Route path="/" element={  <Homepage blogs={data?data:""}/>}></Route>
    <Route path="/blog/:id" element={  <BlogContentPage blogs={data?data:""}/>}></Route> */}


   </Routes>
  </>
  )
}
