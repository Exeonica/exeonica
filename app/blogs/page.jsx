import { ComHeader, BlogsPost, Footer } from "@/components/index";
import { getAllBlogs } from "@/utils";

const Blogs = async () => {
  const blogs = await getAllBlogs();

  return (
    <div>
      <ComHeader title={"blogsHeader"} />
      <BlogsPost cardsData={blogs} />
      <Footer />
    </div>
  );
};

export default Blogs;
