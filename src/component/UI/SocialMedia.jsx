import React from 'react'
import "./SocialMedia.css"
import { Link } from 'react-router-dom'

const SocialMedia = () => {
  return (
    <>
         <div>
                <p className="text-lg font-bold mb-8">Share to socials</p>
                <div className="icons">
                    <a href="https://www.instagram.com/_thx411/" className="icon icon--instagram">
                        <i className="fa fa-instagram"></i>
                    </a>
                    <a href="https://twitter.com/_thx411" className="icon icon--twitter">
                        <i className="fa fa-twitter"></i>
                    </a>
                    <a href="https://www.youtube.com/@_thx411" className="icon icon--linkedin">
                        <i className="fa fa-youtube"></i>
                    </a>
                    <a href="https://www.tiktok.com/@thx411_" className="icon icon--facebook">
                        <i className="fa fa-tiktok"></i>
                    </a>
                </div>
            </div>
    </>
  )
}

export default SocialMedia