import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";

import { BlogsDetailsComp, Button } from "@/components/index";
import { getBlog, getAllBlogs, strings } from "@/utils";
import { blogDetails, MsgIcon, CellPhoneIcon } from "@/public";

const BlogDetails = async ({ params }) => {
  const blog = await getBlog(params.id);
  const allBlogs = await getAllBlogs();

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <span>{blog.title}</span>
      <div dangerouslySetInnerHTML={{ __html: blog.template }} />
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="flex flex-1">
          <div dangerouslySetInnerHTML={{ __html: blogDetails }} />
        </div>
        <div className="flex-1/2 flex">
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
      <BlogsDetailsComp cardsData={allBlogs} />
    </div>
  );
};

export default BlogDetails;
