import React from 'react';
import { Navbar, Footer,  Home, AdsComponent} from "../component"

const Homepage = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
   console.log(allData);


  return (
    <div>
      {/* <AdsComponent  dataAdSlot='X7XXXXXX5X'/> */}
      <Navbar />
      <Home allData={allData} allDatai={allDatai} allDatap={allDatap} allDatab={allDatab} allDatav={allDatav} allDatapo={allDatapo} allDatac={allDatac}/>
      {/* <Humour/> */}
      {/* <Blogs blogs={blogs?blogs:""} firstblogs={firstblogs?firstblogs:""}/>  */}
      {/* <Video videos={videos?videos:""}/> */}
      {/* <Podcastp podcasts={podcastData?podcastData : ""}/>       */}
      {/* <Podcastp podcasts={podcasts?podcasts:""}/> */}
      <Footer />
    </div>
  )
}

export default Homepage