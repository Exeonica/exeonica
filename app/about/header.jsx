import React from "react";
import Image from "next/image";

import About from "../../public/Images/about.png";
import TopLeft from "../../public/Images/TopLeft.png";
import BottomRight from "../../public/Images/AboutBottomRight.png";

// import { AboutTop } from "@/public";
import { strings } from "@/utils";

const header = () => {
  return (
    <div>
      {/* top section */}
      <div className="relative mt-4 flex h-72 items-center justify-center bg-headerbg">
        <Image
          src={TopLeft}
          alt="Top Left"
          className="absolute left-0 top-0"
          width={350}
          height={300}
          sizes="(max-width: 640px) 100px, (max-width: 768px) 200px, 350px" // Dynamic width based on viewport
        />
        <h6 className="z-10 text-4xl font-medium text-title md:text-4xl lg:text-5xl">ABOUT US</h6>
        <Image
          src={BottomRight}
          alt="Bottom Right"
          className="absolute bottom-0 right-0"
          width={350}
          height={300}
          sizes="(max-width: 640px) 100px, (max-width: 768px) 200px, 350px" // Dynamic width based on viewport
        />
      </div>

      <div className="ml-24 mt-10 flex h-screen">
        {/* Left Section */}
        <div className="flex flex-1 flex-col">
          <div className="flex flex-1 flex-col items-start justify-start">
            <button className="rounded-full border border-primary bg-transparent px-4 py-2 text-rounderbtn transition duration-300 hover:bg-rounderbtn hover:text-white">Click Me</button>
          </div>

          <div className="mt-0 flex flex-col">
            <h1 className="leading-1 mb-4 text-4xl text-title">{strings["aboutTitle"]}</h1>
            <p className="font-thin text-description">{strings["aboutDescription"]}</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex flex-1 items-center justify-center">
          <div>
            <Image src={About} alt="Picture of the author" layout="responsive" priority />
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
