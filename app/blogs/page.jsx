import { ComHeader, BlogPosts } from "@/components/index";
import { getAllBlogs } from "@/utils";

const Blogs = async () => {
  const blogs = await getAllBlogs();

  return (
    <div>
      <ComHeader title={"blogsHeader"} />
      <BlogPosts cardsData={blogs} />
    </div>
  );
};

export default Blogs;
