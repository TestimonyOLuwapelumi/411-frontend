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
						class="focus:outline-none modal-close px-4 bg-blue-500 p-3 rounded-lg text-black hover:bg-gray-300"  onClick={closeModal}>Cancel</button>
            <Link to={"https://t.me/+kIB0FR_73L1iMDU0"}>
					<button
						class="focus:outline-none px-4 bg-blue-800 p-3 ml-3 rounded-lg text-white hover:bg-teal-400 flex " onClick={closeModal}>Join us ion Telegram <img src={telegram} alt="logo" className='h-5 w-5 ml-2 mt-1 text-blue-800'/></button>
            </Link>
				</div>
			</div>
		</div>
	</div>







    </>

  );
};

export default Modal;
