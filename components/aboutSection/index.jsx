import React from "react";
import Link from "next/link";
import Image from "next/image";

import Button from "../button";

import { AboutUsImg } from "@/public";
import { strings } from "@/utils";

const AboutSection = ({ btnLabel, title, description, classes }) => {
  return (
    <div className={`py-[80px] lg:px-[137px] ${classes}`}>
      <div className="flex flex-col px-[16px] sm:justify-center md:flex-row md:items-start">
        {/* Left Section */}
        <div className="flex flex-1 flex-col">
          <div className="sm:w-12/3 md:w-1/4">
            <div className="mt-[45.5px] flex flex-col items-center justify-center md:items-start md:justify-start md:px-0">
              <Button variant="outlineRounded" classes="w-full mb-3 text-[16px] cursor-default">
                {strings[btnLabel] || btnLabel}
              </Button>
            </div>
          </div>

          <div className="mt-2 flex flex-1 flex-col items-start justify-start md:px-0">
            {" "}
            <div className="container">
              <h1 className="text-title mb-4 text-center text-[28px] font-semibold leading-[41.58px] md:text-left md:leading-[54.9px] lg:text-[40px]"> {strings[title] || title}</h1>
            </div>
            <p className="text-center text-[18px] font-normal leading-[26.73px] text-color-1 md:text-start md:leading-[26.73px]">{strings[description] || description}</p>
          </div>

          <div className="sm:w-12/3 md:w-1/4">
            <div className="mt-[24px] flex flex-col items-center justify-center md:items-start md:justify-start md:px-0">
              <Link href={"./about"}>
                <Button variant="default" classes="w-full rounded-[8px] px-[16px] py-[10px] text-[16px]">
                  {strings["learnMore"]}
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="px:16 mt-8 flex flex-1 items-center justify-center md:mt-0">
          <Image src={AboutUsImg} alt="Picture of the author" width={"auto"} height={"auto"} className="sm:h-[343px] sm:w-[349px] lg:h-[507px] lg:w-[516px]" />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
