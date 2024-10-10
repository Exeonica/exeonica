import Image from "next/image";

import Button from "../button";

import { strings } from "@/utils";
import { BlogsImage, ClockIcon, CalenderIcon } from "@/public";

const BlogsSection = () => {
  return (
    <div className="px-4 py-[80px] md:px-[200px] lg:px-[110px]">
      <p className="w-max rounded-[60px] border border-primary px-4 py-2 text-xs font-normal text-primary md:text-base">{strings["blogsTitle"]}</p>
      <p className="mt-2 pb-9 text-[28px] font-semibold md:text-[40px]">{strings["blogsHeading"]}</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-[35px] xl:gap-x-[50px]">
        <div className="mt-9 rounded-2xl border border-border drop-shadow-sm">
          <Image priority className="rounded-t-2xl lg:h-[350px] lg:w-full lg:object-cover" src={BlogsImage} alt="Blogs Image" />
          <div className="px-[10px] py-[30px]">
            <p className="text-2xl font-semibold">Growing your SaaS should not be a headeache</p>
            <p className="mt-3 text-base font-normal text-color-6">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
          </div>
          <div className="flex space-x-4 px-4 pb-6">
            <div className="flex items-center space-x-2">
              <CalenderIcon />
              <p className="text-sm font-medium text-color-1">October 8, 2022</p>
            </div>
            <div className="flex items-center space-x-2">
              <ClockIcon />
              <p className="text-sm font-medium text-color-1">9 min read</p>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-9 flex flex-col rounded-2xl border border-border drop-shadow-sm lg:flex-row lg:items-center">
            <div>
              <Image priority className="rounded-t-2xl lg:h-[160px] lg:w-[170px] lg:rounded-l-2xl lg:rounded-r-none lg:object-cover" src={BlogsImage} alt="Blogs Image" />
            </div>
            <div>
              <div className="px-4 py-[30px] lg:py-0">
                <p className="text-2xl font-semibold">Growing your SaaS should not be a headeache</p>
                <p className="mt-3 text-base font-normal text-color-6 lg:hidden">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
              </div>
              <div className="flex space-x-4 px-4 pb-[30px] lg:pb-0 lg:pt-4 xl:pt-8">
                <div className="flex items-center space-x-2">
                  <CalenderIcon />
                  <p className="text-sm font-medium text-color-1">October 8, 2022</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon />
                  <p className="text-sm font-medium text-color-1">9 min read</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-col rounded-2xl border border-border drop-shadow-sm lg:flex-row lg:items-center">
            <div>
              <Image priority className="rounded-t-2xl lg:h-[160px] lg:w-[170px] lg:rounded-l-2xl lg:rounded-r-none lg:object-cover" src={BlogsImage} alt="Blogs Image" />
            </div>
            <div>
              <div className="px-4 py-[30px] lg:py-0">
                <p className="text-2xl font-semibold">Growing your SaaS should not be a headeache</p>
                <p className="mt-3 text-base font-normal text-color-6 lg:hidden">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
              </div>
              <div className="flex space-x-4 px-4 pb-[30px] lg:pb-0 lg:pt-4 xl:pt-8">
                <div className="flex items-center space-x-2">
                  <CalenderIcon />
                  <p className="text-sm font-medium text-color-1">October 8, 2022</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon />
                  <p className="text-sm font-medium text-color-1">9 min read</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-9 flex flex-col rounded-2xl border border-border drop-shadow-sm lg:flex-row lg:items-center">
            <div>
              <Image priority className="rounded-t-2xl lg:h-[160px] lg:w-[170px] lg:rounded-l-2xl lg:rounded-r-none lg:object-cover" src={BlogsImage} alt="Blogs Image" />
            </div>
            <div>
              <div className="px-4 py-[30px] lg:py-0">
                <p className="text-2xl font-semibold">Growing your SaaS should not be a headeache</p>
                <p className="mt-3 text-base font-normal text-color-6 lg:hidden">How do you create compelling presentations that wow your colleagues and impress your managers?</p>
              </div>
              <div className="flex space-x-4 px-4 pb-[30px] lg:py-0 lg:pt-4 xl:pt-8">
                <div className="flex items-center space-x-2">
                  <CalenderIcon />
                  <p className="text-sm font-medium text-color-1">October 8, 2022</p>
                </div>
                <div className="flex items-center space-x-2">
                  <ClockIcon />
                  <p className="text-sm font-medium text-color-1">9 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant="outline" classes="mt-9">
          {strings["blogsBtn"]}
        </Button>
      </div>
    </div>
  );
};

export default BlogsSection;
