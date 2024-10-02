import React from "react";
import Image from "next/image";
import { DashboardCard } from "@/public";
import { strings } from "@/utils";

const partners = () => {
  return (
    <div className="mx-[110px] flex items-center justify-center">
      <div className="mt-6 flex flex-col items-center justify-center self-center rounded-xl bg-primary py-[70px] md:mt-0 md:flex-row">
        {/* Left section with image */}

        <div className="px:16 flex flex-1 items-center md:mt-0">
          <Image src={DashboardCard} alt="Picture of the author" width={"auto"} height={"auto"} className="sm:h-[319px] sm:w-[320px] lg:h-[250px] lg:w-[1220px]" />
        </div>

        {/* Right section with text */}
        <div className="mt-6 w-full md:mt-0 md:w-1/2 md:text-left">
          <h3 className="mb-4 text-xl font-semibold text-white">{strings["partnerWithUsNow"]}</h3>
          <h2 className="font-seminold mb-4 text-[42px] leading-[50px] text-white">{strings["partnerTitle"]}</h2>
          <p className="mb-6 text-[16px] font-normal leading-[24px] text-white">{strings["partnerDescription"]}</p>
          <button className="rounded-full bg-white px-6 py-3 font-semibold text-blue-500 transition hover:bg-gray-100">{strings["getStarted"]}</button>
        </div>
      </div>
    </div>
  );
};

export default partners;
