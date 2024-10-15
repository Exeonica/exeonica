import Image from "next/image";
import Link from "next/link";

import Button from "../button";

import { serviceHeaderImage, GreyArrow } from "@/public";
import { strings } from "@/utils";

const ServiceDetailsHeader = ({ service }) => {
  return (
    <div className="bg-gradient-to-b from-white to-color-9 px-[16px] py-[60px] lg:flex lg:items-center lg:justify-between lg:space-x-[60px] lg:px-[120px] lg:py-[50px] xl:space-x-[179px]">
      <div>
        <Button variant={"outlineRounded"} classes="text-xs md:text-base md:font-normal cursor-default">
          {strings["serviceDetailsBtn"]}
        </Button>
        <p className="my-[18px] text-[28px] font-semibold md:text-[40px]">{service.title}</p>
        <p className="text-base font-normal text-color-3">{service.desc}</p>
        <div className="mt-9 flex gap-2">
          <Link href={"./services"}>
            <Button variant={"outlineArrow"} classes="text-sm md:text-base gap-[8px]">
              {strings["heroBtn1"]}
              <GreyArrow />
            </Button>
          </Link>
          <Link href={"./contact"}>
            <Button variant={"default"} classes="text-sm md:text-base">
              {strings["heroBtn2"]}
            </Button>
          </Link>
        </div>
      </div>
      <div className="mt-[60px]">
        <Image
          src={serviceHeaderImage}
          alt="software Engineering settings"
          width={"auto"}
          height={"auto"}
          className="h-[300px] w-[300px] object-contain md:min-h-[400px] md:min-w-[400px] xl:h-[500px] xl:w-[500px]"
        />
      </div>
    </div>
  );
};

export default ServiceDetailsHeader;
