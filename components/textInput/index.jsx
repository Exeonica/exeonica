import React from "react";

import { strings } from "@/utils";

export default function TextInput({ placeholder, disabled, classes = "", label, labelclass = "" }) {
  let baseClassName = "w-full rounded-sm border border-color-1 bg-transparent pl-[24px] py-2 focus:outline-none";
  let disabledClassName = disabled ? "!bg-gray-50 !text-gray-500 cursor-not-allowed" : "";

  return (
    <>
      <label className={`text-base font-medium ${labelclass}`}>{strings[label]}</label>
      <input placeholder={placeholder} className={`${baseClassName} ${disabledClassName} ${classes}`} />
    </>
  );
}
