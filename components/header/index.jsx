import React from "react";

import { strings } from "@/utils";

const Index = ({ title }) => {
  return (
    <div>
      <div className="headerBg relative mt-4 flex h-[480px] items-center justify-center sm:h-[200px] md:h-[300px]">
        <h6 className="z-10 text-4xl font-medium text-text md:text-4xl lg:text-5xl">{strings[title]}</h6>
      </div>
    </div>
  );
};

export default Index;
