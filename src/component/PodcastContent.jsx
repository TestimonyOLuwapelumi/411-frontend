import React from 'react';
import { useParams } from 'react-router-dom';
import SocialMedia from './UI/SocialMedia';
import NewsLetter from './NewsLetter';

const PodcastContent = ({ allDatapo }) => {
  const { id } = useParams();

  // Find the podcast with the matching id
  const podcast = allDatapo.find((podcast) => podcast.id.toString() === id);

  return (
    <>
      <div className="text-center">
        <main className="container mx-auto px-4 py-8">
          {podcast ? (
            <center>
              <div className="flex flex-col items-center justify-center -mx-4">
                <div className="w-full md:w-2/3 px-4">
                <div class="aspect-w-16 aspect-h-9"  dangerouslySetInnerHTML={{ __html: podcast.attributes.podcastYoutube }}/>
                {/* <div
                    className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden"
                    style={{ paddingTop: "56.25%" }}
                  >
                    <div
                      className="embed-responsive-item absolute top-0 right-0 bottom-0 left-0 h-full w-full"
                      dangerouslySetInnerHTML={{ __html: podcast.attributes.podcastYoutube }}
                    />
                  </div> */}
                  <h1 className="text-xl font-bold mb-2">{podcast.attributes.podcastTitle}</h1>
                  <p className="text-lg mb-8">{podcast.attributes.podcastContent}</p>
                </div>
              </div>
            </center>
          ) : (
            <div className="container mx-auto px-4">
              <p className="text-center">Podcast not found.</p>
            </div>
          )}

          <SocialMedia />
        </main>
      </div>
      <hr className="h-1 mx-auto bg-black text-black" />
      <NewsLetter />
    </>
  );
};

export default PodcastContent;
