// EmailInput.jsx
import React from "react";

export default function EmailInput({ placeholder, classes = "" }) {
  let className = "w-full rounded-sm border border-gray-400 bg-transparent px-4 py-2 text-white focus:outline-none";

  return <input type="email" placeholder={placeholder} className={`${className} ${classes}`} />;
}
