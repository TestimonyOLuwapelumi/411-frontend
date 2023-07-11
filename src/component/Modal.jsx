import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import{logoo, telegram} from '../assets';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    // Code to automatically close the modal after a certain time
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 50000); // Close modal after 5 seconds

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) {
    return null; // Don't render anything if the modal is closed
  }

  return (
    <>       

    {/* <div className="fixed z-10 inset-0 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen p-4 text-center">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
        </div>
        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h2 className="text-lg font-bold mb-4">Modal Title</h2>
            <p className="mb-4">Modal content goes here.</p>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
          <Link to={"https://t.me/+kLBOFR_73L1iMDUO"}>
            <button
              type="button"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={closeModal}
            >
                
              JOIN 
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div> */}

{/* <div className="absolute inset-0 bg-gray-500 opacity-75 w-screen h-screen"></div> */}

    	<div class="main-modal fixed w-full h-100 inset-0 z-50 overflow-hidden flex justify-center items-center animated fadeIn faster"
		>
		<div
			class="border border-teal-500 shadow-lg modal-container bg-white w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
			<div class="modal-content py-4 text-left px-6">
				<div class="flex justify-between items-center pb-3">
					<p class="text-2xl font-bold"></p>
          <img src={logoo} alt="logo" className='h-16 w-16'/>
					<div class="modal-close cursor-pointer z-50">
            <button  onClick={closeModal} className='bg-white'>

						<svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
							viewBox="0 0 18 18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
							</path>
						</svg>
            </button>
					</div>
				</div>
				<div class="my-5">
					<p>Are you looking for a creative community where you can interact with like-minds, read stories and make contributions by participating in monthly challenges? JOIN THE 411 SQUAD 👇</p>
				</div>
				<div class="flex justify-end pt-2">
					<button
						class="focus:outline-none modal-close px-3 bg-blue-500 p-2 rounded-lg text-black hover:bg-gray-300"  onClick={closeModal}>Cancel</button>
            <Link to={"https://t.me/+kIB0FR_73L1iMDU0"}>
					<button
						className="focus:outline-none px-3 text-xs lg:text-lg  bg-blue-800 p-2 ml-3 rounded-lg text-white hover:bg-teal-400 flex " onClick={closeModal}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="mt-0 lg:mt-1 bi bi-telegram" viewBox="0 0 16 16"> <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/> </svg> <span className='mt-1'>Join us ion Telegram</span>  </button>
            </Link>
				</div>
			</div>
		</div>
	</div>

  {/* <img src={telegram} alt="logo" className='h-10 w-10 ml-2 mt-1 text-blue-800'/> */}





    </>

  );
};

export default Modal;
