"use client";
import React, { useState } from "react";

import { jobDetails, strings, jobInfo } from "@/utils";
import { Button, ApplicationForm } from "@/components/index";

const CareerDetails = () => {
  const [isFormVisible, setFormVisible] = useState(false);

  const handleButtonClick = () => {
    setFormVisible(true);
  };

  const handleCloseForm = () => {
    setFormVisible(false);
  };

  return (
    <div className="mx-[16px] mt-[80px] px-4 py-8 lg:mx-[225px] lg:mt-[141px]">
      <div className="mb-[80px] flex flex-col-reverse md:flex-row lg:gap-[24px]">
        {/* Left Job Details Side */}
        <div className="flex-1">
          <div className="mb-[48px]">
            <span className="mb-[8px] text-[28px] font-semibold leading-[41.58px] text-text">{strings["aboutUs"]}</span>
            <p className="text-[16px] font-normal leading-[23.58px] text-color-1">{strings["jobDescrip"]}</p>
          </div>

          <div>
            <span className="mb-[24px] text-[28px] font-semibold leading-[41.58px] text-text">{strings["jobDescTitle"]}</span>

            {jobDetails.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="flex items-center">
                  <span className="mr-2 inline-block h-1 w-8 bg-primary"></span>
                  <p className="mb-[17px] text-[24px] font-semibold leading-[35.76px] text-text">{item.title}</p>
                </div>

                <span className="list-inside list-disc space-y-[9px] text-[16px] font-normal leading-[23.58px] text-color-1">
                  {item.descriptions.map((description, index) => (
                    <li key={index} className="gap-[9px]">
                      {" "}
                      {/* to create bullets use li tag  */}
                      {description}
                    </li>
                  ))}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Job Information)  */}

        <div className="flex-2/5 rounded-lg p-6">
          <span className="mb-[24px] text-[28px] font-semibold leading-[41.58px] text-text">Job Information</span>

          <div className="text-gray-600">
            {jobInfo.map((detail, index) => (
              <span key={index}>
                <p className="mb-[8px] text-[18px] font-semibold leading-[26.73px] text-text">{detail.title}: </p>
                <p className="mb-[26px] text-[18px] font-normal leading-[26.73px] text-color-1"> {detail.result}</p>
              </span>
            ))}
          </div>
        </div>
      </div>

      {isFormVisible && <ApplicationForm onClose={handleCloseForm} />}

      {/* Button Container */}
      <div className="mb-[80px] mt-[60px] flex items-center justify-center lg:mb-[61px] lg:mt-[29px]">
        <div className="flex flex-col md:items-start md:justify-start md:px-0">
          <Button variant="default" onClick={handleButtonClick} classes="w-full mb-3 rounded-[8px] font-normal border-white px-[64px] py-[12px] text-[16px] text-white ">
            {strings["intrested"]}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CareerDetails;
