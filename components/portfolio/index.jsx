import React from "react";
import Image from "next/image";
import Link from "next/link";

import { portfolioData, portfolioFilters, strings } from "@/utils";
import { Button, Carousal } from "@/components/index";

const Index = ({ filter }) => {
  const filteredValue = filter?.replaceAll("%20", " ");

  const renderCard = (portfolioItem, index) => {
    return (
      <div key={index} className={`flex flex-col lg:flex-row ${index % 2 === 0 ? "lg:flex-row lg:gap-[100px]" : "lg:flex-row-reverse lg:gap-[100px]"} mb-[60px] w-full`}>
        <div className="flex flex-1 justify-center lg:justify-start xl:justify-start">
          <Carousal portfolioItem={portfolioItem} index={index} />
        </div>

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

            <div className="mt-[24px] flex flex-col items-start justify-start md:px-0">
              {portfolioItem.link && (
                <a href={portfolioItem.link} target="_blank">
                  <Button variant="default" classes="w-full mb-3 rounded-[8px] px-[16px] py-[10px] text-[16px]">
                    {strings["liveSection"]}
                  </Button>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="px-6 py-[60px] lg:px-[124px] lg:py-[67px] xl:px-[110px]">
      <div className="mb-9 flex space-x-4 overflow-scroll [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <Link href={"/portfolio/all"} scroll={false}>
          <Button variant={filter === "all" ? "bgRounded" : "outlineRounded"}>All</Button>
        </Link>
        {portfolioFilters.map((v, i) => (
          <Link key={i} href={`/portfolio/${v}`} scroll={false}>
            <Button variant={filter.replaceAll("%20", " ") === v ? "bgRounded" : "outlineRounded"}>{v}</Button>
          </Link>
        ))}
      </div>
      <div className="flex flex-1 flex-col lg:items-start">
        {portfolioData.map((card, i) => (filter ? (filter === "all" ? renderCard(card, i) : card.tags.includes(filteredValue) ? renderCard(card, i) : null) : renderCard(card, i)))}
      </div>
    </div>
  );
};

export default Index;
