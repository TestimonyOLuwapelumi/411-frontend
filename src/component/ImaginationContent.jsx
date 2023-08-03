import React from 'react';
import { useParams } from 'react-router-dom';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import Imagination from './Imagination';
import NewsLetter from './NewsLetter';

const ImaginationContent = ({ allDatai }) => {
  const { id } = useParams();

  // Find the imagination content with the matching id
  const imagination = allDatai.find((imagination) => imagination.id.toString() === id);

  return (
    <>
      <div className='w-full pb-10 bg-[#f9f9f9]'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 ss:grid-cols-1 md:gap-x-8 sm:gap-y-8 ss:gap-y-8 px-4 sm:pt-20 md:mt-0 ss:pt-20 text-black'>
            {imagination ? (
              <div className='col-span lg:col-span-2 md:col-span-2'>
                <img
                  className='h-56 w-full object-cover'
                  src={imagination.attributes.imaginationImg.data.attributes.url}
                  alt='imagination'
                />
                <h1 className='font-bold text-2xl my-1 pt-5'>{imagination.attributes.imaginationTitle}</h1>
                <div className='pt-5'>
                  <ReactMarkdown className='line-break'>{imagination.attributes.imaginationContent}</ReactMarkdown>
                </div>
              </div>
            ) : (
              <div className='col-span-3'>
                <p className='text-center'>Imagination content not found.</p>
              </div>
            )}

            {imagination && (
              <div className='items-center w-full bg-white rounded-xl drop-shadow-md py-5 mt-6 max-h-[250px]'>
                <div>
                  <img
                    className='p-2 w-32 h-32 rounded-full mx-auto object-cover'
                    src={imagination.attributes.authorImgi.data.attributes.url}
                    alt='author'
                  />
                  <h1 className='font-bold text-2xl text-center text-gray-900 pt-3'>{imagination.attributes.authorNamei}</h1>
                  <p className='text-center text-gray-900 font-medium'>{imagination.attributes.authorDesci}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <hr className='h-1 mx-auto bg-black text-black' />
      <NewsLetter />
      <Imagination allDatai={allDatai} />
    </>
  );
};

export default ImaginationContent;
