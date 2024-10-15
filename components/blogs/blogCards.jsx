import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogPost, GreyArrow } from "@/public";

const BlogsCards = ({ cardsData, limit }) => {
  const displayedCards = limit ? cardsData.slice(0, limit) : cardsData;

  return (
    <div className="grid grid-cols-1 gap-4 pb-[112px] md:grid-cols-2 lg:grid-cols-3">
      {displayedCards.map((card) => (
        <Link key={card.id} href={`blogs/${card.id}`}>
          <div key={card.id} className="flex rounded-[16px] p-[24px] shadow-lg">
            <div className="cursor-pointer overflow-hidden rounded bg-white">
              <div className="relative h-[240px] overflow-hidden rounded-xl">
                <Image src={card.profileImage} alt={card.title} layout="fill" objectFit="cover" />
              </div>

              <div className="pt-[24px]">
                <h2 className="mb-[12px] text-[14px] font-semibold leading-[20px] text-primary">{card.type}</h2>
                <h2 className="mb-[12px] text-[14px] font-semibold leading-[20px] text-primary">{card.category}</h2>

                <div className="flex">
                  <h2 className="text-color-12 mb-[12px] text-[26px] font-semibold leading-[32px]">{card.title}</h2>
                  <div className="mt-[8px]">
                    <GreyArrow color="red" />
                  </div>
                </div>
                <p className="mb-[32px] text-[16px] font-normal leading-[24px] text-color-11">{card.desc}</p>
              </div>

              <div className="mb-[32px] flex">
                <div className="relative mr-[12px] h-[40px] w-[40px]">
                  <Image src={BlogPost} alt={card.profileName} layout="fill" priority objectFit="cover" className="rounded-full" />
                </div>
                <div>
                  <p className="text-color-12 text-[15px] font-semibold leading-[20px]">{card.profileName}</p>
                  <p className="text-[14px] font-normal leading-[20px] text-color-11">{"12 Nov 2021"}</p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogsCards;
