import React from "react";

export default function Button({ variant, children, classes = "", ...rest }) {
  let className = "flex text-base font-medium w-max text-center py-3 px-6 h-12 items-center";

  switch (variant) {
    case "outline":
      className = `${className}  border-primary border text-primary hover:bg-primary hover:text-white hover:border-white rounded-lg`;
      break;
    case "outlineRounded":
      className = `${className} border border-primary text-primary rounded-[60px] py-[10px] px-4 hover:bg-primary hover:text-white`;
      break;
    case "bgRounded":
      className = `${className} rounded-[60px] py-3 px-6 bg-primary text-white hover:bg-primary/90`;
      break;
    case "outlineArrow":
      className = `${className} border border-color-1 text-color-1 hover:border-primary hover:text-primary rounded-lg`;
      break;
    case "outlineIcon":
      className = `${className} border border-border hover:border-primary !p-3 rounded`;
      break;
    default:
      className = `${className} bg-primary text-white hover:bg-primary/90 rounded-lg`;
  }

  return (
    <button className={`${className} ${classes}`} {...rest}>
      {children}
    </button>
  );
}
