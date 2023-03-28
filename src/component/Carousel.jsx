import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Carousel = () => {
  return (
    <>
     <div className="">
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
   
      <SwiperSlide>
        <div className=" bg-blue-800 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia quod illo adipisci voluptates quae voluptas, iusto, nihil in vitae consequuntur facilis numquam laudantium dolore aperiam eligendi impedit obcaecati aliquid, maxime vel ea cumque explicabo rerum. Maiores, quod, nisi repellendus debitis facere doloribus unde quis fugit repellat tenetur veniam, sed labore rerum quo quisquam! Nesciunt, voluptate quos. Consequuntur exercitationem quos reiciendis vero quam est! Reiciendis, et exercitationem fugit dolorem modi cumque doloremque nostrum autem quaerat omnis quisquam, facere iure aut facilis temporibus adipisci ratione excepturi commodi perferendis, eveniet quos earum deserunt praesentium saepe? Velit saepe ipsa rerum commodi iure dolores accusantium autem adipisci ut quo neque explicabo molestias, debitis omnis nisi laboriosam est voluptate veritatis ullam quasi deserunt dicta. Fuga expedita aspernatur necessitatibus ea ipsum nostrum rerum asperiores incidunt aut. Corrupti exercitationem veritatis aspernatur repellat. Iste earum ea laudantium autem optio! Dolore non perspiciatis explicabo minima, corporis accusamus atque laudantium doloribus, ut eius necessitatibus quisquam autem? Beatae accusamus aspernatur dolores, quas molestiae eius eaque impedit distinctio pariatur nisi ducimus officiis quia animi laudantium aut ipsa corrupti facilis ea numquam, cumque doloribus dicta quis! Quaerat blanditiis cupiditate nobis perferendis porro maiores doloribus modi quidem sunt, nulla, fugiat delectus! Neque, praesentium.
        </div>
      </SwiperSlide>
      <SwiperSlide> <div className=" bg-blue-800 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia quod illo adipisci voluptates quae voluptas, iusto, nihil in vitae consequuntur facilis numquam laudantium dolore aperiam eligendi impedit obcaecati aliquid, maxime vel ea cumque explicabo rerum. Maiores, quod, nisi repellendus debitis facere doloribus unde quis fugit repellat tenetur veniam, sed labore rerum quo quisquam! Nesciunt, voluptate quos. Consequuntur exercitationem quos reiciendis vero quam est! Reiciendis, et exercitationem fugit dolorem modi cumque doloremque nostrum autem quaerat omnis quisquam, facere iure aut facilis temporibus adipisci ratione excepturi commodi perferendis, eveniet quos earum deserunt praesentium saepe? Velit saepe ipsa rerum commodi iure dolores accusantium autem adipisci ut quo neque explicabo molestias, debitis omnis nisi laboriosam est voluptate veritatis ullam quasi deserunt dicta. Fuga expedita aspernatur necessitatibus ea ipsum nostrum rerum asperiores incidunt aut. Corrupti exercitationem veritatis aspernatur repellat. Iste earum ea laudantium autem optio! Dolore non perspiciatis explicabo minima, corporis accusamus atque laudantium doloribus, ut eius necessitatibus quisquam autem? Beatae accusamus aspernatur dolores, quas molestiae eius eaque impedit distinctio pariatur nisi ducimus officiis quia animi laudantium aut ipsa corrupti facilis ea numquam, cumque doloribus dicta quis! Quaerat blanditiis cupiditate nobis perferendis porro maiores doloribus modi quidem sunt, nulla, fugiat delectus! Neque, praesentium.
        </div></SwiperSlide>
      <SwiperSlide> <div className=" bg-blue-800 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia quod illo adipisci voluptates quae voluptas, iusto, nihil in vitae consequuntur facilis numquam laudantium dolore aperiam eligendi impedit obcaecati aliquid, maxime vel ea cumque explicabo rerum. Maiores, quod, nisi repellendus debitis facere doloribus unde quis fugit repellat tenetur veniam, sed labore rerum quo quisquam! Nesciunt, voluptate quos. Consequuntur exercitationem quos reiciendis vero quam est! Reiciendis, et exercitationem fugit dolorem modi cumque doloremque nostrum autem quaerat omnis quisquam, facere iure aut facilis temporibus adipisci ratione excepturi commodi perferendis, eveniet quos earum deserunt praesentium saepe? Velit saepe ipsa rerum commodi iure dolores accusantium autem adipisci ut quo neque explicabo molestias, debitis omnis nisi laboriosam est voluptate veritatis ullam quasi deserunt dicta. Fuga expedita aspernatur necessitatibus ea ipsum nostrum rerum asperiores incidunt aut. Corrupti exercitationem veritatis aspernatur repellat. Iste earum ea laudantium autem optio! Dolore non perspiciatis explicabo minima, corporis accusamus atque laudantium doloribus, ut eius necessitatibus quisquam autem? Beatae accusamus aspernatur dolores, quas molestiae eius eaque impedit distinctio pariatur nisi ducimus officiis quia animi laudantium aut ipsa corrupti facilis ea numquam, cumque doloribus dicta quis! Quaerat blanditiis cupiditate nobis perferendis porro maiores doloribus modi quidem sunt, nulla, fugiat delectus! Neque, praesentium.
        </div></SwiperSlide>
      <SwiperSlide> <div className=" bg-gray-800 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt quia quod illo adipisci voluptates quae voluptas, iusto, nihil in vitae consequuntur facilis numquam laudantium dolore aperiam eligendi impedit obcaecati aliquid, maxime vel ea cumque explicabo rerum. Maiores, quod, nisi repellendus debitis facere doloribus unde quis fugit repellat tenetur veniam, sed labore rerum quo quisquam! Nesciunt, voluptate quos. Consequuntur exercitationem quos reiciendis vero quam est! Reiciendis, et exercitationem fugit dolorem modi cumque doloremque nostrum autem quaerat omnis quisquam, facere iure aut facilis temporibus adipisci ratione excepturi commodi perferendis, eveniet quos earum deserunt praesentium saepe? Velit saepe ipsa rerum commodi iure dolores accusantium autem adipisci ut quo neque explicabo molestias, debitis omnis nisi laboriosam est voluptate veritatis ullam quasi deserunt dicta. Fuga expedita aspernatur necessitatibus ea ipsum nostrum rerum asperiores incidunt aut. Corrupti exercitationem veritatis aspernatur repellat. Iste earum ea laudantium autem optio! Dolore non perspiciatis explicabo minima, corporis accusamus atque laudantium doloribus, ut eius necessitatibus quisquam autem? Beatae accusamus aspernatur dolores, quas molestiae eius eaque impedit distinctio pariatur nisi ducimus officiis quia animi laudantium aut ipsa corrupti facilis ea numquam, cumque doloribus dicta quis! Quaerat blanditiis cupiditate nobis perferendis porro maiores doloribus modi quidem sunt, nulla, fugiat delectus! Neque, praesentium.
        </div></SwiperSlide>
    </Swiper>
    </div>

    
    </>
  )
}

export default Carousel