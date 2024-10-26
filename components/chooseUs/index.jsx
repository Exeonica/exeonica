import React from "react";
import Image from "next/image";

import Button from "../button";

import { strings, cardData } from "@/utils";

const ChooseUs = () => {
  return (
    <section className="mx-[16px] my-[80px] lg:mx-[110px]">
      <div>
        <div className="mt-[45.5px] flex flex-1 flex-col items-center justify-center md:px-0">
          <Button variant="outlineRounded" classes="w-full mb-3 rounded-[60px] px-[16px] py-[10px] text-[16px]">
            {strings["whyUs"]}
          </Button>
        </div>
      </div>
      <div className="mb-12 text-center">
        <div className="mt-0 flex flex-col px-4 sm:px-6 lg:px-8">
          {" "}
          <h1 className="md:leading[59.4px] text-title mb-[36px] mt-[8px] text-center text-[28px] font-semibold leading-[41.58px] md:text-[40px]">{strings["whyChooseUs"]}</h1>{" "}
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-y-4 pt-0 md:grid-cols-5 md:gap-x-6">
          {cardData.map((card, i) => {
            return (
              <div key={i} className={`${[0, 3].includes(i) ? "md:col-span-2" : "md:col-span-3"} flex flex-col rounded-[32px] bg-border pl-[36.5px] pt-[31px]`}>
                <h3 className="text-title mb-4 pr-[6px] text-[24px] font-semibold leading-[35.64px]">{card.title}</h3>
                <p className="text-greyBorder mb-4 pr-[104px] text-[18px] font-normal leading-[26.73px]">{card.description}</p>
                <Image src={card.imageSrc} alt={card.imageAlt} className={`flex flex-1 self-end align-bottom ${card.classes}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
