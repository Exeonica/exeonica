import React from "react";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import { BlogsCards } from "@/components/index";
import { Button } from "@/components/index";
import { strings, articles } from "@/utils";
import { MsgIcon, CellPhoneIcon } from "@/public";
import "../index.css";

const blogDetails = ({ cardsData, blog }) => {
  const updatedAtDate = blog.updatedAt instanceof Date ? blog.updatedAt : blog.updatedAt.toDate();
  const formattedDate = moment(updatedAtDate).format("MMMM D, YYYY");
  const timeDifference = moment(updatedAtDate).fromNow();

  return (
    <div className="px-[16px] lg:px-[110px]">
      {/* Image and Heading Section */}
      <div>
        <div className="relative mb-[36px] mt-[60px] h-[264px] overflow-hidden rounded-3xl xl:h-[427px]">
          <Image src={blog.blogImage} layout="fill" objectFit="cover" alt="maintenance" priority />
        </div>
        <div className="rounded-lg bg-border px-[36px] py-[24px] shadow-md">
          <div>
            <div className="flex flex-row items-center">
              <div className="inline-block h-[16px] w-[16px] rounded-full bg-primary"></div>
              <p className="ml-[10px] text-[14px] font-normal leading-[20.35px] text-primary">{blog.type}</p>
            </div>
            <p className="my-[10px] text-[28px] font-bold text-text xl:pr-[174px] xl:text-[36px] xl:leading-[53.46px]">{blog.title}</p>
            <div className="flex space-x-2">
              <span className="text-[14px] font-normal leading-[20.79px] text-text">{formattedDate}</span>
              <span className="text-[14px] font-normal leading-[20.79px] text-text">.</span>
              <span className="text-[14px] font-normal leading-[20.79px] text-text">{timeDifference}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Grid Layout for Content */}
      <div className="mt-[36px] grid grid-cols-4 gap-10">
        {/* HTML Content Spanning 3 Columns */}
        <div className="col-span-4 xl:col-span-3">
          <div className="quill-content-preview" dangerouslySetInnerHTML={{ __html: blog.template }} />
        </div>

        {/* Sidebar Content Spanning 1 Column */}
        <div className="sm:col-span-0 hidden xl:col-span-1 xl:block">
          <div className="flex flex-col">
            <div className="py-4 pr-4 lg:p-4 lg:py-0 lg:pr-0">
              <h2 className="mb-4 text-lg font-bold">{strings["artical"]}</h2>

              {articles.map((article, index) => (
                <div key={index} className="border-l-4 border-primary pl-4">
                  <p className="mb-2 cursor-pointer">{article}</p>
                </div>
              ))}
            </div>

            <div className="mt-[58px] flex max-h-[400px] flex-col items-center rounded-[20px] border border-border bg-color-2 p-[30px] text-center md:p-[50px]">
              <MsgIcon />
              <p className="mt-[30px] pb-3 text-xl font-medium">{strings["faqHeading2"]}</p>
              <p className="text-base font-normal text-color-1">{strings["faqDesc2"]}</p>
              <p className="mb-[30px] text-base font-normal text-color-1">{strings["faqDesc3"]}</p>
              <Link href={"/contact"}>
                <Button variant="bgRounded">
                  <div className="mr-2 items-center">
                    <CellPhoneIcon />
                  </div>
                  {strings["faqBtn"]}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Articles Section */}
      <div className="pt-[80px]">
        <div>
          <p className="mb-[36px] text-[32px] font-semibold leading-[47.52px] text-card-foreground">{strings["relatedArticals"]}</p>
        </div>
        <BlogsCards cardsData={cardsData} limit={3} params={"all"} />
      </div>
    </div>
  );
};

export default blogDetails;
