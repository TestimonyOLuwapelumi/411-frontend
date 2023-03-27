// import { BlogContentPage, Homepage } from "./pages";
// import { Routes, Route } from "react-router-dom";
// import useFetch from "./hooks/useFetch";


// export default function App() {
//   let {loading, data, error} = useFetch('http://localhost:1337/api/blogs?populate=*', {}, [])

//   // let {loading, data, error} = useFetch('https://four11-backend.onrender.com/api/blogs?populate=*')
//   if(loading) return <section className="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">   

//   <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

//   <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

//   <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>
  
  
//   {/* <p class="text-bold w-200">411</p> */}
//   <img src={"../public/vite.svg"} className="w-20 h-20" />
// </section>
//   if(error) return <p>Error</p>



//   return (
//   <>
//   <Routes>
//     <Route path="/" element={  <Homepage blogs={data?data:""}/>}></Route>
//     <Route path="/blog/:id" element={  <BlogContentPage blogs={data?data:""}/>}></Route>
//    </Routes>
//   </>
//   )
// }
















import { Routes, Route } from "react-router-dom";
import useFetch from "./hooks/useFetch";
import {  AnimatePage, BlogContentPage, FirstPage, Homepage,  Pod,  PodcastContent,  PodcastPage,  VideoContentPage, VideoPage } from "./pages";
import NotFoundpage from "./pages/NotFoundpage";
import myImage from "./Asset 1.png"
import { Animate, AnimateContent } from "./component";

export default function App() {
  const { loading: blogLoading, data: blogData, error: blogError } = useFetch(
    "https://four11admin.onrender.com/api/blogs?populate=*",
    // "http://localhost:1337/api/blogs?populate=*",
    {},
    []
  );
  const { loading: videoLoading, data: videoData, error: videoError } = useFetch(
    "https://four11admin.onrender.com/api/videos?populate=*",
    // "http://localhost:1337/api/videos?populate=*",
    {},
    []
  );
  const { loading: firstblogLoading, data: firstblogData, error: firstblogError } = useFetch(
    "https://four11admin.onrender.com/api/firstblogs?populate=*",
    // "http://localhost:1337/api/firstblogs?populate=*",
    {},
    []
  );
  const { loading: podcastLoading, data: podcastData, error: podcastError } = useFetch(
    "https://four11admin.onrender.com/api/podcasts?populate=*",
    // "http://localhost:1337/api/podcasts?populate=*",
    {},
    []
  );
  const { loading: animateLoading, data: animatetData, error: animateError } = useFetch(
    "https://four11admin.onrender.com/api/animates?populate=*",
    // "http://localhost:1337/api/animates?populate=*",
    {},
    []
  );
  const { loading: firstpodcastLoading, data: firstpodcastData, error: firstpodcastError } = useFetch(
    "https://four11admin.onrender.com/api/animates?populate=*",
    // "http://localhost:1337/api/firstpodcasts?populate=*",
    {},
    []
  );

  if (blogLoading || videoLoading ||  firstblogLoading || podcastLoading || animateLoading || firstpodcastLoading)
    return (
     
      <section className="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">
        <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

        <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

        <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

       

        <img src={myImage} className="w-20 h-20" alt="" />
      </section>
    );
  if (blogError || videoError || firstblogError || podcastError || animateError || firstpodcastError) return <p>Error</p>;
      console.log(blogData);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage blogs={blogData ? blogData : ""}  videos={videoData ? videoData : ""}  firstblogs={firstblogData ? firstblogData : ""} podcasts={podcastData?podcastData : ""}/>} />
        <Route path="/blog/:id" element={<BlogContentPage blogs={blogData ? blogData : ""}/>} />
        <Route path="/videos" element={<VideoContentPage videos={videoData ? videoData : ""} />} />
        <Route path="/videos/:id" element={<VideoPage videos={videoData ? videoData : ""} />} />
        {/* <PodcastPage/> */}
        {/* <QuizApp/> */}
        <Route path="/*" element={<NotFoundpage/>} />
        <Route path="/firstblog/:id" element={<FirstPage  firstblogs={firstblogData ? firstblogData : ""}/>} />
        {/* <FirstPage/> */}
        <Route path="/animates" element={<AnimatePage animates={animatetData?animatetData :""}/>} />
        {/* <AnimatePage/> */}
        {/* <AnimatePage */}
        {/* <Animate/> */}
        <Route path="/animates/:id" element={<AnimateContent animates={animatetData?animatetData :""}/>} />
        {/* <Animatecontent/> */}
      {/* <AnimateContent/> */}
      <Route path="/podcasts" element={<PodcastPage podcasts={podcastData?podcastData : ""} firstpodcasts={firstpodcastData?firstpodcastData:""}/>}/>
      {/* <PodcastPage/> */}
      {/* <Pod podcasts={podcastData?podcastData : ""}/> */}
      <Route path="/pod" element={<Pod podcasts={podcastData?podcastData : ""}/>}/>
      <Route path="/podcasts/:id" element={<PodcastContent podcasts={podcastData?podcastData : ""}/>} />
      {/* <PodcastContent/> */}

        


        



      </Routes>
      
    </>
  );
}
