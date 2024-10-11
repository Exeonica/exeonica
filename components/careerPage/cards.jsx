import React from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "../button";

import { Location, Search } from "@/public";
import { buttonLabels, jobs } from "@/utils";

const CareerCards = () => {
  return (
    <div>
      <div className="mx-[10px] mt-[80px] md:mx-[20px] lg:mx-[150px] 2xl:mx-0">
        {/* Search Bar */}
        {/* <div className="mt-4 flex">
          <div className="relative flex w-full">
            <input type="text" placeholder="Search for jobs" className="w-full rounded-full border p-3 pl-12 pr-24 text-[16px] font-normal leading-[23.73px] focus:outline-none focus:ring-2" />
            <div className="absolute left-4 top-1/2 -translate-y-1/2 transform text-color-3">
              <Image src={Search} alt="icon" className="h-[20px] w-[20px]" />
            </div>
            <button className="absolute right-0 top-0 h-full rounded-full rounded-l-none bg-primary px-6 text-[16px] font-medium leading-[23.73px] text-white focus:outline-none">Search</button>
          </div>
        </div> */}
        {/* Buttons Array  */}
        {/* <div className="mb-[72px] flex">
          <div className="flex flex-1 items-center justify-center">
            {" "}
            <div className="mt-[36px] flex flex-wrap justify-center space-x-4">
              {" "}
              {buttonLabels.map((label, index) => (
                <div key={index}>
                  {" "}
                  <div className="flex flex-col items-center justify-center md:items-start md:justify-start">
                    <Button variant="outlineRounded" classes="w-full mb-3  px-[16px] pb-[10px] !border-color-1 text-[16px]">
                      {label}
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div> */}
        {/*  job cards  */}
        <div className="mb-[80px] grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job, index) => (
            <div key={index} className="gb-border border border-none p-6 shadow-sm">
              <p className="text-[14px] font-normal leading-[20.79px] text-color-1">{job.time}</p>
              <h2 className="mb-4 text-2xl font-semibold leading-[35.64px] text-text">{job.title}</h2>
              <div className="mb-4 flex space-x-2">
                {job.tags.map((tag, index) => (
                  <span key={index} className="rounded-md bg-border px-[9.5px] py-[12.5px] text-[14px] font-normal text-color-1">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-gray-600">
                  <Image src={Location} alt="icon" className="mr-[4px] h-[20px] w-[20px]" />
                  <span className="text-[14px] font-normal leading-[23.76px] text-color-1">{job.location}</span>
                </div>
                <div>
                  <Button variant={"default"} className="rounded-md bg-primary p-[14px] text-white">
                    <Link href={`/careers/${job.id}`}>{job.applyText}</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CareerCards;
