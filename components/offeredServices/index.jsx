"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

const OfferedServices = ({ service }) => {
  const [api, setApi] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState(service.offers[0].title);

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  return (
    <div className="bg-color-2 px-[16px] py-[80px] md:px-[108px]">
      <div className="flex flex-col items-center text-center">
        <p className="my-2 text-[28px] font-semibold md:text-[40px]">Services we offer in {service.title}</p>
        <p className="text-lg font-normal text-color-3">{service.desc}</p>
      </div>
      <div className="mt-[70px] lg:flex lg:items-center lg:justify-between lg:space-x-[50px] xl:space-x-[100px]">
        <div className="lg:w-[50%] xl:w-[70%]">
          {service.offers.map((item, index) => (
            <div key={index} className="mt-4">
              <button
                onClick={() => {
                  setSelectedBtn(item.title);
                  api?.scrollTo(index);
                }}
                className={`w-full px-[30px] py-[30px] text-left text-2xl font-semibold text-color-1 hover:rounded-[15px] hover:bg-primary hover:text-color-10 ${selectedBtn === item.title ? "rounded-[15px] bg-primary text-color-10" : ""}`}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 lg:mt-0 lg:w-[50%]">
          <Carousel setApi={setApi}>
            <CarouselContent>
              {service.offers.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="h-[343px] w-[343px] md:h-[400px] md:w-[400px] lg:h-[520px] lg:w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={"auto"}
                      height={"auto"}
                      className="h-[285px] w-[285px] rounded-2xl object-cover md:min-h-[400px] md:min-w-[400px] lg:h-[520px] lg:w-full"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default OfferedServices;
