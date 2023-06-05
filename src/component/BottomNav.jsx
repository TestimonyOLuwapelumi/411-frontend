import React, {useEffect, useState} from 'react'
import "./Bottom.css"
import { Link } from 'react-router-dom'

const BottomNav = () => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsSmallScreen(window.innerWidth < 1100); // set breakpoint to 768px or any value suitable for your use case
      };
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
    }, []);
  
    if (!isSmallScreen) {
      return null; // do not render anything when screen size is not small
    }
  return (
    <>
        <div className="">

        <div className="bottom lg:hidden bg-blue-800">
            <ul className="ul sm:space-x-24  space-x-2 mx-auto">
                <li>
                <Link to={"/home"}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.8425 17.5625H5.1575C3.1025 17.5625 1.4375 15.89 1.4375 13.835V8.27748C1.4375 7.25748 2.0675 5.97498 2.8775 5.34498L6.92 2.19498C8.135 1.24998 10.0775 1.20498 11.3375 2.08998L15.9725 5.33748C16.865 5.95998 17.5625 7.29498 17.5625 8.38248V13.8425C17.5625 15.89 15.8975 17.5625 13.8425 17.5625ZM7.61 3.07998L3.5675 6.22998C3.035 6.64998 2.5625 7.60248 2.5625 8.27748V13.835C2.5625 15.2675 3.725 16.4375 5.1575 16.4375H13.8425C15.275 16.4375 16.4375 15.275 16.4375 13.8425V8.38248C16.4375 7.66248 15.92 6.66498 15.3275 6.25998L10.6925 3.01248C9.8375 2.41248 8.4275 2.44248 7.61 3.07998Z" fill="#f0f8ff"></path>
                        <path d="M9.5 14.5625C9.1925 14.5625 8.9375 14.3075 8.9375 14V11.75C8.9375 11.4425 9.1925 11.1875 9.5 11.1875C9.8075 11.1875 10.0625 11.4425 10.0625 11.75V14C10.0625 14.3075 9.8075 14.5625 9.5 14.5625Z" fill="#f0f8ff"></path>
                    </svg>
                   <span> Home</span>
                   </Link>
                    </li>
                    <li>
                    <Link to={"/category"}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.75 8.5625H13.25C11.435 8.5625 10.4375 7.565 10.4375 5.75V4.25C10.4375 2.435 11.435 1.4375 13.25 1.4375H14.75C16.565 1.4375 17.5625 2.435 17.5625 4.25V5.75C17.5625 7.565 16.565 8.5625 14.75 8.5625ZM13.25 2.5625C12.065 2.5625 11.5625 3.065 11.5625 4.25V5.75C11.5625 6.935 12.065 7.4375 13.25 7.4375H14.75C15.935 7.4375 16.4375 6.935 16.4375 5.75V4.25C16.4375 3.065 15.935 2.5625 14.75 2.5625H13.25Z" fill="#f0f8ff"></path>
                        <path d="M5.75 17.5625H4.25C2.435 17.5625 1.4375 16.565 1.4375 14.75V13.25C1.4375 11.435 2.435 10.4375 4.25 10.4375H5.75C7.565 10.4375 8.5625 11.435 8.5625 13.25V14.75C8.5625 16.565 7.565 17.5625 5.75 17.5625ZM4.25 11.5625C3.065 11.5625 2.5625 12.065 2.5625 13.25V14.75C2.5625 15.935 3.065 16.4375 4.25 16.4375H5.75C6.935 16.4375 7.4375 15.935 7.4375 14.75V13.25C7.4375 12.065 6.935 11.5625 5.75 11.5625H4.25Z" fill="#f0f8ff"></path>
                        <path d="M5 8.5625C3.035 8.5625 1.4375 6.965 1.4375 5C1.4375 3.035 3.035 1.4375 5 1.4375C6.965 1.4375 8.5625 3.035 8.5625 5C8.5625 6.965 6.965 8.5625 5 8.5625ZM5 2.5625C3.6575 2.5625 2.5625 3.6575 2.5625 5C2.5625 6.3425 3.6575 7.4375 5 7.4375C6.3425 7.4375 7.4375 6.3425 7.4375 5C7.4375 3.6575 6.3425 2.5625 5 2.5625Z" fill="#f0f8ff"></path>
                        <path d="M14 17.5625C12.035 17.5625 10.4375 15.965 10.4375 14C10.4375 12.035 12.035 10.4375 14 10.4375C15.965 10.4375 17.5625 12.035 17.5625 14C17.5625 15.965 15.965 17.5625 14 17.5625ZM14 11.5625C12.6575 11.5625 11.5625 12.6575 11.5625 14C11.5625 15.3425 12.6575 16.4375 14 16.4375C15.3425 16.4375 16.4375 15.3425 16.4375 14C16.4375 12.6575 15.3425 11.5625 14 11.5625Z" fill="#f0f8ff"></path>
                    </svg>
                    <span>Categories</span>
                    </Link>
                    </li>

             
                <li>
                    <Link to={"/video"}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.75 17.5625H7.25C3.1775 17.5625 1.4375 15.8225 1.4375 11.75V7.25C1.4375 3.1775 3.1775 1.4375 7.25 1.4375H11.75C15.8225 1.4375 17.5625 3.1775 17.5625 7.25V11.75C17.5625 15.8225 15.8225 17.5625 11.75 17.5625ZM7.25 2.5625C3.7925 2.5625 2.5625 3.7925 2.5625 7.25V11.75C2.5625 15.2075 3.7925 16.4375 7.25 16.4375H11.75C15.2075 16.4375 16.4375 15.2075 16.4375 11.75V7.25C16.4375 3.7925 15.2075 2.5625 11.75 2.5625H7.25Z" fill="#f0f8ff"></path>
                        <path d="M8.56988 12.7775C8.25488 12.7775 7.96238 12.7025 7.69988 12.5525C7.09988 12.2075 6.75488 11.5025 6.75488 10.61V8.38998C6.75488 7.50498 7.09988 6.79248 7.69988 6.44748C8.29988 6.10248 9.07988 6.15498 9.85238 6.60498L11.7799 7.71498C12.5449 8.15748 12.9874 8.80998 12.9874 9.49998C12.9874 10.19 12.5449 10.8425 11.7799 11.285L9.85238 12.395C9.41738 12.65 8.97488 12.7775 8.56988 12.7775ZM8.57738 7.34748C8.45738 7.34748 8.35238 7.36998 8.26988 7.42248C8.02988 7.56498 7.88738 7.91748 7.88738 8.38998V10.61C7.88738 11.0825 8.02238 11.435 8.26988 11.5775C8.50988 11.72 8.88488 11.66 9.29738 11.42L11.2249 10.31C11.6374 10.07 11.8699 9.77748 11.8699 9.49998C11.8699 9.22248 11.6374 8.92248 11.2249 8.68998L9.29738 7.57998C9.02738 7.42248 8.77988 7.34748 8.57738 7.34748Z" fill="#f0f8ff"></path>
                    </svg>
                    <span>Vdeos</span>
                    </Link>
                    </li>
              
                    {/* <li>
                    <Link to={"/video"}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.5 17.24C6.29 17.24 6.07249 17.1876 5.87749 17.0826C5.44999 16.8576 5.1875 16.4075 5.1875 15.9275V14.8626C2.9225 14.6301 1.4375 12.965 1.4375 10.58V6.08008C1.4375 3.50008 3.17 1.76758 5.75 1.76758H13.25C15.83 1.76758 17.5625 3.50008 17.5625 6.08008V10.58C17.5625 13.16 15.83 14.8925 13.25 14.8925H10.4225L7.22748 17.0226C7.00998 17.1651 6.755 17.24 6.5 17.24ZM5.75 2.88507C3.815 2.88507 2.5625 4.13757 2.5625 6.07257V10.5726C2.5625 12.5076 3.815 13.7601 5.75 13.7601C6.0575 13.7601 6.3125 14.0151 6.3125 14.3226V15.9201C6.3125 16.0176 6.3725 16.0626 6.41 16.0851C6.4475 16.1076 6.52251 16.1301 6.60501 16.0776L9.94252 13.8576C10.0325 13.7976 10.145 13.7601 10.2575 13.7601H13.2575C15.1925 13.7601 16.445 12.5076 16.445 10.5726V6.07257C16.445 4.13757 15.1925 2.88507 13.2575 2.88507H5.75V2.88507Z" fill="#f0f8ff"></path>
                        <path d="M9.49986 9.58252C9.19236 9.58252 8.93736 9.32752 8.93736 9.02002V8.86255C8.93736 7.99255 9.57485 7.56504 9.81485 7.40004C10.0923 7.21254 10.1823 7.08505 10.1823 6.89005C10.1823 6.51505 9.87486 6.20752 9.49986 6.20752C9.12486 6.20752 8.81738 6.51505 8.81738 6.89005C8.81738 7.19755 8.56238 7.45255 8.25488 7.45255C7.94738 7.45255 7.69238 7.19755 7.69238 6.89005C7.69238 5.89255 8.50236 5.08252 9.49986 5.08252C10.4974 5.08252 11.3073 5.89255 11.3073 6.89005C11.3073 7.74505 10.6774 8.17253 10.4449 8.33003C10.1524 8.52503 10.0624 8.65255 10.0624 8.86255V9.02002C10.0624 9.33502 9.80736 9.58252 9.49986 9.58252Z" fill="#f0f8ff"></path>
                        <path d="M9.5 11.45C9.185 11.45 8.9375 11.195 8.9375 10.8875C8.9375 10.58 9.1925 10.325 9.5 10.325C9.8075 10.325 10.0625 10.58 10.0625 10.8875C10.0625 11.195 9.815 11.45 9.5 11.45Z" fill="#f0f8ff"></path>
                    </svg>
                    <span>IDK</span>
                    </Link>
                    </li> */}


                    {/* <li>
                    <Link to={"/video"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 448 512">
                        <path d="M319.4 372c48.5-31.3 80.6-85.9 80.6-148c0-97.2-78.8-176-176-176S48 126.8 48 224c0 62.1 32.1 116.6 80.6 148c1.2 17.3 4 38 7.2 57.1l.2 1C56 395.8 0 316.5 0 224C0 100.3 100.3 0 224 0S448 100.3 448 224c0 92.5-56 171.9-136 206.1l.2-1.1c3.1-19.2 6-39.8 7.2-57zm-2.3-38.1c-1.6-5.7-3.9-11.1-7-16.2c-5.8-9.7-13.5-17-21.9-22.4c19.5-17.6 31.8-43 31.8-71.3c0-53-43-96-96-96s-96 43-96 96c0 28.3 12.3 53.8 31.8 71.3c-8.4 5.4-16.1 12.7-21.9 22.4c-3.1 5.1-5.4 10.5-7 16.2C99.8 307.5 80 268 80 224c0-79.5 64.5-144 144-144s144 64.5 144 144c0 44-19.8 83.5-50.9 109.9zM224 312c32.9 0 64 8.6 64 43.8c0 33-12.9 104.1-20.6 132.9c-5.1 19-24.5 23.4-43.4 23.4s-38.2-4.4-43.4-23.4c-7.8-28.5-20.6-99.7-20.6-132.8c0-35.1 31.1-43.8 64-43.8zm0-144a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" fill="#f0f8ff"/>
                        </svg>
                        <span>IDK</span>
                    </Link>
                    </li> */}

                    <li>
                    <Link to={"/podcast"}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 384 512">
                        <path d="M96 96V256c0 53 43 96 96 96s96-43 96-96H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V192H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80V128H208c-8.8 0-16-7.2-16-16s7.2-16 16-16h80c0-53-43-96-96-96S96 43 96 96zM320 240v16c0 70.7-57.3 128-128 128s-128-57.3-128-128V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v24z" fill="#e6e9ec"/>
                    </svg>
                    <span>Podcast</span>
                    </Link>
                    </li>



                <li>
                    <Link to={"/newsletter"}>
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5 17.5625H6.5C2.1875 17.5625 2.1875 15.275 2.1875 13.25V12.5C2.1875 10.8275 2.1875 8.9375 5.75 8.9375C6.6425 8.9375 6.9725 9.155 7.4375 9.5C7.46 9.5225 7.49 9.5375 7.5125 9.5675L8.2775 10.3775C8.9225 11.06 10.0925 11.06 10.7375 10.3775L11.5025 9.5675C11.525 9.545 11.5475 9.5225 11.5775 9.5C12.0425 9.1475 12.3725 8.9375 13.265 8.9375C16.8275 8.9375 16.8275 10.8275 16.8275 12.5V13.25C16.8125 16.115 15.365 17.5625 12.5 17.5625ZM5.75 10.0625C3.3125 10.0625 3.3125 10.8275 3.3125 12.5V13.25C3.3125 15.305 3.3125 16.4375 6.5 16.4375H12.5C14.735 16.4375 15.6875 15.485 15.6875 13.25V12.5C15.6875 10.8275 15.6875 10.0625 13.25 10.0625C12.71 10.0625 12.5975 10.13 12.275 10.37L11.5475 11.1425C11.0075 11.7125 10.28 12.0275 9.5 12.0275C8.72 12.0275 7.9925 11.7125 7.4525 11.1425L6.725 10.37C6.4025 10.13 6.29 10.0625 5.75 10.0625Z" fill="#f0f8ff"></path>
                        <path d="M14.75 10.0625C14.4425 10.0625 14.1875 9.8075 14.1875 9.5V5C14.1875 3.3275 14.1875 2.5625 11.75 2.5625H7.25C4.8125 2.5625 4.8125 3.3275 4.8125 5V9.5C4.8125 9.8075 4.5575 10.0625 4.25 10.0625C3.9425 10.0625 3.6875 9.8075 3.6875 9.5V5C3.6875 3.3275 3.6875 1.4375 7.25 1.4375H11.75C15.3125 1.4375 15.3125 3.3275 15.3125 5V9.5C15.3125 9.8075 15.0575 10.0625 14.75 10.0625Z" fill="#f0f8ff"></path>
                        <path d="M10.9101 7.98511H8.4126C8.1051 7.98511 7.8501 7.73011 7.8501 7.42261C7.8501 7.11511 8.1051 6.86011 8.4126 6.86011H10.9101C11.2176 6.86011 11.4726 7.11511 11.4726 7.42261C11.4726 7.73011 11.2251 7.98511 10.9101 7.98511Z" fill="#f0f8ff"></path>
                        <path d="M11.54 5.73511H7.79004C7.48254 5.73511 7.22754 5.48011 7.22754 5.17261C7.22754 4.86511 7.48254 4.61011 7.79004 4.61011H11.54C11.8475 4.61011 12.1025 4.86511 12.1025 5.17261C12.1025 5.48011 11.855 5.73511 11.54 5.73511Z" fill="#f0f8ff"></path>
                    </svg>
                    <span>Newsletters</span>
                    </Link>
                    </li>
            </ul>
        </div>


        
        </div>

    </>
  )
}

export default BottomNav