import { ComHeader, BlogPosts, Footer } from "@/components/index";
import { getAllBlogs } from "@/utils";

const Blogs = async () => {
  const blogs = await getAllBlogs();

  return (
    <div>
      <ComHeader title={"blogsHeader"} />
      <BlogPosts cardsData={blogs} />
      <Footer />
    </div>
  );
};

export default Blogs;
