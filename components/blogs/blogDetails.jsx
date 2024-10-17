import React from "react";
import Link from "next/link";
import Image from "next/image";

import { BlogsCards } from "@/components/index";
import { Button } from "@/components/index";
import { strings } from "@/utils";
import { MsgIcon, CellPhoneIcon, BlogImage1 } from "@/public";

const articles = [
  "Exploring Generative AI in Content Creation",
  "Steering Clear of Common AI Writing Pitfalls",
  "Understanding ChatGPT Capabilities - Define Your Style",
  "Understand Your Readers",
  "Creating Quality AI-powered Blogs that Stand Out",
  "Conclusion: Embracing AI in Blog Creation",
  "Afterword: The AI Behind This Article",
];

const blogDetails = ({ cardsData, blog }) => {
  return (
    <div className="mx-[110px]">
      <div>
        <div>
          <Image src={BlogImage1} className="mb-[36px] mt-[60px] h-[447px] flex-1 object-contain" alt="maintainance" />
          <div className="rounded-lg bg-border px-[36px] py-[24px] shadow-md">
            <div>
              <div className="flex flex-row items-center">
                <div className="inline-block h-[16px] w-[16px] rounded-full bg-primary"></div>{" "}
                <p className="ml-[10px] text-[14px] font-normal leading-[20.35px] text-primary">{strings["blogsCardTitle"]}</p>
              </div>
              <p className="my-[10px] pr-[174px] text-[36px] font-bold leading-[53.46px] text-text">{strings["blogDesc"]}</p>
              <div className="flex space-x-2">
                <span className="text-[14px] font-normal leading-[20.79px] text-text">{strings["blogDate"]}</span>
                <span className="text-[14px] font-normal leading-[20.79px] text-text">.</span>
                <span className="text-[14px] font-normal leading-[20.79px] text-text">{strings["blogTime"]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-[36px] flex flex-1 flex-col justify-between lg:flex-row lg:space-x-[117px]">
          <div className="flex flex-1">
            <div dangerouslySetInnerHTML={{ __html: blog.template }} />
          </div>

          <div className="flex-1/2 flex flex-col">
            <div className="p-4">
              <h2 className="mb-4 text-lg font-bold">{strings["artical"]}</h2>

              {articles.map((article, index) => (
                <div className="border-l-4 border-primary pl-4">
                  <p key={index} className={"mb-2 cursor-pointer"}>
                    {article}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-[58px] flex max-h-[400px] flex-col items-center rounded-[20px] border border-border bg-color-2 p-[30px] text-center md:p-[50px] lg:w-[500px]">
              <MsgIcon />
              <p className="mt-[30px] pb-3 text-xl font-medium">{strings["faqHeading2"]}</p>
              <p className="text-base font-normal text-color-1">{strings["faqDesc2"]}</p>
              <p className="mb-[30px] text-base font-normal text-color-1">{strings["faqDesc3"]}</p>
              <Link href={"./contact"}>
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

        <div className="pt-[80px]">
          <div>
            <p className="mb-[36px] text-[32px] font-semibold leading-[47.52px] text-card-foreground">{strings["relatedArticals"]}</p>
          </div>
          <BlogsCards cardsData={cardsData} limit={3} />
        </div>
      </div>
    </div>
  );
};

export default blogDetails;
