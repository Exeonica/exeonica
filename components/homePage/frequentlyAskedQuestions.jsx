"use client";

import React, { useState } from "react";
import Link from "next/link";

import Button from "../button";

import { strings, frequentlyAskedQuestions } from "@/utils";
import { OpenIcon, CloseIcon, MsgIcon, CellPhoneIcon } from "@/public";

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <div className="flex flex-col justify-between px-[16px] py-[80px] md:px-[60px] lg:flex lg:flex-row lg:items-center lg:space-x-[133px] lg:px-[110px]">
      <div className="mb-12 md:mb-0">
        <Button variant={"outlineRounded"} classes="text-xs md:text-base md:font-normal cursor-default">
          {strings["faqTitle"]}
        </Button>
        <p className="my-2 text-[28px] font-semibold md:text-[40px]">{strings["faqHeading"]}</p>
        <p className="text-lg font-normal text-color-1">{strings["faqDesc"]}</p>

        <div className="mt-12">
          {frequentlyAskedQuestions.map((faq, index) => (
            <div key={index} className="border-b border-border py-6 md:mx-[38.5px]">
              <div onClick={() => toggleFAQ(index)} className="flex cursor-pointer items-center justify-between space-x-4 text-xl font-normal text-text">
                <p>{faq.question}</p>
                <span className="text-xl">{activeIndex === index ? <CloseIcon /> : <OpenIcon />}</span>
              </div>
              <div className={`transition-max-height duration-400 overflow-hidden ease-in-out ${activeIndex === index ? "max-h-screen" : "max-h-0"}`}>
                <p className="mt-[16px] text-base font-normal text-color-1">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center rounded-[20px] border border-border bg-color-2 p-[30px] text-center md:p-[50px] lg:w-[500px]">
        <MsgIcon />
        <p className="mb-3 mt-[30px] text-xl font-medium">{strings["faqHeading2"]}</p>
        <p className="text-base font-normal text-color-1">{strings["faqDesc2"]}</p>
        <p className="mb-[30px] text-base font-normal text-color-1">{strings["faqDesc3"]}</p>
        <Link href={"/contact"}>
          <Button variant="bgRounded">
            <div className="mr-2 items-center">
              <CellPhoneIcon />
            </div>
            {strings["faqBtn"]}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
