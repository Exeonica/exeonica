"use client";

import React, { useState } from "react";
import Image from "next/image";

import { Button } from "@/components/index";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { options } from "@/utils";

const ProjectEstimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedChoice, setSelectedChoice] = useState("");

  const handleIndexChange = (index) => {
    setActiveIndex(index);
  };

  const renderActiveSlide = () => {
    const option = options[activeIndex];

    return (
      <div key={option.id} className="mb-6">
        <>
          <div className="mx-[454px] flex flex-col">
            <p className="mb-[24px] text-[36px] font-semibold leading-[53.46px]">{option.title}</p>

            {option.type === "radio" &&
              option.choices.map((choice, index) => {
                const choiceId = `option${option.id}_choice${index}`;

                return (
                  <div
                    key={index}
                    className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${selectedChoice === choice ? "border-primary" : ""}`}
                    onClick={() => {
                      setSelectedChoice(choice);
                    }}
                  >
                    <div className="flex justify-between">
                      <p>{choice}</p>
                      <input type="radio" name={`option${option.id}`} value={choice} id={choiceId} checked={selectedChoice === choice} onChange={() => {}} className={"accent-primary"} />
                    </div>
                  </div>
                );
              })}

            {option.type === "checkbox" &&
              option.choices.map((choice, index) => {
                const choiceId = `option${option.id}_choice${index}`;

                return (
                  <div
                    key={index}
                    className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${selectedChoice === choice ? "border-primary" : ""}`}
                    onClick={() => {
                      setSelectedChoice(choice);
                    }}
                  >
                    <div className="flex justify-between">
                      <p>{choice}</p>
                      <input type="checkbox" name={`option${option.id}`} value={choice} id={choiceId} checked={selectedChoice === choice} onChange={() => {}} className={"accent-primary"} />
                    </div>
                  </div>
                );
              })}

            {option.type === "radioWithIcon" &&
              option.choices.map((choice, index) => {
                const choiceId = `option${option.id}_choice${index}`;

                return (
                  <div
                    key={index}
                    className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${selectedChoice === choice ? "border-primary" : ""}`}
                    onClick={() => {
                      setSelectedChoice(choice);
                    }}
                  >
                    <div key={index} className="flex w-full justify-between">
                      <div className="flex items-center">
                        {choice.label === "Both" ? null : <Image src={choice.icon} alt={""} className="h-[36px] w-[36px] object-contain" />}
                        <p className="ml-[16px]">{choice.label}</p>
                      </div>
                      <input type="radio" name={`option${option.id}`} value={choice} id={choiceId} checked={selectedChoice === choice} onChange={() => {}} className={"accent-primary"} />
                    </div>
                  </div>
                );
              })}

            {option.type === "checkBoxWithIcon" &&
              option.choices.map((choice, index) => {
                const choiceId = `option${option.id}_choice${index}`;

                return (
                  <div
                    key={index}
                    className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${selectedChoice === choice ? "border-primary" : ""}`}
                    onClick={() => {
                      setSelectedChoice(choice);
                    }}
                  >
                    <div key={index} className="flex w-full justify-between">
                      <div className="flex items-center">
                        {choice.label === "Both" ? null : <Image src={choice.icon} alt={""} className="h-[36px] w-[36px] object-contain" />}
                        <p className="ml-[16px]">{choice.label}</p>
                      </div>
                      <input type="checkbox" name={`option${option.id}`} value={choice} id={choiceId} checked={selectedChoice === choice} onChange={() => {}} className={"accent-primary"} />
                    </div>
                  </div>
                );
              })}

            {option.type === "textarea" &&
              option.placeholders.map((item, index) => (
                // alert(item.placeholders)
                <textarea key={index} placeholder={item} className="mb-4 mt-2 w-full rounded border p-2" rows="2" />
              ))}
          </div>
        </>
      </div>
    );
  };

  return (
    <div className="mb-[56px] flex flex-1 justify-center">
      <div className="mt-[36px] flex flex-1 flex-col items-center justify-center">
        <div>
          <p className="text-[48px] font-semibold leading-[71.28px] text-text">Project Estimation Calculator</p>
          <p className="justify-center text-center text-[24px] font-normal leading-[35.64px] text-color-1">It will take less than 2 min to complete the form</p>
        </div>

        <div className="mb-[45px] mt-[36px] flex justify-center">
          {options.map((_, index) => (
            <div key={index} className={`mx-1 h-[10px] w-[45.2px] rounded-[12px] ${activeIndex === index ? "bg-primary" : "bg-color-9"}`} />
          ))}
        </div>

        <Carousel className="mt-[0px] w-full" onIndexChange={handleIndexChange}>
          <CarouselContent>{renderActiveSlide()}</CarouselContent>
        </Carousel>

        <div className="mt-4 flex items-center justify-between">
          {activeIndex === 0 || activeIndex === options.length - 1 ? null : (
            <Button variant={"outlineRounded"} classes="px-[73px] py-[12px] rounded-[8px] mr-[16px]" disabled={activeIndex === 0} onClick={() => setActiveIndex(activeIndex - 1)}>
              Previous
            </Button>
          )}

          <Button
            classes="px-[73px] py-[12px] rounded-[8px]"
            onClick={() => {
              if (activeIndex === options.length - 1) {
                alert("Submitted");
              } else {
                setActiveIndex(activeIndex + 1);
              }
            }}
          >
            {activeIndex === options.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectEstimation;
