"use client";
import React, { useState } from "react";

import { strings } from "@/utils";
import { Button, ApplicationForm, ComHeader } from "@/components/index";

const CareerDetails = ({ job }) => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <>
      <ComHeader>
        <div className="flex flex-1 items-center justify-center">
          <div className="gap-8px mb-4 mt-[59px] flex w-fit items-center rounded-md bg-white">
            {job.tags.map((tag, index) => (
              <div key={index} className="flex items-center">
                <span className="px-[12.5px] py-[9.5px] text-[14px] font-normal leading-[20.79px] text-color-1">{tag}</span>

                {index < job.tags.length - 1 && <div className="mx-[8px] h-[20px] w-[1px] bg-color-1" />}
              </div>
            ))}
          </div>
        </div>

        <p className="z-10 text-center text-4xl font-medium text-text md:text-4xl lg:text-5xl">{job.title}</p>
        <div className="mb-[80px] mt-[60px] flex items-center justify-center lg:mb-[61px] lg:mt-[29px]">
          <div className="flex flex-col md:items-start md:justify-start md:px-0">
            <Button variant="default" onClick={handleButtonClick} classes="w-full mb-3 rounded-[8px] font-normal border-white px-[64px] py-[12px] text-[16px] text-white ">
              {strings["intrested"]}
            </Button>
          </div>
        </div>
      </ComHeader>
      <div className="mx-[16px] mt-[80px] px-4 py-8 lg:mx-[130px] lg:mt-[141px] xl:mx-[225px]">
        <div className="mb-[80px] flex flex-col-reverse md:flex-row lg:gap-[24px]">
          <div className="flex-1">
            <div className="mb-[48px]">
              <span className="mb-[8px] text-[28px] font-semibold leading-[41.58px] text-text">{strings["aboutUs"]}</span>
              <p className="text-[16px] font-normal leading-[23.58px] text-color-1">{strings["jobDescrip"]}</p>
            </div>

            <div>
              <span className="mb-[24px] text-[28px] font-semibold leading-[41.58px] text-text">{strings["jobDescTitle"]}</span>

              {job.jobDetails.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="flex items-center">
                    <span className="mr-2 inline-block h-1 w-8 bg-primary"></span>
                    <p className="mb-[17px] text-[24px] font-semibold leading-[35.76px] text-text">{item.title}</p>
                  </div>

                  <span className="list-inside list-disc space-y-[9px] text-[16px] font-normal leading-[23.58px] text-color-1">
                    {item.descriptions.map((description, index) => (
                      <li key={index} className="gap-[9px]">
                        {" "}
                        {description}
                      </li>
                    ))}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-2/5 rounded-lg p-0 md:p-6">
            <span className="mb-[24px] text-[28px] font-semibold leading-[41.58px] text-text">Job Information</span>

            <div className="text-gray-600">
              {job.jobInfo.map((detail, index) => (
                <span key={index}>
                  <p className="mb-[8px] text-[18px] font-semibold leading-[26.73px] text-text">{detail.title}: </p>
                  <p className="mb-[26px] text-[18px] font-normal leading-[26.73px] text-color-1"> {detail.result}</p>
                </span>
              ))}
            </div>
          </div>
        </div>

        {isFormVisible && <ApplicationForm title={job.title} onClose={handleCloseForm} />}
        <div className="mb-[80px] mt-[60px] flex items-center justify-center lg:mb-[61px] lg:mt-[29px]">
          <div className="flex flex-col md:items-start md:justify-start md:px-0">
            <Button variant="default" onClick={handleButtonClick} classes="w-full mb-3 rounded-[8px] font-normal border-white px-[64px] py-[12px] text-[16px] text-white ">
              {strings["intrested"]}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerDetails;
