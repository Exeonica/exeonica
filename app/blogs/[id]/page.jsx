import React from "react";

import { getBlog } from "@/utils";

const BlogDetails = async ({ params }) => {
  const blog = await getBlog(params.id);

  return (
    <div>
      <span>{blog.title}</span>
      <div dangerouslySetInnerHTML={{ __html: blog.template }} />
    </div>
  );
};

export default BlogDetails;
