import React from "react";
import Image from "next/image";

import Button from "../button";

import { Search } from "@/public";
import { buttonLabels } from "@/utils";

const page = () => {
  return (
    <div>
      <div>
        {/* Search Bar */}
        <div className="mt-4 flex items-center justify-center">
          <div className="relative flex w-full max-w-lg">
            <input type="text" placeholder="Search for jobs" className="w-full rounded-full border p-3 pl-12 pr-24 text-[16px] font-normal leading-[23.73px] focus:outline-none focus:ring-2" />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 transform text-color-3">
              <Image src={Search} alt="icon" className="h-[20px] w-[20px]" />
            </div>
            <button className="absolute right-0 top-0 h-full rounded-full rounded-l-none bg-primary px-6 text-[16px] font-medium leading-[23.73px] text-white focus:outline-none">Search</button>
          </div>
        </div>
        {/* Buttons Array  */}
        <div className="flex">
          <div className="flex flex-1 items-center justify-center bg-red-200">
            {" "}
            {/* Added h-screen for full-height centering */}
            <div className="mt-[36px] flex flex-wrap justify-center space-x-4">
              {" "}
              {/* Add space between buttons */}
              {buttonLabels.map((label, index) => (
                <div key={index}>
                  {" "}
                  {/* Use 1/3 instead of 12/3 for better responsiveness */}
                  <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                    <Button variant="outlineRounded" classes="w-full mb-3 rounded-[60px] px-[16px] pb-[10px] border-color-1 text-[16px]">
                      {label}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
