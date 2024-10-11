"use client";
import React from "react";

import { strings } from "@/utils";

export default function TextInput({ placeholder, classes = "", label, labelclass = "", type = "text", value = "", handleChange = () => {}, inputKey = "" }) {
  let className = "w-full rounded-md border border-color-1 bg-transparent pl-[24px] py-[15px] text-[18px] text-color-1 font-normal";

  return (
    <>
      <label className={`text-base font-medium ${labelclass}`}> {strings[label]}</label>
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        className={` ${className} ${placeholder === "Cover Letter (optional)" ? "h-[112px] text-start" : ""} ${classes} border`}
        onChange={(e) => handleChange(inputKey, e.target.value)}
      />
    </>
  );
}
