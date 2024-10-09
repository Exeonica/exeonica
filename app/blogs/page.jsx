import { useBlogs } from "@/hooks";
import { ComHeader } from "@/components/index";

const Blogs = async () => {
  const data = await useBlogs();

  return (
    <div>
      <ComHeader title={"blogsHeader"} /> {data.length}
    </div>
  );
};

export default Blogs;
