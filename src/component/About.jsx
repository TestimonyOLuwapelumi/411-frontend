import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Humour from './Humour'

const About = () => {
    // const [newData, setnewData] = useState([])
    // const url1 = 'https://four11admin.onrender.com/api/firstblogs?populate=*';


    // useEffect(() => {
    //   getDatan()
    // }, [])
    // const getDatan = () =>{
    //     axios.get(url1).then(res =>setnewData(res.data.data)).catch(err =>{console.log(er);})
    // }
    // console.log(newData);
    // const url = 'https://api.github.com/users';
    const [allData, setallData] = useState([])
    const url = 'http://localhost:1337/api/blogs?populate=*';

    useEffect(() => {
      getData()
    }, [])
    const getData = () =>{
        axios.get(url).then(res =>setallData(res.data.data)).catch(err =>{console.log(er);})
    }
    console.log(allData);
  return (
    <>
     
        {!allData.length? <section className="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">
        <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

        <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

        <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

       

        {/* <img src={myImage} className="w-20 h-20" alt="" /> */}
      </section>: allData.map((value, index)=>(
    <div className='mx-auto w-1/2'>
            <ul>
                {/* <img src={value.avatar_url} alt="" /> */}
                <li>{value.attributes.blogTitle}</li>
            </ul>
             </div>
        ))}
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit officia explicabo, excepturi quod aliquid voluptas, eveniet quasi doloremque alias nihil placeat perferendis? Aspernatur error ipsam, asperiores voluptatibus illo voluptatem laboriosam, nihil repellendus est ab dolor sit earum, quam nesciunt sint fuga optio maiores accusantium labore illum. Illo, ratione autem suscipit sapiente adipisci, dignissimos, odit odio eveniet magnam corrupti natus earum. Sunt corporis nulla voluptatum cupiditate exercitationem praesentium itaque! Aut debitis reprehenderit velit incidunt pariatur saepe amet laboriosam, maiores cum. Optio in voluptates animi ratione ab quibusdam labore eum dolores tempore ex quo possimus doloribus a quod accusantium vel ducimus itaque explicabo iusto minima distinctio ipsam, et rerum! Sint neque necessitatibus officia nesciunt, cumque ratione, distinctio eligendi quae ab nostrum facilis perferendis molestiae? Voluptate voluptas aut eveniet omnis quaerat corrupti modi tempora unde ipsam officiis, inventore, animi a provident alias. Quidem voluptates eum excepturi! Reprehenderit deleniti laborum porro earum minus unde deserunt explicabo. Aliquam quae possimus quas voluptatum? Vero obcaecati alias repellat quidem quisquam tempora libero ab esse expedita fugit quaerat exercitationem cupiditate autem qui ducimus iste numquam totam voluptas ullam dolorum ratione amet eum, voluptates repudiandae? Dolore ullam nesciunt optio. Hic repudiandae et corporis voluptates eum ab asperiores eveniet ipsum! */}
    
   </>
  )
}

export default About


// section className="bg-blue-900 relative place-items-center grid h-screen w-screen gap-4">
//         <div className="bg-blue-500 w-48 h-48  absolute animate-ping rounded-full delay-5s shadow-xl"></div>

//         <div className="bg-blue-400 w-32 h-32 absolute animate-ping rounded-full shadow-xl"></div>

//         <div className="bg-white w-24 h-24 absolute animate-pulse rounded-full shadow-xl"></div>

       

//         <img src={myImage} className="w-20 h-20" alt="" />
//       </section>