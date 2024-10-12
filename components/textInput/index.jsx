"use client";

import React from "react";

import { strings } from "@/utils";

const TextInput = ({ label, placeholder, handleChange, type = "text", inputKey = "", value, classes, labelclass }) => {
  return (
    <div className="flex flex-col">
      <label className={labelclass}>{strings[label]}</label>
      <input type={type} value={value} placeholder={placeholder} className={`w-full rounded-[10px] border border-color-1 p-4 ${classes}`} onChange={(e) => handleChange(inputKey, e.target.value)} />
    </div>
  );
};

export default TextInput;
