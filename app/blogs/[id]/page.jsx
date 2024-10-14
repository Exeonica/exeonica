import React from "react";
import { notFound } from "next/navigation";

import { BlogsDetailsComp } from "@/components/index";
import { getBlog, getAllBlogs } from "@/utils";
import { blogDetails } from "@/public";

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
      <div dangerouslySetInnerHTML={{ __html: blogDetails }} />
      <BlogsDetailsComp cardsData={allBlogs} />
    </div>
  );
};

export default BlogDetails;
