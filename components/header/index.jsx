import React from "react";

import { strings } from "@/utils";

const Index = ({ title, buttonstyle, children }) => {
  return (
    <div className="">
      <div className="headerBg relative flex h-[480px] flex-col items-center justify-center pt-4 sm:h-[200px] md:h-[300px]">
        <h6 className="z-10 text-center text-4xl font-medium text-text md:text-4xl lg:text-5xl">{strings[title] || title}</h6>

        <div className={`${buttonstyle}`}>{children}</div>
      </div>
    </div>
  );
};

export default Index;
