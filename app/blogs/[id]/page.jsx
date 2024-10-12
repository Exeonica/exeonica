import React from "react";
import { notFound } from "next/navigation";

import { getBlog } from "@/utils";

const BlogDetails = async ({ params }) => {
  const blog = await getBlog(params.id);

  if (!blog) {
    return notFound();
  }

  return (
    <div>
      <span>{blog.title}</span>
      <div dangerouslySetInnerHTML={{ __html: blog.template }} />
    </div>
  );
};

export default BlogDetails;
