import React from 'react';
import { useParams } from 'react-router-dom';
import SocialMedia from './UI/SocialMedia';
import NewsLetter from './NewsLetter';

const VideoContent = ({ allDatav }) => {
  const { id } = useParams();

  // Find the video with the matching id
  const video = allDatav.find((video) => video.id.toString() === id);

  return (
    <>
      {video ? (
        <div className="text-center">
          <main className="container mx-auto px-4 py-8">
            <center>
              <div className="flex flex-col items-center justify-center -mx-4">
                <div className="w-full md:w-2/3 px-4">
                  <div class="aspect-w-16 aspect-h-9"  dangerouslySetInnerHTML={{ __html: video.attributes.videoYoutube }}/>
        
                  
                  <h1 className="text-4xl font-bold mb-2">{video.attributes.videoTitle}</h1>
                  <p className="text-lg mb-8">{video.attributes.videoContent}</p>
                </div>
              </div>
            </center>
            <SocialMedia />
          </main>
        </div>
      ) : (
        <div className="text-center">
          <p>Video not found.</p>
        </div>
      )}
      <hr className="h-1 mx-auto bg-black text-black" />
      <NewsLetter />
    </>
  );
};

export default VideoContent;
