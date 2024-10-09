import { strings } from "@/utils";
import { Quotes, UserImage, LeftArrow, RightArrow } from "@/public";

const Testimonial = () => {
  return (
    <div className="flex flex-col justify-center bg-border px-[16px] py-[80px] text-center md:px-[60px] md:py-[100px] lg:px-[102px] lg:py-[120px] xl:px-[192px]">
      <div className="pb-[60px]">
        <p className="mx-auto w-max rounded-[60px] border border-primary px-[16px] py-[10px] text-xs font-normal text-primary md:text-base">{strings["testimonialTitle"]}</p>
        <p className="my-2 text-[28px] font-semibold md:text-[40px]">{strings["testimonialHeading"]}</p>
        <p className="text-lg font-normal text-color-3">{strings["testimonialDesc"]}</p>
      </div>
      <div className="flex flex-col rounded-2xl border border-border bg-white px-6 pt-[58px] md:px-[71px]">
        <div className="flex items-center justify-between">
          <p className="text-2xl font-bold text-primary">{strings["mainTestimonialHeading"]}</p>
          <Quotes />
        </div>
        <div className="flex text-start">
          <p className="mb:py-8 my-9 text-lg font-normal text-color-1">{strings["mainTestimonialDesc"]}</p>
        </div>
        <hr className="border border-color-1 text-color-1" />
        <div className="mb-[60px] mt-9 flex flex-col md:mt-8 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-x-[14px] text-start">
            <div>
              <UserImage />
            </div>
            <div>
              <p className="text-xl font-bold text-color-1">{strings["developerName"]}</p>
              <p className="text-sm font-normal text-black">{strings["developerTitle"]}</p>
            </div>
          </div>
          <div className="mt-9 flex space-x-[10px] md:mt-0">
            <RightArrow />
            <LeftArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
