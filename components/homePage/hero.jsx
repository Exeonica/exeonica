import Image from "next/image";

import Button from "../button";

import { strings } from "@/utils";
import { heroImage, heroImageLg, GreyArrow } from "@/public";

export default function Hero() {
  return (
    <div className="heroBg mt-[60px] flex flex-col items-center justify-center px-[16px] text-center lg:mt-[84px]">
      <Button variant={"outlineRounded"} classes="text-xs lg:text-base">
        {strings["excellenceBtn"]}
      </Button>
      <div className="mt-6">
        <p className="text-4xl font-semibold lg:text-[60px] lg:leading-[80px]">{strings["heroTitle"]}</p>
      </div>
      <div className="my-6">
        <p className="text-color-1 text-lg font-normal">{strings["heroDescription"]}</p>
        <p className="text-color-1 text-lg font-normal">{strings["heroDescription2"]}</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Button variant={"outlineArrow"} classes="text-base gap-[8px]">
          {strings["heroBtn1"]}
          <GreyArrow />
        </Button>
        <Button variant={"default"} classes="text-base">
          {strings["heroBtn2"]}
        </Button>
      </div>
      <div className="flex flex-col items-center pb-[108px] text-center">
        <Image src={heroImage} alt="Hero Image" height={"auto"} width={"auto"} className="mt-12 h-[285px] w-[285px] lg:hidden" />
        <Image src={heroImageLg} alt="Hero Image" height={"auto"} width={"auto"} className="mx-[100px] mt-12 hidden lg:mx-5 lg:block lg:w-[1000px]" />
      </div>
    </div>
  );
}
