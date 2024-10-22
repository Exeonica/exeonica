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
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {portfolioItem.images.map((imageSrc, index) => (
            <CarouselItem key={index}>
              <Image src={imageSrc} alt={`Project Image ${index + 1}`} width={600} height={400} className="h-auto w-max object-cover" />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="absolute left-0 top-1/2 ml-6 -translate-y-1/2 transform">
          <button
            onClick={() => {
              api?.scrollTo(current) - 1;
            }}
            className="flex items-center justify-center rounded-full bg-white px-[17px] py-[10px] shadow-lg"
          >
            <span className="text-[20px] text-color-1">&#8592;</span>
          </button>
        </div>
        <div className="absolute right-0 top-1/2 mr-6 -translate-y-1/2 transform">
          <button
            onClick={() => {
              api?.scrollTo(current) + 1;
            }}
            className="flex items-center justify-center rounded-full bg-white px-[17px] py-[10px] shadow-lg"
          >
            <span className="text-[20px] text-color-1">&#8594;</span>
          </button>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousal;
