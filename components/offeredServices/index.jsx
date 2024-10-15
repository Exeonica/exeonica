import React from "react";
import Image from "next/image";

import { offerImage } from "@/public";

const OfferedServices = ({ service }) => {
  return (
    <div className="bg-color-2 px-[16px] py-[80px] md:px-[108px]">
      <div className="flex flex-col items-center text-center">
        <p className="my-2 text-[28px] font-semibold md:text-[40px]">Services we offer in {service.title}</p>
        <p className="text-lg font-normal text-color-3">{service.desc}</p>
      </div>
      <div className="mt-[70px] lg:flex lg:items-center lg:justify-between lg:gap-x-[100px]">
        <div className="lg:w-[50%]">
          {service.offers.map((item, index) => (
            <div key={index}>
              <p className="px-[30px] py-[30px] text-2xl font-semibold text-color-1 hover:rounded-[15px] hover:border hover:border-primary hover:bg-primary hover:text-color-10">{item.title}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 lg:mt-0">
          <Image
            src={offerImage}
            alt="software Engineering settings"
            width={"auto"}
            height={"auto"}
            className="h-[343px] w-[343px] object-contain md:min-h-[400px] md:min-w-[400px] lg:h-[631px] lg:w-[518px]"
          />
        </div>
      </div>
    </div>
  );
};

export default OfferedServices;
