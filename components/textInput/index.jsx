// EmailInput.jsx
import React from "react";

export default function EmailInput({ placeholder, classes = "" }) {
  let className = "w-full rounded-sm border border-gray-400 bg-transparent pl-[24px] py-2  focus:outline-none";

  return <input type="email" placeholder={placeholder} className={`${className} ${classes}`} />;
}
