import React from "react";

export default function TextInput({ placeholder, classes = "" }) {
  let className = "w-full rounded-sm border border-color-1 bg-transparent pl-[24px] py-2  focus:outline-none";

  return <input placeholder={placeholder} className={`${className} ${classes}`} />;
}
