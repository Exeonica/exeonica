import React from "react";

import { strings } from "@/utils";

export default function TextInput({ placeholder, classes = "", label, labelclass = "", type = "text", value, handleChange, inputKey = "" }) {
  let className = "w-full rounded-sm border border-color-1 bg-transparent pl-[24px] py-2  focus:outline-none";

  return (
    <>
      <label className={`text-base font-medium ${labelclass}`}> {strings[label]}</label>
      <input placeholder={placeholder} className={`${className} ${classes}`} />
      {/* <input type={type} value={value} placeholder={placeholder} className={`w-full rounded-[10px] border border-color-1 p-4 ${classes}`} onChange={(e) => handleChange(inputKey, e.target.value)} /> */}
    </>
  );
}
