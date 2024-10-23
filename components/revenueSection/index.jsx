import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../button";

import { DashboardCard } from "@/public";
import { strings } from "@/utils";

const RevenueSection = () => {
  return (
    <div className="my-[80px] px-[16px] md:mx-[60px] xl:my-[70px]">
      <div className="flex flex-col rounded-3xl bg-primary lg:flex-row">
        <div className="flex justify-center px-[11.5px] lg:ml-[81.85px] lg:mt-0 lg:w-2/5 lg:justify-start lg:pt-[70px]">
          <Image src={DashboardCard} alt="Dashboard illustration" className="h-[300px] w-[300px] object-contain sm:h-[319px] sm:w-[320px] lg:h-[319.11px] lg:w-[446.31px]" />
        </div>

        <div className="mt-6 px-[21.5px] pt-[10px] text-[20px] font-semibold leading-7 sm:pt-[0px] md:pl-[60px] md:pr-[81.85px] md:text-left lg:w-3/5 lg:gap-[24px] lg:py-[60px] lg:pt-[70px]">
          <h3 className="mb-2 text-lg font-semibold text-white sm:text-xl">{strings["partnerWithUsNow"]}</h3>
          <h2 className="mb-4 text-[32px] font-semibold leading-[50px] text-white">{strings["partnerTitle"]}</h2>
          <p className="mb-6 text-base font-normal text-white md:text-[16px] md:leading-[24px]">{strings["partnerDescription"]}</p>
          <div className="sm:w-12/3 md:w-1/4">
            <div className="mt-[24px] flex flex-col pb-[70px] md:items-start md:justify-start md:px-0">
              <Link href={"/contact"}>
                <Button variant="outline" classes="w-full rounded-[8px] font-normal border-white px-[24px] py-[12px] text-[16px] text-white ">
                  {strings["getStarted"]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueSection;
