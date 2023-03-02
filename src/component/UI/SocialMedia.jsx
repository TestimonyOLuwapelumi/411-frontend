import React from 'react'
import "./SocialMedia.css"

const SocialMedia = () => {
  return (
    <>
         <div>
                <p className="text-lg font-bold mb-8">socials Medias</p>
                <div className="icons">
                    <a href="https://www.instagram.com/_thx411" className="icon icon--instagram">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/_thx411" className="icon icon--twitter">
                        <i className="fa fa-twitter"></i>
                    </a>
                    {/* <a href="https://www.tiktok.com/@_thx411" className="icon icon--linkedin">
                        <i className="fas fa-tiktok"></i>
                    </a> */}
                    {/* <a href="#" className="icon icon--facebook">
                        <i className="fa fa-instagram"></i>
                    </a> */}
                </div>
                
            </div>
    </>
  )
}

export default SocialMedia