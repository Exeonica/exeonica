"use client";

import React, { useState, useRef, useEffect } from "react";

import Button from "../button";

import { strings, frequentlyAskedQuestions } from "@/utils";
import { OpenIcon, CloseIcon, MsgIcon, CellPhoneIcon } from "@/public";

const FrequentlyAskedQuestions = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const contentRefs = useRef([]);

  const toggleFAQ = (index) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (activeIndex !== null) {
      contentRefs.current[activeIndex].style.maxHeight = contentRefs.current[activeIndex].scrollHeight + "px";
    }

    contentRefs.current.forEach((ref, idx) => {
      if (idx !== activeIndex && ref) {
        ref.style.maxHeight = "0px";
      }
    });
  }, [activeIndex]);

  return (
    <div className="flex flex-col justify-between px-[16px] py-[80px] md:px-[60px] lg:flex lg:flex-row lg:items-center lg:space-x-[133px] lg:px-[110px]">
      <div className="mb-12 lg:mb-0">
        <p className="w-max rounded-[60px] border border-primary px-[16px] py-[10px] text-xs font-normal text-primary md:text-base">{strings["faqTitle"]}</p>
        <p className="my-2 text-[28px] font-semibold md:text-[40px]">{strings["faqHeading"]}</p>
        <p className="text-base font-normal text-color-1">{strings["faqDesc"]}</p>

        <div className="mt-12">
          {frequentlyAskedQuestions.map((faq, index) => (
            <div key={index} className="border-b border-border py-6 md:mx-[38.5px]">
              <div onClick={() => toggleFAQ(index)} className="flex cursor-pointer items-center justify-between space-x-4 text-xl font-normal text-text">
                <p>{faq.question}</p>
                <span className="text-xl">{activeIndex === index ? <CloseIcon /> : <OpenIcon />}</span>
              </div>
              <div ref={(el) => (contentRefs.current[index] = el)} className="max-h-0 overflow-hidden transition-all duration-500 ease-in-out">
                <p className="mt-[16px] text-base font-normal text-color-1">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-center rounded-[20px] border border-border bg-color-2 p-[30px] text-center md:p-[50px]">
        <MsgIcon />
        <p className="mb-3 mt-[30px] text-xl font-medium">{strings["faqHeading2"]}</p>
        <p className="text-base font-normal text-color-1">{strings["faqDesc2"]}</p>
        <p className="mb-[30px] text-base font-normal text-color-1">{strings["faqDesc3"]}</p>
        <Button variant="bgRounded">
          <div className="mr-2 items-center">
            <CellPhoneIcon />
          </div>
          {strings["faqBtn"]}
        </Button>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestions;
