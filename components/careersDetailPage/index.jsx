import React from "react";

import { jobDetails, strings, jobInfo } from "@/utils";
import Button from "@/components/button";

const page = () => {
  return (
    <div>
      <div className="container">
        <div className="mx-[16px] mt-[80px] flex flex-1 flex-col-reverse bg-orange-300 px-4 py-8 md:flex-row lg:mx-[225px] lg:mt-[141px]">
          {/* Left Job Details Side */}
          <div className="flex-1 bg-slate-200">
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
          <div>
            <div className="flex-1/2 rounded-lg p-6">
              <span className="mb-[24px] text-[28px] font-semibold leading-[41.58px] text-text">Job Information</span>

              <div className="text-gray-600">
                {jobInfo.map((detail, index) => (
                  <span key={index}>
                    <span className="mb-[8px] text-[18px] font-semibold leading-[26.73px] text-text">{detail.title}: </span>
                    <span className="mb-[26px] text-[18px] font-normal leading-[26.73px] text-color-1"> {detail.result}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[109px]">
          <div className="flex flex-col md:items-start md:justify-start md:px-0">
            <Button variant="default" classes="w-full mb-3 rounded-[8px] font-normal border-white px-[64px] py-[12px] text-[16px] text-white ">
              {strings["intrested"]}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
