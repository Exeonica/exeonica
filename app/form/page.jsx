import React from "react";

import TextInput from "../../components/textInput";

import { strings } from "@/utils";
import Button from "@/components/button";

const placeholders = ["Name", "Email", "Whatspp Number", "Total Experience", "Last Degree", "Last Degree Completion year", "CGPA", "Cover Letter (optional)"];

const page = () => {
  return (
    <div className="lg:mb[1040px] lg-px[82px] lg:mx-[375px] lg:mt-[758px] lg:pt-[53px]">
      <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="lg-px[82px] lg-px[82px] relative transform overflow-hidden rounded-2xl bg-white p-[20px] text-left shadow-xl transition-all lg:pt-[53px]">
              <div>
                <p className="mb-[8px] text-center text-[36px] font-semibold leading-[53.46px] text-text">Application for UI/Ux Designer</p>
              </div>
              {placeholders.map((placeholder, index) => (
                <div className="pb-5" key={index}>
                  <TextInput placeholder={placeholder} />
                </div>
              ))}
              <div className="flex flex-row items-center">
                <span className="rounded-md bg-border px-[34px] py-[6px] text-[18px] font-light text-text">{strings["uploadCV"]}</span>
                <p className="ml-[13px]">{strings["fileAttachment"]}</p>
              </div>
              <div className="mb-[80px] mt-[60px] flex items-center justify-center lg:mx-[82px] lg:mb-[53px] lg:mt-[29px]">
                {/* <div className="flex flex-col md:items-start md:justify-start md:px-0"> */}
                <Button variant="default" classes="w-full  rounded-[8px] font-bold border-white px-[64px] py-[12px] text-[16px] text-white ">
                  {strings["apply"]}
                </Button>
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
