"use client";

import React from "react";
import Image from "next/image";

const Carousal = ({ portfolioItem, index }) => {
  const currentIndices = portfolioItem.images.map(() => 0);

  const handleImageChange = (index) => {
    const imageElements = document.querySelectorAll(`.image-${index}`);
    const currentIndex = currentIndices[index];

    // Move to the next image or loop back
    currentIndices[index] = (currentIndex + 1) % portfolioItem.images.length;

    imageElements.forEach((imgElem, imgIndex) => {
      imgElem.style.display = imgIndex === currentIndices[index] ? "block" : "none";
    });
  };

  const handleImageChangeBack = (index) => {
    const imageElements = document.querySelectorAll(`.image-${index}`);
    const currentIndex = currentIndices[index];

    // Move to the previous image or loop back
    currentIndices[index] = (currentIndex - 1 + portfolioItem.images.length) % portfolioItem.images.length;

    imageElements.forEach((imgElem, imgIndex) => {
      imgElem.style.display = imgIndex === currentIndices[index] ? "block" : "none";
    });
  };

  return (
    <div className="relative w-full max-w-[600px] flex-shrink-0 overflow-hidden rounded-[16px]">
      {portfolioItem.images.map((image, imgIndex) => (
        <Image key={imgIndex} alt={`Image ${imgIndex + 1}`} src={image} layout="responsive" objectFit="cover" className={`image-${index} ${imgIndex === currentIndices[index] ? "block" : "hidden"}`} />
      ))}

      {/* Left Arrow */}
      <div className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer lg:top-[30%] xl:top-1/2">
        <button className="flex items-center justify-center rounded-full bg-white px-[17px] py-[10px] shadow-lg" onClick={() => handleImageChangeBack(index)}>
          <span className="text-[20px] text-color-1">&#8592;</span>
        </button>
      </div>

      {/* Right Arrow */}
      <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer lg:top-[30%] xl:top-1/2">
        <button className="flex items-center justify-center rounded-full bg-white px-[17px] py-[10px] shadow-lg" onClick={() => handleImageChange(index)}>
          <span className="text-[20px] text-color-1">&#8594;</span>
        </button>
      </div>
    </div>
  );
};

export default Carousal;
