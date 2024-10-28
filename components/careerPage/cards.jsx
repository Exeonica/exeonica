import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/index";
import { Location } from "@/public";
import { jobs } from "@/utils";

const CareerCards = () => {
  return (
    <div>
      <div className="mx-[10px] mt-[80px] md:mx-[20px] lg:mx-[150px]">
        <div className="mb-[80px] grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {jobs.map((job, index) => (
            <div key={index} className="rounded-md border border-border p-6 shadow-md">
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
                  <Link href={`/careers/${job.id}`}>
                    <Button variant={"default"} className="rounded-md bg-primary p-[14px] text-white">
                      {job.applyText}
                    </Button>
                  </Link>
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
