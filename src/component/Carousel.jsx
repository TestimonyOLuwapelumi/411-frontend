import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const previousSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === 0;
    const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
    setCurrentImageIndex(index);
  };

  const nextSlide = () => {
    const lastIndex = images.length - 1;
    const shouldResetIndex = currentImageIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentImageIndex + 1;
    setCurrentImageIndex(index);
  };

  return (
    <div className="relative rounded-lg block md:flex items-center bg-gray-100 shadow-xl">
      <div className="relative w-full md:w-2/5 h-full overflow-hidden rounded-t-lg md:rounded-t-none md:rounded-l-lg">
        <img
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={images[currentImageIndex]}
          alt=""
        />
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button
          className="h-full px-4 text-3xl text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out"
          onClick={nextSlide}
        >
          <FaArrowAltCircleRight />
        </button>
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button
          className="h-full px-4 text-3xl text-gray-800 hover:text-gray-900 transition duration-150 ease-in-out"
          onClick={previousSlide}
        >
          <FaArrowAltCircleLeft />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
