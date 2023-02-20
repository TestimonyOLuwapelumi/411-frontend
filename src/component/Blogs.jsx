import React from 'react'
import { Link } from 'react-router-dom'

const Blogs = ({blogs}) => {
   

    const blogs1=[
        {
            "id":1,
            "title":"Blog1",
            "desc":"Lorem, ipsum dolor sit amet consectetur vitae?",
            "coverImg":"https://i.pinimg.com/564x/15/6b/73/156b73b4e25b6922d0205901e683ed08.jpg",
            "content":"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. PaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniriatur ducimus sequi nostrum quis ab? Magni eveniet dicta eum iste dolores, repellat corrupti quod odit, rem, consectetur neque eius. Veniam sint, dolor alias cupiditate necessitatibus magni. Cum, iste tempore doloremque repellendus dolor blanditiis soluta? Velit, quam deserunt",
            "authorName":"John Doe",
            "authorImg" : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
            "authorDesc":"Web Developer"
        },
        {
            "id":2,
            "title":"Blog2",
            "desc":"Lorem, ipsum dolor sit amet  Itaque, vitae?",
            "coverImg":"https://i.pinimg.com/564x/15/6b/73/156b73b4e25b6922d0205901e683ed08.jpg",
            "content":"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. PaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniriatur ducimus sequi nostrum quis ab? Magni eveniet dicta eum iste dolores, repellat corrupti quod odit, rem, consectetur neque eius. Veniam sint, dolor alias cupiditate necessitatibus magni. Cum, iste tempore doloremque repellendus dolor blanditiis soluta? Velit, quam deserunt",
            "authorName":"John Doe",
            "authorImg" : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
            "authorDesc":"Web Developer"
        },
        {
            "id":3,
            "title":"Blog2",
            "desc":"Lorem, ipsum dolor sit amet . Itaque, vitae?",
            "coverImg":"https://i.pinimg.com/564x/15/6b/73/156b73b4e25b6922d0205901e683ed08.jpg",
            "content":"  Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. PaLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniLorem ipsum dolor sit amet consectetur adipisicing elit. Maxime saepe est voluptatibus. Pariatur ducimus sequi nostrum quis ab? Magni eveniriatur ducimus sequi nostrum quis ab? Magni eveniet dicta eum iste dolores, repellat corrupti quod odit, rem, consectetur neque eius. Veniam sint, dolor alias cupiditate necessitatibus magni. Cum, iste tempore doloremque repellendus dolor blanditiis soluta? Velit, quam deserunt",
            "authorName":"John Doe",
            "authorImg" : "https://e7.pngegg.com/pngimages/799/987/png-clipart-computer-icons-avatar-icon-design-avatar-heroes-computer-wallpaper-thumbnail.png",
            "authorDesc":"Web Developer"
        }
    ]



  return (
        <div className="w-full bg-[#f9f9f9] py-[50px]">
            <div className="max-w-[1240px] mx-auto">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-8 px-4 text-black">



                    {blogs.data.map((blog)=>

                    <Link to={`/blog/${blog.id}`}>
                        <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                        <img className="h-56 w-full object-cover" src={blog.attributes.blogImg.data.attributes.url}/>
                        <div className="p-8">
                            <h3 className="font-bold text-2xl my-1">{blog.attributes.blogTitle}</h3>
                            <p className="text-gray-600 text-xl">{blog.attributes.blogDesc}</p>
                        </div>
                    </div>
                    </Link>

                    ) }






                    {/* {blogs1.map((blog)=>

                    <Link to={`/blog/${blog.id}`}>
                        <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                        <img className="h-56 w-full object-cover" src={blog.coverImg}/>
                        <div className="p-8">
                            <h3 className="font-bold text-2xl my-1">{blog.title}</h3>
                            <p className="text-gray-600 text-xl">{blog.desc}</p>
                        </div>
                    </div>
                    </Link>

                     ) } */}
                  

                </div>
            </div>
        </div>
  )
}

export default Blogs