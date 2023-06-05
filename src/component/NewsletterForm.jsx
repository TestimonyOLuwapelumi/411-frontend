import { useState } from 'react';
import { sanitize } from '../utils/miscellaneous'
import Loading from './Loading';

const NewsletterForm = ( { status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);

  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
  const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });


    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
  const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }

  }

  /**
   * Extract message from string.
   *
   * @param {String} message
   * @return {null|*}
   */
  const getMessage = (message) => {
    if ( !message ) {
      return null;
    }
    const result = message?.split('-') ?? null;
    if ( "0" !== result?.[0]?.trim() ) {
      return sanitize(message);
    }
    const formattedMessage = result?.[1]?.trim() ?? null;
    return formattedMessage ? sanitize( formattedMessage ) : null;
  }

  return (
    <>

    <div className="antialiased font-nunito bg-blue-800 flex items-center justify-center h-screen">
   
 
   <div className="container px-4 sm:px-8 mx-auto max-w-lg">

      
       <div className="wrapper bg-white rounded-sm shadow-lg">

           <div className="card px-8 py-4">
               <div className="card-image mt-10 mb-6">
                   <svg 
                       className="w-10 h-10 text-blue-800 fill-current"
                       xmlns="http://www.w3.org/2000/svg" 
                       width="512" height="512.002" 
                       viewBox="0 0 512 512.002">
                       <g transform="translate(0 0.002)">
                           <path d="M64,257.6,227.9,376a47.72,47.72,0,0,0,56.2,0L728,257.6V96a32,32,0,0,0-32-32H96A32,32,0,0,0,64,96ZM160,160a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Zm0,80a16,16,0,0,1,16-16H336a16,16,0,0,1,16,16v16a16,16,0,0,1-16,16H176a16,16,0,0,1-16-16Z" opacity="0.4"/><path d="M352,160a16,16,0,0,0-16-16H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16Zm-16,64H176a16,16,0,0,0-16,16v16a16,16,0,0,0,16,16H336a16,16,0,0,0,16-16V240A16,16,0,0,0,336,224ZM329.4,41.4C312.6,29.2,279.2-.3,256,0c-23.2-.3-56.6,29.2-73.4,41.4L152,64H360ZM64,129c-23.9,17.7-42.7,31.6-45.6,34A48,48,0,0,0,0,200.7v10.7l64,46.2Zm429.6,34c-2.9-2.3-21.7-16.3-45.6-33.9V257.6l64-46.2V200.7A48,48,0,0,0,493.6,163ZM256,417.1a79.989,79.989,0,0,1-46.888-15.192L0,250.9V464a48,48,0,0,0,48,48H464a48,48,0,0,0,48-48V250.9l-209.1,151A80,80,0,0,1,256,417.1Z"/>
                       </g>
                   </svg>
               </div>

               <div className="card-text">
                   <h1 className="text-xl md:text-2xl font-bold leading-tight text-gray-900">Get the latest content update right into your inbox!</h1>
                   <p className="text-base md:text-lg text-gray-700 mt-3 ">Join 4k+ happy subscribers!</p>
               </div>

               <div className="card-mail flex items-center my-10">
                   <input   onChange={(event) => setEmail(event?.target?.value ?? '')}
            type="email"  className="border-l border-t border-b border-gray-200 rounded-l-md w-full text-base md:text-lg px-3 py-2 " placeholder="Enter Your Email"  onKeyUp={(event) => handleInputKeyEvent(event)}/>
                   <button className="bg-blue-800 hover:bg-gray-100 hover:border-gray-100 text-white font-bold capitalize px-3 py-2 text-base md:text-lg rounded-r-md border-t border-r border-b border-blue-800 ml-3"  onClick={handleFormSubmit}>subscribe</button>
               </div>

               <div>

               { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div
            className="text-blue-800 pt-2"
            dangerouslySetInnerHTML={{ __html: error || getMessage( message ) }}
          />
          
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="text-blue-800 font-bold pt-2" dangerouslySetInnerHTML={{ __html: sanitize(message) }} />
        )}
               </div>
           </div>
       </div>
   </div>
   </div>
    </>
  );
}

export default NewsletterForm