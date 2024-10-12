"use client";

import React, { useState } from "react";
import Image from "next/image";

import Button from "../button";

import { testimonialData } from "@/utils";
import { Quotes, LeftArrow, RightArrow } from "@/public";

const TestimonialCarousal = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    // Move to the next testimonial or loop back
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialData.length);
  };

  const handlePrev = () => {
    // Move to the previous testimonial or loop back
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialData.length) % testimonialData.length);
  };

  const currentTestimonial = testimonialData[currentIndex];

  return (
    <div className="relative flex flex-col rounded-2xl border border-border bg-white px-6 pt-[58px] md:px-[71px]">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold text-primary">What they Says</p>
        <Quotes />
      </div>
      <div className="flex min-h-[250px] text-start">
        <p className="my-9 text-lg font-normal text-color-1">{currentTestimonial.description}</p>
      </div>
      <hr className="border border-color-1 text-color-1" />
      <div className="mb-[60px] mt-9 flex flex-col md:mt-8 md:flex-row md:items-center md:justify-between">
        <div className="flex gap-x-[14px] text-start">
          <div>
            <Image src={currentTestimonial.imageSrc} width={"auto"} height="auto" className="h-12 w-12 rounded-full object-cover" priority />
          </div>
          <div>
            <p className="text-xl font-bold text-color-1">{currentTestimonial.developerName}</p>
            <p className="text-sm font-normal text-black">{currentTestimonial.developerTitle}</p>
          </div>
        </div>
        <div className="mt-9 flex space-x-[10px] md:mt-0">
          <Button variant="outlineIcon" onClick={handlePrev}>
            <RightArrow />
          </Button>
          <Button variant="outlineIcon" onClick={handleNext}>
            <LeftArrow />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousal;
