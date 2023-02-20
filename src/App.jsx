import { BlogContentPage, Homepage } from "./pages";
import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";


export default function App() {
  // let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populate=*')
  let {loading, data, error} = useFetch('https://four11-backend.onrender.com/api/blogs?populate=*')
  if(loading) return <section class="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">   

  <div class="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

  <div class="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

  <div class="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
  
  
  <p class="text-bold w-200">411</p>
</section>
  if(error) return <p>Error</p>



  return (
  <>
  <Routes>
    <Route path="/" element={  <Homepage blogs={data?data:""}/>}></Route>
    <Route path="/blog/:id" element={  <BlogContentPage blogs={data?data:""}/>}></Route>
   </Routes>
  </>
  )
}