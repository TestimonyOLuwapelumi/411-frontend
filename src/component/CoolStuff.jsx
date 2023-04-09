import React from 'react'

const CoolStuff = ({allData, allDatai, allDatap, allDatab, allDatapo, allDatav, allDatac}) => {
    const humour = allData.slice(0, 1);
    const humour2 = allData.slice(1, 2);
    const humour3 = allData.slice(2, 3);
    const humour4 = allData.slice(3, 5);
  
  
  
    const imagination = allDatai.slice(0,1)
    const imagination2 = allDatai.slice(1,2)
    const imagination3 = allDatai.slice(2,3)
    const imagination4 = allDatai.slice(3,5)
   
  
  
    const personality = allDatap.slice(0,1)
    const personality2 = allDatap.slice(1,2)
    const personality3 = allDatap.slice(2,3)
    const personality4 = allDatap.slice(3,4)
    const personality5 = allDatap.slice(4,6)
  
  
  
    const allDatavv = allDatav.slice(0,3)
    const allDatapoo = allDatapo.slice(0,4)
  
  
    const blog = allDatab.slice(0,4)
    const blog1 = allDatab.slice(4,6)
  
      // const [allData, setallData] = useState([])
      // const url = 'http://localhost:1337/api/humours?populate=*';
  
      // useEffect(() => {
      //   getData()
      // }, [])
      // const getData = () =>{
      //     axios.get(url).then(res =>setallData(res.data.data)).catch(err =>{console.log(er);})
      // }
      console.log(allData);
      console.log(allDatac);
  
    return (
  
      <>
          <section className="  ">
      <div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
          
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {personality.map((personality)=>
      <Link to={`/personality/${personality.id}`}>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
                  <img role="presentation" className="object-cover w-full rounded h-44   " src={personality.attributes.personalImg.data.attributes.url} />
                  <div className="p-6 space-y-2">
            <h6 className='text-blue-800'>#Personality Test</h6>
            {/* <span>#Personality Test</span> */}
                      <h3 className="text-2xl font-semibold   group-focus:underline">{personality.attributes.personalityTitle}</h3>
                      <span className="text-xs ">{personality.attributes.personalityDesc}</span>
                      <p></p>
                  </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
              </a>
        </Link>
      )}
  
  
  
      {humour.map((humour)=>
       <Link to={`/humour/${humour.id}`}>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
                  <img role="presentation" className="object-cover w-full rounded h-44   " src={humour.attributes.humourImg.data.attributes.url} />
                  <div className="p-6 space-y-2">
          <h6 className='text-blue-800'>#Humour</h6>
                      <h3 className="text-2xl font-semibold   group-focus:underline">{humour.attributes.humourTitle}</h3>
                      <span className="text-xs ">{humour.attributes.humourDesc}</span>
                      <p></p>
                  </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
              </a>
         </Link>
         )}
  
  
  
         {imagination.map((imagination)=>
       <Link to={`/imagination/${imagination.id}`}>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
                  <img role="presentation" className="object-cover w-full rounded h-44   " src={imagination.attributes.imaginationImg.data.attributes.url} />
                  <div className="p-6 space-y-2">
          <h6 className='text-blue-800'>#Imagination</h6>
                      <h3 className="text-2xl font-semibold   group-focus:underline">{imagination.attributes.imaginationTitle}</h3>
                      <span className="text-xs ">{imagination.attributes.imaginationDesc}</span>
                      <p></p>
                  </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
              </a>
        </Link>
         )}
          </div>
          {/* <div className="flex justify-center">
              <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 dark:text-gray-400">Load more posts...</button>
          </div> */}
      </div>
  
  
  
  </section>
  
          <section className="   ">
      <div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
          
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {personality2.map((personality)=>
       <Link to={`/personality/${personality.id}`}>
      <div class="lg:hidden border-b-2">
              <div class="bg-white h-full w-full ">
                <div>
                  <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                      <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
          backgroundImage: `url(${personality.attributes.personalImg.data.attributes.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}></div>
                      <div class="pl-3 w-3/5">
                          <p class="text-xs text-gray-500 uppercase">#Personality Test</p>
                          <h3 class="text-md font-semibold leading-tight mb-3">{personality.attributes.personalityTitle}</h3>
                          <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                              <div>{personality.attributes.personalityDesc}</div>
                          </div>
                      </div>
                  </a>
              </div>
            </div>
            </div>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
                  <img role="presentation" className="object-cover w-full rounded h-44   " src={personality.attributes.personalImg.data.attributes.url} />
                  <div className="p-6 space-y-2">
          <h6 className='text-blue-800'>#Personality Test</h6>
                      <h3 className="text-2xl font-semibold   group-focus:underline">{personality.attributes.personalityTitle}</h3>
                      <span className="text-xs ">{personality.attributes.personalityDesc}</span>
                      <p></p>
                  </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
              </a> 
        </Link>
         )}
  
  
  
         {humour2.map((humour)=>
       <Link to={`/humour/${humour.id}`}>
        <div class="lg:hidden ">
              <div class="bg-white h-full w-full border-b-2">
                <div>
                  <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                      <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
          backgroundImage: `url(${humour.attributes.humourImg.data.attributes.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}></div>
                      <div class="pl-3 w-3/5">
                          <p class="text-xs text-gray-500 uppercase">#Humour</p>
                          <h3 class="text-md font-semibold leading-tight mb-3">{humour.attributes.humourTitle}</h3>
                          <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                              <div>{humour.attributes.humourDesc}</div>
                          </div>
                      </div>
                  </a>
              </div>
            </div>
            </div>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
                  <img role="presentation" className="object-cover w-full rounded h-44   " src={humour.attributes.humourImg.data.attributes.url} />
                  <div className="p-6 space-y-2">
          <h6 className='text-blue-800'>#Humour</h6>
                      <h3 className="text-2xl font-semibold   group-focus:underline">{humour.attributes.humourTitle}</h3>
                      <span className="text-xs ">{humour.attributes.humourDesc}</span>
                      <p></p>
                  </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
              </a>
        </Link>
        )}
  
  
        {imagination2.map((imagination)=>
       <Link to={`/imagination/${imagination.id}`}>
        <div class="lg:hidden border-b-2">
              <div class="bg-white h-full w-full ">
                <div>
                  <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                      <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
          backgroundImage: `url(${imagination.attributes.imaginationImg.data.attributes.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}></div>
                      <div class="pl-3 w-3/5">
                          <p class="text-xs text-gray-500 uppercase">#Imagination</p>
                          <h3 class="text-md font-semibold leading-tight mb-3">{imagination.attributes.imaginationTitle}</h3>
                          <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                              <div>{imagination.attributes.imaginationDesc}</div>
                          </div>
                      </div>
                  </a>
              </div>
            </div>
            </div>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
                  <img role="presentation" className="object-cover w-full rounded h-44   " src={imagination.attributes.imaginationImg.data.attributes.url} />
                  <div className="p-6 space-y-2">
          <h6 className='text-blue-800'>#Imagination</h6>
                      <h3 className="text-2xl font-semibold   group-focus:underline">{imagination.attributes.imaginationTitle}</h3>
                      <span className="text-xs ">{imagination.attributes.imaginationDesc}</span>
                      <p></p>
                  </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
              </a>
        </Link>
        )}
  
  
        {personality3.map((personality)=>
       <Link to={`/personality/${personality.id}`}>
        <div class="lg:hidden border-b-2">
              <div class="bg-white h-full w-full ">
                <div>
                  <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                      <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
          backgroundImage: `url(${personality.attributes.personalImg.data.attributes.url})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}></div>
                      <div class="pl-3 w-3/5">
                          <p class="text-xs text-gray-500 uppercase">#Personality Test</p>
                          <h3 class="text-md font-semibold leading-tight mb-3">{personality.attributes.personalityTitle}</h3>
                          <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                              <div>{personality.attributes.personalityDesc}</div>
                          </div>
                      </div>
                  </a>
              </div>
            </div>
            </div>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline     hidden lg:block cardd">
                  <img role="presentation" className="object-cover w-full rounded h-44   " src={personality.attributes.personalImg.data.attributes.url}  />
                  <div className="p-6 space-y-2">
          <h6 className='text-blue-800'>#Personality Test</h6>
                      <h3 className="text-2xl font-semibold   group-focus:underline">{personality.attributes.personalityTitle}</h3>
                      <span className="text-xs ">{personality.attributes.personalityDesc}</span>
                      <p></p>
                  </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
              </a>
         </Link>
         )}
          </div>
          {/* <div className="flex justify-center">
              <button type="button" className="px-6 py-3 text-sm rounded-md hover:underline bg-gray-900 dark:text-gray-400">Load more posts...</button>
          </div> */}
      </div>
  </section>
  
  {/* <div class="lg:hidden ">
              <div class="bg-white h-full w-full ">
                <div>
                  <a href="#" class="flex w-full transform transition-all duration-300 scale-100 hover:scale-95">
                      <div class="block h-30 w-2/5 rounded overflow-hidden"     style={{
          backgroundImage: `url(${"https://source.unsplash.com/200x200/?fashion?1"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}></div>
                      <div class="pl-3 w-3/5">
                          <p class="text-xs text-gray-500 uppercase">MUSIC</p>
                          <h3 class="text-md font-semibold leading-tight mb-3">Lorem ipsum dolor sit amet consectetur adipisicing elit</h3>
                          <div class="flex w-full items-center text-xs text-gray-500 font-medium">
                              <div>Rowena Wheeler</div>
                          </div>
                      </div>
                  </a>
              </div>
            </div>
            </div> */}
  
  
  
  
  <section className="text-gray-900 ">
      <div className="container p-6 mx-auto space-y-6 sm:space-y-12 ">
          
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {humour3.map((humour)=>
       <Link to={`/humour/${humour.id}`}>
      <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
                  <img role="presentation" className="object-cover w-full rounded h-44   " src={humour.attributes.humourImg.data.attributes.url} />
                  <div className="p-6 space-y-2">
          <h6 className='text-blue-800'>#Humour</h6>
                      <h3 className="text-2xl font-semibold   group-focus:underline">{humour.attributes.humourTitle}</h3>
                      <span className="text-xs ">{humour.attributes.humourDesc}</span>
                      <p></p>
                  </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
              </a>
        </Link>
         )}
          {imagination3.map((imagination)=>
       <Link to={`/imagination/${imagination.id}`}>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
                  <img role="presentation" className="object-cover w-full rounded h-44   " src={imagination.attributes.imaginationImg.data.attributes.url} />
                  <div className="p-6 space-y-2">
          <h6 className='text-blue-800'>#Imagination</h6>
                      <h3 className="text-2xl font-semibold   group-focus:underline">{imagination.attributes.imaginationTitle}</h3>
                      <span className="text-xs ">{imagination.attributes.imaginationDesc}</span>
                      <p></p>
                  </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
              </a>
        </Link>
         )}
          {personality4.map((personality)=>
       <Link to={`/personality/${personality.id}`}>
              <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline    cardd">
                  <img role="presentation" className="object-cover w-full rounded h-44   " src={personality.attributes.personalImg.data.attributes.url} />
                  <div className="p-6 space-y-2">
            <h6 className='text-blue-800'>#Personality Test</h6>
                      <h3 className="text-2xl font-semibold   group-focus:underline">{personality.attributes.personalityTitle}</h3>
                      <span className="text-xs ">{personality.attributes.personalityDesc}</span>
                      <p></p>
                  </div>
          <span class="spann topp"></span>
        <span class="spann rightt"></span>
        <span class="spann bottomm"></span>
        <span class="spann leftt"></span>
              </a>
         </Link>
         )}
         <div></div>
         <Link to={"/personality"}>
        <div className="flex justify-center lg:hidden">
              <button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800">Load more posts...</button>
          </div>
      </Link>
          </div>
      <Link to={"/personality"}>
          <div className="flex justify-center hidden lg:block">
              <button type="button" className="px-9 lg:w-full py-3 text-sm rounded-md hover:underline hover:bg-blue-300 bg-blue-800 ">Load more posts...</button>
          </div>
      </Link>
      </div>
  </section>
  
    </>
  )
}

export default CoolStuff