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
import { AboutPage, Animatecontent, AnimatePage, BlogContentPage, FirstPage, Homepage, PodcastContentPage, PodcastPage, QuizApp, VideoContentPage, VideoPage } from "./pages";
import NotFoundpage from "./pages/NotFoundpage";

export default function App() {
  const { loading: blogLoading, data: blogData, error: blogError } = useFetch(
    "https://four11-admindashboard.onrender.com/api/blogs?populate=*",
    {},
    []
  );
  const { loading: videoLoading, data: videoData, error: videoError } = useFetch(
    "https://four11-admindashboard.onrender.com/api/videos?populate=*",
    {},
    []
  );
  const { loading: firstblogLoading, data: firstblogData, error: firstblogError } = useFetch(
    "https://four11-admindashboard.onrender.com/api/firstblogs?populate=*",
    {},
    []
  );
  const { loading: podcastLoading, data: podcastData, error: podcastError } = useFetch(
    "https://four11-admindashboard.onrender.com/api/podcasts?populate=*",
    {},
    []
  );
  const { loading: animateLoading, data: animatetData, error: animateError } = useFetch(
    "https://four11-admindashboard.onrender.com/api/animates?populate=*",
    {},
    []
  );

  if (blogLoading || videoLoading ||  firstblogLoading || podcastLoading || animateLoading)
    return (
     
      <section className="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">
        <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

        <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

        <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

        {/* <p class="text-bold w-200">411</p> */}
        {/* <img src={"../src/logo/Asset 1.png"} className="w-20 h-20" /> */}
        <img src="./Asset 1.png" className="w-20 h-20" alt="" />
      </section>
    );
  if (blogError || videoError || firstblogError || podcastError || animateError) return <p>Error</p>;
      console.log(blogData);
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage blogs={blogData ? blogData : ""}  videos={videoData ? videoData : ""}  firstblogs={firstblogData ? firstblogData : ""}/>} />
        <Route path="/blog/:id" element={<BlogContentPage blogs={blogData ? blogData : ""}/>} />
        <Route path="/videos" element={<VideoContentPage videos={videoData ? videoData : ""} />} />
        <Route path="/videos/:id" element={<VideoPage videos={videoData ? videoData : ""} />} />
        <Route path="/podcasts" element={<PodcastContentPage podcasts={podcastData ? podcastData : ""}/>} />
        <Route path="/podcasts/:id" element={<PodcastPage podcasts={podcastData ? podcastData : ""}/>} />
        {/* <PodcastPage/> */}
        <Route path="/quizapp" element={<QuizApp/>} />
        {/* <QuizApp/> */}
        <Route path="/*" element={<NotFoundpage/>} />
        <Route path="/firstblog/:id" element={<FirstPage  firstblogs={firstblogData ? firstblogData : ""}/>} />
        {/* <FirstPage/> */}
        <Route path="/animates" element={<AnimatePage animates={animatetData?animatetData :""}/>} />
        {/* <AnimatePage/> */}
        <Route path="/animates/:id" element={<Animatecontent animates={animatetData?animatetData :""}/>} />
        {/* <Animatecontent/> */}
        <Route path="/about" element={<AboutPage/>} />
        


        



      </Routes>
      
    </>
  );
}
