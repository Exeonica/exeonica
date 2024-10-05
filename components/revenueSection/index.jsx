import React from "react";
import Image from "next/image";

import Button from "../button";

import { DashboardCard } from "@/public";
import { strings } from "@/utils";

const Index = () => {
  return (
    <div className="my-[80px] px-4 py-8 md:mx-[60px] lg:mx-[110px]">
      <div className="flex flex-col rounded-3xl bg-primary md:flex-row md:py-[0px]">
        {/* Left section with image */}
        <div className="flex justify-center pl-[11.5px] pt-[70px] lg:ml-[81.85px] lg:mt-0 lg:w-2/5 lg:justify-start lg:py-[70px]">
          <Image src={DashboardCard} alt="Dashboard illustration" className="object-contain sm:h-[319px] sm:w-[320px] lg:h-[319.11px] lg:w-[446.31px]" />
        </div>

        {/* Right section with text */}
        <div className="mt-6 px-[21.5px] pt-[60px] text-[20px] font-semibold leading-7 md:w-3/5 md:gap-[24px] md:pl-[60px] md:pr-[81.85px] md:pt-[78.55px] md:text-left">
          <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">{strings["partnerWithUsNow"]}</h3>
          <h2 className="mb-4 text-[32px] font-semibold leading-[50px] text-white">{strings["partnerTitle"]}</h2>
          <p className="mb-6 text-base font-normal text-white md:text-[16px] md:leading-[24px]">{strings["partnerDescription"]}</p>
          <div className="sm:w-12/3 md:w-1/4">
            <div className="mt-[24px] flex flex-col pb-[70px] md:items-start md:justify-start md:px-0">
              <Button variant="outline" classes="w-full mb-3 rounded-[8px] font-normal border-white px-[24px] py-[12px] text-[16px] text-white ">
                {strings["getStarted"]}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
