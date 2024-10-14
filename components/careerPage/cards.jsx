"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/index";
import { Location } from "@/public";
import { jobs } from "@/utils";
import { ButtonFilter } from "@/components/index";

const categoriesData = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "React Developer", value: "React Developer" },
  { id: 3, name: "UI/UX Designer Intern", value: "UI/UX Designer Intern" },
  { id: 4, name: "React Intern", value: "React Intern" },
  { id: 5, name: "Web Developer", value: "React Developer " },
];

const CareerCards = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? jobs.filter((post) => !post.title.toLowerCase().includes("use client"))
      : jobs.filter((post) => post.title === selectedCategory && !post.title.toLowerCase().includes("use client"));

  return (
    <div>
      <div className="mx-[10px] mt-[80px] md:mx-[20px] lg:mx-[150px]">
        {/* Buttons Array */}
        <div className="flex flex-wrap gap-[8px] pb-[72px]">
          {categoriesData.map((category) => (
            <ButtonFilter key={category.id} label={category.name} value={category.value} selectedCategory={selectedCategory} onClick={setSelectedCategory} />
          ))}
        </div>

        {/* Job Cards */}
        <div className="mb-[80px] grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredPosts.map((job, index) => (
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
