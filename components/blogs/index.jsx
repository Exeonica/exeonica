"use client";

import { useState } from "react";
import Image from "next/image";

import { BlogPost, GreyArrow } from "@/public";
import { ButtonFilter } from "@/components/index";

const categoriesData = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Design", value: "Design" },
  { id: 3, name: "Handling Offline Mode in React Native", value: "health" },
  { id: 4, name: "Education", value: "education" },
];

const BlogPosts = ({ cardsData }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredPosts =
    selectedCategory === "all"
      ? cardsData.filter((post) => !post.type.toLowerCase().includes("use client"))
      : cardsData.filter((post) => post.type === selectedCategory && !post.type.toLowerCase().includes("use client"));

  return (
    <div className="mx-[16px] p-4 pt-[80px] lg:mx-[112px]">
      <div className="flex flex-wrap gap-[8px] pb-[72px]">
        {categoriesData.map((category) => (
          <ButtonFilter key={category.id} label={category.name} value={category.value} selectedCategory={selectedCategory} onClick={setSelectedCategory} />
        ))}
      </div>

      <div>
        <p className="mb-[36px] text-[36px] font-semibold leading-[53.64px] text-card-foreground">Recent Blogs.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 pb-[112px] md:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((card) => (
          <div key={card.id} className="flex rounded-[16px] p-[24px] shadow-lg">
            <div className="cursor-pointer overflow-hidden rounded bg-white">
              <div className="relative h-[240px] overflow-hidden rounded-xl">
                <Image src={card.profileImage} alt={card.title} layout="fill" objectFit="cover" />
              </div>

              <div className="pt-[24px]">
                <h2 className="mb-[12px] text-[14px] font-semibold leading-[20px] text-primary">{card.type}</h2>
                <h2 className="mb-[12px] text-[14px] font-semibold leading-[20px] text-primary">{card.category}</h2>

                <div className="flex">
                  <h2 className="text-color-10 mb-[12px] text-[26px] font-semibold leading-[32px]">{card.title}</h2>
                  <div className="mt-[8px]">
                    <GreyArrow color="red" />
                  </div>
                </div>
                <p className="text-color-11 mb-[32px] text-[16px] font-normal leading-[24px]">{card.desc}</p>
              </div>

              {/* User Info */}
              <div className="mb-[32px] flex">
                <div className="relative mr-[12px] h-[40px] w-[40px]">
                  <Image src={BlogPost} alt={card.profileName} layout="fill" priority objectFit="cover" className="rounded-full" />
                </div>
                <div>
                  <p className="text-color-10 text-[15px] font-semibold leading-[20px]">{card.profileName}</p>
                  <p className="text-color-11 text-[14px] font-normal leading-[20px]">{"12 Nov 2021"}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
