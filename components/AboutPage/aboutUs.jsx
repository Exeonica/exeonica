import React from "react";
import Image from "next/image";

import { Button } from "../ui/button";

import { AboutUsImg } from "@/public";
import { strings } from "@/utils";

const data = [
  { id: 1, title: "Card 1", number: 10 },
  { id: 2, title: "Card 2", number: 20 },
  { id: 3, title: "Card 3", number: 30 },
  { id: 4, title: "Card 4", number: 40 },
];

const aboutUs = () => {
  return (
    <div>
      <div className="mt-[80px] flex h-screen flex-col sm:justify-center md:flex-row md:items-start lg:px-[137px]">
        {/* Left Section */}
        <div className="flex flex-1 flex-col sm:items-center sm:justify-center md:items-start">
          <div className="sm:w-12/3 md:w-1/4">
            <Button variant="outline" size="full" className="mx-1 mb-[8px] mt-12 rounded-3xl">
              {strings["aboutUs"]}
            </Button>
          </div>

          <div className="mt-0 flex flex-1 flex-col bg-gray-400 sm:px-6 md:items-start md:justify-start">
            {" "}
            <h1 className="leading-1 mb-4 text-center text-2xl font-medium text-title sm:text-3xl lg:text-[40px]">{strings["aboutTitle"]}</h1> {/* Responsive text size */}
            <p className="text-center text-xs font-normal text-description sm:text-sm">{strings["aboutDescription"]}</p> {/* Responsive text size */}
          </div>
          <div className="mt-[36px] flex flex-1 justify-center px-4 sm:px-[108px] md:w-1/4">
            <Button size="full" className="mx-2 sm:mx-7 sm:w-1/4">
              {strings["learnMore"]}
            </Button>
          </div>
        </div>

        {/* Right Section */}
        <div className="px:16 mt-8 flex flex-1 items-center justify-center md:mt-0">
          <Image src={AboutUsImg} alt="Picture of the author" width={"auto"} height={"auto"} className="sm:h-[343px] sm:w-[349px] lg:h-[507px] lg:w-[516px]" />
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {data.map((item) => (
          <div className="rounded-md bg-white p-4 shadow-md">
            <h2 className="text-xl font-bold text-gray-200">{item.title}</h2>
            <p className="text-3xl font-extrabold text-gray-300">{item.number}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default aboutUs;
