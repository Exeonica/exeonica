import { ComHeader, BlogsPost, Footer } from "@/components/index";
import { getAllBlogs, getBlogFilters } from "@/utils";

export async function generateStaticParams() {
  const filters = await getBlogFilters();

  return filters.map((filter) => ({
    filter: filter.title,
  }));
}

const Blogs = async ({ params }) => {
  const blogs = await getAllBlogs();
  const filters = await getBlogFilters();

  return (
    <div>
      <ComHeader title={"blogsHeader"} />
      <BlogsPost params={params} blogs={blogs} filters={filters} />
      <Footer />
    </div>
  );
};

export default Blogs;
