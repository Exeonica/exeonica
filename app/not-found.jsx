import React from "react";
import Image from "next/image";

import { strings } from "@/utils";
import { Error } from "@/public";
import { Footer } from "@/components/index";

const Error404 = () => {
  return (
    <div>
      <div className="mx-[16px] mb-[179px] mt-[60px] flex flex-1 flex-col items-center justify-center md:mt-[104px] lg:mx-[320px]">
        <Image src={Error} className="flex-1 justify-center object-contain sm:h-[343px] sm:w-[343px] lg:h-[800px] lg:w-[800px]" alt="maintainance" />
        <div>
          <h2 className="text-center text-[36px] font-semibold leading-[53.64px] text-text lg:text-[60px] lg:leading-[80px]">{strings["error"]}</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Error404;
