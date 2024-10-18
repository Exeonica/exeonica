"use client";

import React, { useState } from "react";
import Image from "next/image";

const Carousal = ({ portfolioItem }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleImageChange = () => {
    // Move to the next image or loop back
    setCurrentIndex((prevIndex) => (prevIndex + 1) % portfolioItem.images.length);
  };

  const handleImageChangeBack = () => {
    // Move to the previous image or loop back
    setCurrentIndex((prevIndex) => (prevIndex - 1 + portfolioItem.images.length) % portfolioItem.images.length);
  };

  return (
    <div className="relative w-full max-w-[600px] flex-shrink-0 overflow-hidden rounded-[16px]">
      {/* Show the current image */}
      <Image alt={`Image ${currentIndex + 1}`} src={portfolioItem.images[currentIndex]} layout="responsive" className="block" />

      {/* Left Arrow */}
      <div className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer lg:top-[35%] xl:top-1/2">
        <button className="flex items-center justify-center rounded-full bg-white px-[17px] py-[10px] shadow-lg" onClick={handleImageChangeBack}>
          <span className="text-[20px] text-color-1">&#8592;</span>
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer lg:top-[35%] xl:top-1/2">
        <button className="flex items-center justify-center rounded-full bg-white px-[17px] py-[10px] shadow-lg" onClick={handleImageChange}>
          <span className="text-[20px] text-color-1">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
