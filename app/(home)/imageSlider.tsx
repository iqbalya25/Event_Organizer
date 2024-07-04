"use client";
import React, { useState } from "react";

interface ImageSliderProps {
  images: string[];
}

const ImageSlider: React.FC<ImageSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const getPrevIndex = (index: number) => {
    return (index - 1 + images.length) % images.length;
  };

  const getNextIndex = (index: number) => {
    return (index + 1) % images.length;
  };

  return (
    <div>
      <h1 className="text-2xl md:text-4xl font-bold flex justify-center p-5">
        OUR RELIABLE PARTNER
      </h1>
      <div className="relative w-full max-w-5xl mx-auto my-5">
        <div className="flex items-center justify-center overflow-hidden rounded-lg">
          <div className="flex-shrink-0 w-1/4 h-auto p-2 opacity-50 transition-opacity duration-300">
            <img
              src={images[getPrevIndex(currentIndex)]}
              alt={`Slide ${getPrevIndex(currentIndex)}`}
              className="hidden md:block w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-shrink-0 w-2/4 h-auto p-2">
            <img
              src={images[currentIndex]}
              alt={`Slide ${currentIndex}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex-shrink-0 w-1/4 h-auto p-2 opacity-50 transition-opacity duration-300">
            <img
              src={images[getNextIndex(currentIndex)]}
              alt={`Slide ${getNextIndex(currentIndex)}`}
              className="hidden md:block w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
        <button
          onClick={prevImage}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-gray-700 rounded-full p-2"
        >
          &lt;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-gray-700 rounded-full p-2"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
