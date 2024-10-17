"use client";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

import { Button } from "@/components/index";
import { TrueArrow } from "@/public";
import { strings } from "@/utils";

const ApplicationForm = ({ title, message, onConfirm, btnTitle, classTitle = "", classMessage = "", onClose }) => {
  const formRef = useRef(null);

  const handleClickOutside = (event) => {
    if (formRef.current && !formRef.current.contains(event.target)) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <div className="fixed inset-0 flex items-center justify-center bg-color-11 bg-opacity-75 transition-opacity">
        <div className="relative flex transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
          <div className="flex flex-1 flex-col items-center justify-center py-[28px]">
            <div ref={formRef} className="mr-[80px] w-full items-end justify-end">
              {/* Close Icon */}
              <div className="flex-end flex justify-end">
                <button type="button" onClick={onClose}>
                  <span className="text-[20px] font-bold text-card-foreground">X</span>
                </button>
              </div>
            </div>
            <div className="mb-[20px] flex h-[80px] w-[80px] items-center justify-center rounded-full bg-primary">
              <Image src={TrueArrow} alt={""} className="h-[18.87px] w-[28.33px]" />
            </div>

            <div className="items-center justify-center px-[25.5px] text-center sm:ml-4 sm:mt-0 sm:text-left">
              <p className={`text-center text-[24px] font-semibold leading-[32px] text-text ${classTitle}`} id="modal-title">
                {strings[title]}
              </p>
              <div className="mb-[20px] mt-[16px]">
                <p className={`text-center text-[16px] font-normal leading-[22px] text-color-1 ${classMessage}`}>{strings[message]}</p>
              </div>
            </div>
            <div>
              <Button variant={"default"} onClick={onConfirm} classes="w-full ">
                {strings[btnTitle]}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
