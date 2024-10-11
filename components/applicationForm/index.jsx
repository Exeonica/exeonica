import React from "react";

import { TextInput, Button } from "@/components/index";
import { strings } from "@/utils";

const placeholders = ["Name", "Email", "Whatspp Number", "Total Experience", "Last Degree", "Last Degree Completion year", "CGPA", "Cover Letter (optional)"];

const ApplicationForm = ({ onClose }) => {
  return (
    <div className="relative z-10 flex items-center justify-center" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 bg-color-6 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative !max-h-[50%] transform overflow-scroll rounded-2xl bg-white px-[12px] py-[37px] text-left shadow-xl transition-all lg:px-[82px] lg:py-[53px]">
            {/* Title */}
            <div>
              <p className="mb-[35px] text-center text-[28px] font-semibold leading-[41.58px] text-text lg:text-[36px] lg:leading-[53.46px]">Application for UI/Ux Designer</p>
            </div>
            {/* Text Input Feilds */}
            {placeholders.map((placeholder, index) => (
              <div className="pb-5" key={index}>
                <TextInput placeholder={placeholder} classes="" />
              </div>
            ))}
            {/* Upload CV module */}
            <div className="flex flex-row items-center">
              <span className="rounded-md bg-border px-[34px] py-[6px] text-[18px] font-light text-text">{strings["uploadCV"]}</span>
              <p className="ml-[13px]">{strings["fileAttachment"]}</p>
            </div>

            <div className="mt-[60px] flex w-full lg:mt-[29px]">
              <Button variant="default" classes="w-full rounded-[8px] font-bold border-white px-[64px] py-[12px] text-[16px] text-white ">
                {strings["apply"]}
              </Button>
              <button type="button" onClick={onClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
