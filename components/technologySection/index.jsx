import React from "react";
import Image from "next/image";

import Button from "../button";

import { strings } from "@/utils";

const TechnologySection = ({ service }) => {
  return (
    <div className="bg-color-9 px-[16px] py-[80px] md:px-[60px] lg:px-[120px] xl:flex xl:flex-row-reverse xl:items-center xl:justify-between xl:gap-x-[75px]">
      <div className="flex flex-col pb-[75px] text-center xl:pb-0 xl:text-start">
        <p className="text-[28px] font-semibold md:text-[40px]">Technologies We Used In {service.title} </p>
        <p className="my-[20px] text-lg font-normal text-color-3">{service.subDesc}</p>
        <div className="flex justify-center xl:justify-start">
          <Button classes="text-xs lg:text-base cursor-default">{strings["getInTouch"]}</Button>
        </div>
      </div>
      <div className="flex justify-center space-x-3 md:space-x-6">
        <div className="flex flex-col items-center justify-center space-y-6">
          {service.technologies.map((item, i) => (
            <div
              key={i}
              className={`flex h-[90px] w-[90px] flex-col items-center justify-center rounded-2xl border border-white bg-white md:h-[144px] md:w-[184px] ${i < 3 || i % 2 === 0 ? "hidden" : ""}`}
            >
              <Image src={item.image} alt={item.title} className="w-[36px] md:w-[68px]" />
              <p className="mt-[10px] text-center text-xs font-medium md:text-base">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          {service.technologies.map((item, i) => (
            <div key={i} className={`flex h-[90px] w-[90px] flex-col items-center justify-center rounded-2xl border border-white bg-white md:h-[144px] md:w-[184px] ${i >= 3 ? "hidden" : ""}`}>
              <Image src={item.image} alt={item.title} className="w-[36px] md:w-[68px]" />
              <p className="mt-[10px] text-center text-xs font-medium md:text-base">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center space-y-6">
          {service.technologies.map((item, i) => (
            <div
              key={i}
              className={`flex h-[90px] w-[90px] flex-col items-center justify-center rounded-2xl border border-white bg-white md:h-[144px] md:w-[184px] ${i < 3 || i % 2 !== 0 ? "hidden" : ""}`}
            >
              <Image src={item.image} alt={item.title} className="w-[36px] md:w-[68px]" />
              <p className="mt-[10px] text-center text-xs font-medium md:text-base">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;
