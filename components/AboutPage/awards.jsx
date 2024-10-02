import React from "react";
import Image from "next/image";

import { Button } from "../ui/button";

import { Award1, Award2, Award3, Award4, Award5, Award6 } from "@/public";
import { strings } from "@/utils";

const images = [
  { src: Award1, alt: "Picture of the author 1" },
  { src: Award2, alt: "Picture of the author 2" },
  { src: Award3, alt: "Picture of the author 3" },
  { src: Award4, alt: "Picture of the author 1" },
  { src: Award5, alt: "Picture of the author 2" },
  { src: Award6, alt: "Picture of the author 3" },
];

const awards = () => {
  return (
    <div className="flex flex-col bg-border sm:justify-center md:flex-row md:py-[80px]">
      {/* Left Section */}
      <div className="flex flex-1 flex-col items-center py-[80px] md:justify-center">
        <div className="sm:w-12/3 md:w-1/4">
          <Button variant="outline" size="full" className="mx-1 mb-[8px] mt-12 rounded-3xl">
            {strings["aboutUs"]}
          </Button>
        </div>

        <div className="mt-0 flex flex-col px-4 sm:px-6 lg:px-8">
          {" "}
          {/* Adjust padding */}
          <h1 className="leading-1 mb-[36px] mt-[8px] pb-[36] text-center font-semibold text-title sm:text-2xl md:text-[40px]">{strings["ourAwardsAndCertificates"]}</h1> {/* Responsive text size */}
        </div>

        <div className="justify-cente mx-[37px] flex w-full flex-col items-center md:mx-[136px] md:w-9/12 md:flex-row md:justify-between">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.src}
              alt={image.alt}
              className="m-2 h-[120px] w-[108.22px] object-contain" // Add object-cover to maintain aspect ratio
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default awards;
