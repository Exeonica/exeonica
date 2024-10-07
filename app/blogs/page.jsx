import { useBlogs } from "@/hooks";

const Blogs = async () => {
  const data = await useBlogs();

  return <div>Blogs {data.length}</div>;
};

export default Blogs;
