import React from "react";

import { strings } from "@/utils";
import Button from "@/components/button";
const tags = ["Onsite", "Full", "Hybrid"];

const Index = ({ title, showButton }) => {
  return (
    <div className="">
      <div className="headerBg relative mt-4 flex h-[480px] flex-col items-center justify-center sm:h-[200px] md:h-[300px]">
        {showButton && (
          <div className="gap-8px mb-4 mt-[59px] flex items-center rounded-md bg-white">
            {tags.map((tag, index) => (
              <div key={index} className="flex items-center">
                <span className="px-[12.5px] py-[9.5px] text-[14px] font-normal leading-[20.79px] text-color-1">{tag}</span>
                {/* Add line between tags except the last one */}
                {index < tags.length - 1 && <div className="mx-[8px] h-[20px] w-[1px] bg-color-1" />}
              </div>
            ))}
          </div>
        )}

        <h6 className="z-10 text-center text-4xl font-medium text-text md:text-4xl lg:text-5xl">{strings[title]}</h6>
        {showButton && (
          <div className="mb-[80px] mt-[51px] flex items-center justify-center lg:mb-[61px] lg:mt-[29px]">
            <div className="flex flex-col md:items-start md:justify-start md:px-0">
              <Button variant="default" classes="w-full mb-3 rounded-[8px] font-normal border-white px-[64px] py-[12px] text-[16px] text-white ">
                {strings["intrested"]}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
