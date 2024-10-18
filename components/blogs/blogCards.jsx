import React from "react";
import Image from "next/image";
import Link from "next/link";

import { BlogPost, GreyArrow } from "@/public";

const BlogsCards = ({ cardsData, limit, params }) => {
  const displayedCards = limit ? cardsData.slice(0, limit) : cardsData;
  const { filter } = params;

  const filteredArray = filter?.map((item) => item.replaceAll("%20", " "));

  const renderNoBlog = () => {
    return <p className="text-[36px] font-semibold leading-[53.64px] text-card-foreground">No Blog Available.</p>;
  };

  const renderBlog = (card) => {
    return (
      <Link key={card.id} href={`blogs/${card.id}`}>
        <div key={card.id} className="flex w-max rounded-[16px] p-[24px] shadow-lg">
          <div className="cursor-pointer overflow-hidden rounded bg-white">
            <div className="relative h-[240px] overflow-hidden rounded-xl">
              <Image src={card.bloggerImage} alt={card.title} fill priority className="w-full object-cover" />
            </div>

            <div className="pt-[24px]">
              <h2 className="mb-[12px] text-[14px] font-semibold leading-[20px] text-primary">{card.type}</h2>
              <h2 className="mb-[12px] text-[14px] font-semibold leading-[20px] text-primary">{card.category}</h2>

              <div className="flex">
                <h2 className="mb-[12px] text-[26px] font-semibold leading-[32px] text-color-12">{card.title}</h2>
                <div className="mt-[8px]">
                  <GreyArrow color="red" />
                </div>
              </div>
              <p className="mb-[32px] text-[16px] font-normal leading-[24px] text-color-11">{card.desc}</p>
            </div>

            <div className="mb-[32px] flex">
              <div className="relative mr-[12px] h-[40px] w-[40px]">
                <Image src={BlogPost} alt={card.bloggerName} fill priority className="rounded-full object-cover" />
              </div>
              <div>
                <p className="text-[15px] font-semibold leading-[20px] text-color-12">{card.bloggerName}</p>
                <p className="text-[14px] font-normal leading-[20px] text-color-11">{"12 Nov 2021"}</p>
              </div>
            </div>
          </div>
        </div>
      </Link>
    );
  };

  return (
    <>
      <p className="text-[36px] font-semibold leading-[53.64px] text-card-foreground">Recent Blogs.</p>

      <div className="grid grid-cols-1 gap-4 pb-[112px] md:grid-cols-2 lg:grid-cols-3">
        {displayedCards.map((card) => (filter ? (filteredArray.includes(card.type) ? renderBlog(card) : renderNoBlog()) : renderBlog(card)))}
      </div>
    </>
  );
};

export default BlogsCards;
