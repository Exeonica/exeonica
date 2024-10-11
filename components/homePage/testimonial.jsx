import Button from "../button";

import TestimonialCarousal from "./testimonialCrousel";

import { strings } from "@/utils";

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center bg-border px-[16px] py-[80px] text-center md:px-[60px] md:py-[100px] lg:px-[102px] lg:py-[120px] xl:px-[192px]">
      <div className="pb-[60px]">
        <div className="flex justify-center">
          <Button variant={"outlineRounded"} classes="text-xs md:text-base md:font-normal cursor-default">
            {strings["testimonialTitle"]}
          </Button>
        </div>
        <p className="my-2 text-[28px] font-semibold md:text-[40px]">{strings["testimonialHeading"]}</p>
        <p className="text-lg font-normal text-color-3">{strings["testimonialDesc"]}</p>
      </div>
      <div>
        <TestimonialCarousal />
      </div>
    </div>
  );
};

export default Testimonial;
