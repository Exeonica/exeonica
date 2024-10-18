import Image from "next/image";
import Link from "next/link";

import Button from "../button";

import { strings } from "@/utils";
import { heroImage, heroImageLg, GreyArrow } from "@/public";

export default function Hero() {
  return (
    <div className="mt-[60px] flex flex-col items-center justify-center bg-gradient-to-b from-white to-color-2 px-[16px] text-center lg:mt-[84px] lg:px-[110px]">
      <Button variant={"outlineRounded"} classes="text-xs lg:text-base cursor-default">
        {strings["excellenceBtn"]}
      </Button>
      <div className="mt-6">
        <p className="text-4xl font-semibold lg:text-[60px] lg:leading-[80px]">{strings["heroTitle"]}</p>
      </div>
      <div className="my-6">
        <p className="text-lg font-normal text-color-1">{strings["heroDescription"]}</p>
        <p className="text-lg font-normal text-color-1">{strings["heroDescription2"]}</p>
      </div>
      <div className="flex items-center justify-center gap-3">
        <Link href={"/services"}>
          <Button variant={"outlineArrow"} classes="text-sm md:text-base gap-[8px]">
            {strings["heroBtn1"]}
            <GreyArrow />
          </Button>
        </Link>
        <Link href={"/contact"}>
          <Button variant={"default"} classes="text-sm md:text-base">
            {strings["heroBtn2"]}
          </Button>
        </Link>
      </div>
      <div className="flex flex-col items-center pb-[108px] text-center">
        <Image src={heroImage} alt="Hero Image" height={"auto"} width={"auto"} className="mt-12 h-[285px] w-[285px] lg:hidden" />
        <Image src={heroImageLg} alt="Hero Image" height={"auto"} width={"auto"} className="mx-[100px] mt-12 hidden lg:mx-5 lg:block lg:w-[1000px]" />
      </div>
    </div>
  );
}
