import React from "react";
import Image from "next/image";
import Link from "next/link";
import moment from "moment";

import { Button } from "@/components/index";
import { strings } from "@/utils";
import { BlogsArrowIcon } from "@/public";

const BlogsCards = ({ cardsData, limit, params }) => {
  const displayedCards = limit ? cardsData.slice(0, limit) : cardsData;

  const filteredValue = params?.filter ? params.filter.replaceAll("%20", " ") : "all";

  const renderNoBlog = () => <p className="text-xl font-semibold text-card-foreground">No Blog Available.</p>;

  const renderBlog = (card) => (
    <div key={card.id} className="flex flex-col justify-between rounded-xl bg-border p-6 pb-8 shadow-lg">
      <Link href={`/blog/${card.id}`}>
        <div className="cursor-pointer overflow-hidden rounded-md">
          <div className="relative min-h-[240px] w-full object-cover pb-[60%]">
            <Image src={card.blogImage} alt={card.title} fill priority className="rounded-md object-cover" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
          </div>
          <div className="pt-6">
            <h2 className="mb-3 text-[14px] font-semibold leading-[20px] text-primary">{card.type || ""}</h2>
            <div className="flex justify-between">
              <h2 className="mb-3 text-[24px] font-semibold leading-[32px] text-color-12 hover:underline">{card.title || ""}</h2>
              {card.title && (
                <div className="mt-1">
                  <BlogsArrowIcon color="red" />
                </div>
              )}
            </div>
            <p className="mb-8 text-[16px] font-normal leading-[24px] text-color-11 hover:underline">{card.desc || ""}</p>
          </div>
          <div className="flex items-center">
            <div className="relative mr-3 h-10 w-10">
              <Image src={card.bloggerImage} alt={card.bloggerName} fill priority className="rounded-full object-cover" />
            </div>
            <div>
              <p className="text-[15px] font-semibold leading-[20px] text-color-12">{card.bloggerName || ""}</p>
              <p className="text-[14px] font-normal leading-[20px] text-color-11">{moment(card.updatedAt, "MMMM DD, YYYY [at] h:mm:ss A [UTC]Z").format("MMMM Do, YYYY") || ""}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 gap-6 pb-28 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {params?.filter === "all" || params?.filter === undefined
          ? displayedCards.map((card) => renderBlog(card))
          : displayedCards.filter((card) => filteredValue === card.type).length > 0
            ? displayedCards.filter((card) => filteredValue === card.type).map((card) => renderBlog(card))
            : renderNoBlog()}
      </div>
      {limit && displayedCards.length < cardsData.length && (
        <div className="mb-[200px] flex justify-center">
          <Link href="/blogs/all">
            <Button>{strings["viewAllBlogs"]}</Button>
          </Link>
        </div>
      )}
    </>
  );
};

export default BlogsCards;
