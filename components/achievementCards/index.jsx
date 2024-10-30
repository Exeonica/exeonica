import React from "react";

import Button from "../button";

import { strings, aboutInfo } from "@/utils";

const AchievementCards = ({ cardclass, btnTitle, heading, classes, hiddenClass }) => {
  return (
    <div className={`px-[16px] pb-[80px] lg:px-[137px] ${classes}`}>
      <div className={`flex flex-col items-center justify-center ${hiddenClass}`}>
        <Button variant={"outlineRounded"} classes="text-xs md:text-base md:font-normal cursor-default">
          {strings[btnTitle]}
        </Button>
        <p className="my-[18px] text-[28px] font-semibold md:text-[40px]">{strings[heading]}</p>
      </div>
      <div className="grid grid-cols-1 gap-[24px] px-[15px] pt-[36px] md:grid-cols-2 xl:grid-cols-4">
        {aboutInfo.map((item, index) => (
          <div key={index} className={`rounded-[12px] border border-border bg-border py-[26px] pl-[27px] shadow-sm ${cardclass} `}>
            <h2 className="mb-2 text-3xl font-bold text-gray-900">{item.noService}</h2>
            <p className="font-medium text-gray-500">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AchievementCards;
