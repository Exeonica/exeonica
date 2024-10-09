import React from "react";

import { strings } from "@/utils";

export default function TextInput({ placeholder, classes = "", label, labelclass = "" }) {
  let className = "w-full rounded-sm border border-color-1 bg-transparent pl-[24px] py-2  focus:outline-none";

  return (
    <>
      <label className={`text-base font-medium ${labelclass}`}> {strings[label]}</label>
      <input placeholder={placeholder} className={`${className} ${classes}`} />
    </>
  );
}
