import React from "react";
import Image from "next/image";
import Link from "next/link";

import { portfolioData, portfolioFilters, strings } from "@/utils";
import { Button, Carousal } from "@/components/index";

const Index = ({ filter }) => {
  const renderCard = (portfolioItem, index) => {
    return (
      <div key={index} className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "gap-[100px] lg:flex-row" : "gap-[100px] lg:flex-row-reverse"} mb-[60px] w-full`}>
        {/* Left Section - App Screens */}
        <div className="flex flex-1">
          <Carousal portfolioItem={portfolioItem} index={index} />
        </div>

        {/* Right Section - Project Details */}
        <div className="flex flex-1 flex-col items-start justify-start">
          <div className="mt-12 lg:mt-0 lg:flex-1 lg:text-left">
            <h1 className="mb-[24px] bg-gradient-to-t from-color-7 to-color-8 bg-clip-text text-5xl font-bold text-transparent">{portfolioItem.title}</h1>

            <div className="mt-4 flex flex-wrap gap-[4px] lg:justify-start">
              {portfolioItem.tags.map((tag, tagIndex) => (
                <div key={tagIndex}>
                  <Button variant="outlineRounded" classes="w-full mb-3 rounded-[60px] px-[16px] py-[10px] text-[16px]">
                    {tag}
                  </Button>
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
                <a href={portfolioItem.link} target="_blank">
                  {strings["liveSection"]}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-6 lg:px-[124px] lg:py-[67px] xl:px-[110px]">
      <div className="mb-9 flex space-x-4">
        <Link href={"/portfolio"}>
          <Button variant="outlineRounded">All</Button>
        </Link>
        {portfolioFilters.map((v, i) => (
          <Link key={i} href={`/portfolio/${v}`}>
            <Button variant="outlineRounded">{v}</Button>
          </Link>
        ))}
      </div>
      <div className="flex flex-1 flex-col lg:items-start">
        {portfolioData.map((card, i) => (filter ? (card.tags.includes(filter[0].replace("%20", " ")) ? renderCard(card, i) : null) : renderCard(card, i)))}
      </div>
    </div>
  );
};

export default Index;
