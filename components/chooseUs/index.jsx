"use client";

import React from "react";
import Button from "../button";
import Image from "next/image";

import { strings, cardData } from "@/utils";

const index = () => {
  return (
    <section className="py-16">
      {/* Why Us Button */}
      <div className="sm:w-12/3 items-center justify-center">
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
          {/* Adjust padding */}
          <h1 className="md:leading[59.4px] mb-[36px] mt-[8px] px-[36] text-center font-pangeaAfrikanTrial text-[28px] font-semibold leading-[41.58px] text-title md:text-[40px]">
            {strings["whyChooseUs"]}
          </h1>{" "}
          {/* Responsive text size */}
        </div>
      </div>

      {/* Grid of Cards */}

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 px-[110px] md:grid-cols-2 lg:grid-cols-2">
          {cardData.map((card) => {
            console.log(card);
            return (
              <div key={card.title} className={`relative flex flex-col rounded-lg bg-border pl-[36px] pt-[30px] ${card.card || ""}`}>
                <h3 className="mb-8 text-[24px] font-semibold leading-[35.64px] text-title">{card.title}</h3>
                <p className="text-greyBorder mb-6 text-[18px] font-normal leading-[26.73px]">{card.description}</p>
                {card.classes && <Image src={card.imageSrc} width={"auto"} height={"auto"} alt={card.imageAlt} className={card.classes} />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default index;
