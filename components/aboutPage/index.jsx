import React from "react";
import Image from "next/image";

import Button from "../button";

import { Award1, Award2, Award3, Award4, Award5, Award6 } from "@/public";
import { strings } from "@/utils";

const images = [
  { src: Award4, alt: "Picture of the author 1" },
  { src: Award1, alt: "Picture of the author 1" },
  { src: Award2, alt: "Picture of the author 2", classes: "h-[120px] w-[267.91px]" },
  { src: Award3, alt: "Picture of the author 3" },
  { src: Award5, alt: "Picture of the author 2" },
  { src: Award6, alt: "Picture of the author 3", classes: "h-[120px] w-[171.17px]" },
];

const Awards = () => {
  return (
    <div className="flex flex-1 flex-col bg-border sm:justify-center md:flex-row">
      {/* Left Section */}
      <div className="flex flex-1 flex-col items-center py-[80px] md:justify-center">
        <div className="flex flex-col items-center justify-center">
          <div className="sm:w-12/3 md:w-1/4">
            <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:px-0">
              <Button variant="outlineRounded" classes="w-full mb-3 rounded-[60px] px-[16px] pb-[10px] text-[16px]">
                {strings["awards"]}
              </Button>
            </div>
          </div>

          <div className="mt-0 flex flex-col px-4 sm:px-6 lg:px-8">
            {" "}
            <h1 className="md:leading[59.4px] text-title mb-[36px] mt-[8px] text-center text-[28px] font-semibold leading-[41.58px] md:text-[40px]">{strings["ourAwardsAndCertificates"]}</h1>{" "}
          </div>
        </div>
        {/* Right Section */}
        <div className="mx-[37px] flex w-full flex-col items-center justify-center gap-[36px] md:mx-[136px] md:flex-row md:flex-wrap">
          {images.map((image) => (
            <Image key={image.src} src={image.src} alt={image.alt} className={`m-2 h-[120px] w-[108.22px] object-cover ${image.classes || ""}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Awards;
