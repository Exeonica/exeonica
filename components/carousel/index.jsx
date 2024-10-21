"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const Carousal = ({ portfolioItem }) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

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
