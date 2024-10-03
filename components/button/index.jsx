import React from "react";

export default function Button({ variant, children, classes = "" }) {
  let className = "h-12 py-3 px-6 rounded-lg text-base font-medium w-max text-center ";

  switch (variant) {
    case "default":
      className = `${className} bg-primary text-white hover:bg-primary/90`;
      break;
    case "outline":
      className = `${className}  border-primary border text-primary hover:bg-primary hover:text-white hover:border-white`;
      break;
    case "outline-rounded":
      className = `${className} border border-primary text-primary rounded-full`;
      break;
    default:
      className = `${className} border border-greyBorder text-primary`;
  }

  return <button className={`${className} ${classes}`}>{children}</button>;
}
