import React from "react";
import Image from "next/image";

import Button from "../button";

import { strings, cardData } from "@/utils";

const index = () => {
  return (
    <section className="my-[80px]">
      {/* Why Us Button */}
      <div>
        <div className="mt-[45.5px] flex flex-1 flex-col items-center justify-center md:px-0">
          <Button variant="outline" classes="w-full mb-3 rounded-[60px] px-[16px] py-[10px] text-[16px]">
            {strings["whyUs"]}
          </Button>
        </div>
      </div>

      {/* Main Heading */}
      <div className="mb-12 text-center">
        <div className="mt-0 flex flex-col px-4 sm:px-6 lg:px-8">
          {" "}
          <h1 className="md:leading[59.4px] mb-[36px] mt-[8px] text-center text-[28px] font-semibold leading-[41.58px] text-title md:text-[40px]">{strings["whyChooseUs"]}</h1>{" "}
        </div>
      </div>

      {/* Grid of Cards */}

      <div>
        <div className="mx-[16px] my-0 grid grid-cols-1 gap-8 py-0 md:grid-cols-2 md:px-[110px] lg:grid-cols-2">
          {cardData.map((card) => {
            return (
              <div key={card.title} className={`flex flex-col rounded-[32px] bg-border pl-[36.5px] pt-[31px]`}>
                <h3 className="mb-4 pr-[6px] text-[24px] font-semibold leading-[35.64px] text-title">{card.title}</h3>
                <p className="mb-4 pr-[104px] text-[18px] font-normal leading-[26.73px] text-greyBorder">{card.description}</p>
                <Image src={card.imageSrc} alt={card.imageAlt} className={`self-end align-bottom ${card.classes}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default index;
