"use client";

import { strings } from "@/utils";

const TextInput = ({ label, placeholder, handleChange = () => {}, type = "text", inputKey = "", value, classes = "", labelclass = "", loading = false, rows, isInvalid, errorMsg }) => {
  const inputClass = `w-full p-2 border ${isInvalid ? "border-red-500" : "border-gray-300"} rounded-md`;

  return (
    <div className="flex flex-col">
      <label className={labelclass}>{strings[label]}</label>
      {rows ? (
        <textarea
          value={value}
          placeholder={placeholder}
          className={`w-full resize-none rounded-md p-4 ${classes} ${inputClass} ${loading ? "cursor-default opacity-50" : ""}`}
          onChange={(e) => handleChange(inputKey, e.target.value)}
          rows={rows}
          disabled={loading}
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          className={`w-full rounded-md p-4 ${classes} ${inputClass} ${loading ? "cursor-default opacity-50" : ""}`}
          onChange={(e) => handleChange(inputKey, e.target.value)}
          disabled={loading}
        />
      )}
      {isInvalid && errorMsg && <p className="text-sm text-red-500">{errorMsg}</p>}
    </div>
  );
};

export default TextInput;
