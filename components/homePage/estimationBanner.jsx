import Image from "next/image";

import Button from "../button";

import { strings } from "@/utils";
import { calculatorImage } from "@/public";

const EstimationBanner = () => {
  return (
    <div className="bg-border px-[16px] py-[60px] md:flex md:items-center md:justify-between md:py-[60px] lg:px-[110px]">
      <div className="sm:w-1/2">
        <p className="w-max rounded-[60px] border border-primary px-[16px] py-[10px] text-xs font-normal text-primary md:text-base">{strings["bannerTitle"]}</p>
        <p className="my-2 text-[28px] font-semibold md:text-[40px]">{strings["bannerHeading"]}</p>
        <p className="text-lg font-normal text-color-3 md:font-medium">{strings["bannerDesc"]}</p>
        <Button variant={"default"} classes="text-base mt-9">
          {strings["bannerBtn"]}
        </Button>
      </div>
      <div className="mt-11 w-max">
        <Image src={calculatorImage} alt="Calculator Image" height={"auto"} width={"auto"} className="h-[300px] w-[300px] lg:h-[400px] lg:w-[400px]" />
      </div>
    </div>
  );
};

export default EstimationBanner;
