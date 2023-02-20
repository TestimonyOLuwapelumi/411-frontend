import React from 'react'
import { useParams } from 'react-router-dom'
import { ReactMarkdown } from 'react-markdown/lib/react-markdown'

const BlogContent = ({blogs}) => {
 
    const {id} = useParams()

    let blog={}
    if(blog){
       let arr = blogs.data.filter(blog=> blog.id == id)
       blog=arr[0]

    }else{
    blog={}
    }
    console.log(" blogcontentpage");
    console.log(blog);


    // const blogs=[
    //     {
    //         "id":1,
    //         "title":"Blog1",
    //         "desc":"Lorem, ipsum dolor sit amet consectetur vitae?",
    //         "coverImg":"https://i.pinimg.com/564x/15/6b/73/156b73b4e25b6922d0205901e683ed08.jpg",
    //         "content":"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. PaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniriatur ducimus sequi nostrum quis ab? Magni eveniet dicta eum iste dolores, repellat corrupti quod odit, rem, consectetur neque eius. Veniam sint, dolor alias cupiditate necessitatibus magni. Cum, iste tempore doloremque repellendus dolor blanditiis soluta? Velit, quam deserunt",
    //         "authorName":"John Doe",
    //         "authorImg" : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    //         "authorDesc":"Web Developer"
    //     },
    //     {
    //         "id":2,
    //         "title":"Blog2",
    //         "desc":"Lorem, ipsum dolor sit amet  Itaque, vitae?",
    //         "coverImg":"https://i.pinimg.com/564x/15/6b/73/156b73b4e25b6922d0205901e683ed08.jpg",
    //         "content":"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. PaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniriatur ducimus sequi nostrum quis ab? Magni eveniet dicta eum iste dolores, repellat corrupti quod odit, rem, consectetur neque eius. Veniam sint, dolor alias cupiditate necessitatibus magni. Cum, iste tempore doloremque repellendus dolor blanditiis soluta? Velit, quam deserunt",
    //         "authorName":"John Doe",
    //         "authorImg" : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    //         "authorDesc":"Web Developer"
    //     },
    //     {
    //         "id":3,
    //         "title":"Blog3",
    //         "desc":"Lorem, ipsum dolor sit amet . Itaque, vitae?",
    //         "coverImg":"https://i.pinimg.com/564x/15/6b/73/156b73b4e25b6922d0205901e683ed08.jpg",
    //         "content":"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. PaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniriatur ducimus sequi nostrum quis ab? Magni eveniet dicta eum iste dolores, repellat corrupti quod odit, rem, consectetur neque eius. Veniam sint, dolor alias cupiditate necessitatibus magni. Cum, iste tempore doloremque repellendus dolor blanditiis soluta? Velit, quam deserunt",
    //         "authorName":"John Doe",
    //         "authorImg" : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
    //         "authorDesc":"Web Developer"
    //     }
    // ]

    // let blog = blogs.filter(blog=> blog.id == id)
    // blog = blog[0]
    // console.log(blog);



  return (
         <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
            md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

                <div className='col-span-2 '>
                    <img className='h-56 w-full object-cover' src={blog.attributes.blogImg.data.attributes.url} />
                    <h1 className='font-bold text-2xl my-1 pt-5'>{blog.attributes.blogTitle}</h1>
                    <div className='pt-5'><ReactMarkdown className='line-break'>{blog.attributes.blogContent}</ReactMarkdown></div>

                </div>

                <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
                    <div>
                        <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={blog.attributes.authorImg.data.attributes.url} />
                        <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.attributes.authorName}</h1>
                        <p className='text-center text-gray-900 font-medium'>{blog.attributes.authorDesc}</p>
                    </div>

                </div>


            </div>

        </div>
    </div>




    //     <div className='w-full pb-10 bg-[#f9f9f9]'>
    //     <div className='max-w-[1240px] mx-auto'>
    //         <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1
    //         md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>

    //             <div className='col-span-2 '>
    //                 <img className='h-56 w-full object-cover' src={blog.coverImg} />
    //                 <h1 className='font-bold text-2xl my-1 pt-5'>{blog.title}</h1>
    //                 <div className='pt-5'><p>{blog.content}</p></div>

    //             </div>

    //             <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 max-h-[250px]'>
    //                 <div>
    //                     <img className='p-2 w-32 h-32 rounded-full mx-auto object-cover' src={blog.authorImg} />
    //                     <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{blog.authorName}</h1>
    //                     <p className='text-center text-gray-900 font-medium'>{blog.authorDesc}</p>
    //                 </div>

    //             </div>


    //         </div>

    //     </div>
    // </div>
  )
}

export default BlogContent