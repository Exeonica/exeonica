import { getAllBlogs } from "@/utils";

const useBlogs = async () => {
  const blogs = await getAllBlogs();

  return {
    blogs: blogs,
  };
};

export default useBlogs;
