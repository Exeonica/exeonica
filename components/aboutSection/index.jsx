import React from "react";
import Image from "next/image";

import Button from "../button";

import { AboutUsImg } from "@/public";
import { strings, aboutInfo } from "@/utils";

const index = ({ btnLabel, title, description }) => {
  return (
    <div className="mt-[80px]">
      <div className="flex flex-col px-[16px] sm:justify-center md:flex-row md:items-start lg:px-[137px]">
        {/* Left Section */}
        <div className="flex flex-1 flex-col">
          <div className="sm:w-12/3 md:w-1/4">
            <div className="mt-[45.5px] flex flex-col items-center justify-center md:items-start md:justify-start md:px-0">
              <Button variant="outline" classes="w-full mb-3 rounded-[60px] px-[16px] py-[10px] text-[16px]">
                {strings[btnLabel]}
              </Button>
            </div>
          </div>

          <div className="mt-0 flex flex-1 flex-col items-start justify-start md:px-0">
            {" "}
            <div className="container">
              <h1 className="mb-4 text-center text-[28px] font-semibold leading-[41.58px] text-title md:text-left md:leading-[54.9px] lg:text-[40px]"> {strings[title]}</h1>
            </div>
            <p className="text-color-1 text-center text-[18px] font-normal leading-[26.73px] md:text-start md:leading-[26.73px]">{strings[description]}</p>
          </div>

          <div className="sm:w-12/3 md:w-1/4">
            <div className="mt-[24px] flex flex-col items-center justify-center md:items-start md:justify-start md:px-0">
              <Button variant="default" classes="w-full mb-3 rounded-[8px] px-[16px] py-[10px] text-[16px]">
                {strings["learnMore"]}
              </Button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="px:16 mt-8 flex flex-1 items-center justify-center md:mt-0">
          <Image src={AboutUsImg} alt="Picture of the author" width={"auto"} height={"auto"} className="sm:h-[343px] sm:w-[349px] lg:h-[507px] lg:w-[516px]" />
        </div>
      </div>

      {/* Cards Section */}
      <div className="lg:px[90px] mb-[80px] mt-[36px] flex flex-wrap items-center justify-center gap-4">
        {aboutInfo.map((item, index) => (
          <div key={index} className="h-[129px] w-[276px] rounded-[12px] border border-border bg-border pl-[27px] pt-[26px]">
            <h2 className="mb-2 text-3xl font-bold text-gray-900">{item.noService}</h2>
            <p className={`font-medium text-gray-500`}>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default index;
