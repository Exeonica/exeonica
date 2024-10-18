"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

import { Button, SuccessModal, TextInput } from "@/components/index";
import { Carousel, CarouselContent } from "@/components/ui/carousel";
import { options, strings, sendMail } from "@/utils";
import { TrueArrow, projectEstimation } from "@/public";

const ProjectEstimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeChoiceSelected, setActiveChoiceSelected] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  console.log("form data", formData);

  const handleTextareaChange = (field, value) => {
    const currentOptionIndex = activeIndex;
    const updatedData = [...formData];

    if (!updatedData[activeIndex]) {
      updatedData[activeIndex] = {};
    }

    updatedData[activeIndex] = {
      ...updatedData[activeIndex],
      [field]: value,
      type: options[currentOptionIndex].type,
    };

    setFormData(updatedData);
  };

  const handleButtonClick = () => {
    setModalVisible(true);
  };

  const handleCloseForm = () => {
    setModalVisible(false);
  };

  const handleSelection = (choice, optionIndex) => {
    const updatedData = [...formData];

    updatedData[optionIndex] = {
      title: options[optionIndex].title,
      type: options[optionIndex].type,
      choice,
    };

    setFormData(updatedData);
    setActiveChoiceSelected(choice);
  };

  const handleCheckBoxChoice = (choice) => {
    setFormData((prevData) => {
      const updatedChoices = [...prevData];
      const currentOptionIndex = activeIndex;

      if (!updatedChoices[currentOptionIndex]) {
        updatedChoices[currentOptionIndex] = {
          title: options[currentOptionIndex].title,
          type: options[currentOptionIndex].type,
          choices: [],
        };
      }

      const currentChoices = updatedChoices[currentOptionIndex].choices;
      updatedChoices[currentOptionIndex].choices = currentChoices.filter((c) => c !== choice);
      updatedChoices[currentOptionIndex].choices.push(choice);

      return updatedChoices;
    });
  };

  const handleForm = async () => {
    if (!formData) {
      toast.error("Please Select Data");
      return;
    }

    try {
      setIsLoading(true);
      toast.info("Sending Mail");
      await sendMail(email, projectEstimation);
      toast.success("Mail Sent Successfully");
      setModalVisible(true);
    } catch (error) {
      toast.error(error.message);
      console.log(" credentials ", error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderActiveSlide = () => {
    const option = options[activeIndex];

    return (
      <div key={option.id} className="mb-6">
        <div className="flex flex-1 flex-col px-[33px]">
          <p className="mb-[24px] text-[28px] font-semibold leading-[53.46px] text-card-foreground lg:text-[36px] lg:leading-[41.58px]">{option.title}</p>

          {option.type === "radio" &&
            option.choices.map((choice, index) => {
              const choiceId = `option${option.id}_choice${index}`;

              return (
                <div
                  key={index}
                  className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${activeChoiceSelected === choice ? "border-primary" : ""}`}
                  onClick={() => handleSelection(choice, activeIndex)}
                >
                  <div className="flex flex-1 items-center justify-between">
                    <p className="text-[14px] font-medium leading-[20.79px] text-card-foreground lg:text-[20px] lg:leading-[29.7px]">{choice}</p>
                    <input type="radio" name={`option${option.id}`} value={choice} id={choiceId} checked={activeChoiceSelected === choice} onChange={() => {}} className={"accent-primary"} />
                  </div>
                  <div>{activeChoiceSelected === "Others" ? <TextInput placeholder={"Write Something here"} /> : null}</div>
                </div>
              );
            })}

          {option.type === "radioWithTwoValues" && (
            <div className="space-y-4">
              {/* Two-column layout for the first two rows */}
              <div className="grid grid-cols-2 gap-4">
                {option.choices.slice(0, 4).map((choice, index) => {
                  const choiceId = `option${option.id}_choice${index}`;

                  return (
                    <div
                      key={index}
                      className={`flex cursor-pointer items-center justify-between rounded-[16px] border border-color-1 px-[24px] py-[30px] ${activeChoiceSelected === choice ? "border-primary" : ""}`}
                      onClick={() => handleSelection(choice, activeIndex)}
                    >
                      <p className="text-[14px] font-medium leading-[20.79px] text-card-foreground lg:text-[20px] lg:leading-[29.7px]">{choice}</p>
                      <input type="radio" name={`option${option.id}`} value={choice} id={choiceId} checked={activeChoiceSelected === choice} onChange={() => {}} className={"accent-primary"} />
                    </div>
                  );
                })}
              </div>

              {/* Single-column layout for the remaining options */}
              {option.choices.slice(4).map((choice, index) => {
                const choiceId = `option${option.id}_choice${index + 4}`;

                return (
                  <div
                    key={index}
                    className={`flex cursor-pointer items-center justify-between rounded-[16px] border border-color-1 px-[24px] py-[30px] ${activeChoiceSelected === choice ? "border-primary" : ""}`}
                    onClick={() => handleSelection(choice, activeIndex)}
                  >
                    <p className="text-[14px] font-medium leading-[20.79px] text-card-foreground lg:text-[20px] lg:leading-[29.7px]">{choice}</p>
                    <input type="radio" name={`option${option.id}`} value={choice} id={choiceId} checked={activeChoiceSelected === choice} onChange={() => {}} className={"accent-primary"} />
                  </div>
                );
              })}
            </div>
          )}

          {option.type === "checkbox" &&
            option.choices.map((choice, index) => {
              const choiceId = `option${option.id}_choice${index}`;
              const isSelected = formData[activeIndex]?.choices?.includes(choice) || false;

              return (
                <div
                  key={index}
                  className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${isSelected ? "border-primary" : ""}`}
                  onClick={() => handleCheckBoxChoice(choice)}
                >
                  <div className="flex justify-between">
                    <p className="text-[14px] font-medium leading-[20.79px] text-card-foreground lg:text-[20px] lg:leading-[29.7px]">{choice}</p>
                    <input type="checkbox" name={`option${option.id}`} value={choice} id={choiceId} checked={isSelected} onChange={() => handleCheckBoxChoice(choice)} className={"accent-primary"} />
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
                  className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${activeChoiceSelected === choice.label ? "border-primary" : ""}`}
                  onClick={() => handleSelection(choice.label, activeIndex)}
                >
                  <div key={index} className="flex w-full justify-between">
                    <div className="flex items-center">
                      {choice.label === "Both" ? null : <Image src={choice.icon} alt={""} className="h-[36px] w-[36px] object-contain" />}
                      <p className="ml-[16px] text-[14px] font-medium leading-[20.79px] text-card-foreground lg:text-[20px] lg:leading-[29.7px]">{choice.label}</p>
                    </div>
                    <>
                      <input
                        type="radio"
                        name={`option${option.id}`}
                        value={choice.label}
                        id={choiceId}
                        checked={activeChoiceSelected === choice.label}
                        onChange={() => {}}
                        className={"accent-primary"}
                      />
                    </>
                  </div>
                </div>
              );
            })}
          {option.type === "checkBoxWithIcon" &&
            option.choices.map((choice, index) => {
              const choiceId = `option${option.id}_choice${index}`;
              const isSelected = formData[activeIndex]?.choices?.includes(choice) || false;

              return (
                <div
                  key={index}
                  className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${isSelected ? "border-primary" : ""}`}
                  onClick={() => handleCheckBoxChoice(choice)}
                >
                  <div key={index} className="flex w-full justify-between">
                    <div className="flex items-center">
                      {choice.label === "Others" ? null : <Image src={choice.icon} alt={""} className="h-[36px] w-[36px] object-contain" />}
                      <p className="ml-[16px] text-[14px] font-medium leading-[20.79px] text-card-foreground lg:text-[20px] lg:leading-[29.7px]">{choice.label}</p>
                    </div>
                    <input type="checkbox" name={`option${option.id}`} value={choice} id={choiceId} checked={isSelected} onChange={() => {}} className={"accent-primary"} />
                  </div>
                </div>
              );
            })}
          {option.type === "textarea" &&
            option.placeholders.map((item, index) => (
              <textarea key={index} placeholder={item.placeholder} className="mb-4 mt-2 w-full rounded border p-2" rows="2" onChange={(e) => handleTextareaChange(item.inputKey, e.target.value)} />
            ))}
        </div>
      </div>
    );
  };

  return (
    <div className="mx:[16px] mb-[56px] flex flex-1 flex-col px-[11.5px] md:mx-[210px] lg:mx-[300px] xl:mx-[405px]">
      <div className="mt-[36px] flex flex-1 flex-col items-center justify-center">
        <div>
          <p className="text-center text-[48px] font-semibold leading-[71.28px] text-text">Project Estimation Calculator</p>
          <p className="justify-center text-center text-[24px] font-normal leading-[35.64px] text-color-1">It will take less than 2 min to complete the form</p>
        </div>

        <div className="mb-[45px] mt-[36px] flex justify-center">
          {options.map((_, index) => (
            <div key={index} className={`mx-1 h-[10px] w-[45.2px] rounded-[12px] ${activeIndex === index ? "bg-primary" : "bg-color-9"}`} />
          ))}
        </div>

        <Carousel className="mt-[0px] w-full">
          <CarouselContent>{renderActiveSlide()}</CarouselContent>
        </Carousel>

        <div className="mt-4 flex w-[90%] items-center justify-between md:justify-evenly">
          {activeIndex === 0 || activeIndex === options.length - 1 ? null : (
            <Button
              variant={"outlineRounded"}
              classes="px-[39.5px] mb-[10px] md:[59.5px] py-[12px] rounded-[8px] md:mr-[16px]"
              disabled={activeIndex === 0}
              onClick={() => setActiveIndex(activeIndex - 1)}
            >
              Previous
            </Button>
          )}
          {isModalVisible && (
            <SuccessModal onClose={handleCloseForm} modalstyle={"flex flex-col flex-1 justify-center items-center"}>
              <div className="mb-[20px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary">
                <Image src={TrueArrow} alt={""} className="h-[18.87px] w-[28.33px]" />
              </div>

              <div className="items-center justify-center px-[25.5px] text-center sm:ml-4 sm:mt-0 sm:text-left">
                <p className={`text-center text-[24px] font-semibold leading-[32px] text-text`} id="modal-title">
                  {strings["successMsg"]}
                </p>
                <div className="mb-[20px] mt-[16px]">
                  <p className={`text-center text-[16px] font-normal leading-[22px] text-color-1`}>{strings["successDescription"]}</p>
                </div>
              </div>
              <div>
                <Button variant={"default"} classes="w-full ">
                  <Link href={"/home"}>{strings["goToHome"]}</Link>
                </Button>
              </div>
            </SuccessModal>
          )}
          <Button
            classes="px-[53.5px] mb-[10px] md:[73px] py-[12px] rounded-[8px] md:mr-[16px]"
            onClick={() => {
              if (activeIndex === options.length - 1) {
                handleButtonClick();
                handleForm();
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
