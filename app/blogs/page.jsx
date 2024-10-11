import { useBlogs } from "@/hooks";
import { ComHeader, BlogPosts } from "@/components/index";

const Blogs = async () => {
  const data = await useBlogs();

  return (
    <div>
      <ComHeader title={"blogsHeader"} />
      <BlogPosts />
      {/* Blogs - {data.blogs?.length} */}
    </div>
  );
};

export default Blogs;
