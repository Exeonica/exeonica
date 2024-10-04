import React from "react";
import Image from "next/image";

import Button from "../button";

import { strings } from "@/utils";
import { calculatorImage } from "@/public";

const EstimationBanner = () => {
  return (
    <div className="bg-border px-[16px] py-[60px]">
      <div>
        <p>{strings["bannerTitle"]}</p>
        <p>{strings["bannerHeading"]}</p>
        <p>{strings["bannerDesc"]}</p>
        <Button variant={"default"} classes="text-base mt-12 mb-[80px]">
          {strings["bannerBtn"]}
        </Button>
      </div>
      <div>
        <Image src={calculatorImage} />
      </div>
    </div>
  );
};

export default EstimationBanner;
