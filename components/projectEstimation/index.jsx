"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../../services/firebaseCofig";

import { Button, SuccessModal, TextInput } from "@/components/index";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { options, strings, sendMail } from "@/utils";
import { TrueArrow, projectEstimation } from "@/public";

const ProjectEstimation = () => {
  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeChoiceSelected, setActiveChoiceSelected] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);
  const [formData, setFormData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [contactData, setContactData] = useState({ email: "", name: "", whatsappNumber: "" });

  useEffect(() => {
    if (!api) {
      return;
    }
  }, [api]);

  const sendData = async (formData) => {
    try {
      const docRef = await addDoc(collection(db, "calculator"), {
        items: formData,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleCloseForm = () => {
    setModalVisible(false);
  };

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
    setContactData(updatedData);
  };

  const handleSelection = (answer, optionIndex) => {
    const updatedData = [...formData];

    if (answer === "Something else" && "Other") {
      updatedData[optionIndex] = {
        question: options[optionIndex].title,
        type: "radio",
        answer,
        message: "",
      };
    } else {
      updatedData[optionIndex] = {
        question: options[optionIndex].title,
        type: "radio",
        answer,
      };
    }

    setFormData(updatedData);
    setActiveChoiceSelected(answer);

    if (answer !== "Something else" && "Other") {
      setActiveIndex(activeIndex + 1);
      api?.scrollTo(activeIndex + 1);
    }
  };

  const handleCheckBoxChoice = (answer) => {
    setFormData((prevData) => {
      let updatedChoices = [...prevData];
      const currentOptionIndex = activeIndex;
      console.log(updatedChoices, activeIndex);

      if (answer === "Other") {
        updatedChoices[currentOptionIndex] = {
          question: options[currentOptionIndex].title,
          type: "checkbox",
          answer: [],
          message: "",
        };
      } else {
        if (!updatedChoices[activeIndex]) {
          updatedChoices[activeIndex] = {
            question: options[activeIndex].title,
            type: "checkbox",
            answer: [],
          };
        }

        const currentAnswers = updatedChoices[activeIndex].answer;

        if (currentAnswers.length) {
          if (currentAnswers.includes(answer)) {
            updatedChoices[activeIndex] = { ...updatedChoices[activeIndex], answer: currentAnswers.filter((c) => c != answer) };
          } else {
            updatedChoices[activeIndex] = {
              ...updatedChoices[activeIndex],
              answer: [...currentAnswers, answer],
            };
          }
        } else {
          updatedChoices[activeIndex].answer = [...currentAnswers, answer];
        }
      }

      return updatedChoices;
    });
  };

  const handleForm = async () => {
    const contactInfo = formData[9];
    sendData(formData);

    if (!contactInfo || !contactInfo.name || !contactInfo.email || !contactInfo.whatsappNumber) {
      toast.error("Please Enter Data");

      return;
    }

    try {
      setIsLoading(true);
      toast.info("Sending Mail");

      await sendMail(contactInfo, projectEstimation);
      toast.success("Mail Sent Successfully");

      setModalVisible(true);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const renderActiveSlide = (option) => {
    return (
      <div key={option.id} className="mb-0">
        <div className="flex h-auto flex-1 flex-col px-[26px] md:px-[33px]">
          <p className="mb-[24px] text-[28px] font-semibold leading-[53.46px] text-card-foreground lg:text-[36px] lg:leading-[41.58px]">{option.title}</p>

          {option.type === "radio" && (
            <div>
              {option.choices.map((choice, index) => {
                const choiceId = `option${option.id}_choice${index}`;

                return (
                  <div
                    key={index}
                    className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${activeChoiceSelected === choice ? "border-primary" : ""}`}
                    onClick={() => handleSelection(choice, activeIndex)}
                  >
                    <div className="flex flex-1 items-center justify-between">
                      <p className="text-[14px] font-medium leading-[20.79px] text-card-foreground lg:text-[20px] lg:leading-[29.7px]">{choice}</p>
                      <input
                        type="radio"
                        name={`option${option.id}`}
                        value={choice}
                        id={choiceId}
                        checked={activeChoiceSelected === choice}
                        onChange={() => {
                          setActiveIndex(activeIndex + 1);
                          api?.scrollTo(activeIndex + 1);

                          if (choice !== "Something else") {
                            null;
                          }
                        }}
                        className={"accent-primary"}
                      />
                    </div>
                  </div>
                );
              })}
              {activeChoiceSelected === "Something else" && (
                <TextInput
                  labelclass="text-lg font-medium"
                  classes="mb-3  w-full rounded-[10px] border border-color-1 py-[30px] bg-white focus:border-primary focus:outline-none "
                  type={"text"}
                  inputKey={"message"}
                  placeholder="write a short note..."
                  value={formData[activeIndex]?.message}
                  handleChange={handleTextareaChange}
                  loading={isLoading}
                />
              )}
            </div>
          )}

          {option.type === "radioWithTwoValues" && (
            <div className="mb-7 space-y-[25px]">
              <div className="grid grid-cols-2 gap-[25px]">
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
              <div>
                {option.choices.slice(4).map((choice, index) => {
                  const choiceId = `option${option.id}_choice${index + 4}`;

                  return (
                    <div
                      key={index}
                      className={`mt-[25px] flex cursor-pointer items-center justify-between rounded-[16px] border border-color-1 px-[24px] py-[30px] ${activeChoiceSelected === choice ? "border-primary" : ""}`}
                      onClick={() => handleSelection(choice, activeIndex)}
                    >
                      <p className="text-[14px] font-medium leading-[20.79px] text-card-foreground lg:text-[20px] lg:leading-[29.7px]">{choice}</p>
                      <input type="radio" name={`option${option.id}`} value={choice} id={choiceId} checked={activeChoiceSelected === choice} onChange={() => {}} className={"accent-primary"} />
                    </div>
                  );
                })}
              </div>
              {activeChoiceSelected === "Other" && (
                <TextInput
                  labelclass="text-lg font-medium"
                  classes="mb-3 w-full rounded-[10px] border border-color-1 py-[30px] bg-white focus:border-primary focus:outline-none"
                  type={"text"}
                  inputKey={"message"}
                  placeholder="write a short note..."
                  value={formData[activeIndex]?.message || ""}
                  handleChange={handleTextareaChange}
                  loading={isLoading}
                />
              )}
            </div>
          )}
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

          {option.type === "checkbox" &&
            option.choices.map((option, index) => {
              const choiceId = `option${option.id}_choice${index}`;
              const isSelected = formData[activeIndex]?.answer?.includes(option) || false;

              return (
                <div
                  key={index}
                  className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${isSelected ? "border-primary" : ""}`}
                  onClick={() => handleCheckBoxChoice(option)}
                >
                  <div className="flex justify-between">
                    <p className="text-[14px] font-medium leading-[20.79px] text-card-foreground lg:text-[20px] lg:leading-[29.7px]">{option}</p>
                    <input type="checkbox" name={`option${option.id}`} value={option} id={choiceId} checked={isSelected} onChange={() => handleCheckBoxChoice(option)} className={"accent-primary"} />
                  </div>
                </div>
              );
            })}

          {option.type === "checkBoxWithIcon" && (
            <div>
              {option.choices.map((answer, index) => {
                const choiceId = `option${option.id}_choice${index}`;
                const isSelected = formData[activeIndex]?.answer?.includes(answer.label) || false;

                return (
                  <div
                    key={choiceId}
                    className={`mb-7 cursor-pointer rounded-[16px] border border-color-1 px-[24px] py-[30px] ${isSelected ? "border-primary" : ""}`}
                    onClick={() => handleCheckBoxChoice(answer.label)}
                  >
                    <div className="flex w-full justify-between">
                      <div className="flex items-center">
                        {answer.label === "Others" ? null : <Image src={answer.icon} alt="" className="h-[36px] w-[36px] object-contain" />}
                        <p className="ml-[16px] text-[14px] font-medium leading-[20.79px] text-card-foreground lg:text-[20px] lg:leading-[29.7px]">{answer.label}</p>
                      </div>
                      <input type="checkbox" name={`option${option.id}`} value={answer.label} id={choiceId} checked={isSelected} onChange={() => {}} className="accent-primary" />
                    </div>
                  </div>
                );
              })}

              {activeChoiceSelected === "Others" && (
                <TextInput
                  labelclass="text-lg font-medium"
                  classes="mb-3 w-full rounded-[10px] border border-color-1 py-[30px] bg-white focus:border-primary focus:outline-none"
                  type="text"
                  inputKey="message"
                  placeholder="write a short note..."
                  value={formData[activeIndex]?.message || ""}
                  handleChange={handleTextareaChange}
                  loading={isLoading}
                />
              )}
            </div>
          )}

          {option.type === "contact" &&
            option.placeholders.map((item, index) => (
              <div key={index}>
                <TextInput
                  labelclass="text-lg font-medium"
                  classes=" text-text mb-3 py-[30px] w-full rounded-[10px] border border-color-1 pl-[24px] bg-white "
                  type={item.type}
                  inputKey={item.inputKey}
                  placeholder={item.placeholder}
                  value={contactData[item.inputKey]}
                  handleChange={handleTextareaChange}
                  loading={isLoading}
                />
              </div>
            ))}
        </div>
        <div className="flex w-[100%] items-center justify-evenly lg:justify-evenly">
          {activeIndex === 0 || activeIndex === options.length - 1 ? null : (
            <Button
              onClick={() => {
                setActiveIndex(activeIndex - 1);
                api?.scrollTo(activeIndex - 1);
              }}
              variant={"outlineRounded"}
              classes="px-[39.5px] mb-[10px] md:[59.5px] py-[12px] rounded-[8px] md:mr-[16px]"
              disabled={activeIndex === 0}
            >
              Previous
            </Button>
          )}
          <Button
            classes="px-[53.5px] mb-[10px] md:[73px] py-[12px] rounded-[8px] md:mr-[16px]"
            onClick={() => {
              if (activeIndex === options.length - 1) {
                handleForm();
              } else {
                setActiveIndex(activeIndex + 1);
                api?.scrollTo(activeIndex + 1);
              }
            }}
            disabled={activeIndex !== options.length - 1 && !(formData[activeIndex]?.choices?.length > 0 || formData[activeIndex]?.answer || formData[activeIndex]?.message)}
          >
            {activeIndex === options.length - 1 ? "Submit" : "Next"}
          </Button>
        </div>
      </div>
    );
  };

  return (
    <div className="mx:[16px] mb-[56px] flex flex-1 flex-col px-[11.5px]">
      <div className="mt-[36px] flex flex-1 flex-col items-center justify-center">
        <div>
          <p className="text-center text-[36px] font-semibold leading-[53.46px] text-text md:text-[48px] md:leading-[71.28px]">Project Estimation Calculator</p>
          <p className="justify-center text-center text-[24px] font-normal leading-[35.64px] text-color-1">It will take less than 2 min to complete the form</p>
        </div>

        <div className="mb-[45px] mt-[36px] flex flex-1 sm:flex sm:flex-row sm:flex-wrap sm:justify-center sm:gap-2">
          {options.map((_, index) => (
            <div key={index} className={`mx-1 h-[10px] w-[24px] rounded-[12px] sm:w-[16.5px] md:w-[45.2px] ${activeIndex === index ? "bg-primary" : "bg-color-9"}`} />
          ))}
        </div>

        <Carousel setApi={setApi} className="flex h-fit max-w-[410px] flex-1 px-[16px] sm:max-w-[520px] md:max-w-[629px]">
          <CarouselContent>
            {options.map((option, index) => (
              <CarouselItem key={index}>{renderActiveSlide(option)}</CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {isModalVisible && (
          <SuccessModal onClose={handleCloseForm} modalstyle={"flex flex-col flex-1 justify-center items-center"}>
            <>
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
              <Link href={"/"}>
                <Button variant="default">{strings.goToHome}</Button>
              </Link>
            </>
          </SuccessModal>
        )}
      </div>
    </div>
  );
};

export default ProjectEstimation;
