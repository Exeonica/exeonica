import React from "react";
import Image from "next/image";

import { portfolioData, strings } from "@/utils";
import { Button } from "@/components/index";

const Index = () => {
  return (
    <div className="my-[60px] px-6 lg:px-[124px] lg:py-[67px]">
      <div className="flex flex-1 flex-col lg:items-start lg:gap-[100px]">
        {portfolioData.map((portfolioItem, index) => (
          <div key={index} className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} mb-12 w-full lg:mb-0 lg:space-x-8`}>
            {/* Left Section - App Screens */}
            <div className="flex flex-1 justify-center">
              <div className="relative w-full max-w-[600px] flex-shrink-0 overflow-hidden rounded-[16px]">
                <Image alt={`Image ${index + 1}`} src={portfolioItem.images[0]} layout="responsive" objectFit="cover" />
                {/* Left Arrow */}
                <div className="absolute left-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer lg:top-[30%] xl:top-1/2">
                  <button className="flex items-center justify-center rounded-full bg-white px-[17px] py-[10px] shadow-lg">
                    <span className="text-[20px] text-color-1">&#8592;</span> {/* Right Arrow Icon */}
                  </button>
                </div>

                {/* Right Arrow */}
                <div className="absolute right-2 top-1/2 z-10 -translate-y-1/2 transform cursor-pointer lg:top-[30%] xl:top-1/2">
                  <button className="flex items-center justify-center rounded-full bg-white px-[17px] py-[10px] shadow-lg">
                    <span className="text-[20px] text-color-1">&#8594;</span> {/* Right Arrow Icon */}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Section - Project Details */}
            <div className="flex flex-1">
              <div className="mt-12 lg:mt-0 lg:flex-1 lg:pl-12 lg:text-left">
                <h1 className="from-color-7 to-color-8 mb-[24px] bg-gradient-to-t bg-clip-text text-5xl font-bold text-transparent">{portfolioItem.title}</h1>

                <div className="mt-4 flex flex-wrap gap-[4px] lg:justify-start">
                  {portfolioItem.tags.map((tag, tagIndex) => (
                    <div key={(tag, tagIndex)}>
                      <div className="flex flex-1 flex-col gap-[4px] md:px-0">
                        <Button variant="outlineRounded" classes="w-full mb-3 rounded-[60px] px-[16px] py-[10px] text-[16px]">
                          {tag}
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="my-[12px] text-[32px] font-semibold leading-[47.52px] text-card-foreground">{portfolioItem.description}</p>
                <p className="text-[18px] font-normal leading-[26.73px] text-color-1">{portfolioItem.details}</p>

                {/* Tools and Technologies */}
                <div className="mt-8">
                  <h2 className="mb-[12px] mt-[24px] text-[22px] font-semibold leading-[32.67px] text-card-foreground">Tools & Technologies</h2>
                  <div className="mt-4 flex flex-wrap gap-[16px]">
                    {portfolioItem.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="rounded-[12px] bg-border p-[15px]">
                        <Image src={tool.icon} alt={tool.name} className="h-[40px] w-[40px] object-contain" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* View Live Project Button */}
                <div className="mt-[24px] flex flex-col items-center justify-center md:items-start md:justify-start md:px-0">
                  <Button variant="default" classes="w-full mb-3 rounded-[8px] px-[16px] py-[10px] text-[16px]">
                    {strings["liveSection"]}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
