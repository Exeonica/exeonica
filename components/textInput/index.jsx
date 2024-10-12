"use client";

import { strings } from "@/utils";

const TextInput = ({ label, placeholder, handleChange, type = "text", inputKey = "", value, classes = "", labelclass = "", loading = false, rows }) => {
  return (
    <div className="flex flex-col">
      <label className={labelclass}>{strings[label]}</label>
      {rows ? (
        <textarea
          value={value}
          placeholder={placeholder}
          className={`w-full resize-none overflow-auto rounded-[10px] border border-color-1 p-4 ${classes} ${loading ? "cursor-default opacity-50" : ""}`}
          onChange={(e) => handleChange(inputKey, e.target.value)}
          rows={rows}
          disabled={loading}
        />
      ) : (
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          className={`w-full rounded-[10px] border border-color-1 p-4 ${classes} ${loading ? "cursor-default opacity-50" : ""}`}
          onChange={(e) => handleChange(inputKey, e.target.value)}
          disabled={loading}
        />
      )}
    </div>
  );
};

export default TextInput;
