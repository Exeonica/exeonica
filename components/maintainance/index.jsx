import React from "react";
import Image from "next/image";

import { strings } from "@/utils";
import { Maintanance } from "@/public";
import { Footer } from "@/components/index";

const Maintainance = () => {
  return (
    <div>
      <div className="mx-[16px] mt-[40px] md:mt-[81px] xl:mx-[320px]">
        <div className="flex flex-1 items-center justify-center">
          <Image src={Maintanance} className="flex-1 justify-center object-contain sm:h-[343px] sm:w-[343px] lg:h-[500px] lg:w-[500px]" alt="maintainance" />
        </div>
        <div>
          <h2 className="text-center text-[36px] font-semibold leading-[53.64px] text-text lg:text-[60px] lg:leading-[80px]">{strings["maintainance"]}</h2>
          <h2 className="text-center text-[24px] font-normal leading-[35.64px] text-color-1">{strings["maintainMsg"]}</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Maintainance;
